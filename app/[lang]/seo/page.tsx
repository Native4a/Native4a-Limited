'use client'

import { useTranslation } from 'react-i18next'

export default function SEOPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-native-color">
          {t('seo.title') || 'SEO Services'}
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Improve your search engine rankings and drive organic traffic to your website
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {[
            {
              title: 'Technical SEO',
              description: 'Optimize your website structure and performance for better indexing'
            },
            {
              title: 'On-Page SEO',
              description: 'Improve content, meta tags, and keyword optimization'
            },
            {
              title: 'Off-Page SEO',
              description: 'Build quality backlinks and improve domain authority'
            },
            {
              title: 'Local SEO',
              description: 'Dominate local search results in Hong Kong and beyond'
            }
          ].map((service, i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-native-color">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
