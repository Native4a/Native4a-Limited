import React from 'react'
import { withTranslation } from 'react-i18next'
import Layout from '../components/layout'
import Seo from '../components/seo'

class CheckoutSuccess extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sessionId: null,
      orderDetails: null,
    }
  }

  componentDidMount() {
    // Get session ID from URL query parameters
    const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '')
    const sessionId = searchParams.get('session_id')

    if (sessionId) {
      this.setState({ sessionId })
      // Clear the cart from localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('shop_cart')
      }
    }
  }

  handleContinueShopping = () => {
    window.location.href = '/shop'
  }

  render() {
    const { sessionId } = this.state
    const { t } = this.props

    return (
      <Layout location={this.props.location}>
        <Seo
          title="Order Successful"
          description="Your order has been successfully placed"
          ogUrl="https://nativeaaaa.com.hk/checkout-success/"
        />

        <section className="min-h-screen bg-gray-50 py-16 px-4">
          <div className="max-w-2xl mx-auto">
            {/* Success Icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Order Confirmed!
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Thank you for your purchase
              </p>
            </div>

            {/* Order Details Card */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Order Number
                  </h3>
                  <p className="text-lg font-mono text-gray-900 break-all">
                    {sessionId || 'N/A'}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Order Date
                  </h3>
                  <p className="text-lg text-gray-900">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What happens next?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">
                      ✓
                    </span>
                    <span>
                      A confirmation email will be sent to your registered email address
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">
                      ✓
                    </span>
                    <span>
                      Your digital products will be available for download immediately
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">
                      ✓
                    </span>
                    <span>
                      You can track your order status in your account dashboard
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={this.handleContinueShopping}
                className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => (window.location.href = '/')}
                className="flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Return to Home
              </button>
            </div>

            {/* Help Section */}
            <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Help?
              </h3>
              <p className="text-gray-600 mb-4">
                If you have any questions about your order, please contact our support team
              </p>
              <a
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Contact Support →
              </a>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default withTranslation()(CheckoutSuccess)
