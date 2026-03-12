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

// Skeleton loader component for better perceived performance
const SkeletonLoader = () => (
  <div className={styles.skeletonContainer}>
    <div className={styles.skeletonHero} />
    <div className={styles.skeletonMeta} />
    <div className={styles.skeletonContent} />
  </div>
)

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

  useEffect(() => {
    if (!slug) {
      setError('No slug provided')
      setLoading(false)
      return
    }

    const controller = new AbortController()
    const loadPost = async () => {
      try {
        const res = await fetch(`/api/notion-post?slug=${slug}&language=${language}`, {
          signal: controller.signal,
        })
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`)
        }
        const data = await res.json()
        if (data.post) {
          setPost(data.post)
        } else {
          setError('Post not found')
        }
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('[v0] Error loading blog post:', err)
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    loadPost()

    // Cleanup function to abort fetch if component unmounts
    return () => controller.abort()
  }, [slug, language])

  const pageContext = { language }

  if (loading) {
    return (
      <Layout location={location} pageContext={pageContext}>
        <Seo title="Loading..." />
        <SkeletonLoader />
      </Layout>
    )
  }

  if (error || !post) {
    return (
      <Layout location={location} pageContext={pageContext}>
        <Seo title="Post Not Found" />
        <div className={styles.container}>
          <div className={styles.errorContainer}>
            <h1>Post Not Found</h1>
            <p>{error || 'The requested blog post could not be found.'}</p>
            <Link to={`/${language}/blog/`} className={styles.backLink}>
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
      
      {/* Featured Image Section */}
      {post.featuredImage && (
        <section className={styles.heroImageSection}>
          <img
            src={post.featuredImage}
            alt={post.title}
            className={styles.heroImage}
            loading="lazy"
            decoding="async"
          />
        </section>
      )}

      {/* Article Header */}
      <section className={styles.articleHeader}>
        <div className={styles.container}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.metaInfo}>
            <span className={styles.author}>{post.author || 'Native4A'}</span>
            <span className={styles.separator}>•</span>
            <time dateTime={post.publishedDate} className={styles.date}>
              {publishDate}
            </time>
            <span className={styles.separator}>•</span>
            <span className={styles.readTime}>{Math.ceil(timeToRead)} min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className={styles.container}>
        <article className={styles.article}>
          <div className={styles.body}>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className={styles.content}
            />
            {post.tags && post.tags.length > 0 && (
              <div className={styles.tagsSection}>
                <Tags tags={post.tags} />
              </div>
            )}
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default BlogPostPage
