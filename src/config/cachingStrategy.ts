/**
 * HTTP Caching Strategy
 * Guidelines for Vercel deployment caching headers
 */

interface CacheStrategy {
  path: string
  headers: Record<string, string>
}

/**
 * Recommended cache strategies for different asset types
 * Deploy these headers in vercel.json or use middleware.ts
 */
export const cacheStrategies: CacheStrategy[] = [
  // Static assets with content hash (images, fonts, etc.)
  {
    path: '/img/**',
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Type': 'image/*',
    },
  },
  // SVG files
  {
    path: '/**/*.svg',
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Type': 'image/svg+xml',
    },
  },
  // Web fonts
  {
    path: '/**/*.{woff,woff2,ttf,otf}',
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Type': 'font/*',
    },
  },
  // HTML pages (with revalidation)
  {
    path: '/**/*.html',
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  },
  // API responses
  {
    path: '/api/**',
    headers: {
      'Cache-Control': 'public, max-age=300, s-maxage=3600',
    },
  },
  // Data assets (JSON, XML)
  {
    path: '/**/*.{json,xml}',
    headers: {
      'Cache-Control': 'public, max-age=300, s-maxage=3600',
    },
  },
]

/**
 * Vercel deployment configuration for caching
 * Add this to your vercel.json file
 */
export const vercelCachingConfig = {
  headers: [
    {
      source: '/img/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'",
        },
      ],
    },
    {
      source: '/(.*)\\.{css,js,woff,woff2}',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/api/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=300, s-maxage=3600',
        },
      ],
    },
  ],
}

/**
 * Service Worker caching strategy
 * For offline support and advanced caching
 */
export const serviceWorkerCachingStrategy = {
  version: 'v1',
  cacheName: 'native4a-cache-v1',
  urlsToCache: [
    '/',
    '/index.html',
    '/styles/global.css',
    '/img/4afavicon.png',
  ],
  maxAge: {
    IMAGES: 30 * 24 * 60 * 60 * 1000, // 30 days
    API: 5 * 60 * 1000, // 5 minutes
    PAGES: 24 * 60 * 60 * 1000, // 24 hours
  },
}

/**
 * Cache busting strategy
 * Returns versioned asset URLs
 */
export const getCacheBustedUrl = (url: string, version: string): string => {
  const separator = url.includes('?') ? '&' : '?'
  return `${url}${separator}v=${version}`
}

/**
 * Generate Cache-Control header based on asset type
 */
export const generateCacheControlHeader = (
  assetType: 'static' | 'dynamic' | 'api' | 'html'
): string => {
  const strategies = {
    static: 'public, max-age=31536000, immutable',
    dynamic: 'public, max-age=3600, s-maxage=86400',
    api: 'public, max-age=300, s-maxage=3600',
    html: 'public, max-age=3600, s-maxage=86400, must-revalidate',
  }

  return strategies[assetType] || strategies.dynamic
}
