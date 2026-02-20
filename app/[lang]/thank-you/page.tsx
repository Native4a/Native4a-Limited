'use client'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-native-color">Thank You!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Thank you for contacting us. We have received your message and will get back to you as soon as possible.
        </p>
        <p className="text-lg text-gray-500 mb-8">
          Our team will review your inquiry and respond within 24 hours.
        </p>
        <a href="/" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Back to Home
        </a>
      </div>
    </div>
  )
}
