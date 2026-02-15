'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, X, Mail, Phone, MapPin, Calendar, Settings, LogOut, Heart, Star, Shield, CreditCard, Package, Plane, ArrowRight, Check, Edit2, Bell, Globe, CreditCard as PaymentIcon, Wrench, Layout } from 'lucide-react'

interface AccountModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AccountModal({ isOpen, onClose }: AccountModalProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'bookings' | 'settings'>('profile')

  // Mock user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    memberSince: 'January 2024',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
    tier: 'Gold',
    points: 2450
  }

  const bookings = [
    {
      id: 'BK001',
      title: 'Dubai Luxury Escape',
      date: '2024-03-15',
      status: 'confirmed',
      price: 2499,
      type: 'package'
    },
    {
      id: 'BK002',
      title: 'Paris Romantic Getaway',
      date: '2024-04-10',
      status: 'confirmed',
      price: 1899,
      type: 'package'
    },
    {
      id: 'BK003',
      title: 'New York City Break',
      date: '2024-01-05',
      status: 'completed',
      price: 1899,
      type: 'package'
    }
  ]

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'text-green-400 bg-green-400/20'
      case 'completed': return 'text-gray-400 bg-gray-400/20'
      case 'cancelled': return 'text-red-400 bg-red-400/20'
      default: return 'text-gray-400 bg-gray-400/20'
    }
  }

  const handleLogout = () => {
    console.log('Logging out...')
    onClose()
    // Implement logout logic
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
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 right-4 w-full max-w-md bg-primary/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50 max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">My Account</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
            </div>

            {/* User Profile Summary */}
            <div className="p-6 bg-gradient-to-r from-accent-cyan/10 to-blue-500/10 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={userData.avatar} 
                    alt={userData.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent-cyan"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent-gold rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{userData.name}</h3>
                  <p className="text-sm text-gray-300">{userData.email}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-1 bg-accent-gold/20 text-accent-gold text-xs font-bold rounded-full">
                      {userData.tier} Member
                    </span>
                    <span className="text-xs text-gray-400">{userData.points} points</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/10">
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'profile'
                    ? 'bg-accent-cyan/20 text-accent-cyan'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab('bookings')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'bookings'
                    ? 'bg-accent-cyan/20 text-accent-cyan'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Bookings
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === 'settings'
                    ? 'bg-accent-cyan/20 text-accent-cyan'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Settings
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[50vh]">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-accent-cyan" />
                      <div>
                        <p className="text-xs text-gray-400">Email</p>
                        <p className="text-white">{userData.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-accent-cyan" />
                      <div>
                        <p className="text-xs text-gray-400">Phone</p>
                        <p className="text-white">{userData.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-accent-cyan" />
                      <div>
                        <p className="text-xs text-gray-400">Location</p>
                        <p className="text-white">{userData.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-accent-cyan" />
                      <div>
                        <p className="text-xs text-gray-400">Member Since</p>
                        <p className="text-white">{userData.memberSince}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-sm font-medium text-gray-300 mb-3">Quick Actions</h4>
                    <div className="space-y-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors"
                        onClick={() => { window.location.href = '/payment-gateway'; onClose(); }}
                      >
                        <PaymentIcon className="w-4 h-4 text-accent-cyan" />
                        <span className="text-white">Payment Gateway</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors"
                        onClick={() => { window.location.href = '/builder'; onClose(); }}
                      >
                        <Wrench className="w-4 h-4 text-accent-cyan" />
                        <span className="text-white">Trip Builder</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors"
                        onClick={() => { window.location.href = '/dashboard'; onClose(); }}
                      >
                        <Layout className="w-4 h-4 text-accent-cyan" />
                        <span className="text-white">Dashboard</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors"
                      >
                        <Heart className="w-4 h-4 text-accent-cyan" />
                        <span className="text-white">Saved Destinations</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors"
                      >
                        <CreditCard className="w-4 h-4 text-accent-cyan" />
                        <span className="text-white">Payment Methods</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors"
                      >
                        <Star className="w-4 h-4 text-accent-cyan" />
                        <span className="text-white">Rewards Program</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 ml-auto" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}

              {/* Bookings Tab */}
              {activeTab === 'bookings' && (
                <div className="p-6">
                  <div className="space-y-3">
                    {bookings.map((booking) => (
                      <motion.div
                        key={booking.id}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-medium text-white">{booking.title}</h4>
                            <p className="text-xs text-gray-400">Booking ID: {booking.id}</p>
                          </div>
                          <span className={`px-2 py-1 text-xs font-bold rounded-full ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-300">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {booking.date}
                            </span>
                            <span>${booking.price}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-accent-cyan" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 p-3 bg-accent-cyan/20 hover:bg-accent-cyan/30 text-accent-cyan rounded-lg font-medium transition-colors"
                  >
                    View All Bookings
                  </motion.button>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors"
                    >
                      <Edit2 className="w-4 h-4 text-accent-cyan" />
                      <span className="text-white">Edit Profile</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors"
                    >
                      <Shield className="w-4 h-4 text-accent-cyan" />
                      <span className="text-white">Privacy & Security</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors"
                    >
                      <Bell className="w-4 h-4 text-accent-cyan" />
                      <span className="text-white">Notification Preferences</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg text-left transition-colors"
                    >
                      <Globe className="w-4 h-4 text-accent-cyan" />
                      <span className="text-white">Language & Currency</span>
                    </motion.button>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 p-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg font-medium transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
