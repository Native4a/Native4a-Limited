'use client'

export default function SEOKeywordsPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-native-color">SEO Keywords Research</h1>
        <p className="text-xl text-gray-600 mb-12">Find high-converting keywords for your business</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {['Keyword Research', 'Competitor Analysis', 'Search Volume Analysis', 'Keyword Ranking'].map((feature, i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-native-color">{feature}</h3>
              <p className="text-gray-600">Advanced {feature.toLowerCase()} tools</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
