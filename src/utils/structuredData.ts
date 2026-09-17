/**
 * Structured Data Builder
 * Generates JSON-LD structured data for SEO purposes
 */

interface StructuredData {
  '@context': string
  '@type': string
  [key: string]: unknown
}

/**
 * Organization structured data for Native4a
 */
export const buildOrganizationStructuredData = (): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Native Greater China',
  alternateName: 'Native 4A',
  url: 'https://nativeaaaa.com.hk',
  logo: 'https://images.ctfassets.net/rpza41pe9ev5/6TeposIqKULWL1FRMsnXHJ/9468a014824df34ae106c27c85b940f8/2023_native4a_logo.svg',
  image: 'https://images.ctfassets.net/rpza41pe9ev5/2jWem3YqlEdNaaoxpYQa7h/7b9e824531232e1da44d84d2defd0164/IMG_8643.webp',
  description: '專業香港SEO公司與數位行銷服務商，專注於香港SEO優化、中文反向連結、外部連結建設及網站排名提升方案。',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'HK',
    addressLocality: 'Hong Kong',
    postalCode: '999077',
  },
  priceRange: '$$',
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Hong Kong',
  },
  keywords: [
    '中文反向連結', '中文外部連結', '香港seo', 'seo香港', '香港seo公司',
    'seo公司', 'seo hk', 'hk seo', 'seo優化公司', 'seo服務',
    'Seo agency', 'seo agency hk', 'seo', 'Seo firm', 'Seo company',
    'seo公司香港', 'seo optimization', '網頁seo', 'seo顧問', 'seo優化',
    'seo公司推薦', 'seo優化服務', 'seo 方案',
  ],
  knowsAbout: [
    '搜索引擎優化 (SEO)',
    '中文反向連結建設',
    '香港SEO顧問服務',
    '網站排名提升',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SEO 與數位行銷服務',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '香港SEO優化服務',
          description: '全方位網站SEO優化、關鍵字排名提升與香港地區搜尋引擎行銷。',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '中文反向連結與外部連結建構',
          description: '高品質中文反向連結（Backlinks）與外部連結策略，強化網站權重。',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO顧問與方案規劃',
          description: '量身打造的 SEO 顧問服務、技術性SEO審查與長期成長方案。',
        },
      },
    ],
  },
  sameAs: ['https://nativeaaaa.com.hk'],
})

/**
 * Service structured data for a specific service
 */
export const buildServiceStructuredData = (
  serviceName: string,
  description: string,
  areaServed: string[] = ['HK']
): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Native4a',
    url: 'https://nativeaaaa.com.hk',
  },
  areaServed: areaServed.map((area) => ({
    '@type': 'City',
    name: area,
  })),
})

/**
 * Breadcrumb structured data
 */
export const buildBreadcrumbStructuredData = (
  items: Array<{ name: string; url: string }>
): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

/**
 * Article/Blog post structured data
 */
export const buildArticleStructuredData = (
  title: string,
  description: string,
  imageUrl: string,
  datePublished: string,
  dateModified?: string,
  author: string = 'Native4a'
): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  image: imageUrl,
  datePublished,
  dateModified: dateModified || datePublished,
  author: {
    '@type': 'Person',
    name: author,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Native4a',
    logo: {
      '@type': 'ImageObject',
      url: 'https://nativeaaaa.com.hk/og-image.png',
    },
  },
})

/**
 * FAQ structured data
 */
export const buildFAQStructuredData = (
  faqs: Array<{ question: string; answer: string }>
): StructuredData => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})
