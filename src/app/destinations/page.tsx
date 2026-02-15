'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, Star, Calendar, Filter, ArrowRight, Heart, Globe } from 'lucide-react'

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 5000])

  const destinations = [
    {
      id: 1,
      name: 'Dubai',
      country: 'United Arab Emirates',
      image: 'https://images.unsplash.com/photo-1512453979798-5d8d8ae3da9?q=80&w=400&auto=format&fit=crop',
      rating: 4.8,
      reviews: 2847,
      price: 899,
      description: 'Luxury shopping, stunning architecture, desert adventures',
      highlights: ['Burj Khalifa', 'Dubai Mall', 'Desert Safari'],
      region: 'middle-east'
    },
    {
      id: 2,
      name: 'Paris',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?q=80&w=400&auto=format&fit=crop',
      rating: 4.9,
      reviews: 5234,
      price: 750,
      description: 'City of lights, romance, art, and exquisite cuisine',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Champs-Élysées'],
      region: 'europe'
    },
    {
      id: 3,
      name: 'Tokyo',
      country: 'Japan',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=400&auto=format&fit=crop',
      rating: 4.7,
      reviews: 3921,
      price: 1200,
      description: 'Modern technology meets traditional culture',
      highlights: ['Mount Fuji', 'Shibuya Crossing', 'Temples'],
      region: 'asia'
    },
    {
      id: 4,
      name: 'New York',
      country: 'United States',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d8ae3da9?q=80&w=400&auto=format&fit=crop',
      rating: 4.6,
      reviews: 4156,
      price: 950,
      description: 'The city that never sleeps - endless entertainment',
      highlights: ['Times Square', 'Central Park', 'Statue of Liberty'],
      region: 'north-america'
    },
    {
      id: 5,
      name: 'Bali',
      country: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e7631988?q=80&w=400&auto=format&fit=crop',
      rating: 4.8,
      reviews: 2789,
      price: 650,
      description: 'Tropical paradise with stunning beaches and culture',
      highlights: ['Beaches', 'Rice Terraces', 'Temples'],
      region: 'asia'
    },
    {
      id: 6,
      name: 'London',
      country: 'United Kingdom',
      image: 'https://images.unsplash.com/photo-1513635269878-3e9db5eb8c1d?q=80&w=400&auto=format&fit=crop',
      rating: 4.7,
      reviews: 3624,
      price: 850,
      description: 'History, royalty, and modern British culture',
      highlights: ['Big Ben', 'Tower Bridge', 'British Museum'],
      region: 'europe'
    }
  ]

  const regions = [
    { value: 'all', label: 'All Regions' },
    { value: 'europe', label: 'Europe' },
    { value: 'asia', label: 'Asia' },
    { value: 'north-america', label: 'North America' },
    { value: 'middle-east', label: 'Middle East' },
    { value: 'south-america', label: 'South America' },
    { value: 'africa', label: 'Africa' },
    { value: 'oceania', label: 'Oceania' }
  ]

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.country.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRegion = selectedRegion === 'all' || dest.region === selectedRegion
    const matchesPrice = dest.price >= priceRange[0] && dest.price <= priceRange[1]
    return matchesSearch && matchesRegion && matchesPrice
  })

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
              Discover Amazing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-gold">
                Destinations
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore breathtaking locations around the world and create unforgettable memories
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Destination</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-cyan" />
                  <input
                    type="text"
                    placeholder="City or Country"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Region Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Region</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-cyan" />
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                  >
                    {regions.map(region => (
                      <option key={region.value} value={region.value} className="bg-primary">
                        {region.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Max Price</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-cyan font-bold">$</span>
                  <input
                    type="number"
                    placeholder="Max price"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-accent-cyan to-blue-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search Destinations
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Destinations
            </h2>
            <p className="text-gray-300 text-lg">
              {filteredDestinations.length} destinations found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden cursor-pointer hover:bg-white/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-video relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Heart Icon */}
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30"
                  >
                    <Heart className="w-4 h-4 text-white" />
                  </motion.button>

                  {/* Price Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-accent-cyan text-primary px-3 py-1 rounded-lg font-bold">
                      From ${destination.price}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{destination.name}</h3>
                      <p className="text-accent-cyan text-sm mb-2">{destination.country}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(destination.rating) ? 'text-accent-gold fill-current' : 'text-gray-400'}`} />
                          ))}
                          <span className="text-white text-sm ml-2">{destination.rating}</span>
                        </div>
                        <span className="text-gray-400 text-sm">({destination.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">{destination.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-medium text-accent-gold">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white">
                          {highlight}
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
                    Explore {destination.name}
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
