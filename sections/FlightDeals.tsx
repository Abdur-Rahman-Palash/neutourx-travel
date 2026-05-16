'use client';

import { motion } from 'framer-motion';
import { Plane, Clock, Sparkles } from 'lucide-react';
import { useRevealEffect, useTextReveal } from '@/animations/gsap';
import { sectionTransition } from '@/animations/motion';

const deals = [
  {
    route: 'NYC → LON',
    airline: 'Aurora Air',
    price: '$429',
    date: 'Jun 14 - Jun 21',
    perks: ['Business class upgrade', 'Priority boarding'],
  },
  {
    route: 'LAX → TYO',
    airline: 'Zenith Airways',
    price: '$679',
    date: 'Jul 02 - Jul 10',
    perks: ['Lounge access', 'Complimentary transfer'],
  },
  {
    route: 'SYD → BKK',
    airline: 'Pacific Luxe',
    price: '$579',
    date: 'Aug 05 - Aug 14',
    perks: ['Flexible change', 'Premium meal service'],
  },
];

export default function FlightDeals() {
  const headingRef = useTextReveal();
  const revealRef = useRevealEffect();
  const isLoading = false;

  if (isLoading) {
    return <FlightDealsSkeleton />;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 ref={headingRef} className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            Flight Deals
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-200">
            Unlock premium fares, luxury upgrades, and smart trip planning for every route.
          </p>
        </div>

        <motion.div ref={revealRef} variants={sectionTransition} initial="hidden" animate="visible" className="grid gap-6 lg:grid-cols-3">
          {deals.map((deal) => (
            <motion.div
              key={deal.route}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.18)]"
            >
              <div className="mb-5 flex items-center justify-between text-sm uppercase tracking-[0.22em] text-slate-200">
                <span className="inline-flex items-center gap-2">
                  <Plane className="h-4 w-4" />
                  {deal.airline}
                </span>
                <span className="inline-flex items-center gap-2 text-amber-200">
                  <Clock className="h-4 w-4" />
                  {deal.date}
                </span>
              </div>
              <h3 className="text-3xl font-semibold mb-3">{deal.route}</h3>
              <p className="text-slate-200 mb-6 leading-relaxed">Experience elevated travel with premium service and seamless transfers.</p>
              <div className="mb-6 rounded-3xl bg-white/10 p-5 text-slate-100">
                <ul className="space-y-3">
                  {deal.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-3">
                      <Sparkles className="h-4 w-4 text-amber-300" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-4xl font-bold">{deal.price}</span>
                <button className="magnetic-button rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-2xl shadow-black/20 hover:scale-[1.02] transition-transform">
                  Book flight
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function FlightDealsSkeleton() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <div className="mx-auto h-12 w-56 rounded-full bg-slate-400/30 animate-pulse" />
          <div className="mx-auto mt-4 h-5 w-80 rounded-full bg-slate-400/30 animate-pulse" />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="h-80 rounded-[2rem] bg-white/10 p-8 animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}
