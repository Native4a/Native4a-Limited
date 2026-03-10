import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import '../components/variables.css'
import '../styles/global.css'
import Seo from '../components/seo'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import { getNotionBlogPosts } from '../services/notionBlog'

const BlogIndex = ({ location, pageContext }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const language = pageContext?.language || 'zh'

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await getNotionBlogPosts(language)
        setPosts(fetchedPosts)
      } catch (error) {
        console.error('[v0] Error loading Notion blog posts:', error)
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

