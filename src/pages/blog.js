import React, { useEffect, useState } from 'react'

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

  if (loading) {
    return (
      <Layout location={location} pageContext={pageContext}>
        <Seo
          title={pageTitle}
          description={pageDescription}
          lang={isTraditionalChinese ? 'zh-HK' : 'en'}
        />
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <p>Loading posts...</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout location={location} pageContext={pageContext}>
      <Seo
        title={pageTitle}
        description={pageDescription}
        lang={isTraditionalChinese ? 'zh-HK' : 'en'}
      />
      <div className="mt-10">
        <ArticlePreview posts={posts} language={language} />
      </div>
    </Layout>
  )
}

export default BlogIndex
