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

export default async function handler(
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET")

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const language = (req.query.language as string)?.toLowerCase() || "zh"
    const normalizedLanguage = language.charAt(0).toUpperCase() + language.slice(1)

    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      sorts: [{ property: "PublishedDate", direction: "descending" }],
    })

    const posts = response.results
      .map((page: any) => {
        const props = page.properties
        return {
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
          language: props.Language?.select?.name || "Zh",
        }
      })
      .filter((post: any) => post.slug && post.language === normalizedLanguage)

    return res.status(200).json({ posts })
  } catch (error: any) {
    console.error("[v0] Notion API error:", error.message)
    return res.status(500).json({ error: error.message, posts: [] })
  }
}
