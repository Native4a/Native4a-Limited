import { ContentfulClientApi, createClient } from 'contentful'

let contentfulClient: ContentfulClientApi

export function getContentfulClient(): ContentfulClientApi {
  if (contentfulClient) {
    return contentfulClient
  }

  const spaceId = process.env.CONTENTFUL_SPACE_ID || ''
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || ''

  if (!spaceId || !accessToken) {
    console.warn(
      '[Contentful] Missing environment variables: CONTENTFUL_SPACE_ID and/or CONTENTFUL_ACCESS_TOKEN'
    )
  }

  contentfulClient = createClient({
    space: spaceId,
    accessToken,
  })

  return contentfulClient
}

// Type definitions for common content types
export interface BlogPost {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
  }
  fields: {
    title: string
    slug: string
    publishedDate?: string
    excerpt?: string
    body?: any
    author?: any
    tags?: string[]
    featuredImage?: any
  }
}

export interface FooterData {
  sys: {
    id: string
  }
  fields: {
    [key: string]: any
  }
}

export interface NavData {
  sys: {
    id: string
  }
  fields: {
    [key: string]: any
  }
}

// Fetch functions for different content types
export async function getAllBlogPosts(locale = 'zh'): Promise<BlogPost[]> {
  try {
    const client = getContentfulClient()
    const entries = await client.getEntries({
      content_type: 'blogPost',
      locale,
      order: ['-fields.publishedDate'],
    })

    return entries.items as unknown as BlogPost[]
  } catch (error) {
    console.error('[Contentful] Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPostBySlug(
  slug: string,
  locale = 'zh'
): Promise<BlogPost | null> {
  try {
    const client = getContentfulClient()
    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      locale,
    })

    if (entries.items.length === 0) {
      return null
    }

    return entries.items[0] as unknown as BlogPost
  } catch (error) {
    console.error(`[Contentful] Error fetching blog post with slug "${slug}":`, error)
    return null
  }
}

export async function getFooterData(locale = 'zh'): Promise<FooterData | null> {
  try {
    const client = getContentfulClient()
    const entries = await client.getEntries({
      content_type: 'footer',
      locale,
    })

    if (entries.items.length === 0) {
      return null
    }

    return entries.items[0] as unknown as FooterData
  } catch (error) {
    console.error('[Contentful] Error fetching footer data:', error)
    return null
  }
}

export async function getNavigationData(locale = 'zh'): Promise<NavData | null> {
  try {
    const client = getContentfulClient()
    const entries = await client.getEntries({
      content_type: 'navigation',
      locale,
    })

    if (entries.items.length === 0) {
      return null
    }

    return entries.items[0] as unknown as NavData
  } catch (error) {
    console.error('[Contentful] Error fetching navigation data:', error)
    return null
  }
}

export async function getContentByContentType(
  contentType: string,
  locale = 'zh',
  query: Record<string, any> = {}
): Promise<any[]> {
  try {
    const client = getContentfulClient()
    const entries = await client.getEntries({
      content_type: contentType,
      locale,
      ...query,
    })

    return entries.items
  } catch (error) {
    console.error(
      `[Contentful] Error fetching entries of type "${contentType}":`,
      error
    )
    return []
  }
}
