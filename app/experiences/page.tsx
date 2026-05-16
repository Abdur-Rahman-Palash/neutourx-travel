'use client';

import { motion } from 'framer-motion';
import { Sparkles, MapPin, Clock, Users, Star } from 'lucide-react';
import { useState } from 'react';

export default function ExperiencesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const experiences = [
    {
      id: 1,
      name: 'Private Yacht Cruise',
      location: 'Mediterranean Sea',
      category: 'Adventure',
      price: '$899',
      duration: '4 hours',
      guests: 2,
      rating: 4.9,
      image: '⛵',
      description: 'Sail through the stunning Mediterranean waters on a luxury yacht with premium refreshments',
    },
    {
      id: 2,
      name: 'Cooking Class with Chef',
      location: 'Bangkok, Thailand',
      category: 'Food',
      price: '$65',
      duration: '3 hours',
      guests: 8,
      rating: 4.8,
      image: '👨‍🍳',
      description: 'Learn authentic Thai cooking from a Michelin-starred chef in a local market setting',
    },
    {
      id: 3,
      name: 'Hot Air Balloon Ride',
      location: 'Cappadocia, Turkey',
      category: 'Adventure',
      price: '$299',
      duration: '2.5 hours',
      guests: 4,
      rating: 4.9,
      image: '🎈',
      description: 'Float above the magical fairy chimneys of Cappadocia at sunrise',
    },
    {
      id: 4,
      name: 'Spa & Wellness Retreat',
      location: 'Bali, Indonesia',
      category: 'Wellness',
      price: '$199',
      duration: '5 hours',
      guests: 1,
      rating: 4.7,
      image: '🧘‍♀️',
      description: 'Indulge in a complete spa treatment with traditional Balinese massage and meditation',
    },
    {
      id: 5,
      name: 'Scuba Diving Adventure',
      location: 'Great Barrier Reef, Australia',
      category: 'Adventure',
      price: '$349',
      duration: '6 hours',
      guests: 6,
      rating: 4.9,
      image: '🤿',
      description: 'Explore the colorful world of the Great Barrier Reef with certified instructors',
    },
    {
      id: 6,
      name: 'Art Gallery Tour',
      location: 'Florence, Italy',
      category: 'Culture',
      price: '$79',
      duration: '2.5 hours',
      guests: 12,
      rating: 4.6,
      image: '🎨',
      description: 'Skip-the-line access to major Renaissance art galleries with expert curator',
    },
    {
      id: 7,
      name: 'Wine Tasting Tour',
      location: 'Tuscany, Italy',
      category: 'Food',
      price: '$129',
      duration: '4 hours',
      guests: 8,
      rating: 4.8,
      image: '🍷',
      description: 'Visit family-owned vineyards and taste premium Tuscan wines with a sommelier',
    },
    {
      id: 8,
      name: 'Mountain Climbing',
      location: 'Mount Kilimanjaro, Tanzania',
      category: 'Adventure',
      price: '$1,299',
      duration: '5 days',
      guests: 1,
      rating: 4.9,
      image: '⛰️',
      description: 'Challenge yourself on Africa\'s highest mountain with professional guides',
    },
    {
      id: 9,
      name: 'Language & Culture Immersion',
      location: 'Kyoto, Japan',
      category: 'Culture',
      price: '$149',
      duration: '3 hours',
      guests: 4,
      rating: 4.7,
      image: '🗣️',
      description: 'Learn Japanese traditions and basic language in an authentic setting',
    },
    {
      id: 10,
      name: 'Wildlife Safari',
      location: 'Serengeti, Tanzania',
      category: 'Nature',
      price: '$499',
      duration: '8 hours',
      guests: 4,
      rating: 4.9,
      image: '🦒',
      description: 'Witness the incredible wildlife of Africa with experienced safari guides',
    },
    {
      id: 11,
      name: 'Beach Volleyball & BBQ',
      location: 'Cancun, Mexico',
      category: 'Adventure',
      price: '$89',
      duration: '3 hours',
      guests: 10,
      rating: 4.6,
      image: '🏐',
      description: 'Play beach volleyball with locals and enjoy a fresh seafood BBQ dinner',
    },
    {
      id: 12,
      name: 'Meditation Retreat',
      location: 'Varkala, India',
      category: 'Wellness',
      price: '$179',
      duration: '4 hours',
      guests: 1,
      rating: 4.8,
      image: '🧘‍♂️',
      description: 'Join a guided meditation session overlooking pristine Kerala beaches',
    },
  ];

  const categories = ['all', 'Adventure', 'Food', 'Culture', 'Wellness', 'Nature'];

  const filteredExperiences =
    selectedCategory === 'all'
      ? experiences
      : experiences.filter((exp) => exp.category === selectedCategory);

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
            Unforgettable Experiences
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create lasting memories with unique activities around the world
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Filter by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Experiences Grid */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
          {selectedCategory === 'all'
            ? 'All Experiences'
            : `${selectedCategory} Experiences`}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredExperiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
            >
              {/* Header with Image */}
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-6 text-white flex-shrink-0">
                <div className="text-5xl mb-3">{experience.image}</div>
                <h3 className="text-lg font-bold mb-1">{experience.name}</h3>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <MapPin className="w-4 h-4" />
                  <span>{experience.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                    {experience.category}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {experience.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-6 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>Up to {experience.guests} {experience.guests === 1 ? 'person' : 'people'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{experience.rating}</span>
                    <span className="text-gray-500">({Math.floor(Math.random() * 300) + 50} reviews)</span>
                  </div>
                </div>

                {/* Price and Button */}
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">From</p>
                    <p className="text-2xl font-bold text-blue-600">{experience.price}</p>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Book Experience
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Create Your Perfect Trip</h2>
          <p className="text-lg mb-8 opacity-90">
            Combine flights, hotels, and experiences to design your dream vacation
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Start Planning Now
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}
