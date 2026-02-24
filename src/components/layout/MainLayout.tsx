'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import ProductSidebar from './ProductSidebar'
import FlightTicketInterface from './FlightTicketInterface'
import { motion } from 'framer-motion'

export default function MainLayout() {
  const [activeProduct, setActiveProduct] = useState('hotels')

  const handleProductChange = (productId: string) => {
    setActiveProduct(productId)
    console.log('Active product changed to:', productId)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Layer */}
      <Header />

      {/* Main Content Area */}
      <div className="flex pt-20">
        {/* Left Sidebar Layer - Product Navigation */}
        <aside className="hidden md:block w-[280px] flex-shrink-0 sticky top-20 h-screen">
          <ProductSidebar
            activeProduct={activeProduct}
            onProductChange={handleProductChange}
          />
        </aside>

        {/* Main Flight Ticket Interface Layer */}
        <main className="flex-1 overflow-hidden">
          <FlightTicketInterface
            activeProduct={activeProduct}
          />
        </main>
      </div>

      {/* Mobile Product Sidebar (Bottom Sheet) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-primary border-t border-white/10 z-50">
        <div className="flex overflow-x-auto p-2 gap-2">
          {[
            { id: 'hotels', label: 'Hotels', icon: '🏨' },
            { id: 'flights', label: 'Flights', icon: '✈️' },
            { id: 'trains', label: 'Trains', icon: '🚆' },
            { id: 'cars', label: 'Cars', icon: '🚗' },
            { id: 'attractions', label: 'Tours', icon: '🎯' },
            { id: 'packages', label: 'Packages', icon: '📦' }
          ].map((product) => (
            <motion.button
              key={product.id}
              onClick={() => handleProductChange(product.id)}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 rounded-lg min-w-[80px] transition-all",
                activeProduct === product.id
                  ? "bg-accent-cyan/20 text-accent-cyan"
                  : "text-gray-400 hover:text-white"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">{product.icon}</span>
              <span className="text-xs">{product.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}

// Add cn utility function
import { cn } from '@/lib/utils'
