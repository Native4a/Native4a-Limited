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
  '@type': 'LocalBusiness',
  name: 'Native4a',
  description: 'Leading SEO Agency in Hong Kong offering professional SEO, digital marketing, web design, and video production services',
  url: 'https://nativeaaaa.com.hk',
  telephone: '+852-XXXX-XXXX', // Update with actual phone
  email: 'info@native4a.com.hk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hong Kong',
    addressLocality: 'Hong Kong',
    addressCountry: 'HK',
  },
  sameAs: [
    'https://www.facebook.com/native4a',
    'https://www.linkedin.com/company/native4a',
    'https://www.instagram.com/native4a',
  ],
  image: 'https://nativeaaaa.com.hk/og-image.png',
  priceRange: '$$',
  areaServed: ['HK', 'China', 'Global'],
  serviceType: ['SEO', 'Digital Marketing', 'Web Design', 'Video Production'],
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
