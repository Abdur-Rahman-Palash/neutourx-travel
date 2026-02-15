'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Package, Calendar, Users, MapPin, Star, Filter, ArrowRight, Clock, Plane, Hotel } from 'lucide-react'

export default function PackagesPage() {
  const [destination, setDestination] = useState('')
  const [duration, setDuration] = useState('7')
  const [travelers, setTravelers] = useState(2)
  const [packageType, setPackageType] = useState('all')

  const popularPackages = [
    {
      id: 1,
      name: 'Dubai Luxury Escape',
      destination: 'Dubai, UAE',
      duration: '5 Days / 4 Nights',
      price: 2499,
      originalPrice: 3299,
      discount: 24,
      includes: ['Flights', '5-Star Hotel', 'City Tour', 'Airport Transfer'],
      image: 'https://images.unsplash.com/photo-1512453979798-5d8d8ae3da9?q=80&w=400&auto=format&fit=crop',
      rating: 4.9,
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'European Adventure',
      destination: 'Paris, Rome & Barcelona',
      duration: '10 Days / 9 Nights',
      price: 3899,
      originalPrice: 4599,
      discount: 15,
      includes: ['Flights', '4-Star Hotels', 'Guided Tours', 'Breakfast'],
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c?q=80&w=400&auto=format&fit=crop',
      rating: 4.8,
      badge: 'Popular'
    },
    {
      id: 3,
      name: 'Tropical Paradise',
      destination: 'Maldives & Sri Lanka',
      duration: '7 Days / 6 Nights',
      price: 3199,
      originalPrice: 3799,
      discount: 16,
      includes: ['Flights', 'Beach Resort', 'Water Sports', 'All Meals'],
      image: 'https://images.unsplash.com/photo-1514282401047-79d13b5e26?q=80&w=400&auto=format&fit=crop',
      rating: 4.9,
      badge: 'Luxury'
    },
    {
      id: 4,
      name: 'Asian Discovery',
      destination: 'Tokyo, Kyoto & Seoul',
      duration: '12 Days / 11 Nights',
      price: 4299,
      originalPrice: 5299,
      discount: 19,
      includes: ['Flights', '3-Star Hotels', 'Rail Pass', 'City Tours'],
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c?q=80&w=400&auto=format&fit=crop',
      rating: 4.7,
      badge: 'Adventure'
    },
    {
      id: 5,
      name: 'American Dream',
      destination: 'New York, Washington & Miami',
      duration: '8 Days / 7 Nights',
      price: 2799,
      originalPrice: 3299,
      discount: 15,
      includes: ['Flights', '4-Star Hotels', 'City Tours', 'Breakfast'],
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d8ae3da9?q=80&w=400&auto=format&fit=crop',
      rating: 4.6,
      badge: 'Family Friendly'
    },
    {
      id: 6,
      name: 'Safari Adventure',
      destination: 'Kenya & Tanzania',
      duration: '9 Days / 8 Nights',
      price: 4599,
      originalPrice: 5599,
      discount: 18,
      includes: ['Flights', 'Safari Lodges', 'Game Drives', 'All Meals'],
      image: 'https://images.unsplash.com/photo-1516426122078-c23e7631988?q=80&w=400&auto=format&fit=crop',
      rating: 4.8,
      badge: 'Wildlife'
    }
  ]

  const searchPackages = () => {
    console.log('Searching packages with:', {
      destination, duration, travelers, packageType
    })
    // Implement package search logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary/95">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, #00D1FF 0%, transparent 50%), 
                           radial-gradient(circle at 70% 70%, #00D1FF 0%, transparent 50%)`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
              All-in-One
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-gold">
                Deals
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete travel packages with flights, hotels, tours, and more - all in one booking
            </p>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-cyan" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-cyan" />
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                  >
                    <option value="3">3-5 Days</option>
                    <option value="7">5-7 Days</option>
                    <option value="10">7-10 Days</option>
                    <option value="14">10+ Days</option>
                  </select>
                </div>
              </div>

              {/* Travelers */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Travelers</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-cyan" />
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                  >
                    <option value={1}>1 Traveler</option>
                    <option value={2}>2 Travelers</option>
                    <option value={3}>3-4 Travelers</option>
                    <option value={5}>5+ Travelers</option>
                  </select>
                </div>
              </div>

              {/* Package Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Package Type</label>
                <select
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                >
                  <option value="all">All Packages</option>
                  <option value="luxury">Luxury</option>
                  <option value="adventure">Adventure</option>
                  <option value="family">Family</option>
                  <option value="romantic">Romantic</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={searchPackages}
              className="w-full py-4 bg-gradient-to-r from-accent-cyan to-blue-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search Packages
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Travel Packages
            </h2>
            <p className="text-gray-300 text-lg">
              Handpicked packages with the best value and experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden cursor-pointer hover:bg-white/20 transition-all duration-300"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-accent-gold text-primary text-xs font-bold rounded-full">
                    {pkg.badge}
                  </span>
                </div>

                {/* Image */}
                <div className="aspect-video relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                      <p className="text-accent-cyan text-sm mb-2">{pkg.destination}</p>
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <Clock className="w-4 h-4" />
                        {pkg.duration}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(pkg.rating) ? 'text-accent-gold fill-current' : 'text-gray-400'}`} />
                        ))}
                        <span className="text-white text-sm ml-2">{pkg.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-gray-400 line-through text-lg">${pkg.originalPrice}</span>
                        <span className="text-3xl font-black text-white">${pkg.price}</span>
                      </div>
                      <p className="text-gray-400 text-sm">per person</p>
                    </div>
                    <div className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
                      Save {pkg.discount}%
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-300">Package Includes:</p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.includes.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 rounded-lg text-xs text-white">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-accent-cyan to-blue-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
