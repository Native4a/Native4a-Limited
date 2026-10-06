import * as fs from 'fs'
import * as path from 'path'
import { GatsbyNode, CreatePagesArgs } from 'gatsby'

// Match the @/* imports used by shared React components in Gatsby's bundler.
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}

// Enable client-only routes for dynamic blog post pages
export const onCreatePage: GatsbyNode['onCreatePage'] = async ({
  page,
  actions,
}) => {
  const { createPage } = actions

  // Match client-only routes for blog posts (all language prefixes including zh-CN)
  if (page.path.match(/^\/blog\/\[slug\]/)) {
    createPage({
      ...page,
      matchPath: '/blog/*',
    })
  }

  // Also handle zh-CN prefixed blog routes
  if (page.path.match(/^\/zh-CN\/blog\//)) {
    createPage({
      ...page,
      matchPath: '/zh-CN/blog/*',
    })
  }
}

interface BlogPost {
  title: string
  slug: string
  language: string
}

const LANGUAGES = ['en', 'ja', 'zh', 'zh-CN']
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
  const editorialPage = path.resolve('./src/templates/editorial-page.tsx')

  createPage({
    path: '/zh/case/',
    component: path.resolve('./src/templates/case-index.tsx'),
    context: { language: 'zh' },
  })

  const editorialPages = [
    {
      path: '/zh/case/hypnosis-academy-geo/',
      kind: 'case',
      title: '催眠課程 SEO＋GEO 案例｜「催眠師」15→4 位，AI 摘要主動推薦｜Native4a',
      description: 'hypnosis.hk（Hypnosis Academy）課程頁保留原有內容，加入約 4,600 字答案型指南及 Course、FAQPage 結構化資料後，「催眠師」由第 15 位升至第 4 位，「催眠治療課程收費」由第 14 位升至第 3 位，Google AI 摘要亦主動推薦該學院。',
      h1: '催眠課程網站 SEO＋GEO 案例：「催眠師」由第 15 位升至第 4 位，Google AI 摘要主動推薦',
      author: 'MC（Marcus）｜Native4a 創辦人、9 年香港 SEO 經驗',
      dateDisplay: '2026 年 10 月',
      canonical: 'https://nativeaaaa.com.hk/zh/case/hypnosis-academy-geo/',
      breadcrumb: '首頁 > 案例 > hypnosis.hk 催眠課程 SEO＋GEO 案例',
      image: 'https://nativeaaaa.com.hk/images/hypnosis-ai-overview-1.jpg',
      contentFile: './src/data/hypnosis-case.md',
      schemaFile: './src/data/hypnosis-case-schema.json',
    },
    {
      path: '/zh/blog/what-is-geo/',
      kind: 'article',
      title: 'GEO 係咩？GEO 同 SEO 分別｜2026 香港生成式搜尋優化指南｜Native4a',
      description: 'GEO（Generative Engine Optimization，生成式引擎優化）是令 Google AI 摘要、AI 模式、ChatGPT 及 Perplexity 回答問題時引用或推薦你品牌的優化工作。本文用一張表講清 GEO 與 SEO 的分別、AI 如何揀選來源、GEO 實際做什麼及如何量度成效。',
      h1: 'GEO 係咩？生成式搜尋優化是什麼、GEO 同 SEO 有咩分別（2026 香港版）',
      author: 'MC（Marcus）｜Native4a 創辦人、9 年香港 SEO 經驗',
      dateDisplay: '2026 年 10 月',
      canonical: 'https://nativeaaaa.com.hk/zh/blog/what-is-geo/',
      breadcrumb: '首頁 > Blog > GEO 係咩？GEO 同 SEO 分別',
      image: 'https://nativeaaaa.com.hk/images/hypnosis-ai-overview-1.jpg',
      contentFile: './src/data/what-is-geo.md',
      schemaFile: './src/data/what-is-geo-schema.json',
    },
  ]

  editorialPages.forEach((page) => {
    createPage({
      path: page.path,
      component: editorialPage,
      context: {
        kind: page.kind,
        title: page.title,
        description: page.description,
        h1: page.h1,
        author: page.author,
        dateDisplay: page.dateDisplay,
        canonical: page.canonical,
        breadcrumb: page.breadcrumb,
        image: page.image,
        content: fs.readFileSync(path.resolve(page.contentFile), 'utf8'),
        structuredData: JSON.parse(fs.readFileSync(path.resolve(page.schemaFile), 'utf8')),
      },
    })
  })

  // Language map for normalizing codes
  const languageMap: Record<string, string> = {
    'en': 'En',
    'ja': 'Ja',
    'zh': 'Zh',
    'zh-CN': 'Zh',
  }

  // Fetch blog posts from Notion for all languages
  const allPosts: BlogPost[] = []

  if (getNotionBlogPosts) {
    for (const language of LANGUAGES) {
      try {
        console.log(`[v0] Fetching Notion posts for language: ${language}`)
        const posts = await getNotionBlogPosts(language)
        console.log(`[v0] Fetched ${posts.length} posts for ${language}`)
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

  LANGUAGES.forEach((language) => {
    createPage({
      path: `/${language}/thank-you/`,
      component: path.resolve('./src/pages/thank-you.js'),
      context: { language },
    })
  })

  // Keep GEO reachable from every localized marketing menu using the existing page content.
  LANGUAGES.forEach((language) => {
    createPage({
      path: `/${language}/geo/`,
      component: path.resolve('./src/templates/geo-page.tsx'),
      context: { language },
    })
  })
  createRedirect({ fromPath: '/geo/', toPath: '/zh/geo/', isPermanent: true })

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






