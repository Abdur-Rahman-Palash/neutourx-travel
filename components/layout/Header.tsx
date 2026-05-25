'use client';

import { Menu, Search, User, Heart, ShoppingCart } from 'lucide-react';
import { useAppStore } from '@/store/appStore';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { toggleSidebar } = useAppStore();
  const router = useRouter();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/90"
      style={{
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--color-border)',
      }}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Open navigation menu"
              aria-expanded="false"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              NEUTOURX
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            <a
              href="/flights"
              className="text-slate-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 dark:text-slate-300 dark:hover:text-cyan-300"
            >
              Flights
            </a>
            <a
              href="/hotels"
              className="text-slate-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 dark:text-slate-300 dark:hover:text-cyan-300"
            >
              Hotels
            </a>
            <a
              href="/packages"
              className="text-slate-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 dark:text-slate-300 dark:hover:text-cyan-300"
            >
              Packages
            </a>
            <a
              href="/experiences"
              className="text-slate-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 dark:text-slate-300 dark:hover:text-cyan-300"
            >
              Experiences
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push('/search')}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-slate-800"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => router.push('/wishlist')}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-slate-800"
              aria-label="Favorites"
            >
              <Heart className="h-5 w-5" />
            </button>
            <button
              onClick={() => router.push('/cart')}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-slate-800"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button
              onClick={() => router.push('/auth')}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-slate-800"
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}