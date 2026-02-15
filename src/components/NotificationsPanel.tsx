'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, X, Check, AlertCircle, Info, CheckCircle, Plane, Hotel, Package, Map, Car, Ship, Heart, Star, ArrowRight } from 'lucide-react'

interface NotificationsPanelProps {
  isOpen: boolean
  onClose: () => void
}

interface Notification {
  id: string
  type: 'info' | 'success' | 'warning' | 'promotion'
  title: string
  message: string
  time: string
  read: boolean
  icon?: any
  action?: {
    label: string
    href: string
  }
}

export default function NotificationsPanel({ isOpen, onClose }: NotificationsPanelProps) {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'success',
      title: 'Booking Confirmed!',
      message: 'Your Dubai Luxury Escape has been confirmed. Check your email for details.',
      time: '2 hours ago',
      read: false,
      icon: CheckCircle,
      action: {
        label: 'View Booking',
        href: '/trips'
      }
    },
    {
      id: '2',
      type: 'promotion',
      title: 'Flash Sale - 30% Off!',
      message: 'Limited time offer on European packages. Book now and save big!',
      time: '4 hours ago',
      read: false,
      icon: Star,
      action: {
        label: 'View Deals',
        href: '/packages'
      }
    },
    {
      id: '3',
      type: 'info',
      title: 'New Destination Added',
      message: 'Santorini, Greece is now available! Explore our latest packages.',
      time: '1 day ago',
      read: true,
      icon: Map,
      action: {
        label: 'Explore',
        href: '/destinations'
      }
    },
    {
      id: '4',
      type: 'warning',
      title: 'Price Drop Alert',
      message: 'Flight prices to Tokyo have dropped by 15%. Book before prices rise!',
      time: '2 days ago',
      read: true,
      icon: AlertCircle,
      action: {
        label: 'Check Flights',
        href: '/flights'
      }
    },
    {
      id: '5',
      type: 'info',
      title: 'Trip Reminder',
      message: 'Your Paris trip starts in 7 days. Have a wonderful journey!',
      time: '3 days ago',
      read: true,
      icon: Plane,
      action: {
        label: 'View Trip',
        href: '/trips'
      }
    }
  ])

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success': return CheckCircle
      case 'warning': return AlertCircle
      case 'promotion': return Star
      case 'info': return Info
      default: return Bell
    }
  }

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-400 bg-green-400/20 border-green-400/30'
      case 'warning': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30'
      case 'promotion': return 'text-accent-gold bg-accent-gold/20 border-accent-gold/30'
      case 'info': return 'text-accent-cyan bg-accent-cyan/20 border-accent-cyan/30'
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30'
    }
  }

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    )
  }

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id))
  }

  const unreadCount = notifications.filter(n => !n.read).length

  const handleNotificationClick = (notification: Notification) => {
    markAsRead(notification.id)
    if (notification.action) {
      console.log('Navigate to:', notification.action.href)
      onClose()
    }
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

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 right-4 w-full max-w-md bg-primary/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50 max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-white">Notifications</h2>
                {unreadCount > 0 && (
                  <span className="px-2 py-1 bg-accent-cyan text-primary text-xs font-bold rounded-full">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={markAllAsRead}
                    className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
                  >
                    Mark all read
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="overflow-y-auto max-h-[60vh]">
              {notifications.length === 0 ? (
                <div className="p-8 text-center">
                  <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300">No notifications yet</p>
                  <p className="text-gray-400 text-sm mt-2">We'll notify you about important updates</p>
                </div>
              ) : (
                <div className="divide-y divide-white/10">
                  {notifications.map((notification) => {
                    const IconComponent = notification.icon || getNotificationIcon(notification.type)
                    return (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                        className={`p-4 cursor-pointer transition-colors ${
                          !notification.read ? 'bg-white/5' : ''
                        }`}
                        onClick={() => handleNotificationClick(notification)}
                      >
                        <div className="flex gap-3">
                          {/* Icon */}
                          <div className={`p-2 rounded-lg ${getNotificationColor(notification.type)} border`}>
                            <IconComponent className="w-5 h-5" />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-1">
                              <h3 className={`font-semibold text-white ${!notification.read ? 'font-bold' : ''}`}>
                                {notification.title}
                              </h3>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  deleteNotification(notification.id)
                                }}
                                className="p-1 text-gray-400 hover:text-white transition-colors"
                              >
                                <X className="w-3 h-3" />
                              </motion.button>
                            </div>
                            <p className="text-sm text-gray-300 mb-2">{notification.message}</p>
                            
                            {/* Action */}
                            {notification.action && (
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-1 text-accent-cyan hover:text-white text-sm font-medium transition-colors"
                              >
                                {notification.action.label}
                                <ArrowRight className="w-3 h-3" />
                              </motion.button>
                            )}

                            {/* Time */}
                            <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                          </div>

                          {/* Unread indicator */}
                          {!notification.read && (
                            <div className="w-2 h-2 bg-accent-cyan rounded-full flex-shrink-0 mt-2" />
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">
                  {notifications.length} total notifications
                </p>
                <button
                  onClick={() => console.log('Notification settings')}
                  className="text-sm text-accent-cyan hover:text-white transition-colors"
                >
                  Settings
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
