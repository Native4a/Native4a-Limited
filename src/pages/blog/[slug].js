import React, { useEffect, useState } from 'react'
import { Link, navigate } from 'gatsby'
import readingTime from 'reading-time'

import '../../components/variables.css'
import '../../styles/global.css'
import Seo from '../../components/seo'
import Layout from '../../components/layout'
import Hero from '../../components/hero'
import Tags from '../../components/tags'

// Skeleton loader component for better perceived performance
const SkeletonLoader = () => (
  <div className="px-4 md:px-8 py-6">
    <div className="h-96 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-pulse rounded-lg mb-12" />
    <div className="h-6 w-2/5 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-pulse mb-4 rounded" />
    <div className="h-72 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-pulse rounded" />
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
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center py-12 md:py-20">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-6">{error || 'The requested blog post could not be found.'}</p>
            <Link to={`/${language}/blog/`} className="inline-block text-blue-600 font-medium border-b-[1.5px] border-blue-600 hover:border-transparent transition-colors">
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
        <section className="flex justify-center items-center py-12 md:py-16 px-4 md:px-8 bg-gray-50">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full max-w-2xl h-auto max-h-96 object-contain rounded-lg"
            loading="lazy"
            decoding="async"
          />
        </section>
      )}

      {/* Article Header */}
      <section className="py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight tracking-tighter">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <span className="font-semibold text-gray-900">{post.author || 'Native4A'}</span>
            <span className="opacity-40">•</span>
            <time dateTime={post.publishedDate}>
              {publishDate}
            </time>
            <span className="opacity-40">•</span>
            <span>{Math.ceil(timeToRead)} min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <article className="py-12 md:py-16">
          <div className="w-full">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="prose prose-sm md:prose-base max-w-none leading-relaxed text-gray-900 [&_p]:mb-6 [&_p]:mt-0 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:pt-4 [&_h2]:border-t [&_h2]:border-gray-200 [&_h2]:leading-snug [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mt-7 [&_h3]:mb-3 [&_h3]:leading-snug [&_h4]:text-lg [&_h4]:font-bold [&_h4]:mt-7 [&_h4]:mb-3 [&_h4]:leading-snug [&_h5]:text-base [&_h5]:font-bold [&_h5]:mt-6 [&_h5]:mb-2 [&_h6]:text-base [&_h6]:font-bold [&_h6]:mt-6 [&_h6]:mb-2 [&_a]:text-blue-600 [&_a]:border-b-[1.5px] [&_a]:border-blue-600 [&_a]:font-medium [&_a]:no-underline [&_a:hover]:border-transparent [&_a:hover]:text-blue-700 [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-lg [&_img]:my-8 [&_ul]:my-6 [&_ul]:pl-8 [&_ol]:my-6 [&_ol]:pl-8 [&_li]:mb-3 [&_li]:leading-relaxed [&_blockquote]:border-l-4 [&_blockquote]:border-blue-600 [&_blockquote]:pl-6 [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:text-gray-700 [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:p-6 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-6 [&_pre]:text-sm [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-inherit"
            />
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-200">
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
