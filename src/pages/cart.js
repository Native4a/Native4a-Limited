import React from 'react'
import { withTranslation } from 'react-i18next'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ShoppingCart from '../components/shop/ShoppingCart'

class CartPage extends React.Component {
  constructor(props) {
    super(props)
    
    // Initialize cart from localStorage
    const savedCart = typeof window !== 'undefined' ? localStorage.getItem('shop_cart') : null
    const cart = savedCart ? JSON.parse(savedCart) : []
    
    this.state = {
      cart: cart
    }
  }

  handleRemoveItem = (productId) => {
    this.setState(
      (prevState) => ({
        cart: prevState.cart.filter((item) => item.id !== productId)
      }),
      () => this.saveCart()
    )
  }

  handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      this.handleRemoveItem(productId)
      return
    }

    this.setState(
      (prevState) => ({
        cart: prevState.cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      }),
      () => this.saveCart()
    )
  }

  saveCart = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('shop_cart', JSON.stringify(this.state.cart))
    }
  }

  handleProceedToCheckout = () => {
    if (this.state.cart.length === 0) {
      alert('Your cart is empty')
      return
    }
    // Navigate to checkout
    window.location.href = '/checkout'
  }

  render() {
    const { cart } = this.state

    return (
      <Layout location={this.props.location}>
        <Seo
          title="Shopping Cart"
          description="View your shopping cart"
        />

        <div className="max-w-7xl mx-auto px-4 py-12">
          {cart.length > 0 ? (
            <div>
              <ShoppingCart
                items={cart}
                onRemoveItem={this.handleRemoveItem}
                onUpdateQuantity={this.handleUpdateQuantity}
              />
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => window.history.back()}
                  className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
                >
                  Continue Shopping
                </button>
                <button
                  onClick={this.handleProceedToCheckout}
                  className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">Start shopping to add items to your cart</p>
              <a
                href="/shop"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Go to Shop
              </a>
            </div>
          )}
        </div>
      </Layout>
    )
  }
}

export default withTranslation()(CartPage)
