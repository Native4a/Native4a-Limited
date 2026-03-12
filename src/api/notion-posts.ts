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

    console.log("[v0] Fetching Notion posts for language:", language, "normalized:", normalizedLanguage)

    const query: any = {
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [{ property: "PublishedDate", direction: "descending" }],
    }

    // Add language filter if specified
    if (language !== "all") {
      query.filter = {
        and: [
          query.filter,
          {
            property: "Language",
            select: {
              equals: normalizedLanguage,
            },
          },
        ],
      }
    }

    console.log("[v0] Query filter:", JSON.stringify(query.filter, null, 2))

    const response = await notion.databases.query(query)

    console.log("[v0] Notion API returned:", response.results.length, "posts")

    const posts = response.results
      .map((page: any) => {
        const props = page.properties
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
          language: props.Language?.select?.name || "Zh",
        }
        console.log("[v0] Processed post:", post.title, "language:", post.language)
        return post
      })
      .filter((post: any) => post.slug)

    console.log("[v0] Returning", posts.length, "posts after filtering")

    return res.status(200).json({ posts })
  } catch (error: any) {
    console.error("[v0] Notion API error:", error.message)
    console.error("[v0] Error details:", error)
    return res.status(500).json({ error: error.message, posts: [] })
  }
}
