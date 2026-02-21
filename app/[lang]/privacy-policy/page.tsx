'use client'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-native-color">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-3 text-native-color">Introduction</h2>
            <p>
              Native4a ("Company", "we", "our", or "us") operates the website. This page informs you of our policies 
              regarding the collection, use, and disclosure of personal data when you use our Service and the choices 
              you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-native-color">Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-native-color">Security of Data</h2>
            <p>
              The security of your data is important to us but remember that no method of transmission over the Internet 
              or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3 text-native-color">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@native4a.com.hk
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
