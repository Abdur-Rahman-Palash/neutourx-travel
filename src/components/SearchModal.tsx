'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, MapPin, Calendar, Users, Plane, Building2, Package, Map, Car, Ship, ArrowRight } from 'lucide-react'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchType, setSearchType] = useState('all')

  const searchCategories = [
    { id: 'all', label: 'All', icon: Search },
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'hotels', label: 'Hotels', icon: Building2 },
    { id: 'packages', label: 'Packages', icon: Package },
    { id: 'tours', label: 'Tours', icon: Map },
    { id: 'car-rentals', label: 'Car Rentals', icon: Car },
    { id: 'cruises', label: 'Cruises', icon: Ship }
  ]

  const popularSearches = [
    'Dubai flights',
    'Paris hotels',
    'Bali packages',
    'Tokyo tours',
    'New York car rentals',
    'Mediterranean cruises'
  ]

  const recentSearches = [
    'London weekend trip',
    'Beach resorts in Maldives',
    'European train tours',
    'Business hotels in Singapore'
  ]

  const handleSearch = () => {
    console.log('Searching for:', searchQuery, 'in category:', searchType)
    // Implement search functionality
    onClose()
  }

  const handleQuickSearch = (query: string) => {
    setSearchQuery(query)
    console.log('Quick search:', query)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-primary/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">Search</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
            </div>

            {/* Search Input */}
            <div className="p-6">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-cyan" />
                <input
                  type="text"
                  placeholder="Search flights, hotels, packages, tours..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                  autoFocus
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-accent-cyan to-blue-500 text-white rounded-lg font-medium"
                >
                  Search
                </motion.button>
              </div>

              {/* Search Categories */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-300 mb-3">Search in:</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {searchCategories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setSearchType(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                        searchType === category.id
                          ? 'bg-accent-cyan/20 border-accent-cyan text-accent-cyan'
                          : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span className="text-xs font-medium">{category.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Popular Searches */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-300 mb-3">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickSearch(search)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
                    >
                      {search}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-gray-300 mb-3">Recent Searches</p>
                  <div className="space-y-2">
                    {recentSearches.map((search, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleQuickSearch(search)}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <Search className="w-4 h-4 text-gray-400 group-hover:text-accent-cyan transition-colors" />
                          <span className="text-white">{search}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-accent-cyan transition-colors" />
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 bg-white/5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">
                  Press <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Enter</kbd> to search
                </p>
                <button
                  onClick={() => console.log('Clear search history')}
                  className="text-sm text-accent-cyan hover:text-white transition-colors"
                >
                  Clear History
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
