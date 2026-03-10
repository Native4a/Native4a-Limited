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

  console.log("[v0] ===== API /notion-posts CALLED =====")
  console.log("[v0] Input language:", language)
  console.log("[v0] Normalized language:", normalizedLanguage)
  console.log("[v0] NOTION_DATABASE_ID:", NOTION_DATABASE_ID)
  console.log("[v0] NOTION_API_KEY exists:", !!process.env.NOTION_API_KEY)

  try {
    // Query with language filter only - handle Published check manually
    // since Notion property type may vary (checkbox vs select)
    const query: any = {
      database_id: NOTION_DATABASE_ID,
      sorts: [{ property: "PublishedDate", direction: "descending" }],
    }

    if (normalizedLanguage) {
      query.filter = {
        property: "Language",
        select: { equals: normalizedLanguage },
      }
    }

    console.log("[v0] Querying Notion with filter:", JSON.stringify(query.filter || "no filter"))
    const response = await notion.databases.query(query)
    console.log("[v0] Notion API returned:", response.results.length, "total results")

    const posts = response.results
      .map((page: any) => {
        const props = page.properties

        // Handle Published field regardless of type (checkbox boolean or select string)
        const publishedProp = props.Published
        let isPublished = false
        if (publishedProp?.type === "checkbox") {
          isPublished = publishedProp.checkbox === true
        } else if (publishedProp?.type === "select") {
          const val = publishedProp.select?.name?.toLowerCase()
          isPublished = val === "yes" || val === "true" || val === "published"
        } else if (publishedProp?.type === "status") {
          const val = publishedProp.status?.name?.toLowerCase()
          isPublished = val === "published" || val === "done" || val === "yes"
        } else {
          // If unknown type, include the post anyway
          isPublished = true
        }

        const slug = props.Slug?.rich_text?.[0]?.plain_text || ""
        const title = notionRichTextToPlain(props.Title?.title || [])
        
        console.log("[v0] Processing post:", { title, slug, isPublished, language: props.Language?.select?.name })

        return {
          id: page.id,
          title,
          slug,
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
          isPublished,
        }
      })
      .filter((post: any) => {
        const keep = post.slug && post.isPublished
        console.log("[v0] Filter check for", post.title, "- has slug:", !!post.slug, "- isPublished:", post.isPublished, "- KEEP:", keep)
        return keep
      })

    console.log("[v0] Final posts after filtering:", posts.length)
    console.log("[v0] ===== API RESPONSE =====")
    return res.status(200).json({ posts })
  } catch (error: any) {
    console.error("[v0] ERROR in /notion-posts:", error.message)
    console.error("[v0] Full error:", error)
    return res.status(500).json({ error: error.message || "Failed to fetch posts", details: error.toString() })
  }
}
