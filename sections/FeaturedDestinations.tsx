'use client';

import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import { useFadeInOnScroll, useRevealEffect } from '@/animations/gsap';

const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    image: '/hotel.jpg',
    rating: 4.8,
    price: 'From $1,299',
    description: 'City of Light and Love'
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    image: '/flight.jpg',
    rating: 4.9,
    price: 'From $1,599',
    description: 'Modern meets Traditional'
  },
  {
    id: 3,
    name: 'Bali, Indonesia',
    image: '/dubai.jpg',
    rating: 4.7,
    price: 'From $899',
    description: 'Tropical Paradise'
  },
  {
    id: 4,
    name: 'New York, USA',
    image: '/hotel.jpg',
    rating: 4.6,
    price: 'From $1,099',
    description: 'The City That Never Sleeps'
  }
];

export default function FeaturedDestinations() {
  const fadeRef = useFadeInOnScroll();
  const revealRef = useRevealEffect();

  return (
    <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-surface-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={fadeRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Featured Destinations
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Discover handpicked destinations that offer unforgettable experiences
          </p>
        </div>

        <div ref={revealRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic-bezier easing
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                backgroundColor: 'var(--color-surface)',
                boxShadow: 'var(--shadow-lg)',
              }}
              role="article"
              aria-labelledby={`destination-${destination.id}`}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 z-20 glass rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4" style={{ color: '#fbbf24' }} fill="currentColor" />
                  <span className="text-white font-semibold">{destination.rating}</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  <h3 id={`destination-${destination.id}`} className="text-xl font-bold">{destination.name}</h3>
                </div>
                <p className="text-sm opacity-90 mb-3">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">{destination.price}</span>
                  <button
                    className="glass hover:bg-white/30 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label={`Explore ${destination.name}`}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}