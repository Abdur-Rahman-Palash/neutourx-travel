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
    <section className="py-20 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose NEUTOURX
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Experience the world with confidence and luxury through our premium travel services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-surface rounded-2xl border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}