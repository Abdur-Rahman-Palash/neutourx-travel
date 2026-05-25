'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Globe, MessageCircle, User, Menu, X, Plane, MapPin, Calendar, CreditCard, Star, Search, Bell, Building2, Package, Map, Car, Ship, Home, HelpCircle, Heart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import LanguageCurrencySelector from './LanguageCurrencySelector'
import SearchModal from './SearchModal'
import NotificationsPanel from './NotificationsPanel'
import AccountModal from './AccountModal'

export function Header() {
  const [isExploreOpen, setIsExploreOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState('EN')
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null)
      setIsExploreOpen(false)
    }

    if (activeDropdown || isExploreOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [activeDropdown, isExploreOpen])

  const exploreItems = [
    {
      icon: Plane,
      title: 'Flights',
      description: 'Find your perfect flight',
      href: '/flights',
      color: 'text-blue-500'
    },
    {
      icon: Building2,
      title: 'Hotels',
      description: 'Comfortable stays worldwide',
      href: '/hotels',
      color: 'text-green-500'
    },
    {
      icon: Package,
      title: 'Packages',
      description: 'All-in-one deals',
      href: '/packages',
      color: 'text-purple-500'
    },
    {
      icon: Map,
      title: 'Tours',
      description: 'Amazing experiences',
      href: '/tours',
      color: 'text-orange-500'
    },
    {
      icon: Car,
      title: 'Car Rentals',
      description: 'Drive with freedom',
      href: '/car-rentals',
      color: 'text-red-500'
    },
    {
      icon: Ship,
      title: 'Cruises',
      description: 'Sail the seas',
      href: '/cruises',
      color: 'text-cyan-500'
    }
  ]

  const navItems = [
    { name: 'Destinations', href: '/destinations', icon: MapPin },
    { name: 'Trips', href: '/trips', icon: Calendar },
  ]

  const handleExploreClick = (item: typeof exploreItems[0]) => {
    console.log(`Navigating to ${item.title}: ${item.href}`)
    window.location.href = item.href
  }

  const handleListProperty = () => {
    console.log('Opening property listing form')
    window.location.href = '/list-property'
  }

  const handleSupport = () => {
    console.log('Opening support page')
    window.location.href = '/support'
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-gray-200/20 shadow-lg" 
          : "bg-background/40 backdrop-blur-md border-b border-gray-200/10"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
              onClick={() => window.location.href = '/'}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-accent-cyan to-blue-500 rounded-xl flex items-center justify-center">
                <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-black tracking-tighter text-foreground">NEUTOURX</span>
            </motion.div>

            {/* Explore Dropdown - Visible on desktop */}
            <div className="relative">
              <motion.button
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                className="flex items-center gap-2 text-foreground hover:text-accent-cyan transition-colors text-sm sm:text-base lg:text-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="hidden sm:inline">Explore</span>
                <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${isExploreOpen ? 'rotate-180' : 'rotate-0'}`} />
              </motion.button>
              
              <AnimatePresence>
                {isExploreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-4 w-96 p-6 bg-slate-800 border border-gray-700 rounded-2xl shadow-xl"
                  >
                    <div className="grid grid-cols-1 gap-3">
                      {exploreItems.map((item, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleExploreClick(item)}
                          className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-100 transition-all duration-300 text-left group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className={`p-2 rounded-lg bg-slate-700 group-hover:bg-slate-600 transition-colors`}>
                            <item.icon className={`w-5 h-5 ${item.color}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                            <p className="text-xs text-gray-300">{item.description}</p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Items */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 text-foreground hover:text-accent-cyan transition-colors text-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language & Currency - Hidden on small mobile */}
            <div className="hidden md:flex items-center gap-2 sm:gap-4">
              <LanguageCurrencySelector
                selectedLanguage={selectedLanguage}
                selectedCurrency={selectedCurrency}
                onLanguageChange={setSelectedLanguage}
                onCurrencyChange={setSelectedCurrency}
              />
            </div>

            {/* List Property - Hidden on small mobile */}
            <motion.button
              onClick={handleListProperty}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-3 py-2 bg-accent-gold/20 border border-accent-gold/30 rounded-xl text-accent-gold hover:bg-accent-gold/30 transition-all duration-300"
            >
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium hidden md:inline">List Property</span>
            </motion.button>

            {/* Search - Always visible */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center gap-1 sm:gap-2 p-2 text-foreground hover:text-accent-cyan transition-colors"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>

            {/* Notifications - Always visible */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsNotificationsOpen(true)}
              className="flex items-center gap-1 sm:gap-2 p-2 text-foreground hover:text-accent-cyan transition-colors relative"
            >
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </motion.button>

            {/* User Account - Always visible */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAccountOpen(true)}
              className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-accent-cyan to-blue-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <User className="w-4 h-4" />
              <span className="text-sm font-medium hidden lg:inline">Account</span>
            </motion.button>

            {/* Mobile Menu */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-3 text-gray-700 bg-gray-100 backdrop-blur-xl rounded-xl border border-gray-200"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col pt-20 pb-8 px-4 sm:px-6 overflow-y-auto overscroll-contain"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between mb-8 px-4">
              <h2 className="text-xl font-bold text-gray-900">Menu</h2>
              <motion.button
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-100 backdrop-blur-xl rounded-xl border border-gray-200"
              >
                <X className="w-6 h-6 text-gray-700" />
              </motion.button>
            </div>

            <div className="flex flex-col gap-6 max-w-md mx-auto">
              {/* Mobile Explore */}
              <div className="space-y-4">
                <h3 className="text-accent-gold text-sm font-bold uppercase tracking-wider mb-4">Explore</h3>
                <div className="grid grid-cols-1 gap-3">
                  {exploreItems.map((item, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        handleExploreClick(item)
                        setIsMobileMenuOpen(false)
                      }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-left min-h-[80px]"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`p-3 rounded-xl bg-gray-100 group-hover:bg-gray-200 transition-colors flex-shrink-0`}>
                        <item.icon className={`w-6 h-6 ${item.color} flex-shrink-0`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-base mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-tight">{item.description}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-4">
                <h3 className="text-accent-gold text-sm font-bold uppercase tracking-wider mb-4">Navigation</h3>
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-gray-900 min-h-[60px]"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-6 h-6 text-accent-cyan flex-shrink-0" />
                    <span className="font-medium text-base">{item.name}</span>
                  </motion.a>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="space-y-4">
                <h3 className="text-accent-gold text-sm font-bold uppercase tracking-wider mb-4">Actions</h3>
                
                <motion.button
                  onClick={() => {
                    handleListProperty()
                    setIsMobileMenuOpen(false)
                  }}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-accent-gold/20 border border-accent-gold/30 text-accent-gold hover:bg-accent-gold/30 transition-all duration-300 min-h-[60px]"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Building2 className="w-6 h-6 flex-shrink-0" />
                  <span className="font-medium text-base">List Property</span>
                </motion.button>

                <motion.button
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-accent-cyan to-blue-500 text-white hover:shadow-lg transition-all duration-300 min-h-[60px]"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <User className="w-6 h-6 flex-shrink-0" />
                  <span className="font-medium text-base">Account</span>
                </motion.button>
              </div>

              {/* Mobile Language & Currency */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <h3 className="text-accent-gold text-sm font-bold uppercase tracking-wider mb-4">Settings</h3>
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-gray-900 min-h-[60px]"
                  >
                    <Globe className="w-5 h-5 text-accent-cyan" />
                    <div className="text-left">
                      <p className="text-xs text-gray-500">Language</p>
                      <p className="font-medium text-base">{selectedLanguage}</p>
                    </div>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 text-gray-900 min-h-[60px]"
                  >
                    <span className="text-2xl font-bold text-accent-gold">$</span>
                    <div className="text-left">
                      <p className="text-xs text-gray-500">Currency</p>
                      <p className="font-medium text-base">{selectedCurrency}</p>
                    </div>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Notifications Panel */}
      <NotificationsPanel isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />

      {/* Account Modal */}
      <AccountModal isOpen={isAccountOpen} onClose={() => setIsAccountOpen(false)} />
    </motion.header>
  )
}
