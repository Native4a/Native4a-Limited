import React from 'react'
import { Helmet } from 'react-helmet'
interface StructuredData {
  '@context': string
  '@type': string
  [key: string]: unknown
}

interface SeoProps {
  description?: string
  lang?: string
  meta?: Array<Record<string, string>>
  title?: string
  image?: string
  ogUrl?: string
  keywords?: string
  noindex?: boolean
  structuredData?: StructuredData
}

interface SiteMetadata {
  title: string
  description: string
  keywords?: string
  author?: string
  social?: {
    twitter?: string
  }
}

const Seo: React.FC<SeoProps> = ({
  description = '',
  lang = 'zh-HK',
  meta = [],
  title,
  image,
  ogUrl,
  keywords,
  noindex = false,
  structuredData,
}) => {
  const siteMetadata: SiteMetadata = {
    title: 'Native4a - SEO Agency Hong Kong | Digital Marketing Services',
    description: 'Native4a is a leading SEO agency in Hong Kong offering professional SEO, digital marketing, web design, and video production services to help your business grow online.',
    keywords: 'SEO, digital marketing, Hong Kong, web design, video production, backlinks, social media marketing',
    author: 'Native4a Limited',
  }

  const metaDescription = description || siteMetadata.description
  const metaKeywords = keywords || siteMetadata.keywords
  const defaultTitle = siteMetadata.title
  const defaultImage = image || 'https://nativeaaaa.com.hk/og-image.png'

  const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow'

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
          name: 'robots',
          content: robotsContent,
        },
        {
          name: 'googlebot',
          content: robotsContent,
        },
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: metaKeywords,
        },
        {
          name: 'author',
          content: siteMetadata.author || 'Native4a',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=5',
        },
        {
          name: 'theme-color',
          content: '#FAAB00',
        },
        {
          name: 'image',
          content: defaultImage,
        },
        {
          property: 'og:url',
          content: ogUrl,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: defaultImage,
        },
        {
          property: 'og:locale',
          content: 'zh_HK',
        },
        {
          property: 'og:site_name',
          content: 'Native4a',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.social?.twitter || '@Native4a',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: defaultImage,
        },
      ].concat(meta)}
    >
      <link rel="canonical" href={ogUrl} />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default Seo
