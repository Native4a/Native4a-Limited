import React from 'react'
import { Link } from 'gatsby'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts, language = 'zh' }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className={styles.container}>
        <p>No blog posts found.</p>
      </div>
    )
  }

  // Helper function to generate blog post path
  // Uses client-side route at /blog/[slug] which handles dynamic posts
  const getBlogPostPath = (slug) => {
    return `/blog/${slug}`
  }

  return (
    <div className={styles.container}>
      <div className={styles.articlesGrid}>
        {posts.map((post) => (
          <article key={post.id} className={styles.articleCard}>
            {post.featuredImage && (
              <div className={styles.imageWrapper}>
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            )}
            <Link to={getBlogPostPath(post.slug)} className={styles.articleLink}>
              <h3>{post.title}</h3>
              {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
              <div className={styles.meta}>
                <span className={styles.author}>
                  {post.author || 'Native4A'}1
                </span>
                <span className={styles.date}>
                  {new Date(post.publishedDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

export default ArticlePreview
