import React, { useEffect, useState } from 'react'
import { Link, PageProps } from 'gatsby'
import readingTime from 'reading-time'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './blog-post.module.css'

interface NotionBlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt?: string
  author?: string
  tags?: string[]
  featuredImage?: string
  publishedDate: string
  language: string
}

interface BlogPostTemplateProps extends PageProps {
  pageContext?: {
    slug: string
    language: string
    previousPostSlug?: string
    nextPostSlug?: string
  }
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  location,
  pageContext,
}) => {
  const [post, setPost] = useState<NotionBlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  const slug = pageContext?.slug || ''
  const language = pageContext?.language || 'zh'

  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await fetch(`/api/notion-post?slug=${slug}&language=${language}`)
        if (!res.ok) throw new Error(`API error: ${res.status}`)
        const data = await res.json()
        setPost(data.post || null)
      } catch (error) {
        console.error('Error loading blog post:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug, language])

  if (loading) {
    return (
      <Layout location={location} pageContext={pageContext}>
        <div className={styles.container}>
          <p>Loading...</p>
        </div>
      </Layout>
    )
  }

  if (!post) {
    return (
      <Layout location={location} pageContext={pageContext}>
        <div className={styles.container}>
          <p>Post not found</p>
        </div>
      </Layout>
    )
  }

  const localeMap: Record<string, string> = {
    zh: 'zh-HK',
    en: 'en-US',
    ja: 'ja-JP',
  }
  const publishDate = new Date(post.publishedDate).toLocaleDateString(
    localeMap[language] || 'zh-HK',
    { year: 'numeric', month: 'long', day: 'numeric' }
  )

  const { minutes: timeToRead } = readingTime(post.content)
  const readTimeLabel =
    language === 'zh'
      ? `${Math.ceil(timeToRead)} 分鐘閱讀`
      : language === 'ja'
      ? `${Math.ceil(timeToRead)} 分で読めます`
      : `${Math.ceil(timeToRead)} min read`

  const getLocalizedPath = (path: string) => {
    if (language === 'zh') {
      return path
    }
    return `/${language}${path}`
  }

  return (
    <Layout location={location} pageContext={pageContext}>
      <Seo
        title={post.title}
        description={post.excerpt || post.content.substring(0, 160)}
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
              <time dateTime={post.publishedDate}>{publishDate}</time> &ndash;{' '}
              {readTimeLabel}
            </span>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className={styles.content}
            />
            {post.tags && post.tags.length > 0 && <Tags tags={post.tags} />}
            {(pageContext?.previousPostSlug || pageContext?.nextPostSlug) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {pageContext?.previousPostSlug && (
                    <li>
                      <Link
                        to={getLocalizedPath(
                          `/blog/${pageContext.previousPostSlug}`
                        )}
                        rel="prev"
                      >
                        ← Previous
                      </Link>
                    </li>
                  )}
                  {pageContext?.nextPostSlug && (
                    <li>
                      <Link
                        to={getLocalizedPath(`/blog/${pageContext.nextPostSlug}`)}
                        rel="next"
                      >
                        Next →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

