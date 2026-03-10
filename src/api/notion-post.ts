import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

const NOTION_DATABASE_ID =
  process.env.NOTION_DATABASE_ID || "f159575e-3494-4ba7-8727-3d9b7d2e439d"

function notionRichTextToPlain(richTextArray: any[]): string {
  return richTextArray.map((text: any) => text.plain_text).join("")
}

function notionRichTextToHtml(richTextArray: any[]): string {
  return richTextArray
    .map((text: any) => {
      let html = text.plain_text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")

      if (text.annotations.bold) html = `<strong>${html}</strong>`
      if (text.annotations.italic) html = `<em>${html}</em>`
      if (text.annotations.code) html = `<code>${html}</code>`
      if (text.annotations.strikethrough) html = `<s>${html}</s>`
      if (text.href) html = `<a href="${text.href}" target="_blank" rel="noopener noreferrer">${html}</a>`

      return html
    })
    .join("")
}

async function blocksToHtml(blocks: any[]): Promise<string> {
  let html = ""
  let inList = false
  let listType = ""

  for (const block of blocks) {
    const { type } = block
    const typeData = block[type]

    const isList =
      type === "bulleted_list_item" || type === "numbered_list_item"
    const currentListType = type === "numbered_list_item" ? "ol" : "ul"

    if (inList && (!isList || currentListType !== listType)) {
      html += `</${listType}>`
      inList = false
    }

    if (isList && !inList) {
      html += `<${currentListType}>`
      inList = true
      listType = currentListType
    }

    switch (type) {
      case "paragraph":
        if (typeData.rich_text.length > 0) {
          html += `<p>${notionRichTextToHtml(typeData.rich_text)}</p>`
        } else {
          html += `<br />`
        }
        break
      case "heading_1":
        html += `<h1>${notionRichTextToHtml(typeData.rich_text)}</h1>`
        break
      case "heading_2":
        html += `<h2>${notionRichTextToHtml(typeData.rich_text)}</h2>`
        break
      case "heading_3":
        html += `<h3>${notionRichTextToHtml(typeData.rich_text)}</h3>`
        break
      case "bulleted_list_item":
      case "numbered_list_item":
        html += `<li>${notionRichTextToHtml(typeData.rich_text)}</li>`
        break
      case "image": {
        const url =
          typeData.type === "external"
            ? typeData.external.url
            : typeData.file.url
        const caption = typeData.caption?.length
          ? notionRichTextToPlain(typeData.caption)
          : "Blog image"
        html += `<figure><img src="${url}" alt="${caption}" loading="lazy" style="max-width:100%;border-radius:8px;" />${caption !== "Blog image" ? `<figcaption>${caption}</figcaption>` : ""}</figure>`
        break
      }
      case "code":
        html += `<pre><code class="language-${typeData.language || "plain"}">${notionRichTextToHtml(typeData.rich_text)}</code></pre>`
        break
      case "quote":
        html += `<blockquote>${notionRichTextToHtml(typeData.rich_text)}</blockquote>`
        break
      case "divider":
        html += `<hr />`
        break
      case "callout":
        html += `<div class="callout">${typeData.icon?.emoji || ""} ${notionRichTextToHtml(typeData.rich_text)}</div>`
        break
    }
  }

  if (inList) html += `</${listType}>`

  return html
}

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET")

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { slug, language } = req.query as { slug: string; language?: string }

  if (!slug) {
    return res.status(400).json({ error: "slug is required" })
  }

  try {
    const query: any = {
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: "Slug",
        rich_text: { equals: slug },
      },
    }

    if (language) {
      query.filter = {
        and: [query.filter, { property: "Language", select: { equals: language } }],
      }
    }

    const response = await notion.databases.query(query)

    if (response.results.length === 0) {
      return res.status(404).json({ error: "Post not found" })
    }

    const page = response.results[0] as any
    const props = page.properties

    // Fetch blocks
    let blocks: any[] = []
    let hasMore = true
    let cursor: string | undefined

    while (hasMore) {
      const blockResponse = await notion.blocks.children.list({
        block_id: page.id,
        start_cursor: cursor,
      })
      blocks = [...blocks, ...blockResponse.results]
      hasMore = blockResponse.has_more
      cursor = blockResponse.next_cursor || undefined
    }

    const content = await blocksToHtml(blocks)

    const post = {
      id: page.id,
      title: notionRichTextToPlain(props.Title?.title || []),
      slug: props.Slug?.rich_text?.[0]?.plain_text || "",
      excerpt: notionRichTextToPlain(props.Excerpt?.rich_text || []),
      author: props.Author?.rich_text?.[0]?.plain_text || "Native4A",
      tags: props.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      featuredImage:
        props.FeaturedImage?.files?.[0]?.file?.url ||
        props.FeaturedImage?.files?.[0]?.external?.url ||
        "",
      publishedDate:
        props.PublishedDate?.date?.start || new Date().toISOString(),
      language: props.Language?.select?.name || "zh",
      content,
    }

    return res.status(200).json({ post })
  } catch (error: any) {
    console.error("Error fetching Notion post:", error)
    return res.status(500).json({ error: error.message || "Failed to fetch post" })
  }
}
