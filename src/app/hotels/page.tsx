'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Building2, Calendar, Users, MapPin, Star, Filter, ArrowRight } from 'lucide-react'

export default function HotelsPage() {
  const [destination, setDestination] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)
  const [roomType, setRoomType] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 500])

  const popularHotels = [
    { name: 'Burj Al Arab', city: 'Dubai', rating: 4.9, price: 1200, image: 'https://images.unsplash.com/photo-1566076968853-a3f7727f7f?q=80&w=400&auto=format&fit=crop' },
    { name: 'The Plaza', city: 'New York', rating: 4.8, price: 450, image: 'https://images.unsplash.com/photo-1564501049419-9880c0f326?q=80&w=400&auto=format&fit=crop' },
    { name: 'Ritz Paris', city: 'Paris', rating: 4.9, price: 680, image: 'https://images.unsplash.com/photo-1566076968853-a3f7727f7f?q=80&w=400&auto=format&fit=crop' },
    { name: 'Marina Bay Sands', city: 'Singapore', rating: 4.7, price: 380, image: 'https://images.unsplash.com/photo-1564501049419-9880c0f326?q=80&w=400&auto=format&fit=crop' },
    { name: 'Taj Mahal Palace', city: 'Mumbai', rating: 4.8, price: 290, image: 'https://images.unsplash.com/photo-1564501049419-9880c0f326?q=80&w=400&auto=format&fit=crop' }
  ]

  const searchHotels = () => {
    console.log('Searching hotels with:', {
      destination, checkIn, checkOut, guests, roomType, priceRange
    })
    // Implement hotel search logic here
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
              Comfortable Stays
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-gold">
                Worldwide
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find and book hotels, resorts, and accommodations in destinations around the world
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
                    placeholder="City, Hotel, or Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Check In */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Check In</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-cyan" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Check Out */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Check Out</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-cyan" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-cyan" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4+ Guests</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Room Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Room Type</label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                >
                  <option value="all">All Types</option>
                  <option value="standard">Standard Room</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="suite">Suite</option>
                  <option value="villa">Villa</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="flex-1"
                  />
                  <span className="text-white font-medium">${priceRange[0]} - ${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={searchHotels}
              className="w-full py-4 bg-gradient-to-r from-accent-cyan to-blue-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search Hotels
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Popular Hotels */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Hotels
            </h2>
            <p className="text-gray-300 text-lg">
              Discover our handpicked selection of luxury hotels and resorts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularHotels.map((hotel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden cursor-pointer hover:bg-white/20 transition-all duration-300"
              >
                <div className="aspect-video relative">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{hotel.name}</h3>
                  <p className="text-accent-cyan text-sm mb-4">{hotel.city}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(hotel.rating) ? 'text-accent-gold fill-current' : 'text-gray-400'}`} />
                      ))}
                      <span className="text-white text-sm ml-2">{hotel.rating}</span>
                    </div>
                    <div className="text-2xl font-black text-white">
                      ${hotel.price}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">per night</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
