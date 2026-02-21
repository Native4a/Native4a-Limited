'use client'

export default function XiaohongshuPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-native-color">小红书 Marketing</h1>
        <p className="text-xl text-gray-600 mb-12">Reach Chinese consumers on Xiaohongshu with targeted campaigns</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {['Influencer Partnerships', 'Content Creation', 'Community Management', 'Brand Collaboration'].map((service, i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-native-color">{service}</h3>
              <p className="text-gray-600">Professional {service.toLowerCase()} on Xiaohongshu</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
