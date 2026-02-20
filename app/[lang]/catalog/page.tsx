'use client'

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-native-color">Service Catalog</h1>
        <p className="text-xl text-gray-600 mb-12">Browse our comprehensive service offerings</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          {[
            'SEO Services', 'Social Media Marketing', 'Web Design',
            'Video Marketing', 'Content Marketing', 'Email Marketing'
          ].map((service, i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3 text-native-color">{service}</h3>
              <p className="text-gray-600">Professional {service.toLowerCase()} solutions</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
