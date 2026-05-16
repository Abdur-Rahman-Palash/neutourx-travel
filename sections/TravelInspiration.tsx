'use client';

import { motion } from 'framer-motion';
import { Sparkles, Camera, Paintbrush, Heart } from 'lucide-react';
import { useFadeInOnScroll, useSectionTransition, useTextSplitReveal } from '@/animations/gsap';
import { SectionSkeleton } from '@/components/ui/SectionSkeleton';

const inspirations = [
  { title: 'Architectural elegance', description: 'Luxury stays set within iconic design and cultural landmarks.', icon: Camera },
  { title: 'Gastronomic journeys', description: 'Michelin-worthy dining, private tastings, and local chefs.', icon: Paintbrush },
  { title: 'Wellness escapes', description: 'Spa sanctuaries, thermal retreats, and wellness-first itineraries.', icon: Heart },
];

export default function TravelInspiration() {
  const titleRef = useTextSplitReveal(0.03);
  const sectionRef = useFadeInOnScroll();
  const contentRef = useSectionTransition();
  const isLoading = false;

  if (isLoading) {
    return <SectionSkeleton />;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div ref={sectionRef} className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
            Travel inspiration for every elevated traveler.
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-slate-600">
            Discover the handcrafted itineraries, immersive experiences, and soft luxury retreats that define a premium escape.
          </p>
        </div>

        <motion.div ref={contentRef} className="grid gap-6 lg:grid-cols-3">
          {inspirations.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_80px_rgba(15,23,42,0.16)]"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-white shadow-lg shadow-slate-900/10">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">
                  Learn more
                  <Sparkles className="h-4 w-4 text-amber-400" />
                </span>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
