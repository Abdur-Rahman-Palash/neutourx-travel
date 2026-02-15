'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Star, Clock, ArrowRight, Plus, Filter, Search, Heart, Plane, Hotel, Camera, Package } from 'lucide-react'

export default function TripsPage() {
  const [activeTab, setActiveTab] = useState('upcoming')
  const [searchQuery, setSearchQuery] = useState('')

  const upcomingTrips = [
    {
      id: 1,
      title: 'Dubai Luxury Escape',
      destination: 'Dubai, UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5d8d8ae3da9?q=80&w=400&auto=format&fit=crop',
      startDate: '2024-03-15',
      endDate: '2024-03-20',
      status: 'confirmed',
      travelers: 2,
      price: 2499,
      type: 'package',
      highlights: ['5-Star Hotel', 'City Tour', 'Desert Safari'],
      bookingReference: 'NEU2024031501'
    },
    {
      id: 2,
      title: 'Paris Romantic Getaway',
      destination: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?q=80&w=400&auto=format&fit=crop',
      startDate: '2024-04-10',
      endDate: '2024-04-15',
      status: 'confirmed',
      travelers: 2,
      price: 1899,
      type: 'package',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine Cruise'],
      bookingReference: 'NEU2024041002'
    },
    {
      id: 3,
      title: 'Tokyo Adventure',
      destination: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=400&auto=format&fit=crop',
      startDate: '2024-05-20',
      endDate: '2024-05-27',
      status: 'pending',
      travelers: 3,
      price: 3200,
      type: 'custom',
      highlights: ['Mount Fuji', 'Temples', 'Modern Tokyo'],
      bookingReference: 'NEU2024052003'
    }
  ]

  const pastTrips = [
    {
      id: 4,
      title: 'New York City Break',
      destination: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d8ae3da9?q=80&w=400&auto=format&fit=crop',
      startDate: '2024-01-05',
      endDate: '2024-01-10',
      status: 'completed',
      travelers: 2,
      price: 1899,
      type: 'package',
      highlights: ['Times Square', 'Central Park', 'Broadway'],
      bookingReference: 'NEU2024010504'
    },
    {
      id: 5,
      title: 'Bali Beach Retreat',
      destination: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e7631988?q=80&w=400&auto=format&fit=crop',
      startDate: '2023-12-15',
      endDate: '2023-12-22',
      status: 'completed',
      travelers: 4,
      price: 2600,
      type: 'package',
      highlights: ['Beach Resort', 'Rice Terraces', 'Temples'],
      bookingReference: 'NEU2023121505'
    }
  ]

  const filteredTrips = (activeTab === 'upcoming' ? upcomingTrips : pastTrips).filter(trip => 
    trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trip.destination.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'text-green-400 bg-green-400/20'
      case 'pending': return 'text-yellow-400 bg-yellow-400/20'
      case 'completed': return 'text-gray-400 bg-gray-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const calculateDays = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const diffTime = Math.abs(end.getTime() - start.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
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
              Your Travel
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-gold">
                Adventures
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Manage your upcoming trips and relive your past adventures
            </p>
          </motion.div>

          {/* Search and Actions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-cyan" />
                <input
                  type="text"
                  placeholder="Search your trips..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                />
              </div>

              {/* New Trip Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-cyan to-blue-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <Plus className="w-5 h-5" />
                Plan New Trip
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trips Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-1 flex gap-1">
              <motion.button
                onClick={() => setActiveTab('upcoming')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'upcoming' 
                    ? 'bg-gradient-to-r from-accent-cyan to-blue-500 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Upcoming ({upcomingTrips.length})
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('past')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'past' 
                    ? 'bg-gradient-to-r from-accent-cyan to-blue-500 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Past Trips ({pastTrips.length})
              </motion.button>
            </div>
          </motion.div>

          {/* Trips Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden cursor-pointer hover:bg-white/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-video relative">
                  <img 
                    src={trip.image} 
                    alt={trip.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-bold ${getStatusColor(trip.status)}`}>
                      {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                    </span>
                  </div>

                  {/* Heart Icon */}
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30"
                  >
                    <Heart className="w-4 h-4 text-white" />
                  </motion.button>

                  {/* Trip Type Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl px-3 py-1 rounded-lg">
                      {trip.type === 'package' ? <Package className="w-4 h-4 text-white" /> : <Camera className="w-4 h-4 text-white" />}
                      <span className="text-white text-xs font-medium capitalize">{trip.type}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{trip.title}</h3>
                      <p className="text-accent-cyan text-sm mb-2">{trip.destination}</p>
                      <p className="text-gray-400 text-xs mb-3">Booking: {trip.bookingReference}</p>
                    </div>
                  </div>

                  {/* Date and Duration */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-4 h-4 text-accent-cyan" />
                      <span className="text-sm">{formatDate(trip.startDate)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4 text-accent-cyan" />
                      <span className="text-sm">{calculateDays(trip.startDate, trip.endDate)} days</span>
                    </div>
                  </div>

                  {/* Travelers and Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Users className="w-4 h-4 text-accent-cyan" />
                      <span className="text-sm">{trip.travelers} travelers</span>
                    </div>
                    <div className="text-xl font-bold text-white">
                      ${trip.price}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {trip.highlights.slice(0, 2).map((highlight, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white">
                          {highlight}
                        </span>
                      ))}
                      {trip.highlights.length > 2 && (
                        <span className="px-2 py-1 bg-white/10 rounded-lg text-xs text-white">
                          +{trip.highlights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-accent-cyan to-blue-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {activeTab === 'upcoming' ? 'View Details' : 'Relive Memories'}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredTrips.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-12 h-12 text-accent-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No trips found</h3>
              <p className="text-gray-300 mb-8">
                {searchQuery ? 'Try adjusting your search terms' : 'Start planning your next adventure!'}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-cyan to-blue-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 mx-auto"
              >
                <Plus className="w-5 h-5" />
                Plan Your First Trip
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
