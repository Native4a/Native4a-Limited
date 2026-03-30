import React, { useState } from 'react'
import { withTranslation } from 'react-i18next'

import Layout from '../components/layout'
import Seo from '../components/seo'
import ProductGrid from '../components/shop/ProductGrid'

// Sample product data
const SAMPLE_PRODUCTS = [
  {
    id: '1',
    name: 'SEO Content Template Pack',
    price: 299,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Digital Products',
    description: 'Complete SEO content templates for blog posts'
  },
  {
    id: '2',
    name: 'Social Media Marketing Guide',
    price: 199,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Guides',
    description: 'Step-by-step guide to social media success'
  },
  {
    id: '3',
    name: 'Video Production Kit',
    price: 399,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Digital Products',
    description: 'Professional video production templates'
  },
  {
    id: '4',
    name: 'Web Design Checklist',
    price: 149,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Guides',
    description: 'Essential checklist for modern web design'
  },
  {
    id: '5',
    name: 'Email Marketing Templates',
    price: 179,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Digital Products',
    description: 'Professional email templates'
  },
  {
    id: '6',
    name: 'Brand Strategy Workbook',
    price: 249,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Guides',
    description: 'Build your brand strategy from scratch'
  },
  {
    id: '7',
    name: 'Analytics Dashboard Template',
    price: 329,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Digital Products',
    description: 'Track your marketing metrics effectively'
  },
  {
    id: '8',
    name: 'Copywriting Masterclass',
    price: 449,
    image: '/placeholder.svg?height=200&width=200',
    category: 'Guides',
    description: 'Learn to write compelling copy that converts'
  }
]

class Shop extends React.Component {
  constructor(props) {
    super(props)
    // Initialize cart from localStorage
    const savedCart = typeof window !== 'undefined' ? localStorage.getItem('shop_cart') : null
    const cart = savedCart ? JSON.parse(savedCart) : []
    
    this.state = {
      cart: cart,
      showCart: false
    }
  }

  handleAddToCart = (product) => {
    const { cart } = this.state
    const existingItem = cart.find((item) => item.id === product.id)

    let updatedCart
    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }]
    }
    
    this.setState({ cart: updatedCart }, () => this.saveCart())
  }

  saveCart = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('shop_cart', JSON.stringify(this.state.cart))
    }
  }

  handleNavigateToCart = () => {
    window.location.href = '/cart'
  }

  render() {
    const { t } = this.props
    const { cart } = this.state

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
      <Layout location={this.props.location}>
        <Seo
          title="Shop - Digital Marketing Resources"
          description="Browse our collection of digital marketing templates, guides and tools"
          ogUrl="https://nativeaaaa.com.hk/shop/"
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Shop</h1>
            <p className="text-xl text-blue-100">Premium digital marketing resources and tools</p>
          </div>
        </section>

        {/* Products Section */}
        <ProductGrid
          products={SAMPLE_PRODUCTS}
          onAddToCart={this.handleAddToCart}
          title="Featured Products"
        />

        {/* Shopping Cart Preview */}
        {totalItems > 0 && (
          <section className="bg-white border-t border-gray-200 py-8 px-4 sticky bottom-0 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  {totalItems} item{totalItems !== 1 ? 's' : ''} in cart
                </p>
                <p className="text-2xl font-bold text-blue-600">HK${totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={this.handleNavigateToCart}
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  View Cart
                </button>
                <button
                  onClick={this.handleNavigateToCart}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                >
                  Checkout
                </button>
              </div>
            </div>
          </section>
        )}
      </Layout>
    )
  }
}

export default withTranslation()(Shop)
