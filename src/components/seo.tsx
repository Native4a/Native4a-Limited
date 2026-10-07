import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'

interface StructuredData {
  '@context': string
  '@type'?: string
  '@graph'?: unknown[]
  [key: string]: unknown
}

interface MetaTag {
  name?: string
  property?: string
  content?: string
  [key: string]: string | undefined
}

interface SeoProps {
  description?: string
  lang?: string
  meta?: MetaTag[]
  title?: string
  image?: string
  ogUrl?: string
  keywords?: string
  noindex?: boolean
  structuredData?: StructuredData
  disableTitleTemplate?: boolean
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

interface SiteData {
  site: {
    siteMetadata: SiteMetadata
  }
  allSitePage: {
    nodes: Array<{ path: string }>
  }
}

const normalizePath = (pathname: string) => {
  const segments = pathname.split('/').filter(Boolean)
  return segments.length === 0 ? '/' : `/${segments.join('/')}/`
}

const getCanonicalPath = (pathname: string) => {
  const normalizedPath = normalizePath(pathname)
  return /^\/(?:en|ja|zh-CN|zh)(?:\/|$)/.test(normalizedPath)
    ? normalizedPath
    : normalizePath(`/zh${normalizedPath}`)
}

const getLanguagePath = (pathname: string, language: 'zh' | 'en') => {
  const pathWithoutLanguage = pathname.replace(/^\/(?:en|ja|zh-CN|zh)(?=\/|$)/, '')
  return normalizePath(`/${language}${pathWithoutLanguage}`)
}

const SITE_ORIGIN = 'https://nativeaaaa.com.hk'

const makeAbsoluteUrl = (pathname: string) => `${SITE_ORIGIN}${pathname}`

const makeLanguageAlternates = (pathname: string, availablePaths: Set<string>) => {
  const zhPath = getLanguagePath(pathname, 'zh')
  const enPath = getLanguagePath(pathname, 'en')
  if (!availablePaths.has(zhPath) || !availablePaths.has(enPath)) return []

  return [
    { hrefLang: 'zh-HK', href: makeAbsoluteUrl(zhPath) },
    { hrefLang: 'en', href: makeAbsoluteUrl(enPath) },
    { hrefLang: 'x-default', href: makeAbsoluteUrl(zhPath) },
  ]
}

const serializeStructuredData = (data: StructuredData) =>
  JSON.stringify(data).replace(/[<>&]/g, (character) => {
    switch (character) {
      case '<':
        return '\\u003c'
      case '>':
        return '\\u003e'
      default:
        return '\\u0026'
    }
  })

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
  disableTitleTemplate = false,
}) => {
  const { site, allSitePage } = useStaticQuery<SiteData>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            author
          }
        }
        allSitePage {
          nodes {
            path
          }
        }
      }
    `
  )

  const location = useLocation()
  const pathname = location?.pathname || '/'
  const canonicalPath = getCanonicalPath(pathname)
  const canonicalUrl = makeAbsoluteUrl(canonicalPath)
  const availablePaths = new Set(allSitePage.nodes.map(({ path }) => normalizePath(path)))
  const alternateLinks = makeLanguageAlternates(canonicalPath, availablePaths)
  const isEnglishPage = pathname === '/en' || pathname.startsWith('/en/')
  const isTraditionalChinesePage = pathname === '/zh' || pathname.startsWith('/zh/')
  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = keywords || site.siteMetadata.keywords
  const defaultTitle = isEnglishPage
    ? 'Native4a Hong Kong SEO Agency'
    : isTraditionalChinesePage
      ? 'Native4a 香港 SEO 公司'
      : site.siteMetadata?.title
  const defaultImage = image || 'https://nativeaaaa.com.hk/og-image.png'

  const robotsContent = noindex ? 'noindex, follow' : 'index, follow'

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || defaultTitle}
      defaultTitle={defaultTitle}
      titleTemplate={disableTitleTemplate || Boolean(title?.trim()) ? false : undefined}
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
          content: site.siteMetadata?.author || 'Native4a',
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
          content: site.siteMetadata?.social?.twitter || '@Native4a',
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
        ...meta,
      ]}
    >
      <link rel="canonical" href={canonicalUrl} />
      {alternateLinks.map(({ hrefLang, href }) => (
        <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={href} />
      ))}
      {structuredData && (
        <script type="application/ld+json">
          {serializeStructuredData(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default Seo
