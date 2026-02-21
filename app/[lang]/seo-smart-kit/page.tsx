'use client'

export default function SEOSmartKitPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-native-color">SEO Smart Kit</h1>
        <p className="text-xl text-gray-600 mb-12">Advanced SEO tools and resources for your business</p>
        <div className="max-w-3xl space-y-8">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-2xl font-bold mb-3 text-native-color">SEO Analysis Tools</h3>
            <p className="text-gray-600">Comprehensive tools for keyword research, competitor analysis, and ranking tracking</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-2xl font-bold mb-3 text-native-color">Training & Consultation</h3>
            <p className="text-gray-600">Expert guidance and training to improve your SEO knowledge</p>
          </div>
        </div>
      </div>
    </div>
  )
}
