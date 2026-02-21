import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://native4a.com.hk'
  const languages = ['zh', 'en', 'ja']
  
  const routes = [
    '',
    '/blog',
    '/about-us',
    '/contact-us',
    '/seo',
    '/web-design',
    '/smm-ads',
    '/video',
    '/off-page',
    '/xiaohongshu',
    '/seo-smart-kit',
    '/seo-keywords',
    '/catalog',
    '/privacy-policy',
  ]

  // Generate URLs for each language
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  return sitemapEntries
}
