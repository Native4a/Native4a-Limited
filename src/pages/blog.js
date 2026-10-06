import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import '../components/variables.css'
import '../styles/global.css'
import Seo from '../components/seo'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

const BlogIndex = ({ location, pageContext }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const language = pageContext?.language || 'zh'
  const isTraditionalChinese = language === 'zh'
  const pageTitle = isTraditionalChinese
    ? 'SEO、GEO 及 AI 搜尋文章｜Native4a 香港 SEO 公司'
    : 'Blog | Native4a Hong Kong SEO Agency'
  const pageDescription = isTraditionalChinese
    ? 'Native4a 分享香港 SEO、GEO（生成式搜尋優化）同 AI 推薦實戰心得、收費參考同客戶案例。'
    : ''

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await fetch(`/api/notion-posts?language=${language}`)
        if (!res.ok) throw new Error(`API error: ${res.status}`)
        const data = await res.json()
        setPosts(data.posts || [])
      } catch (error) {
        console.error('[v0] Error loading blog posts:', error)
        setPosts([])
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [language])

  return (
    <Layout location={location} pageContext={pageContext}>
      <Seo
        title={pageTitle}
        description={pageDescription}
        lang={isTraditionalChinese ? 'zh-HK' : 'en'}
      />
      <div className="mx-auto mt-10 max-w-6xl px-4">
        {isTraditionalChinese && (
          <>
            <h1 className="text-balance text-3xl font-black leading-tight text-gray-900 md:text-4xl">
              Native4a Blog｜SEO、GEO 及 AI 搜尋文章
            </h1>
            <section aria-labelledby="latest-article-title" className="mt-8">
              <h2 id="latest-article-title" className="mb-4 text-xl font-black text-gray-900">最新文章</h2>
              <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
                <Link to="/zh/blog/what-is-geo/" className="block">
                  <h3 className="text-xl font-bold leading-relaxed text-gray-900 hover:text-yellow-700 md:text-2xl">
                    GEO 係咩？GEO 同 SEO 分別（2026 香港版）
                  </h3>
                </Link>
                <p className="mt-3 leading-relaxed text-gray-700">
                  GEO（Generative Engine Optimization，生成式引擎優化）是令 Google AI 摘要、AI 模式、ChatGPT 及 Perplexity 回答問題時引用或推薦你品牌的優化工作。本文用一張表講清 GEO 與 SEO 的分別、AI 如何揀選來源、GEO 實際做什麼及如何量度成效。
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-gray-200 pt-4 text-sm text-gray-600">
                  <span>MC</span>
                  <time dateTime="2026-10">2026 年 10 月</time>
                </div>
              </article>
            </section>
          </>
        )}
        <section aria-label={isTraditionalChinese ? '更多文章' : 'Blog posts'} className="mt-8">
          {loading ? (
            <p className="py-6 text-center text-gray-600">Loading posts...</p>
          ) : (
            <ArticlePreview posts={posts} language={language} />
          )}
        </section>
      </div>
    </Layout>
  )
}

export default BlogIndex
