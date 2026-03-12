import React, { useEffect, useState } from 'react'
import { Link, navigate } from 'gatsby'
import readingTime from 'reading-time'

import '../../components/variables.css'
import '../../styles/global.css'
import Seo from '../../components/seo'
import Layout from '../../components/layout'
import Hero from '../../components/hero'
import Tags from '../../components/tags'
import * as styles from '../../templates/blog-post.module.css'

const BlogPostPage = ({ location, params }) => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Extract slug from location.pathname since params may not be available in Gatsby client routes
  // URL pattern: /blog/{slug} or /blog/{slug}/
  const extractSlugFromPath = (pathname) => {
    const pathParts = pathname.replace(/^\/+|\/+$/g, '').split('/')
    // Expected format: ['blog', 'slug-name']
    if (pathParts.length >= 2 && pathParts[0] === 'blog') {
      return pathParts[1]
    }
    return ''
  }

  const slug = params?.slug || extractSlugFromPath(location?.pathname || '')
  // Default language - could be enhanced to detect from URL or localStorage
  const language = 'zh'

  console.log('[v0] BlogPostPage - pathname:', location?.pathname, 'extracted slug:', slug)

  useEffect(() => {
    if (!slug) {
      setError('No slug provided')
      setLoading(false)
      return
    }

    const loadPost = async () => {
      try {
        console.log('[v0] Loading post with slug:', slug, 'language:', language)
        const res = await fetch(`/api/notion-post?slug=${slug}&language=${language}`)
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`)
        }
        const data = await res.json()
        console.log('[v0] Received post data:', data)
        if (data.post) {
          setPost(data.post)
        } else {
          setError('Post not found')
        }
      } catch (err) {
        console.error('[v0] Error loading blog post:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug, language])

  const pageContext = { language }

  if (loading) {
    return (
      <Layout location={location} pageContext={pageContext}>
        <Seo title="Loading..." />
        <div className={styles.container}>
          <p style={{ padding: '2rem', textAlign: 'center' }}>Loading post...</p>
        </div>
      </Layout>
    )
  }

  if (error || !post) {
    return (
      <Layout location={location} pageContext={pageContext}>
        <Seo title="Post Not Found" />
        <div className={styles.container}>
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Post Not Found</h1>
            <p>{error || 'The requested blog post could not be found.'}</p>
            <Link to={`/${language}/blog/`} style={{ color: '#0066cc' }}>
              ← Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  const publishDate = new Date(post.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const { minutes: timeToRead } = readingTime(post.content || '')

  return (
    <Layout location={location} pageContext={pageContext}>
      <Seo
        title={post.title}
        description={post.excerpt || (post.content ? post.content.substring(0, 160) : '')}
        image={post.featuredImage}
      />
      <section>
        <div className={styles.container}>
          <Hero title={post.title} />
        </div>
      </section>
      <div className={styles.container}>
        <div className={styles.article}>
          <div className={styles.body}>
            <span className={styles.meta}>
              {post.author || 'Native4A'} &middot;{' '}
              <time dateTime={post.publishedDate}>{publishDate}</time> –{' '}
              {Math.ceil(timeToRead)} minute read
            </span>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className={styles.content}
            />
            {post.tags && post.tags.length > 0 && <Tags tags={post.tags} />}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostPage
