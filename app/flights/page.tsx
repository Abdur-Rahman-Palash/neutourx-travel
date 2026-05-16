'use client';

import { motion } from 'framer-motion';
import { Plane, Calendar, MapPin, Users } from 'lucide-react';
import { useState } from 'react';

export default function FlightsPage() {
  const [tripType, setTripType] = useState('roundtrip');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('1');

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

  const popularFlights = [
    {
      id: 1,
      from: 'New York',
      to: 'Paris',
      price: '$450',
      duration: '7h 30m',
      stops: 'Non-stop',
      airline: 'Air France',
      departure: '10:00 AM',
      arrival: '10:30 PM',
    },
    {
      id: 2,
      from: 'London',
      to: 'Dubai',
      price: '$380',
      duration: '7h',
      stops: 'Non-stop',
      airline: 'Emirates',
      departure: '2:00 PM',
      arrival: '12:00 AM',
    },
    {
      id: 3,
      from: 'Tokyo',
      to: 'Sydney',
      price: '$520',
      duration: '9h 45m',
      stops: 'Non-stop',
      airline: 'Qantas',
      departure: '11:30 AM',
      arrival: '9:15 PM',
    },
    {
      id: 4,
      from: 'Singapore',
      to: 'Bangkok',
      price: '$150',
      duration: '2h 15m',
      stops: 'Non-stop',
      airline: 'Thai Airways',
      departure: '1:00 PM',
      arrival: '2:15 PM',
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
            Find Your Perfect Flight
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore millions of flights and find the best deals for your next adventure
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-2xl p-8 mb-12"
        >
          {/* Trip Type */}
          <div className="mb-6 flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="roundtrip"
                checked={tripType === 'roundtrip'}
                onChange={(e) => setTripType(e.target.value)}
                className="w-4 h-4"
              />
              <span className="text-gray-700">Round Trip</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="oneway"
                checked={tripType === 'oneway'}
                onChange={(e) => setTripType(e.target.value)}
                className="w-4 h-4"
              />
              <span className="text-gray-700">One Way</span>
            </label>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* From */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                From
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Departure city"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* To */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                To
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Arrival city"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Departure Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Depart
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Return Date */}
            {tripType === 'roundtrip' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Return
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Passengers */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Passengers
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Passenger' : 'Passengers'}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Plane className="w-5 h-5" />
            Search Flights
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Popular Flights Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12">
          Popular Flights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularFlights.map((flight, index) => (
            <motion.div
              key={flight.id}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm opacity-90">{flight.airline}</p>
                    <p className="text-2xl font-bold">{flight.price}</p>
                  </div>
                  <Plane className="w-6 h-6 opacity-80" />
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm text-gray-600">From</p>
                    <p className="font-semibold text-gray-900">{flight.from}</p>
                  </div>
                  <Plane className="w-4 h-4 text-gray-400 rotate-90" />
                  <div>
                    <p className="text-sm text-gray-600">To</p>
                    <p className="font-semibold text-gray-900">{flight.to}</p>
                  </div>
                </div>

                <div className="space-y-2 py-4 border-y border-gray-200">
                  <div className="flex justify-between text-sm text-gray-700">
                    <span>Departure:</span>
                    <span className="font-semibold">{flight.departure}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-700">
                    <span>Arrival:</span>
                    <span className="font-semibold">{flight.arrival}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-700">
                    <span>Duration:</span>
                    <span className="font-semibold">{flight.duration}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs text-green-600 font-semibold mb-3">
                    ✓ {flight.stops}
                  </p>
                  <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Info Section */}
      <motion.section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '✈️',
              title: 'Best Prices',
              description: 'Guaranteed lowest prices on flights worldwide',
            },
            {
              icon: '🔒',
              title: 'Secure Booking',
              description: 'Safe and secure payment processing',
            },
            {
              icon: '🛟',
              title: '24/7 Support',
              description: 'Round-the-clock customer support for your peace of mind',
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
