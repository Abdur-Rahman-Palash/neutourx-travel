'use client';

import { motion } from 'framer-motion';
import { Compass, Sparkles, Globe, Waves } from 'lucide-react';
import { useFadeInOnScroll, useRevealEffect, useTextReveal } from '@/animations/gsap';

const packages = [
  {
    title: 'Signature City Escape',
    subtitle: 'Iconic destinations with VIP experiences',
    price: '$2,450',
    duration: '7 days',
    highlights: ['Private transfers', 'Luxury suite', 'Personal concierge'],
    icon: Globe,
  },
  {
    title: 'Coastal Retreat',
    subtitle: 'Secluded villas and gourmet sailing adventures',
    price: '$3,180',
    duration: '9 days',
    highlights: ['Sea-view villa', 'Private yacht', 'Fine dining'],
    icon: Waves,
  },
  {
    title: 'Cultural Discovery',
    subtitle: 'Curated journeys that reveal local secrets',
    price: '$2,980',
    duration: '8 days',
    highlights: ['Guided tours', 'Boutique hotels', 'Exclusive events'],
    icon: Compass,
  },
];

export default function TravelPackages() {
  const sectionRef = useFadeInOnScroll();
  const titleRef = useTextReveal();
  const contentRef = useRevealEffect();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-secondary">
      <div className="max-w-7xl mx-auto">
        <div ref={sectionRef} className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Curated luxury travel packages built to delight.
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-text-secondary">
            Choose from our signature escapes designed to make every trip feel effortless and unforgettable.
          </p>
        </div>

        <div ref={contentRef} className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.article
                key={pkg.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[0_30px_80px_rgba(15,23,42,0.08)] transition-shadow hover:shadow-[0_30px_90px_rgba(15,23,42,0.18)]"
                aria-labelledby={`package-title-${index}`}
              >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-400 opacity-20 blur-2xl" />
                <div className="relative p-8 sm:p-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary text-background shadow-lg shadow-slate-900/10 mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 id={`package-title-${index}`} className="text-2xl font-semibold text-foreground mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.24em] text-text-secondary mb-6">
                    {pkg.subtitle}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-col gap-3 text-foreground mb-4 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-3xl font-bold">{pkg.price}</span>
                      <span className="inline-flex rounded-full bg-foreground/5 px-3 py-1 text-sm font-semibold text-text-secondary">
                        {pkg.duration}
                      </span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-foreground/10" />
                  </div>

                  <ul className="space-y-3 mb-8 text-text-secondary">
                    {pkg.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <Sparkles className="mt-1 h-4 w-4 text-blue-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Book This Experience
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}