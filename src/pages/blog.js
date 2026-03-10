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
        const url = `/api/notion-posts?language=${language}`
        console.log('[v0] ===== BLOG.JS LOADING POSTS =====')
        console.log('[v0] Language from context:', language)
        console.log('[v0] Fetching from URL:', url)
        
        const res = await fetch(url)
        console.log('[v0] Fetch response status:', res.status, res.statusText)
        
        if (!res.ok) {
          const errorText = await res.text()
          console.error('[v0] API error response:', errorText)
          throw new Error(`API error: ${res.status} - ${errorText}`)
        }
        
        const data = await res.json()
        console.log('[v0] API returned data:', data)
        console.log('[v0] Number of posts:', data.posts?.length)
        
        setPosts(data.posts || [])
      } catch (error) {
        console.error('[v0] Error loading blog posts:', error)
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

