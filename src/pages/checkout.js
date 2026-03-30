import React from 'react'
import { withTranslation } from 'react-i18next'
import Layout from '../components/layout'
import Seo from '../components/seo'

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props)
    
    // Get cart from localStorage
    const savedCart = typeof window !== 'undefined' ? localStorage.getItem('shop_cart') : null
    const cart = savedCart ? JSON.parse(savedCart) : []
    
    this.state = {
      cart: cart,
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        country: 'Hong Kong',
        paymentMethod: 'credit_card'
      },
      isProcessing: false,
      orderPlaced: false
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }

  handleSubmitOrder = (e) => {
    e.preventDefault()
    
    if (this.state.cart.length === 0) {
      alert('Your cart is empty')
      return
    }

    const { firstName, lastName, email, phone, address, city, postalCode } = this.state.formData
    
    if (!firstName || !lastName || !email || !phone || !address || !city || !postalCode) {
      alert('Please fill in all required fields')
      return
    }

    this.setState({ isProcessing: true })

    // Simulate payment processing
    setTimeout(() => {
      this.setState({ isProcessing: false, orderPlaced: true })
      
      // Clear cart after successful order
      if (typeof window !== 'undefined') {
        localStorage.removeItem('shop_cart')
      }
    }, 2000)
  }

  render() {
    const { cart, formData, isProcessing, orderPlaced } = this.state
    
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

    if (orderPlaced) {
      return (
        <Layout location={this.props.location}>
          <Seo title="Order Confirmed" description="Your order has been placed successfully" />
          
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
              <p className="text-lg text-gray-600 mb-8">Thank you for your purchase. Your order has been placed successfully.</p>
              
              <div className="bg-gray-50 rounded-lg p-6 text-left max-w-md mx-auto mb-8">
                <p className="text-sm text-gray-600 mb-2">Order Details:</p>
                <p className="font-semibold text-lg mb-4">Total Items: {totalItems}</p>
                <p className="font-semibold text-xl text-blue-600">Total: HK${totalPrice.toFixed(2)}</p>
              </div>
              
              <p className="text-gray-600 mb-6">A confirmation email has been sent to <strong>{formData.email}</strong></p>
              
              <a
                href="/shop"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Continue Shopping
              </a>
            </div>
          </div>
        </Layout>
      )
    }

    if (cart.length === 0) {
      return (
        <Layout location={this.props.location}>
          <Seo title="Checkout" description="Checkout page" />
          
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
              <a
                href="/shop"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
              >
                Go to Shop
              </a>
            </div>
          </div>
        </Layout>
      )
    }

    return (
      <Layout location={this.props.location}>
        <Seo title="Checkout" description="Complete your purchase" />
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="md:col-span-2">
              <form onSubmit={this.handleSubmitOrder} className="space-y-6">
                
                {/* Billing Information */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-xl font-bold mb-4">Billing Information</h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={this.handleInputChange}
                      className="col-span-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={this.handleInputChange}
                      className="col-span-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={this.handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={this.handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
                    required
                  />
                </div>

                {/* Shipping Address */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                  
                  <input
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={formData.address}
                    onChange={this.handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
                    required
                  />

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={this.handleInputChange}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                    <input
                      type="text"
                      name="postalCode"
                      placeholder="Postal Code"
                      value={formData.postalCode}
                      onChange={this.handleInputChange}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>

                  <select
                    name="country"
                    value={formData.country}
                    onChange={this.handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option>Hong Kong</option>
                    <option>China</option>
                    <option>Taiwan</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Payment Method */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                  
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="credit_card"
                        checked={formData.paymentMethod === 'credit_card'}
                        onChange={this.handleInputChange}
                        className="mr-3"
                      />
                      <span>Credit Card</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank_transfer"
                        checked={formData.paymentMethod === 'bank_transfer'}
                        onChange={this.handleInputChange}
                        className="mr-3"
                      />
                      <span>Bank Transfer</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={this.handleInputChange}
                        className="mr-3"
                      />
                      <span>PayPal</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-semibold transition-colors"
                >
                  {isProcessing ? 'Processing...' : 'Place Order'}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-4">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-300">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} x{item.quantity}</span>
                      <span className="font-semibold">HK${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>HK${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
                    <span>Total</span>
                    <span className="text-blue-600">HK${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default withTranslation()(CheckoutPage)
