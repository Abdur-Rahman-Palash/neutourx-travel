'use client';

import { motion } from 'framer-motion';
import { Package, MapPin, Calendar, Users, Check } from 'lucide-react';
import { useState } from 'react';

export default function PackagesPage() {
  const [selectedDuration, setSelectedDuration] = useState('7');
  const [selectedBudget, setSelectedBudget] = useState('all');

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

  const packages = [
    {
      id: 1,
      name: 'Paris Romantic Escape',
      destination: 'Paris, France',
      duration: 5,
      price: '$1,299',
      rating: 4.9,
      image: '🗼',
      description: 'Experience the magic of Paris with luxury hotels and guided tours',
      includes: ['5 nights hotel', 'Daily breakfast', 'City tour', 'Seine cruise', 'Eiffel Tower tickets'],
      bestFor: 'Couples',
    },
    {
      id: 2,
      name: 'Southeast Asia Adventure',
      destination: 'Thailand, Vietnam, Cambodia',
      duration: 14,
      price: '$2,499',
      rating: 4.8,
      image: '🏯',
      description: 'Explore the exotic beauty of Southeast Asia with our curated itinerary',
      includes: ['14 nights hotel', 'All meals', 'Guided tours', 'Internal flights', 'Travel insurance'],
      bestFor: 'Adventurers',
    },
    {
      id: 3,
      name: 'Caribbean Beach Bliss',
      destination: 'Jamaica, Bahamas',
      duration: 7,
      price: '$1,599',
      rating: 4.7,
      image: '🏝️',
      description: 'Relax on pristine beaches with all-inclusive resort experience',
      includes: ['7 nights resort', 'All-inclusive meals', 'Water sports', 'Beach activities', 'Airport transfers'],
      bestFor: 'Beach Lovers',
    },
    {
      id: 4,
      name: 'Japanese Cultural Journey',
      destination: 'Tokyo, Kyoto, Osaka',
      duration: 10,
      price: '$2,199',
      rating: 4.9,
      image: '🏯',
      description: 'Immerse yourself in Japanese culture and ancient traditions',
      includes: ['10 nights hotel', 'Daily breakfast', 'Guided city tours', 'Temple visits', 'Bullet train pass'],
      bestFor: 'Culture Enthusiasts',
    },
    {
      id: 5,
      name: 'African Safari Expedition',
      destination: 'Kenya, Tanzania',
      duration: 9,
      price: '$2,899',
      rating: 4.8,
      image: '🦁',
      description: 'Witness the majestic wildlife on an unforgettable safari adventure',
      includes: ['9 nights lodge', 'All meals', 'Game drives', 'Expert guide', 'Photography session'],
      bestFor: 'Nature Lovers',
    },
    {
      id: 6,
      name: 'European Grand Tour',
      destination: 'Italy, Spain, France',
      duration: 21,
      price: '$3,999',
      rating: 4.9,
      image: '🏛️',
      description: 'Discover the wonders of Europe with our comprehensive tour',
      includes: ['21 nights hotel', 'Daily breakfast', 'Guided tours', 'Train passes', 'Museum entries'],
      bestFor: 'Travel Enthusiasts',
    },
    {
      id: 7,
      name: 'Mountain Hiking Retreat',
      destination: 'Swiss Alps',
      duration: 7,
      price: '$1,399',
      rating: 4.6,
      image: '⛰️',
      description: 'Challenge yourself with scenic mountain trails and alpine adventure',
      includes: ['7 nights lodge', 'All meals', 'Hiking guides', 'Equipment rental', 'Mountain photography'],
      bestFor: 'Adventure Seekers',
    },
    {
      id: 8,
      name: 'Dubai Luxury Experience',
      destination: 'Dubai, Abu Dhabi',
      duration: 5,
      price: '$1,999',
      rating: 4.8,
      image: '🏙️',
      description: 'Experience ultra-luxury in the heart of the Arabian desert',
      includes: ['5 nights luxury hotel', 'All meals', 'Desert safari', 'Shopping tour', 'Yacht cruise'],
      bestFor: 'Luxury Travelers',
    },
  ];

  const durations = [3, 5, 7, 10, 14, 21];
  const filteredPackages = packages.filter((pkg) => {
    if (selectedDuration && pkg.duration !== parseInt(selectedDuration)) {
      return false;
    }
    return true;
  });

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
            Curated Travel Packages
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Handpicked vacation packages for every type of traveler
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Filter by Duration</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <button
              onClick={() => setSelectedDuration('all')}
              className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                selectedDuration === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Packages
            </button>
            {durations.map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration.toString())}
                className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  selectedDuration === duration.toString()
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {duration} Days
              </button>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Packages Grid */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
          {selectedDuration === 'all' ? 'All Packages' : `${selectedDuration}-Day Packages`}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-6 text-white flex-shrink-0">
                <div className="text-5xl mb-3">{pkg.image}</div>
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <MapPin className="w-4 h-4" />
                  <span>{pkg.destination}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{pkg.duration} days</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {pkg.description}
                </p>

                {/* Includes */}
                <div className="space-y-2 mb-6 py-4 border-y border-gray-200">
                  {pkg.includes.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                  {pkg.includes.length > 3 && (
                    <div className="text-sm text-blue-600 font-semibold">
                      +{pkg.includes.length - 3} more included
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-bold text-yellow-500">★ {pkg.rating}</span>
                  <span className="text-xs text-gray-500">{pkg.bestFor}</span>
                </div>

                {/* Price and Button */}
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Starting from</p>
                    <p className="text-2xl font-bold text-blue-600">{pkg.price}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Our Packages */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 text-center">
          Why Choose Our Packages?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '✅',
              title: 'All-Inclusive',
              description: 'Everything is arranged - flights, hotels, tours, and meals',
            },
            {
              icon: '💎',
              title: 'Premium Quality',
              description: 'Handpicked hotels and experiences for your comfort',
            },
            {
              icon: '👥',
              title: 'Expert Guides',
              description: 'Local experts ensure unforgettable travel experiences',
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
