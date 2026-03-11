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
        <Seo title="Blog" />
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <p>Loading posts...</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout location={location} pageContext={pageContext}>
      <Seo title="Blog" />
      <ArticlePreview posts={posts} />
    </Layout>
  )
}

export default BlogIndex
