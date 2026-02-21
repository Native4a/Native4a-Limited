'use client'

import { useTranslation } from 'react-i18next'
import { Suspense } from 'react'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-native-color">
            Native4a
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            {t('common.tagline') || 'Hong Kong Digital Marketing & SEO Experts'}
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            This page is under migration from Gatsby to Next.js. 
            All services and pages are being migrated with full functionality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['SEO', 'Digital Marketing', 'Web Design'].map((service) => (
              <div key={service} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">Professional services for your business</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
