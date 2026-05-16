'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Plane, Hotel, Map, Camera, Users, Settings } from 'lucide-react';
import { useAppStore } from '@/store/appStore';

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Plane, label: 'Flights', href: '/flights' },
  { icon: Hotel, label: 'Hotels', href: '/hotels' },
  { icon: Map, label: 'Destinations', href: '/destinations' },
  { icon: Camera, label: 'Experiences', href: '/experiences' },
  { icon: Users, label: 'Travelers', href: '/travelers' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useAppStore();

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: 'tween', duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed left-0 top-0 h-full w-80 z-50"
            style={{ backgroundColor: 'var(--color-surface)' }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
                <h2 className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>Menu</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Close navigation menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-6" role="navigation" aria-label="Main navigation">
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ color: 'var(--color-text-secondary)' }}
                        onClick={() => setSidebarOpen(false)}
                      >
                        <item.icon className="h-6 w-6 group-hover:text-blue-600" style={{ color: 'var(--color-text-secondary)' }} />
                        <span className="group-hover:text-blue-600 font-medium">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  © 2024 NEUTOURX
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}