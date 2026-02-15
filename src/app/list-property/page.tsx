'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, MapPin, Phone, Mail, Star, Check, ArrowRight, Upload, Bed, Bath, Square, Car, Wifi, Waves, Dumbbell, Coffee } from 'lucide-react'

export default function ListPropertyPage() {
  const [formData, setFormData] = useState({
    propertyName: '',
    propertyType: '',
    address: '',
    city: '',
    country: '',
    description: '',
    bedrooms: '',
    bathrooms: '',
    area: '',
    price: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    amenities: [] as string[]
  })

  const [step, setStep] = useState(1)
  const [images, setImages] = useState<string[]>([])

  const propertyTypes = [
    { value: 'hotel', label: 'Hotel', icon: Building2 },
    { value: 'resort', label: 'Resort', icon: Building2 },
    { value: 'apartment', label: 'Apartment', icon: Building2 },
    { value: 'villa', label: 'Villa', icon: Building2 },
    { value: 'guesthouse', label: 'Guest House', icon: Building2 }
  ]

  const amenitiesList = [
    { id: 'wifi', label: 'Free WiFi', icon: Wifi },
    { id: 'parking', label: 'Free Parking', icon: Car },
    { id: 'pool', label: 'Swimming Pool', icon: Waves },
    { id: 'gym', label: 'Fitness Center', icon: Dumbbell },
    { id: 'breakfast', label: 'Breakfast Included', icon: Coffee },
    { id: 'spa', label: 'Spa & Wellness', icon: Star }
  ]

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleAmenityToggle = (amenityId: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenityId)
        ? prev.amenities.filter(id => id !== amenityId)
        : [...prev.amenities, amenityId]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Property listing submitted:', formData)
    // Handle form submission
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary/95">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 30%, #FFD700 0%, transparent 50%), 
                           radial-gradient(circle at 70% 70%, #FFD700 0%, transparent 50%)`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
              List Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-yellow-400 to-accent-cyan">
                Property
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of property owners and reach millions of travelers worldwide
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-4xl mx-auto mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= stepNumber 
                      ? 'bg-gradient-to-r from-accent-gold to-yellow-400 text-primary' 
                      : 'bg-white/20 text-gray-400'
                  }`}>
                    {stepNumber}
                  </div>
                  {stepNumber < 4 && (
                    <div className={`w-full h-1 mx-2 ${
                      step > stepNumber ? 'bg-accent-gold' : 'bg-white/20'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-accent-gold font-medium">
                {step === 1 && 'Basic Information'}
                {step === 2 && 'Property Details'}
                {step === 3 && 'Amenities & Photos'}
                {step === 4 && 'Contact & Pricing'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8"
          >
            <form onSubmit={handleSubmit}>
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Basic Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Property Name *</label>
                      <input
                        type="text"
                        name="propertyName"
                        value={formData.propertyName}
                        onChange={handleInputChange}
                        placeholder="Enter property name"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gold focus:bg-white/20 outline-none transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Property Type *</label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-accent-gold focus:bg-white/20 outline-none transition-all"
                        required
                      >
                        <option value="" className="bg-primary">Select property type</option>
                        {propertyTypes.map(type => (
                          <option key={type.value} value={type.value} className="bg-primary">
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Address *</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Street address"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gold focus:bg-white/20 outline-none transition-all"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="City"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gold focus:bg-white/20 outline-none transition-all"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Country *</label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="Country"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gold focus:bg-white/20 outline-none transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe your property..."
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gold focus:bg-white/20 outline-none transition-all resize-none"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Property Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Property Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Bedrooms *</label>
                      <div className="relative">
                        <Bed className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-gold" />
                        <input
                          type="number"
                          name="bedrooms"
                          value={formData.bedrooms}
                          onChange={handleInputChange}
                          placeholder="Number of bedrooms"
                          min="1"
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gold focus:bg-white/20 outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Bathrooms *</label>
                      <div className="relative">
                        <Bath className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-gold" />
                        <input
                          type="number"
                          name="bathrooms"
                          value={formData.bathrooms}
                          onChange={handleInputChange}
                          placeholder="Number of bathrooms"
                          min="1"
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gold focus:bg-white/20 outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Area (sq ft) *</label>
                      <div className="relative">
                        <Square className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-gold" />
                        <input
                          type="number"
                          name="area"
                          value={formData.area}
                          onChange={handleInputChange}
                          placeholder="Property area"
                          min="1"
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gold focus:bg-white/20 outline-none transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Amenities & Photos */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Amenities</h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {amenitiesList.map((amenity) => (
                      <motion.button
                        key={amenity.id}
                        type="button"
                        onClick={() => handleAmenityToggle(amenity.id)}
                        className={`p-4 rounded-xl border transition-all duration-300 ${
                          formData.amenities.includes(amenity.id)
                            ? 'bg-accent-gold/20 border-accent-gold text-accent-gold'
                            : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <amenity.icon className="w-6 h-6 mb-2 mx-auto" />
                        <p className="text-sm font-medium">{amenity.label}</p>
                        {formData.amenities.includes(amenity.id) && (
                          <Check className="w-4 h-4 mt-2 mx-auto" />
                        )}
                      </motion.button>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">Property Photos</label>
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-accent-gold transition-colors">
                      <Upload className="w-12 h-12 text-accent-gold mx-auto mb-4" />
                      <p className="text-white mb-2">Click to upload or drag and drop</p>
                      <p className="text-gray-400 text-sm">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact & Pricing */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact & Pricing</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Contact Name *</label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-gold" />
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gold focus:bg-white/20 outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-gold" />
                        <input
                          type="email"
                          name="contactEmail"
                          value={formData.contactEmail}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gold focus:bg-white/20 outline-none transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone *</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-gold" />
                      <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gold focus:bg-white/20 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Price per Night ($) *</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="99"
                      min="1"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-accent-gold focus:bg-white/20 outline-none transition-all"
                      required
                    />
                  </div>

                  {/* Summary */}
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-lg font-bold text-white mb-4">Property Summary</h3>
                    <div className="space-y-2 text-gray-300">
                      <p><span className="text-accent-gold">Name:</span> {formData.propertyName || 'Not set'}</p>
                      <p><span className="text-accent-gold">Type:</span> {formData.propertyType || 'Not set'}</p>
                      <p><span className="text-accent-gold">Location:</span> {formData.city}, {formData.country}</p>
                      <p><span className="text-accent-gold">Bedrooms:</span> {formData.bedrooms || 'Not set'}</p>
                      <p><span className="text-accent-gold">Price:</span> ${formData.price || 'Not set'}/night</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    Previous
                  </motion.button>
                )}

                <div className="ml-auto">
                  {step < 4 ? (
                    <motion.button
                      type="button"
                      onClick={nextStep}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-gradient-to-r from-accent-gold to-yellow-400 text-primary font-bold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-gradient-to-r from-accent-gold to-yellow-400 text-primary font-bold rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Submit Property
                    </motion.button>
                  )}
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
