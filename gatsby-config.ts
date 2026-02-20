import * as dotenv from 'dotenv'

// Safely load environment variables, ignoring errors if file doesn't exist
try {
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
  })
} catch (e) {
  console.warn('Could not load .env file, continuing...')
}

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
  {
    resolve: 'gatsby-plugin-image',
    options: {
      quality: 75,
      webp: {
        quality: 75,
      },
      blurred: true,
      placeholder: 'blurred',
    },
  },
  {
    resolve: 'gatsby-plugin-sharp',
    options: {
      quality: 75,
      stripMetadata: true,
      defaultQuality: 75,
    },
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-react-helmet',
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
  'gatsby-plugin-postcss',
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
