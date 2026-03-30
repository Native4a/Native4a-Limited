import React from 'react'

const ShoppingCart = ({ items = [], onRemoveItem, onUpdateQuantity }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Your shopping cart is empty</p>
      </div>
    )
  }

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart ({totalItems} items)</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-3 px-4">Product</th>
              <th className="text-center py-3 px-4">Price</th>
              <th className="text-center py-3 px-4">Quantity</th>
              <th className="text-center py-3 px-4">Total</th>
              <th className="text-center py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">HK${item.price.toFixed(2)}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="px-2 py-1 border border-gray-300 rounded disabled:opacity-50"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value) || 1)}
                      className="w-12 text-center border border-gray-300 rounded py-1"
                      min="1"
                    />
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 border border-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-4 px-4 text-center font-semibold">HK${(item.price * item.quantity).toFixed(2)}</td>
                <td className="py-4 px-4 text-center">
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-8 pt-6 border-t-2 border-gray-300">
        <div className="w-full md:w-96">
          <div className="space-y-3">
            <div className="flex justify-between text-lg">
              <span>Subtotal:</span>
              <span>HK${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-2xl font-bold border-t pt-3">
              <span>Total:</span>
              <span className="text-blue-600">HK${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
