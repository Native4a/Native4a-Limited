import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Section from './baseTools/Section'

import Tags from './tags'
import * as styles from '../styles/article-preview.module.css'

interface Post {
  slug: string
  title: string
  heroImage?: {
    gatsbyImageData: any
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
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Section>
      <div className="my-28 p-5">
        <ul className={styles.articleList}>
          {posts.map((post) => {
            console.log(post)
            return (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`} className={styles.link}>
                  <GatsbyImage
                    alt="gatsbyImageData"
                    image={post.heroImage?.gatsbyImageData}
                    className="w-full aspect-video"
                  />
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
