'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Plane, Hotel, MapPin, Calendar, Users, Search, ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const floatingGradientsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const [activeTab, setActiveTab] = useState('flights');
  const [destination, setDestination] = useState('');
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [travelers, setTravelers] = useState('1');
  const [rooms, setRooms] = useState('1');

  const destinations = [
    'Paris, France',
    'Tokyo, Japan',
    'Dubai, UAE',
    'Barcelona, Spain',
    'New York, USA',
    'London, UK',
    'Bali, Indonesia',
    'Sydney, Australia',
    'Rome, Italy',
    'Bangkok, Thailand',
  ];

  const filteredDestinations = destinations.filter((d) =>
    d.toLowerCase().includes(destination.toLowerCase())
  );

  // Cinematic text reveal animation
  useEffect(() => {
    if (!titleRef.current) return;

    const text = titleRef.current.textContent || '';
    titleRef.current.innerHTML = text
      .split('')
      .map(
        (char) =>
          `<span class="inline-block opacity-0" style="display: inline-block;">${
            char === ' ' ? '&nbsp;' : char
          }</span>`
      )
      .join('');

    const spans = titleRef.current.querySelectorAll('span');

    gsap.fromTo(
      spans,
      { opacity: 0, y: 50, rotationX: -90 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: 'back.out',
        perspective: 1000,
      }
    );
  }, []);

  // Floating gradient animations
  useEffect(() => {
    const gradients = floatingGradientsRef.current.filter(Boolean);
    
    gradients.forEach((el, index) => {
      gsap.to(el, {
        y: 40 + index * 10,
        x: Math.sin(index) * 30,
        duration: 8 + index * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(el, {
        rotation: 360,
        duration: 20 + index * 5,
        repeat: -1,
        ease: 'none',
      });
    });
  }, []);

  // Parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      gsap.to(floatingGradientsRef.current.filter(Boolean), {
        x: (index, target) => mouseX * 50 - 25,
        y: (index, target) => mouseY * 50 - 25,
        duration: 1,
        overwrite: false,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const tabsData = [
    { id: 'flights', label: 'Flights', icon: Plane, color: 'from-blue-500 to-cyan-500' },
    { id: 'hotels', label: 'Hotels', icon: Hotel, color: 'from-purple-500 to-pink-500' },
    { id: 'tours', label: 'Tours', icon: MapPin, color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated Video/Gradient Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
        
        {/* Animated video background overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15),transparent_50%)]" />
      </div>

      {/* Floating Gradient Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Large floating gradient 1 */}
        <div
          ref={(el) => {
            floatingGradientsRef.current[0] = el;
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-full blur-3xl"
          style={{ willChange: 'transform' }}
        />

        {/* Large floating gradient 2 */}
        <div
          ref={(el) => {
            floatingGradientsRef.current[1] = el;
          }}
          className="absolute top-1/2 -left-32 w-80 h-80 bg-gradient-to-br from-purple-500/25 to-blue-500/20 rounded-full blur-3xl"
          style={{ willChange: 'transform' }}
        />

        {/* Floating gradient 3 */}
        <div
          ref={(el) => {
            floatingGradientsRef.current[2] = el;
          }}
          className="absolute -bottom-20 right-1/3 w-72 h-72 bg-gradient-to-br from-pink-500/20 to-purple-500/15 rounded-full blur-3xl"
          style={{ willChange: 'transform' }}
        />

        {/* Floating accent */}
        <div
          ref={(el) => {
            floatingGradientsRef.current[3] = el;
          }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-500/15 rounded-full blur-2xl"
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cinematic Text Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-16 pt-12"
        >
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-white leading-tight"
            style={{ perspective: '1000px' }}
          >
            Explore The World
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-lg md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover extraordinary destinations, book unforgettable experiences, and create memories that last a lifetime
            </p>
            <div className="flex items-center gap-2 text-blue-300">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-400" />
              <span className="text-sm tracking-widest">WANDERLUST AWAITS</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-blue-400" />
            </div>
          </motion.div>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="relative"
        >
          {/* Glass morphism card */}
          <div
            className="relative rounded-3xl p-8 md:p-10 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              {/* Tabs */}
              <div className="flex gap-2 mb-8 border-b border-white/10 pb-4">
                {tabsData.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;

                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        isActive
                          ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                          : 'bg-white/5 text-blue-100 hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {tab.label}
                    </motion.button>
                  );
                })}
              </div>

              {/* Search Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Destination with Autocomplete */}
                <div className="lg:col-span-2 relative">
                  <label className="block text-sm font-semibold text-blue-100 mb-2">
                    Where are you going?
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-blue-300 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search destinations..."
                      value={destination}
                      onChange={(e) => {
                        setDestination(e.target.value);
                        setShowDestinationSuggestions(true);
                      }}
                      onFocus={() => setShowDestinationSuggestions(true)}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    />

                    {/* Autocomplete Suggestions */}
                    {showDestinationSuggestions && filteredDestinations.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden"
                      >
                        {filteredDestinations.slice(0, 5).map((dest, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => {
                              setDestination(dest);
                              setShowDestinationSuggestions(false);
                            }}
                            whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                            className="w-full px-4 py-2 text-left text-white flex items-center gap-2 transition-colors"
                          >
                            <MapPin className="w-4 h-4 text-blue-400" />
                            {dest}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Date Picker */}
                {(activeTab === 'flights' || activeTab === 'hotels') && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-blue-100 mb-2">
                        {activeTab === 'hotels' ? 'Check-in' : 'Depart'}
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-blue-300 pointer-events-none" />
                        <input
                          type="date"
                          value={checkInDate}
                          onChange={(e) => setCheckInDate(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-blue-100 mb-2">
                        {activeTab === 'hotels' ? 'Check-out' : 'Return'}
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-blue-300 pointer-events-none" />
                        <input
                          type="date"
                          value={checkOutDate}
                          onChange={(e) => setCheckOutDate(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Travelers / Rooms Selector */}
                <div>
                  <label className="block text-sm font-semibold text-blue-100 mb-2">
                    {activeTab === 'hotels' ? 'Rooms' : 'Travelers'}
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-3.5 w-5 h-5 text-blue-300 pointer-events-none" />
                    <select
                      value={activeTab === 'hotels' ? rooms : travelers}
                      onChange={(e) =>
                        activeTab === 'hotels'
                          ? setRooms(e.target.value)
                          : setTravelers(e.target.value)
                      }
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {activeTab === 'hotels' ? 'Room' : 'Person'}
                          {num > 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex items-end">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Search</span>
                  </motion.button>
                </div>
              </div>

              {/* Quick Filters */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-6 flex flex-wrap gap-2"
              >
                <span className="text-xs text-blue-200">Quick options:</span>
                {['Round trip', 'One way', 'Multi-city'].map((option) => (
                  <motion.button
                    key={option}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-blue-100 text-xs font-semibold rounded-full transition-all duration-300 border border-white/10"
                  >
                    {option}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-blue-200">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-blue-400" />
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-1 h-20 bg-gradient-to-b from-blue-500 to-transparent opacity-30" />
      <div className="absolute bottom-1/4 left-10 w-1 h-20 bg-gradient-to-b from-purple-500 to-transparent opacity-30" />
    </section>
  );
}