'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Award, Globe, Users, Star } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Booking',
    description: 'Your payments and data are protected with bank-level security.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer service for peace of mind.'
  },
  {
    icon: Award,
    title: 'Best Prices',
    description: 'Guaranteed lowest prices with price match promise.'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Access to millions of hotels and flights worldwide.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Travel specialists ready to craft your perfect journey.'
  },
  {
    icon: Star,
    title: 'Premium Service',
    description: 'Luxury experiences tailored to your preferences.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose NEUTOURX?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our premium travel services designed for the modern traveler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}