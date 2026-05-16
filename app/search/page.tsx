'use client';

import { motion } from 'framer-motion';
import { Search, MapPin, X } from 'lucide-react';
import { useState } from 'react';

type SearchResult = {
  id: number;
  type: string;
  title: string;
  price: string;
  icon: string;
};

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searched, setSearched] = useState(false);

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

  const allResults: SearchResult[] = [
    { id: 1, type: 'Flight', title: 'New York to Paris', price: '$450', icon: '✈️' },
    { id: 2, type: 'Hotel', title: 'Luxury Grand Hotel - Paris', price: '$320/night', icon: '🏨' },
    { id: 3, type: 'Package', title: 'Paris Romantic Escape', price: '$1,299', icon: '📦' },
    { id: 4, type: 'Experience', title: 'Private Yacht Cruise', price: '$899', icon: '⛵' },
    { id: 5, type: 'Flight', title: 'London to Dubai', price: '$380', icon: '✈️' },
    { id: 6, type: 'Hotel', title: 'Beachfront Resort - Maldives', price: '$450/night', icon: '🏝️' },
    { id: 7, type: 'Package', title: 'Southeast Asia Adventure', price: '$2,499', icon: '📦' },
    { id: 8, type: 'Experience', title: 'Cooking Class - Bangkok', price: '$65', icon: '👨‍🍳' },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const filtered = allResults.filter(
        (result) =>
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
      setSearched(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20 pb-12">
      {/* Hero Section */}
      <motion.section
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Search Everything
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find flights, hotels, packages, and experiences all in one place
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
          <div className="flex gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for flights, hotels, packages, experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSearch}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Search
            </motion.button>
          </div>
        </motion.div>

        {/* Results Section */}
        {searched && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">
              {searchResults.length > 0
                ? `Found ${searchResults.length} results for "${searchQuery}"`
                : `No results found for "${searchQuery}"`}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {searchResults.map((result) => (
                <motion.div
                  key={result.id}
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-grow">
                      <div className="text-4xl">{result.icon}</div>
                      <div className="flex-grow">
                        <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-2">
                          {result.type}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {result.title}
                        </h3>
                        <p className="text-2xl font-bold text-blue-600">
                          {result.price}
                        </p>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    View Details
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Popular Searches */}
        {!searched && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">
              Popular Searches
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: '✈️', label: 'Flights to Paris' },
                { icon: '🏨', label: 'Hotels in Dubai' },
                { icon: '📦', label: 'European Tours' },
                { icon: '🏝️', label: 'Beach Resorts' },
              ].map((item, index) => (
                <motion.button
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSearchQuery(item.label);
                    setSearchQuery(item.label);
                  }}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <p className="font-semibold text-gray-900">{item.label}</p>
                </motion.button>
              ))}
            </div>
          </motion.section>
        )}
      </motion.section>
    </div>
  );
}
