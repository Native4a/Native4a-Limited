'use client'

export default function OffPageSEOPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-native-color">Off-Page SEO</h1>
        <p className="text-xl text-gray-600 mb-12">Build authority and improve rankings with off-page optimization</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {['Link Building', 'Brand Mentions', 'Social Signals', 'Citation Building'].map((strategy, i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-native-color">{strategy}</h3>
              <p className="text-gray-600">Improve your domain authority through {strategy.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
