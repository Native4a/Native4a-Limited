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

        // Create redirect from old blog URLs to language-specific ones
        if (language === 'zh') {
          createRedirect({
            fromPath: `/blog/${post.slug}/`,
            toPath: `/zh/blog/${post.slug}/`,
            isPermanent: false,
          })
        }
      })
    })
  }
}

export const onCreatePage: GatsbyNode['onCreatePage'] = ({ page, actions }) => {
  const { createPage, createRedirect } = actions

  // Only apply language routing to pages that don't already have language prefix
  if (!page.path.match(/^\/(en|ja|zh)(\/|$)/)) {
    // Create language-specific versions of each page
    LANGUAGES.forEach((language) => {
      // For root page, handle specially
      if (page.path === '/') {
        createPage({
          ...page,
          path: `/${language}/`,
          context: {
            ...page.context,
            language,
          },
        })
      } else {
        // For other pages, add language prefix
        createPage({
          ...page,
          path: `/${language}${page.path}`,
          context: {
            ...page.context,
            language,
          },
        })
      }
    })

    // Create redirect from non-prefixed paths to Chinese (default language)
    if (page.path === '/') {
      createRedirect({
        fromPath: '/',
        toPath: '/zh/',
        isPermanent: false,
      })
    } else {
      createRedirect({
        fromPath: page.path,
        toPath: `/zh${page.path}`,
        isPermanent: false,
      })
    }
  }
}

