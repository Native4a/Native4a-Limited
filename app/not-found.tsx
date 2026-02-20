export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page not found</p>
        <a href="/zh" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Back to Home
        </a>
      </div>
    </div>
  )
}
