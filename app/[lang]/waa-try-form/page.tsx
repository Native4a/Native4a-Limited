'use client'

export default function WaaTryFormPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-native-color">Try Our Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          Fill out the form below to get a free consultation with our experts
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Company Name</label>
            <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your company" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Service Interest</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select a service</option>
              <option>SEO Services</option>
              <option>Web Design</option>
              <option>Social Media Marketing</option>
              <option>Video Marketing</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your project" />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
