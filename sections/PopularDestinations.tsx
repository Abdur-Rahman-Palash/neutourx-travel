'use client';

import { motion } from 'framer-motion';
import { Globe, Sparkles, Compass, MapPin } from 'lucide-react';
import { useFadeInOnScroll, useRevealEffect, useTextSplit, useStaggeredChildren } from '@/animations/gsap';
import { fadeInUp } from '@/animations/presets';
import { SectionSkeleton } from '@/components/ui/Skeleton';

const destinations = [
  {
    title: 'Amalfi Coast Retreat',
    subtitle: 'Seaside villas, private yachts, and Michelin dining.',
    tag: 'Coastal',
    icon: Globe,
  },
  {
    title: 'Kyoto Cultural Journey',
    subtitle: 'Temple tours, tea ceremonies, and exclusive guides.',
    tag: 'Cultural',
    icon: Compass,
  },
  {
    title: 'Swiss Alpine Escape',
    subtitle: 'Luxury chalets, glacier adventures, and fine wine.',
    tag: 'Adventure',
    icon: Sparkles,
  },
  {
    title: 'Seychelles Hideaway',
    subtitle: 'Private islands, coral reefs, and sunset beaches.',
    tag: 'Luxury',
    icon: MapPin,
  },
];

export default function PopularDestinations() {
  const headingRef = useTextSplit();
  const gridRef = useRevealEffect();
  const containerRef = useStaggeredChildren();
  const isLoading = false;

  if (isLoading) {
    return <PopularDestinationsSkeleton />;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="mb-12 text-center">
          <h2 ref={headingRef} className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
            Popular Destinations
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-600">
            Browse the most coveted escapes that spark inspiration and elevate every journey.
          </p>
        </div>

        <div ref={gridRef} className="grid gap-6 xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2">
          {destinations.map((destination, index) => {
            const Icon = destination.icon;
            return (
              <motion.article
                key={destination.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] hover:-translate-y-1 hover:shadow-[0_32px_100px_rgba(15,23,42,0.12)] transition-transform duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-8 relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-900 text-white shadow-lg">
                    <Icon className="h-8 w-8" />
                  </div>
                  <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700 mb-4">
                    {destination.tag}
                  </span>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{destination.title}</h3>
                  <p className="text-slate-600 mb-6">{destination.subtitle}</p>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm uppercase tracking-[0.24em] text-slate-400">Luxury escape</span>
                    <button className="magnetic-button inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 hover:bg-slate-800 transition">
                      <Sparkles className="h-4 w-4" />
                      Book now
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PopularDestinationsSkeleton() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <div className="h-12 w-48 mx-auto rounded-full bg-slate-200 animate-pulse" />
          <div className="mt-4 h-5 w-80 mx-auto rounded-full bg-slate-200 animate-pulse" />
        </div>
        <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm animate-pulse">
              <div className="h-16 w-16 rounded-3xl bg-slate-200 mb-6" />
              <div className="h-5 w-32 rounded-full bg-slate-200 mb-4" />
              <div className="h-4 w-full rounded-full bg-slate-200 mb-3" />
              <div className="h-4 w-3/4 rounded-full bg-slate-200 mb-4" />
              <div className="h-10 w-full rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
