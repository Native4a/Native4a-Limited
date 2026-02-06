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
  const { createPage } = actions

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
  }
}
