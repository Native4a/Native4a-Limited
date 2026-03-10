import * as dotenv from 'dotenv'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Also load .env as fallback
dotenv.config()

interface Plugin {
  resolve: string
  options?: Record<string, unknown>
}

const isDev = process.env.NODE_ENV === 'development'

// Build plugins array conditionally - keep minimal in dev for faster builds
const plugins: (string | Plugin)[] = [
  'gatsby-plugin-image',
  {
    resolve: 'gatsby-plugin-sharp',
    options: {
      defaults: {
        placeholder: 'none',
        quality: 50,
      },
      failOn: 'none',
      stripMetadata: true,
    },
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-postcss',
]

// Add non-essential plugins only in production
if (!isDev) {
  plugins.push(
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
    'gatsby-plugin-sitemap',
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
        name: 'Native4a - SEO Agency Hong Kong',
        short_name: 'Native4a',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#FAAB00',
        display: 'standalone',
        icon: 'src/img/4afavicon.png',
        cache_busting_mode: 'none',
      },
    },
  )
}

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

const siteMetadata = {
  title: 'Native4a - SEO Agency Hong Kong | Digital Marketing Services',
  description: 'Native4a is a leading SEO agency in Hong Kong offering professional SEO, digital marketing, web design, and video production services to help your business grow online.',
  siteUrl: 'https://nativeaaaa.com.hk',
  author: 'Native4a Limited',
  keywords: 'SEO, digital marketing, Hong Kong, web design, video production, backlinks, social media marketing',
}

module.exports = {
  siteMetadata,
  plugins,
}
