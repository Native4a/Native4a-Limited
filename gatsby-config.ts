import * as dotenv from 'dotenv'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

interface Plugin {
  resolve: string
  options?: Record<string, unknown>
}

// Build plugins array conditionally
const plugins: Plugin[] = [
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        'G-M3STTWTYEV',
        'G-6CHTNN943F',
        'Aw-839705167',
      ],
      pluginConfig: {
        head: true,
      },
    },
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://nativeaaaa.com.hk`,
      stripQueryString: true,
    },
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-sharp',
  'gatsby-plugin-sitemap',
  'gatsby-plugin-image',
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://nativeaaaa.com.hk',
      sitemap: 'https://nativeaaaa.com.hk/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/img/4afavicon.png',
    },
  },
]

// Only add Contentful plugin if credentials are available
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
    },
  })
}

export const siteMetadata = {
  title: '',
  description: '',
  siteUrl: 'https://nativeaaaa.com.hk',
}

export const __experimentalThemes = [
  {
    resolve: 'gatsby-theme-blog-core',
  },
]

module.exports = {
  siteMetadata,
  plugins,
}
