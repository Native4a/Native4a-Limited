'use client'

import { useTranslation } from 'react-i18next'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-native-color">
          {t('about.title') || 'About Us'}
        </h1>

        <div className="max-w-3xl space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Native4a is a leading digital marketing agency in Hong Kong, specializing in SEO, 
              digital marketing, and web design solutions for businesses of all sizes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We empower businesses to achieve their digital goals through innovative marketing 
              strategies, cutting-edge technology, and expert guidance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
              <li>Search Engine Optimization (SEO)</li>
              <li>Digital Marketing Strategy</li>
              <li>Web Design & Development</li>
              <li>Social Media Marketing</li>
              <li>Content Marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With years of experience and a proven track record of success, we help businesses 
              grow their online presence and achieve measurable results.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
