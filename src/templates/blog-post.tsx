import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import readingTime from 'reading-time'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './blog-post.module.css'

interface BlogPostNode {
  slug: string
  title: string
  publishDate: string
  rawDate: string
  heroImage?: {
    gatsbyImage: IGatsbyImageData
    resize: {
      src: string
    }
  }
  body?: {
    raw: string
    references?: any[]
  }
  tags?: string[]
  description?: {
    raw: string
  }
  author?: {
    name: string
  }
}

interface BlogPostTemplateProps extends PageProps {
  data: {
    contentfulBlogPost: BlogPostNode
    previous?: { slug: string; title: string }
    next?: { slug: string; title: string }
  }
  pageContext?: {
    language?: string
    previousPostSlug?: string
    nextPostSlug?: string
  }
}

class BlogPostTemplate extends React.Component<BlogPostTemplateProps> {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    const language = this.props.pageContext?.language || 'zh'
    const plainTextDescription = documentToPlainTextString(
      JSON.parse(post.description?.raw || '{}')
    )
    const plainTextBody = documentToPlainTextString(JSON.parse(post.body?.raw || '{}'))
    const { minutes: timeToRead } = readingTime(plainTextBody)

    // Helper function to get language-prefixed path
    const getLocalizedPath = (path: string) => {
      if (language === 'zh') {
        return path
      }
      return `/${language}${path}`
    }

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
          const { gatsbyImage, description } = node.data.target
          return <GatsbyImage image={getImage(gatsbyImage)} alt={description} />
        },
        'embedded-asset-block': (node: any) => {
          const { gatsbyImageData } = node.data.target
          if (!gatsbyImageData) {
            return null
          }
          return <GatsbyImage image={gatsbyImageData} alt="embedded-asset" />
        },
      },
    }

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={plainTextDescription}
          image={`http:${post.heroImage?.resize.src}`}
        />
        <section>
          <div className={styles.container}>
            <Hero image={post.heroImage?.gatsbyImage} title={post.title} />
          </div>
        </section>
        <div className={styles.container}>
          <div className={styles.article}>
            <div className={styles.body}>
              <span className={styles.meta}>
                {post.author?.name} &middot;{' '}
                <time dateTime={post.rawDate}>{post.publishDate}</time> –{' '}
                {timeToRead} minute read
              </span>
              {post.body?.raw && renderRichText(post.body, options)}
              <Tags tags={post.tags} />
              {(previous || next) && (
                <nav>
                  <ul className={styles.articleNavigation}>
                    {previous && (
                      <li>
                        <Link to={getLocalizedPath(`/blog/${previous.slug}`)} rel="prev">
                          ← {previous.title}
                        </Link>
                      </li>
                    )}
                    {next && (
                      <li>
                        <Link to={getLocalizedPath(`/blog/${next.slug}`)} rel="next">
                          {next.title} →
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
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData
          }
        }
      }
      tags
      description {
        raw
      }
      author {
        name
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
