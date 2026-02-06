/**
 * Project Configuration
 * Centralized configuration for the Native4a project
 */

export const projectConfig = {
  // Site metadata
  site: {
    title: 'Native4a - SEO Agency Hong Kong | Digital Marketing Services',
    description: 'Native4a is a leading SEO agency in Hong Kong offering professional SEO, digital marketing, web design, and video production services to help your business grow online.',
    url: 'https://nativeaaaa.com.hk',
    author: 'Native4a Limited',
    keywords: 'SEO, digital marketing, Hong Kong, web design, video production, backlinks, social media marketing',
  },

  // Theme colors
  colors: {
    primary: '#FAAB00',
    secondary: '#333333',
    background: '#ffffff',
    text: '#000000',
    accent: '#FF6B35',
  },

  // Image optimization defaults
  images: {
    quality: 75,
    formats: ['webp', 'jpg'],
    sizes: [320, 640, 1024, 1440],
    defaultPlaceholder: 'https://nativeaaaa.com.hk/og-image.png',
  },

  // Supported languages
  languages: {
    default: 'zh',
    supported: ['en', 'ja', 'zh'],
    regionMap: {
      en: 'en-US',
      ja: 'ja-JP',
      zh: 'zh-HK',
    },
  },

  // Google Analytics tracking IDs
  analytics: {
    ga4: 'G-M3STTWTYEV',
    analytics: 'G-6CHTNN943F',
    ads: 'Aw-839705167',
  },

  // External service endpoints
  services: {
    contentful: {
      spaceId: process.env.CONTENTFUL_SPACE_ID || '',
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
    },
  },

  // Performance thresholds (in milliseconds)
  performance: {
    imageLoadTimeout: 5000,
    apiTimeout: 8000,
    cacheMaxAge: 3600,
  },

  // Breakpoints for responsive design
  breakpoints: {
    mobile: 320,
    tablet: 640,
    desktop: 1024,
    wide: 1440,
    ultraWide: 1920,
  },
}

export default projectConfig
