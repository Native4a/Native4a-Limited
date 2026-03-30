import React, { useState } from 'react'
import ProductCard from './ProductCard'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description?: string
}

interface ProductGridProps {
  products: Product[]
  onAddToCart?: (product: Product) => void
  title?: string
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, onAddToCart, title }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(products.map(p => p.category)))
  
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products

  return (
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h2>
            <div className="h-1 w-16 bg-blue-600"></div>
          </div>
        )}

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
              }`}
            >
              All Products
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No products found in this category</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductGrid
