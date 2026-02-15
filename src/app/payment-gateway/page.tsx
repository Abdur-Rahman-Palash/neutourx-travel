'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Shield, CheckCircle, AlertCircle, Lock, Smartphone, Globe, Clock, ArrowRight, Star, Users } from 'lucide-react'

export default function PaymentGatewayPage() {
  const [selectedMethod, setSelectedMethod] = useState('card')
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    email: '',
    phone: '',
    billingAddress: ''
  })

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Visa, Mastercard, American Express'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: Globe,
      description: 'Fast and secure online payments'
    },
    {
      id: 'apple',
      name: 'Apple Pay',
      icon: Smartphone,
      description: 'Pay with Touch ID or Face ID'
    },
    {
      id: 'google',
      name: 'Google Pay',
      icon: Smartphone,
      description: 'Pay with Google account'
    }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Secure Payment',
      description: '256-bit SSL encryption protects your data'
    },
    {
      icon: Lock,
      title: 'PCI Compliant',
      description: 'Industry-standard security protocols'
    },
    {
      icon: Clock,
      title: 'Instant Processing',
      description: 'Real-time payment confirmation'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Payment submitted:', { selectedMethod, formData })
    // Implement payment processing logic
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary/95 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
            Secure
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-gold">
              Payment Gateway
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Safe, fast, and secure payment processing for your travel bookings
          </p>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Choose Payment Method</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {paymentMethods.map((method) => (
              <motion.button
                key={method.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedMethod(method.id)}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  selectedMethod === method.id
                    ? 'bg-accent-cyan/20 border-accent-cyan text-accent-cyan'
                    : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                }`}
              >
                <method.icon className="w-6 h-6 mx-auto mb-2" />
                <h3 className="font-semibold text-sm mb-1">{method.name}</h3>
                <p className="text-xs opacity-70">{method.description}</p>
              </motion.button>
            ))}
          </div>

          {/* Payment Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {selectedMethod === 'card' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            {/* Billing Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">Billing Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Billing Address</label>
                  <input
                    type="text"
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleInputChange}
                    placeholder="123 Main St, City, State"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-cyan focus:bg-white/20 outline-none transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-accent-cyan to-blue-500 text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Lock className="w-5 h-5" />
              Process Payment Securely
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center"
            >
              <feature.icon className="w-8 h-8 text-accent-cyan mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm">SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent-cyan" />
              <span className="text-sm">PCI DSS Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent-gold" />
              <span className="text-sm">Trusted by Millions</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
