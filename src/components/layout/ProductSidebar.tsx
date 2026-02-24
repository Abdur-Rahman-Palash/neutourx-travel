'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Plane, Train, Car, Map, Package, Calendar, Star, Search, Sparkles, Users, Heart, Compass } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

interface ProductSidebarProps {
  activeProduct: string
  onProductChange: (product: string) => void
  className?: string
}

export default function ProductSidebar({ activeProduct, onProductChange, className }: ProductSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true)
  const router = useRouter()

  const products = [
    {
      id: 'hotels',
      label: 'Hotels & Homes',
      icon: Building2,
      color: 'text-blue-500',
      description: 'Find perfect stays',
      href: '/hotels'
    },
    {
      id: 'flights',
      label: 'Flights',
      icon: Plane,
      color: 'text-cyan-500',
      description: 'Book flights worldwide',
      href: '/flights'
    },
    {
      id: 'attractions',
      label: 'Attractions & Tours',
      icon: Map,
      color: 'text-purple-500',
      description: 'Discover experiences',
      href: '/attractions'
    },
    {
      id: 'packages',
      label: 'Flight + Hotel',
      icon: Package,
      color: 'text-orange-500',
      description: 'Complete trips',
      href: '/packages'
    },
    {
      id: 'trip-planner',
      label: 'Trip.Planner',
      icon: Calendar,
      color: 'text-yellow-500',
      description: 'Plan your journey',
      isNew: true
    },
    {
      id: 'inspiration',
      label: 'Travel Inspiration',
      icon: Compass,
      color: 'text-teal-500',
      description: 'Get inspired'
    }
  ]

  const handleProductClick = (productId: string) => {
    onProductChange(productId)
    // Navigate to the product page using Next.js router
    router.push(productId === 'hotels' ? '/hotels' : 
              productId === 'flights' ? '/flights' :
              productId === 'trains' ? '/trains' :
              productId === 'cars' ? '/cars' :
              productId === 'attractions' ? '/attractions' :
              productId === 'packages' ? '/packages' :
              productId === 'private-tours' ? '/private-tours' :
              productId === 'group-tours' ? '/group-tours' :
              productId === 'trip-planner' ? '/trip-planner' :
              productId === 'inspiration' ? '/inspiration' : '/')
  }

  return (
    <motion.aside
      initial={{ width: isExpanded ? 280 : 80 }}
      animate={{ width: isExpanded ? 280 : 80 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        "bg-primary border-r border-white/10 h-full overflow-hidden flex flex-col",
        className
      )}
    >
      {/* Sidebar Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          {isExpanded && (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-lg font-bold text-white"
            >
              Explore
            </motion.h2>
          )}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Product List */}
      <div className="flex-1 overflow-y-auto p-2">
        {products.map((product, index) => (
          <motion.button
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className={cn(
              "w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 relative",
              activeProduct === product.id
                ? "bg-accent-cyan/20 border border-accent-cyan/50"
                : "hover:bg-white/5 border border-transparent"
            )}
            whileHover={{ scale: 1.02, x: 5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className={cn("p-2 rounded-lg bg-white/10", product.color)}>
              <product.icon className="w-5 h-5" />
            </div>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="flex-1 text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">
                      {product.label}
                    </span>
                    {product.isNew && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="px-2 py-0.5 bg-accent-gold text-xs font-bold text-primary rounded-full"
                      >
                        NEW
                      </motion.span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {product.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Active Indicator */}
            {activeProduct === product.id && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute left-0 top-0 bottom-0 w-1 bg-accent-cyan rounded-r-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* AI Assistant */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="p-4 border-t border-white/10"
      >
        <motion.button
          className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-accent-gold/20 to-accent-cyan/20 border border-accent-gold/30 rounded-lg hover:from-accent-gold/30 hover:to-accent-cyan/30 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="p-2 rounded-lg bg-gradient-to-r from-accent-gold to-accent-cyan">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="flex-1 text-left"
            >
              <p className="text-sm font-medium text-white">AI Genie</p>
              <p className="text-xs text-gray-400">Get instant help</p>
            </motion.div>
          )}
        </motion.button>
      </motion.div>
    </motion.aside>
  )
}
