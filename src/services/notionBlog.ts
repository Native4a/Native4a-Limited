import { Client } from "@notionhq/client";

interface NotionBlogPost {
  id: string;
  title: string;
  slug: string;
  content: any;
  excerpt?: string;
  author?: string;
  tags?: string[];
  featuredImage?: string;
  publishedDate: string;
  language: string;
}

interface NotionPage {
  id: string;
  properties: any;
  blocks: any[];
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Use the database ID from environment or default to the Native4a Blog database
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID || "f159575e-3494-4ba7-8727-3d9b7d2e439d";

// Convert Notion rich text to plain text
function notionRichTextToPlain(richTextArray: any[]): string {
  return richTextArray.map((text) => text.plain_text).join("");
}

// Convert Notion rich text to HTML
function notionRichTextToHtml(richTextArray: any[]): string {
  return richTextArray
    .map((text) => {
      let html = text.plain_text;

      if (text.annotations.bold) html = `<strong>${html}</strong>`;
      if (text.annotations.italic) html = `<em>${html}</em>`;
      if (text.annotations.code) html = `<code>${html}</code>`;
      if (text.annotations.strikethrough)
        html = `<s>${html}</s>`;

      if (text.href) {
        html = `<a href="${text.href}">${html}</a>`;
      }

      return html;
    })
    .join("");
}

// Convert Notion blocks to HTML content
async function notionBlocksToHtml(blocks: any[]): Promise<string> {
  let html = "";

  for (const block of blocks) {
    const { type, [type]: typeData } = block;

    switch (type) {
      case "paragraph":
        if (typeData.rich_text.length > 0) {
          html += `<p>${notionRichTextToHtml(typeData.rich_text)}</p>`;
        }
        break;

      case "heading_1":
        html += `<h1>${notionRichTextToHtml(typeData.rich_text)}</h1>`;
        break;

      case "heading_2":
        html += `<h2>${notionRichTextToHtml(typeData.rich_text)}</h2>`;
        break;

      case "heading_3":
        html += `<h3>${notionRichTextToHtml(typeData.rich_text)}</h3>`;
        break;

      case "bulleted_list_item":
        html += `<li>${notionRichTextToHtml(typeData.rich_text)}</li>`;
        break;

      case "numbered_list_item":
        html += `<li>${notionRichTextToHtml(typeData.rich_text)}</li>`;
        break;

      case "image":
        const imageUrl =
          typeData.type === "external" ? typeData.external.url : typeData.file.url;
        html += `<figure><img src="${imageUrl}" alt="Blog image" loading="lazy" /></figure>`;
        break;

      case "code":
        const language = typeData.language || "javascript";
        html += `<pre><code class="language-${language}">${notionRichTextToHtml(typeData.rich_text)}</code></pre>`;
        break;

      case "quote":
        html += `<blockquote>${notionRichTextToHtml(typeData.rich_text)}</blockquote>`;
        break;

      case "divider":
        html += `<hr />`;
        break;
    }
  }

  // Wrap list items in proper ul/ol tags
  html = html.replace(/(<li>.*?<\/li>)+/g, (match) => {
    return `<ul>${match}</ul>`;
  });

  return html;
}

// Get all blog posts from Notion database
export async function getNotionBlogPosts(
  language?: string
): Promise<NotionBlogPost[]> {
  try {
    // Notion stores Language select values with capital first letter (e.g. "Zh", "En", "Ja")
    const normalizedLanguage = language
      ? language.charAt(0).toUpperCase() + language.slice(1).toLowerCase()
      : undefined;

    const query: any = {
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "PublishedDate",
          direction: "descending",
        },
      ],
    };

    if (normalizedLanguage) {
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
      };
    }

    const response = await notion.databases.query(query);

    console.log(`[v0] Notion API response: ${response.results.length} total results`);
    console.log(`[v0] Query filter:`, JSON.stringify(query.filter, null, 2));

    const posts: NotionBlogPost[] = response.results
      .map((page: any) => {
        const props = page.properties;
        console.log(`[v0] Processing post: ${props.Title?.title?.[0]?.plain_text || 'Unknown'}, Published: ${props.Published?.checkbox}, Language: ${props.Language?.select?.name}`);

        return {
          id: page.id,
          title: notionRichTextToPlain(props.Title?.title || []),
          slug: props.Slug?.rich_text?.[0]?.plain_text || "",
          excerpt: notionRichTextToPlain(props.Excerpt?.rich_text || []),
          author: props.Author?.rich_text?.[0]?.plain_text || "Native4A",
          tags: props.Tags?.multi_select?.map((tag: any) => tag.name) || [],
          featuredImage: props.FeaturedImage?.files?.[0]?.file?.url || "",
          publishedDate: props.PublishedDate?.date?.start || new Date().toISOString(),
          language: props.Language?.select?.name || "zh",
          content: "", // Will be populated separately
        };
      })
      .filter((post) => post.slug); // Only include posts with slugs

    console.log(`[v0] Fetched ${posts.length} blog posts from Notion for language: ${language || 'all'}`);
    return posts;
  } catch (error: any) {
    console.error("[v0] Error fetching Notion blog posts:", error?.message || error);
    console.error("[v0] NOTION_API_KEY present:", !!process.env.NOTION_API_KEY);
    console.error("[v0] NOTION_DATABASE_ID:", process.env.NOTION_DATABASE_ID || NOTION_DATABASE_ID);
    return [];
  }
}

// Get single blog post with full content
export async function getNotionBlogPost(
  pageId: string
): Promise<NotionBlogPost | null> {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId });
    const props = page.properties;

    // Fetch child blocks
    let blocks: any[] = [];
    let hasMore = true;
    let cursor: string | undefined = undefined;

    while (hasMore) {
      const blockResponse = await notion.blocks.children.list({
        block_id: pageId,
        start_cursor: cursor,
      });

      blocks = [...blocks, ...blockResponse.results];
      hasMore = blockResponse.has_more;
      cursor = blockResponse.next_cursor || undefined;
    }

    // Convert blocks to HTML
    const content = await notionBlocksToHtml(blocks);

    return {
      id: pageId,
      title: notionRichTextToPlain(props.Title?.title || []),
      slug: props.Slug?.rich_text?.[0]?.plain_text || "",
      excerpt: notionRichTextToPlain(props.Excerpt?.rich_text || []),
      author: props.Author?.rich_text?.[0]?.plain_text || "Native4A",
      tags: props.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      featuredImage: props.FeaturedImage?.files?.[0]?.file?.url || "",
      publishedDate: props.PublishedDate?.date?.start || new Date().toISOString(),
      language: props.Language?.select?.name || "zh",
      content,
    };
  } catch (error) {
    console.error("Error fetching Notion blog post:", error);
    return null;
  }
}

// Get blog post by slug
export async function getNotionBlogPostBySlug(
  slug: string,
  language?: string
): Promise<NotionBlogPost | null> {
  try {
    const normalizedLanguage = language
      ? language.charAt(0).toUpperCase() + language.slice(1).toLowerCase()
      : undefined;

    const query: any = {
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    };

    if (normalizedLanguage) {
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
      };
    }

    const response = await notion.databases.query(query);

    if (response.results.length === 0) {
      return null;
    }

    return await getNotionBlogPost(response.results[0].id);
  } catch (error) {
    console.error("Error fetching Notion blog post by slug:", error);
    return null;
  }
}
