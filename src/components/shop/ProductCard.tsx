import React from 'react'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description?: string
}

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden bg-gray-100 h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</p>
        <h3 className="text-lg font-semibold mt-2 text-gray-900 line-clamp-2">{product.name}</h3>
        
        {product.description && (
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
        )}
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-gray-900">HK${product.price}</span>
          <button
            onClick={() => onAddToCart?.(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
