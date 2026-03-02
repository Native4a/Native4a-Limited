import * as path from 'path'
import { GatsbyNode } from 'gatsby'

interface BlogPost {
  title: string
  slug: string
}

interface GraphQLResult {
  errors?: unknown[]
  data?: {
    allContentfulBlogPost: {
      nodes: BlogPost[]
    }
  }
}

const LANGUAGES = ['en', 'ja', 'zh']
const DEFAULT_LANGUAGE = 'zh'

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage, createRedirect } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.tsx')

  const result = (await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
      }
    `
  )) as GraphQLResult

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const posts = result.data?.allContentfulBlogPost.nodes || []

  // Create blog posts pages with language prefixes
  if (posts.length > 0) {
    LANGUAGES.forEach((language) => {
      posts.forEach((post, index) => {
        const previousPostSlug = index === 0 ? null : posts[index - 1].slug
        const nextPostSlug =
          index === posts.length - 1 ? null : posts[index + 1].slug

        createPage({
          path: `/${language}/blog/${post.slug}/`,
          component: blogPost,
          context: {
            slug: post.slug,
            previousPostSlug,
            nextPostSlug,
            language,
          },
        })
      })
    })

    // Create redirect from old blog URLs to language-specific ones (Chinese default)
    posts.forEach((post) => {
      createRedirect({
        fromPath: `/blog/${post.slug}/`,
        toPath: `/zh/blog/${post.slug}/`,
        isPermanent: false,
      })
    })
  }
}

// Track pages we've already processed to prevent infinite re-triggering
const processedPages = new Set<string>()

export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Skip if we already processed this page path (prevents infinite loop)
  if (processedPages.has(page.path)) {
    return
  }

  // Skip if page already has language prefix
  if (page.path.match(/^\/(en|ja|zh)(\/|$)/)) {
    return
  }

  // Skip special pages that shouldn't be duplicated
  const skipPages = ['/404/', '/404.html', '/dev-404-page/']
  if (skipPages.some(skipPage => page.path === skipPage)) {
    return
  }

  const originalPath = page.path

  // Mark ALL paths we're about to create as processed BEFORE creating them
  processedPages.add(originalPath)
  LANGUAGES.forEach((language) => {
    const newPath = originalPath === '/'
      ? `/${language}/`
      : `/${language}${originalPath}`
    processedPages.add(newPath)
  })

  // Delete the original page
  deletePage(page)

  // Create the default language version at the original path
  createPage({
    ...page,
    path: originalPath,
    context: {
      ...page.context,
      language: DEFAULT_LANGUAGE,
    },
  })

  // Create language-prefixed versions for all languages
  LANGUAGES.forEach((language) => {
    const newPath = originalPath === '/'
      ? `/${language}/`
      : `/${language}${originalPath}`

    createPage({
      ...page,
      path: newPath,
      context: {
        ...page.context,
        language,
      },
    })
  })
}



