import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Section from './baseTools/Section'

import Tags from './tags'
import * as styles from '../styles/article-preview.module.css'

interface Post {
  slug: string
  title: string
  heroImage?: {
    url: string
  }
  author?: {
    name: string
  }
  publishDate: string
  tags?: string[]
  description?: {
    raw: string
  }
}

interface ArticlePreviewProps {
  posts?: Post[]
  language?: string
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ posts, language = 'zh' }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  const getLocalizedPath = (path: string) => {
    if (language === 'zh') {
      return path
    }
    return `/${language}${path}`
  }

  return (
    <Section>
      <div className="my-28 p-5">
        <ul className={styles.articleList}>
          {posts.map((post) => {
            return (
              <li key={post.slug}>
                <Link href={getLocalizedPath(`/blog/${post.slug}`)} className={styles.link}>
                  {post.heroImage?.url && (
                    <img
                      alt={post.title}
                      src={post.heroImage.url}
                      className="w-full aspect-video object-cover"
                    />
                  )}
                  <h2 className={styles.title}>{post.title}</h2>
                </Link>
                <div className={styles.meta}>
                  <small className="meta">{post.author?.name} &middot; </small>
                  <small className="meta">{post.publishDate}</small>
                  <Tags tags={post.tags} />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

export default ArticlePreview
