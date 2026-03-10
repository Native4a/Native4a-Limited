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
  // Allow CORS
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET")

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const language = req.query.language as string | undefined

  // Normalize language to match Notion database format (first letter uppercase)
  let normalizedLanguage = language
  if (language) {
    normalizedLanguage = language.charAt(0).toUpperCase() + language.slice(1).toLowerCase()
  }

  try {
    const query: any = {
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: "Published",
        checkbox: { equals: true },
      },
      sorts: [{ property: "PublishedDate", direction: "descending" }],
    }

    if (normalizedLanguage) {
      query.filter = {
        and: [
          query.filter,
          {
            property: "Language",
            select: { equals: normalizedLanguage },
          },
        ],
      }
    }

    const response = await notion.databases.query(query)

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
          language: props.Language?.select?.name || "zh",
        }
      })
      .filter((post: any) => post.slug)

    return res.status(200).json({ posts })
  } catch (error: any) {
    console.error("Error fetching Notion posts:", error)
    return res.status(500).json({ error: error.message || "Failed to fetch posts" })
  }
}
