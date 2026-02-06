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

export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const { createPage, createRedirect } = actions

  // Skip if page already has language prefix
  if (page.path.match(/^\/(en|ja|zh)(\/|$)/)) {
    return
  }

  // Skip special pages that shouldn't be duplicated
  const skipPages = ['/404/', '/404.html', '/dev-404-page/']
  if (skipPages.some(skipPage => page.path === skipPage)) {
    return
  }

  // Create language-specific versions for all other pages
  const originalPath = page.path

  LANGUAGES.forEach((language) => {
    let newPath: string

    if (originalPath === '/') {
      newPath = `/${language}/`
    } else {
      newPath = `/${language}${originalPath}`
    }

    createPage({
      ...page,
      path: newPath,
      context: {
        ...page.context,
        language,
      },
    })
  })

  // For original non-prefixed path, only keep it if it's the Chinese version
  // and redirect other requests to Chinese version
  if (originalPath === '/') {
    createRedirect({
      fromPath: '/',
      toPath: `/${DEFAULT_LANGUAGE}/`,
      isPermanent: false,
    })
  } else {
    createRedirect({
      fromPath: originalPath,
      toPath: `/${DEFAULT_LANGUAGE}${originalPath}`,
      isPermanent: false,
    })
  }
}



