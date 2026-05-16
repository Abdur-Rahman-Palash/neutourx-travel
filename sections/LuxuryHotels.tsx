'use client';

import { motion } from 'framer-motion';
import { BedDouble, Key, Building2, Sparkles } from 'lucide-react';
import { useFadeInOnScroll, useRevealEffect } from '@/animations/gsap';
import { fadeInUp } from '@/animations/presets';

const hotels = [
  {
    title: 'The Regent Collection',
    location: 'Dubai, UAE',
    price: 'From $620 / night',
    features: ['Sky pool terrace', 'Private butler', 'Culinary atelier'],
    icon: Building2,
  },
  {
    title: 'The Paragon Suite',
    location: 'Paris, France',
    price: 'From $790 / night',
    features: ['Rooftop spa', 'Chauffeur service', 'Michelin dining'],
    icon: BedDouble,
  },
  {
    title: 'Oasis Private Villa',
    location: 'Bali, Indonesia',
    price: 'From $540 / night',
    features: ['Infinity pool', 'Ocean views', 'Wellness rituals'],
    icon: Key,
  },
];

export default function LuxuryHotels() {
  const sectionRef = useFadeInOnScroll();
  const cardRef = useRevealEffect();
  const isLoading = false;

  if (isLoading) {
    return <LuxuryHotelsSkeleton />;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400 mb-3">Exclusive stays</p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900">Luxury Hotels</h2>
        </div>

        <div ref={cardRef} className="grid gap-6 lg:grid-cols-3">
          {hotels.map((hotel, index) => {
            const Icon = hotel.icon;
            return (
              <motion.div
                key={hotel.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.12 }}
                className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)] hover:bg-slate-900 hover:text-white transition-colors duration-500"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-slate-900 shadow-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{hotel.title}</h3>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-6">{hotel.location}</p>
                <ul className="mb-8 space-y-3 text-slate-600 group-hover:text-slate-200">
                  {hotel.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Sparkles className="h-4 w-4 text-amber-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-lg font-semibold">{hotel.price}</span>
                  <button className="magnetic-button rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 hover:bg-slate-800 transition">
                    Reserve
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function LuxuryHotelsSkeleton() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <div className="h-4 w-32 rounded-full bg-slate-200 mx-auto animate-pulse" />
          <div className="mt-4 h-10 w-80 rounded-full bg-slate-200 mx-auto animate-pulse" />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="rounded-[2rem] border border-slate-200 bg-slate-100 p-8 animate-pulse">
              <div className="h-16 w-16 rounded-3xl bg-slate-200 mb-6" />
              <div className="h-5 w-48 rounded-full bg-slate-200 mb-3" />
              <div className="h-4 w-32 rounded-full bg-slate-200 mb-6" />
              <div className="space-y-3">
                <div className="h-4 w-full rounded-full bg-slate-200" />
                <div className="h-4 w-5/6 rounded-full bg-slate-200" />
                <div className="h-4 w-4/6 rounded-full bg-slate-200" />
              </div>
              <div className="mt-8 h-11 w-28 rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
