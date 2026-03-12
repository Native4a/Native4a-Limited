import * as path from 'path'
import { GatsbyNode } from 'gatsby'

interface BlogPost {
  title: string
  slug: string
  language: string
}

const LANGUAGES = ['en', 'ja', 'zh']
const DEFAULT_LANGUAGE = 'zh'

// Safely try to import Notion service
let getNotionBlogPosts: any = null
try {
  const notionService = require('./src/services/notionBlog')
  getNotionBlogPosts = notionService.getNotionBlogPosts
  console.log('[v0] Successfully loaded Notion service')
} catch (error) {
  console.warn('[v0] Could not import Notion service, blog posts will not be fetched:', error.message)
}

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage, createRedirect } = actions

  // Define templates
  const blogPost = path.resolve('./src/templates/blog-post.tsx')

  // Fetch blog posts from Notion for all languages
  const allPosts: BlogPost[] = []

  if (getNotionBlogPosts) {
    for (const language of LANGUAGES) {
      try {
        console.log(`[v0] Fetching Notion posts for language: ${language}`)
        const posts = await getNotionBlogPosts(language)
        console.log(`[v0] Fetched ${posts.length} posts for ${language}`)
        
        if (posts.length === 0) {
          console.warn(`[v0] ⚠️  No posts found for language: ${language}. Make sure you have:`)
          console.warn(`[v0]   1. Created blog posts in Notion database`)
          console.warn(`[v0]   2. Set Language to "${language}"`)
          console.warn(`[v0]   3. Checked the "Published" checkbox`)
          console.warn(`[v0]   4. Filled in the Slug field`)
        }
        
        allPosts.push(
          ...posts.map((post: any) => ({
            title: post.title,
            slug: post.slug,
            language: post.language,
          }))
        )
      } catch (error) {
        console.warn(`[v0] Could not fetch Notion posts for language ${language}:`, error.message)
      }
    }
  } else {
    console.log('[v0] Notion service not available, blog pages will have no posts loaded at build time')
  }

  // Create blog posts pages with language prefixes
  if (allPosts.length > 0) {
    // Group posts by language
    const postsByLanguage: Record<string, BlogPost[]> = {}
    LANGUAGES.forEach((lang) => {
      postsByLanguage[lang] = allPosts.filter((p) => p.language === lang)
    })

    // Create blog list pages for each language
    LANGUAGES.forEach((language) => {
      const blogListComponent = path.resolve('./src/pages/blog.js')
      createPage({
        path: `/${language}/blog/`,
        component: blogListComponent,
        context: {
          language,
        },
      })
    })

    // Create individual blog posts pages with language prefixes
    LANGUAGES.forEach((language) => {
      const posts = postsByLanguage[language]
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
    const chinesePosts = postsByLanguage[DEFAULT_LANGUAGE] || []
    chinesePosts.forEach((post) => {
      createRedirect({
        fromPath: `/blog/${post.slug}/`,
        toPath: `/${DEFAULT_LANGUAGE}/blog/${post.slug}/`,
        isPermanent: false,
      })
    })
    
    // Create redirect from root /blog/ to Chinese blog list
    createRedirect({
      fromPath: '/blog/',
      toPath: '/zh/blog/',
      isPermanent: false,
    })
  } else {
    console.log('[v0] No blog posts found, creating empty blog pages')
    // Still create blog pages even if no posts yet - they will load posts on client side
    LANGUAGES.forEach((language) => {
      const blogListComponent = path.resolve('./src/pages/blog.js')
      createPage({
        path: `/${language}/blog/`,
        component: blogListComponent,
        context: {
          language,
        },
      })
    })
    
    // Create redirect from root /blog/ to Chinese blog list
    createRedirect({
      fromPath: '/blog/',
      toPath: '/zh/blog/',
      isPermanent: false,
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






