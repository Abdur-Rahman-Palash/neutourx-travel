'use client';

import { motion } from 'framer-motion';
import { Heart, Trash2, Share2, BookmarkPlus } from 'lucide-react';
import { useState } from 'react';

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      title: 'Luxury Grand Hotel - Paris',
      type: 'Hotel',
      price: '$320/night',
      image: '🏨',
      rating: 4.8,
      description: 'Experience luxury in the heart of Paris',
      addedDate: '2 days ago',
    },
    {
      id: 2,
      title: 'Paris Romantic Escape Package',
      type: 'Package',
      price: '$1,299',
      image: '📦',
      rating: 4.9,
      description: '5-day romantic getaway in Paris',
      addedDate: '1 week ago',
    },
    {
      id: 3,
      title: 'Private Yacht Cruise',
      type: 'Experience',
      price: '$899',
      image: '⛵',
      rating: 4.9,
      description: 'Luxury sailing in the Mediterranean',
      addedDate: '3 days ago',
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
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

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
            Your Wishlist
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </motion.div>
      </motion.section>

      {/* Wishlist Items */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {wishlist.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/4 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-8 text-7xl">
                    {item.image}
                  </div>

                  {/* Content */}
                  <div className="flex-grow p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                          {item.type}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <p className="text-sm text-gray-500">Added {item.addedDate}</p>
                      </div>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                          aria-label="Remove from wishlist"
                          onClick={() => handleRemove(item.id)}
                        >
                          <Heart className="w-5 h-5 fill-current" />
                        </motion.button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">From</p>
                        <p className="text-3xl font-bold text-blue-600">{item.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-yellow-500 font-bold">★ {item.rating}</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                        >
                          <Share2 className="w-4 h-4" />
                          Share
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:shadow-lg transition-all"
                        >
                          <BookmarkPlus className="w-4 h-4" />
                          Book Now
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            variants={itemVariants}
            className="text-center py-16 bg-white rounded-2xl shadow-lg"
          >
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Your wishlist is empty
            </h2>
            <p className="text-gray-600 mb-6">
              Add flights, hotels, and experiences to your wishlist to save them for later
            </p>
            <motion.a
              href="/flights"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all"
            >
              Explore Now
            </motion.a>
          </motion.div>
        )}
      </motion.section>

      {/* Quick Actions */}
      {wishlist.length > 0 && (
        <motion.section
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to book one of these?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Save time and complete your reservation today
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Book Selected Items
            </motion.button>
          </motion.div>
        </motion.section>
      )}
    </div>
  );
}
