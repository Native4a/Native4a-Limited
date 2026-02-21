// Replaced Gatsby Helmet + useStaticQuery with a simple metadata helper
// In Next.js, SEO is handled via generateMetadata in page files
// This component is kept for backward compatibility but rendered as null

import React from 'react'

interface SeoProps {
  description?: string
  lang?: string
  meta?: Array<Record<string, string>>
  title?: string
  image?: string
  ogUrl?: string
  keywords?: string
  noindex?: boolean
  structuredData?: any
}

const Seo: React.FC<SeoProps> = () => {
  // In Next.js, SEO metadata is handled via generateMetadata in page.tsx files
  // This component is kept as a no-op for backward compatibility
  return null
}

export default Seo
