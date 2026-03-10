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

  // Define templates
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

  // Create language-prefixed routes for main pages
  const mainPages = [
    { path: '/', component: path.resolve('./src/pages/index.tsx') },
    { path: '/contact-us', component: path.resolve('./src/pages/contact-us.tsx') },
    { path: '/about-us-2', component: path.resolve('./src/pages/about-us-2.tsx') },
    { path: '/seo', component: path.resolve('./src/pages/seo.js') },
    { path: '/video', component: path.resolve('./src/pages/video.js') },
    { path: '/web-design', component: path.resolve('./src/pages/web-design.js') },
    { path: '/xiaohongshu', component: path.resolve('./src/pages/xiaohongshu.js') },
    { path: '/backlinks', component: path.resolve('./src/pages/backlinks.tsx') },
    { path: '/smm-ads', component: path.resolve('./src/pages/smm-ads.js') },
    { path: '/seo-smart-kit', component: path.resolve('./src/pages/seo-smart-kit.js') },
    { path: '/seo_keywords', component: path.resolve('./src/pages/seo_keywords.js') },
    { path: '/off-page', component: path.resolve('./src/pages/off-page.tsx') },
    { path: '/catalog', component: path.resolve('./src/pages/catalog.js') },
  ]

  mainPages.forEach(({ path: pagePath, component }) => {
    LANGUAGES.forEach((language) => {
      // Create pages with language prefix
      const finalPath = pagePath === '/' ? `/${language}/` : `/${language}${pagePath}/`
      createPage({
        path: finalPath,
        component,
        context: {
          language,
        },
      })
    })
  })

  // Create redirects from non-prefixed paths to Chinese default
  mainPages.forEach(({ path: pagePath }) => {
    if (pagePath === '/') {
      // Main index redirect
      createRedirect({
        fromPath: '/',
        toPath: '/zh/',
        isPermanent: false,
      })
    } else {
      createRedirect({
        fromPath: `${pagePath}/`,
        toPath: `/zh${pagePath}/`,
        isPermanent: false,
      })
    }
  })
}






