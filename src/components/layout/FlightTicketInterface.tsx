'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Calendar, Users, MapPin, Plane, Building2, Train, Car, Map as MapIcon, Package, Star, Shield, HeadphonesIcon, CreditCard } from 'lucide-react'
import { cn } from '@/lib/utils'
import Hero from './Hero'
import ValueProposition from './ValueProposition'
import FeaturedDestinations from './FeaturedDestinations'
import BundleSection from './BundleSection'
import TopExperiences from './TopExperiences'
import TrustSection from './TrustSection'
import Newsletter from './Newsletter'
import Features from './Features'

interface FlightTicketInterfaceProps {
  activeProduct: string
  className?: string
}

export default function FlightTicketInterface({ activeProduct, className }: FlightTicketInterfaceProps) {
  const router = useRouter()
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    checkIn: '',
    checkOut: '',
    rooms: 1,
    adults: 2,
    children: 0,
    passengers: 2
  })

  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false)
  const [activeTab, setActiveTab] = useState(activeProduct || 'flights')

  const productTabs = [
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'hotels', label: 'Hotels & Homes', icon: Building2 },
    { id: 'trains', label: 'Trains', icon: Train },
    { id: 'cars', label: 'Cars', icon: Car },
    { id: 'attractions', label: 'Attractions & Tours', icon: MapIcon },
    { id: 'packages', label: 'Flight + Hotel', icon: Package }
  ]

  const activeTabConfig = productTabs.find(tab => tab.id === activeTab) || productTabs[0]

  const handleSearch = () => {
    console.log('Searching for:', activeTab, searchData)
    console.log('Search button clicked - current data:', searchData)
    
    // Validate that we have required data
    if (!searchData.from && !searchData.to) {
      console.warn('No from or to destination entered')
      return
    }
    
    // Navigate to relevant page with search parameters
    const searchParams = new URLSearchParams()
    
    // Add search data to URL parameters
    if (searchData.from) {
      searchParams.set('from', searchData.from)
    }
    if (searchData.to) {
      searchParams.set('to', searchData.to)
    }
    if (searchData.checkIn) {
      searchParams.set('checkIn', searchData.checkIn)
    }
    if (searchData.checkOut) {
      searchParams.set('checkOut', searchData.checkOut)
    }
    if (searchData.passengers) {
      searchParams.set('passengers', searchData.passengers.toString())
    }
    if (searchData.rooms) {
      searchParams.set('rooms', searchData.rooms.toString())
    }
    
    // Navigate to the appropriate page with search parameters
    switch (activeTab) {
      case 'hotels':
        console.log('Navigating to hotels with search:', searchParams.toString())
        router.push(`/hotels?${searchParams.toString()}`)
        break
      case 'flights':
        console.log('Navigating to flights with search:', searchParams.toString())
        router.push(`/flights?${searchParams.toString()}`)
        break
      case 'trains':
        console.log('Navigating to trains with search:', searchParams.toString())
        router.push(`/trains?${searchParams.toString()}`)
        break
      case 'cars':
        console.log('Navigating to cars with search:', searchParams.toString())
        router.push(`/cars?${searchParams.toString()}`)
        break
      case 'attractions':
        console.log('Navigating to tours with search:', searchParams.toString())
        router.push(`/tours?${searchParams.toString()}`)
        break
      case 'packages':
        console.log('Navigating to packages with search:', searchParams.toString())
        router.push(`/packages?${searchParams.toString()}`)
        break
      default:
        console.log('Navigating to home with search:', searchParams.toString())
        router.push(`/?${searchParams.toString()}`)
        break
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setSearchData(prev => ({ ...prev, [field]: value }))
  }

  const handlePassengerSelect = (adults: number, children: number, rooms: number, passengers: number) => {
    setSearchData(prev => ({ ...prev, adults, children, rooms, passengers }))
    setShowPassengerDropdown(false)
  }

  return (
    <div className={cn("flex-1 bg-background text-foreground", className)}>
      {/* Hero Section with Search Interface */}
      <section className="relative min-h-[80vh] bg-white overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
              Travel Smarter. <br />
              <span className="text-blue-600">Go Further.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience the world with curated travel experiences and premium booking services.
            </p>
          </motion.div>

          {/* Search Interface */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            {/* Product Tabs */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {productTabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-300 backdrop-blur-sm",
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-accent-cyan to-blue-500 text-white shadow-lg shadow-accent-cyan/25 border border-accent-cyan/50"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
                  )}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Search Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gray-50 border border-gray-200 rounded-3xl p-8 shadow-2xl"
            >
              {/* From and To Fields for All Services */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* From */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-600 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-cyan" />
                    From
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-accent-cyan transition-colors z-10" />
                    <input
                      type="text"
                      placeholder={activeTab === 'hotels' ? 'Current Location' : activeTab === 'attractions' ? 'Starting Point' : 'City or Airport'}
                      value={searchData.from}
                      onChange={(e) => handleInputChange('from', e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-xl py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan/50 transition-all duration-300 font-medium"
                    />
                                      </div>
                </div>

                {/* To */}
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent-cyan" />
                    To
                  </label>
                  <div className="relative group">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-accent-cyan transition-colors" />
                    <input
                      type="text"
                      placeholder={activeTab === 'hotels' ? 'Destination or Hotel Name' : activeTab === 'attractions' ? 'Attraction or City' : 'City or Airport'}
                      value={searchData.to}
                      onChange={(e) => handleInputChange('to', e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-xl py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan/50 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Check-in */}
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent-cyan" />
                    Check-in
                  </label>
                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-accent-cyan transition-colors" />
                    <input
                      type="date"
                      value={searchData.checkIn}
                      onChange={(e) => handleInputChange('checkIn', e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-xl py-4 pl-12 pr-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan/50 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent-cyan" />
                    Check-out
                  </label>
                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-accent-cyan transition-colors" />
                    <input
                      type="date"
                      value={searchData.checkOut}
                      onChange={(e) => handleInputChange('checkOut', e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-xl py-4 pl-12 pr-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan/50 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Rooms & Guests */}
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent-cyan" />
                    Passengers & Rooms
                  </label>
                  <div className="relative">
                    <motion.button
                      onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
                      className="w-full bg-white border border-gray-300 rounded-xl py-4 px-4 text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan/50 transition-all duration-300 flex items-center justify-between"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-gray-700">{searchData.passengers} Passenger{searchData.passengers > 1 ? 's' : ''}, {searchData.rooms} Room{searchData.rooms > 1 ? 's' : ''}</span>
                      <svg className="w-4 h-4 text-gray-400 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {showPassengerDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-50 p-4 min-w-[250px]"
                        >
                          <div className="space-y-3">
                            {/* Quick Selections */}
                            <div className="space-y-2 mb-4">
                              <motion.button
                                onClick={() => handlePassengerSelect(2, 0, 1, 2)}
                                className="w-full py-2 bg-white/5 border border-white/20 rounded-lg text-center text-gray-700 hover:bg-white/10 transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                2 Passengers, 1 Room
                              </motion.button>
                              <motion.button
                                onClick={() => handlePassengerSelect(4, 0, 2, 4)}
                                className="w-full py-2 bg-white/5 border border-white/20 rounded-lg text-center text-gray-700 hover:bg-white/10 transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                4 Passengers, 2 Rooms
                              </motion.button>
                              <motion.button
                                onClick={() => handlePassengerSelect(6, 0, 3, 6)}
                                className="w-full py-2 bg-white/5 border border-white/20 rounded-lg text-center text-gray-700 hover:bg-white/10 transition-all duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                6 Passengers, 3 Rooms
                              </motion.button>
                            </div>

                            {/* Manual Passenger Input */}
                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                                <input
                                  type="number"
                                  min="1"
                                  max="9"
                                  value={searchData.passengers}
                                  onChange={(e) => setSearchData({ ...searchData, passengers: parseInt(e.target.value) || 1 })}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-accent-cyan/50"
                                />
                              </div>
                              
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Rooms</label>
                                <input
                                  type="number"
                                  min="1"
                                  max="10"
                                  value={searchData.rooms}
                                  onChange={(e) => setSearchData({ ...searchData, rooms: parseInt(e.target.value) || 1 })}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-accent-cyan/50"
                                />
                              </div>
                            </div>

                            {/* Done Button */}
                            <motion.button
                              onClick={() => setShowPassengerDropdown(false)}
                              className="w-full mt-4 py-2 bg-accent-cyan text-white rounded-lg font-medium hover:bg-accent-cyan/600 transition-colors"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Done
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Search Button and Trust Badges */}
              <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-6">
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 order-2 md:order-1">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Shield className="w-5 h-5 text-accent-cyan" />
                    <span>Secure payment</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <HeadphonesIcon className="w-5 h-5 text-accent-cyan" />
                    <span>24/7 support</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <CreditCard className="w-5 h-5 text-accent-cyan" />
                    <span>Best price guarantee</span>
                  </motion.div>
                </div>
                
                <motion.button
                  onClick={handleSearch}
                  className="order-1 md:order-2 px-12 py-4 bg-gradient-to-r from-accent-cyan via-blue-500 to-accent-cyan bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold text-lg rounded-xl transition-all duration-500 flex items-center gap-3 shadow-lg shadow-accent-cyan/25 hover:shadow-accent-cyan/40 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search className="w-6 h-6" />
                  {activeTab === 'flights' && 'Search Flights'}
                  {activeTab === 'hotels' && 'Search Hotels'}
                  {activeTab === 'trains' && 'Search Trains'}
                  {activeTab === 'cars' && 'Search Cars'}
                  {activeTab === 'attractions' && 'Search Tours'}
                  {activeTab === 'packages' && 'Search Packages'}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* AI Genie Floating Button */}
        <motion.div
          className="absolute bottom-8 right-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="p-4 bg-gradient-to-r from-accent-gold to-accent-cyan rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Star className="w-6 h-6 text-white" />
          </motion.button>
        </motion.div>
      </section>

      {/* Other Sections */}
      <section className="bg-background">
        <ValueProposition />
        <FeaturedDestinations />
        <BundleSection />
        <TopExperiences />
        <Features />
        <TrustSection />
        <Newsletter />
      </section>
    </div>
  )
}
