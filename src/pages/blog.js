import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

import '../components/variables.css'
import '../styles/global.css'
import Seo from '../components/seo'
import Layout from '../components/layout'

const BlogIndex = ({ location, pageContext }) => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const language = pageContext?.language || 'zh'

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true)
        const res = await fetch(`/api/notion-posts?language=${language}`)
        if (!res.ok) throw new Error(`API error: ${res.status}`)
        const data = await res.json()
        setPosts(data.posts || [])
      } catch (err) {
        console.error('[v0] Error loading blog posts:', err)
        setError(err.message)
        setPosts([])
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [language])

  const formatDate = (dateString) => {
    if (!dateString) return ''
    try {
      return new Date(dateString).toLocaleDateString(
        language === 'ja' ? 'ja-JP' : language === 'en' ? 'en-US' : 'zh-HK',
        { year: 'numeric', month: 'long', day: 'numeric' }
      )
    } catch {
      return dateString
    }
  }

  return (
    <Layout location={location} pageContext={pageContext}>
      <Seo title="Blog" description="Native4A blog posts" />

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <h1 style={{ marginBottom: '2.5rem' }}>Blog</h1>

        {loading && (
          <p style={{ color: '#888' }}>Loading posts...</p>
        )}

        {!loading && error && (
          <p style={{ color: 'red' }}>Error loading posts: {error}</p>
        )}

        {!loading && !error && posts.length === 0 && (
          <p style={{ color: '#888' }}>No blog posts found.</p>
        )}

        {!loading && posts.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {posts.map((post) => (
              <li
                key={post.id || post.slug}
                style={{
                  marginBottom: '2.5rem',
                  paddingBottom: '2.5rem',
                  borderBottom: '1px solid #eee',
                }}
              >
                <Link
                  to={`/${language}/blog/${post.slug}/`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {post.featuredImage && (
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      style={{
                        width: '100%',
                        maxHeight: '300px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginBottom: '1rem',
                        display: 'block',
                      }}
                      loading="lazy"
                    />
                  )}
                  <h2 style={{ marginBottom: '0.5rem', color: '#333' }}>
                    {post.title}
                  </h2>
                </Link>

                {post.excerpt && (
                  <p style={{ color: '#555', marginBottom: '0.5rem', lineHeight: 1.6 }}>
                    {post.excerpt}
                  </p>
                )}

                <small style={{ color: '#888' }}>
                  {post.author && <span>{post.author} &middot; </span>}
                  {post.publishedDate && (
                    <time dateTime={post.publishedDate}>
                      {formatDate(post.publishedDate)}
                    </time>
                  )}
                </small>

                {post.tags && post.tags.length > 0 && (
                  <div style={{ marginTop: '0.75rem' }}>
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          display: 'inline-block',
                          background: '#FAAB00',
                          color: '#333',
                          borderRadius: '4px',
                          padding: '2px 8px',
                          fontSize: '0.75rem',
                          marginRight: '6px',
                          fontWeight: 600,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  )
}

export default BlogIndex
