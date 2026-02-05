import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SeoProps {
  description?: string
  lang?: string
  meta?: Array<{ name?: string; property?: string; content: string }>
  title?: string
  image?: string
  ogUrl?: string
}

interface SiteQuery {
  site: {
    siteMetadata: {
      title: string
      description: string
      social?: {
        twitter?: string
      }
    }
  }
}

const Seo: React.FC<SeoProps> = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
  image,
  ogUrl,
}) => {
  const { site } = useStaticQuery<SiteQuery>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: image,
        },
        {
          property: `og:url`,
          content: ogUrl,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || `Native4a`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta as any)}
    />
  )
}

export default Seo
