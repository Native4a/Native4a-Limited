'use client'

import { useTranslation } from 'react-i18next'

const services = [
  { title: 'Web Design', description: 'Custom website design tailored to your brand' },
  { title: 'Responsive Design', description: 'Mobile-first design for all devices' },
  { title: 'User Experience', description: 'Intuitive and engaging user interfaces' },
  { title: 'Performance', description: 'Fast loading times and optimal performance' }
]

export default function WebDesignPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-native-color">Web Design Services</h1>
        <p className="text-xl text-gray-600 mb-12">Create stunning websites that convert visitors into customers</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {services.map((service, i) => (
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
