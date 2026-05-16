'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, Plus, Minus, Check } from 'lucide-react';
import { useState } from 'react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Flight: New York to Paris',
      price: 450,
      quantity: 1,
      image: '✈️',
      details: 'Roundtrip - May 20-27',
    },
    {
      id: 2,
      title: 'Beachfront Resort - Maldives',
      price: 450,
      quantity: 3,
      image: '🏝️',
      details: '3 nights at 5-star resort',
    },
  ]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20 pb-12">
      {/* Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Cart
          </h1>
          <p className="text-xl text-gray-600">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} ready to book
          </p>
        </motion.div>
      </motion.section>

      {/* Cart Content */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row gap-4 p-6">
                      {/* Image */}
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                        {item.image}
                      </div>

                      {/* Details */}
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">{item.details}</p>
                        <p className="text-2xl font-bold text-blue-600">
                          ${item.price}
                        </p>
                      </div>

                      {/* Quantity and Remove */}
                      <div className="flex flex-col justify-between items-end">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleRemove(item.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </motion.button>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-8 h-fit"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax (10%)</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-3xl font-bold text-blue-600">
                  ${total.toFixed(2)}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mb-3"
              >
                <Check className="w-5 h-5" />
                Proceed to Checkout
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </motion.button>

              {/* Info Box */}
              <div className="mt-6 bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  ✓ All prices include taxes and fees
                  <br />
                  ✓ Free cancellation up to 24 hours
                  <br />✓ 24/7 customer support
                </p>
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            variants={itemVariants}
            className="text-center py-16 bg-white rounded-2xl shadow-lg"
          >
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Add flights, hotels, packages, and experiences to your cart to get started
            </p>
            <motion.a
              href="/flights"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all"
            >
              Start Booking
            </motion.a>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
}
