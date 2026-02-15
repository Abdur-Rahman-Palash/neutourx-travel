'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown, Check } from 'lucide-react'

interface LanguageCurrencySelectorProps {
  selectedLanguage: string
  selectedCurrency: string
  onLanguageChange: (lang: string) => void
  onCurrencyChange: (currency: string) => void
}

export default function LanguageCurrencySelector({
  selectedLanguage,
  selectedCurrency,
  onLanguageChange,
  onCurrencyChange
}: LanguageCurrencySelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'language' | 'currency'>('language')

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'IT', name: 'Italiano', flag: '🇮🇹' },
    { code: 'PT', name: 'Português', flag: '🇵🇹' },
    { code: 'RU', name: 'Русский', flag: '🇷🇺' },
    { code: 'ZH', name: '中文', flag: '🇨🇳' },
    { code: 'JA', name: '日本語', flag: '🇯🇵' },
    { code: 'AR', name: 'العربية', flag: '🇸🇦' }
  ]

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' }
  ]

  const handleLanguageSelect = (langCode: string) => {
    onLanguageChange(langCode)
    setIsOpen(false)
  }

  const handleCurrencySelect = (currencyCode: string) => {
    onCurrencyChange(currencyCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 text-sm font-medium"
      >
        <Globe className="w-4 h-4" />
        <span>{selectedLanguage}</span>
        <span>{selectedCurrency}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-80 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              {/* Tabs */}
              <div className="flex border-b border-white/10">
                <button
                  onClick={() => setActiveTab('language')}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'language'
                      ? 'bg-accent-cyan/20 text-accent-cyan'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Language
                </button>
                <button
                  onClick={() => setActiveTab('currency')}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'currency'
                      ? 'bg-accent-cyan/20 text-accent-cyan'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Currency
                </button>
              </div>

              {/* Content */}
              <div className="max-h-64 overflow-y-auto">
                {activeTab === 'language' ? (
                  <div className="p-2">
                    {languages.map((lang) => (
                      <motion.button
                        key={lang.code}
                        onClick={() => handleLanguageSelect(lang.code)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          selectedLanguage === lang.code
                            ? 'bg-accent-cyan/20 text-accent-cyan'
                            : 'text-white hover:bg-white/10'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <div className="flex-1 text-left">
                          <p className="font-medium">{lang.name}</p>
                          <p className="text-xs opacity-70">{lang.code}</p>
                        </div>
                        {selectedLanguage === lang.code && (
                          <Check className="w-4 h-4" />
                        )}
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="p-2">
                    {currencies.map((currency) => (
                      <motion.button
                        key={currency.code}
                        onClick={() => handleCurrencySelect(currency.code)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          selectedCurrency === currency.code
                            ? 'bg-accent-cyan/20 text-accent-cyan'
                            : 'text-white hover:bg-white/10'
                        }`}
                      >
                        <span className="text-lg font-bold">{currency.symbol}</span>
                        <div className="flex-1 text-left">
                          <p className="font-medium">{currency.name}</p>
                          <p className="text-xs opacity-70">{currency.code}</p>
                        </div>
                        {selectedCurrency === currency.code && (
                          <Check className="w-4 h-4" />
                        )}
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
