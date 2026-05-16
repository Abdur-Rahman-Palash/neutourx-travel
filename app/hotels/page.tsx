'use client';

import { motion } from 'framer-motion';
import { Hotel, MapPin, Star, Wifi, Utensils, Dumbbell } from 'lucide-react';
import { useState } from 'react';

export default function HotelsPage() {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const hotels = [
    {
      id: 1,
      name: 'Luxury Grand Hotel',
      location: 'Paris, France',
      price: '$320',
      rating: 4.8,
      reviews: 1250,
      image: '🏨',
      amenities: ['WiFi', 'Restaurant', 'Gym'],
      description: 'Experience luxury in the heart of Paris with world-class amenities',
    },
    {
      id: 2,
      name: 'Beachfront Resort',
      location: 'Maldives',
      price: '$450',
      rating: 4.9,
      reviews: 980,
      image: '🏝️',
      amenities: ['WiFi', 'Restaurant', 'Gym'],
      description: 'Pristine beaches and crystal-clear waters await you',
    },
    {
      id: 3,
      name: 'Mountain Lodge',
      location: 'Swiss Alps',
      price: '$280',
      rating: 4.7,
      reviews: 650,
      image: '🏔️',
      amenities: ['WiFi', 'Restaurant', 'Gym'],
      description: 'Breathtaking mountain views and alpine charm',
    },
    {
      id: 4,
      name: 'Urban Boutique Hotel',
      location: 'New York, USA',
      price: '$350',
      rating: 4.6,
      reviews: 1100,
      image: '🏢',
      amenities: ['WiFi', 'Restaurant', 'Gym'],
      description: 'Modern comfort in the bustling heart of Manhattan',
    },
    {
      id: 5,
      name: 'Desert Palace Hotel',
      location: 'Dubai, UAE',
      price: '$400',
      rating: 4.8,
      reviews: 1400,
      image: '🏰',
      amenities: ['WiFi', 'Restaurant', 'Gym'],
      description: 'Opulent luxury meets Arabian elegance',
    },
    {
      id: 6,
      name: 'Tropical Paradise Resort',
      location: 'Bali, Indonesia',
      price: '$220',
      rating: 4.5,
      reviews: 890,
      image: '🌴',
      amenities: ['WiFi', 'Restaurant', 'Gym'],
      description: 'Immerse yourself in tropical beauty and culture',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20 pb-12">
      {/* Hero Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover premium hotels and resorts from around the world
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-2xl p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Where to?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Check-in */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Check-in
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Check-out */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Check-out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Hotel className="w-5 h-5" />
                Search
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Hotels Grid */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
          Featured Hotels
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <motion.div
              key={hotel.id}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-7xl">
                {hotel.image}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {hotel.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{hotel.location}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(hotel.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600">
                    {hotel.rating} ({hotel.reviews} reviews)
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4">{hotel.description}</p>

                {/* Amenities */}
                <div className="flex gap-3 mb-6 flex-wrap">
                  <div className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <Wifi className="w-4 h-4" /> WiFi
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <Utensils className="w-4 h-4" /> Restaurant
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <Dumbbell className="w-4 h-4" /> Gym
                  </div>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">From</p>
                    <p className="text-3xl font-bold text-blue-600">{hotel.price}</p>
                    <p className="text-xs text-gray-500">per night</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '🏆',
              title: 'Verified Reviews',
              description: 'Read genuine guest reviews before you book',
            },
            {
              icon: '💰',
              title: 'Best Price Guarantee',
              description: 'We match any lower price you find elsewhere',
            },
            {
              icon: '🛟',
              title: 'Expert Support',
              description: 'Get help anytime during your stay',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
