'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Sparkles, Compass } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTextReveal, useRevealEffect } from '@/animations/gsap';
import { sectionTransition } from '@/animations/motion';

const tours = [
  {
    name: 'Patagonia Explorer',
    duration: '12 days',
    price: 'From $4,150',
    description: 'Glacier treks, luxury camps, and wilderness lodges.',
    bullet: 'Expert-led adventure travel.',
  },
  {
    name: 'Moroccan Nights',
    duration: '9 days',
    price: 'From $3,200',
    description: 'Desert dunes, palace stays, and bespoke experiences.',
    bullet: 'Private riads and culinary tours.',
  },
  {
    name: 'Iceland Aurora Route',
    duration: '8 days',
    price: 'From $3,750',
    description: 'Northern lights, hot springs, and private ice caving.',
    bullet: 'Small group luxury tour.',
  },
];

export default function TrendingTours() {
  const titleRef = useTextReveal();
  const revealRef = useRevealEffect();
  const [isLoading] = useState(false);

  if (isLoading) {
    return <TrendingToursSkeleton />;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.2),_transparent_20%),radial-gradient(circle_at_center,_rgba(236,72,153,0.14),_transparent_20%)] pointer-events-none" />
        <div className="relative z-10 text-center mb-12">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            Trending Tours
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300">
            Discover high-demand guided journeys with immersive experiences and premium service.
          </p>
        </div>

        <motion.div ref={revealRef} variants={sectionTransition} initial="hidden" animate="visible">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{ 640: { slidesPerView: 1 }, 1024: { slidesPerView: 2 } }}
          >
            {tours.map((tour, index) => (
              <SwiperSlide key={tour.name}>
                <motion.article
                  className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-black/20 h-full"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <div className="mb-6 flex items-center justify-between text-slate-300">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.24em]">
                      <Globe className="h-4 w-4" />
                      {tour.duration}
                    </span>
                    <span className="text-2xl font-semibold text-white">{tour.price}</span>
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-4">{tour.name}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{tour.description}</p>
                  <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-200">
                    <div className="inline-flex items-center gap-2 text-sm">
                      <Sparkles className="h-4 w-4 text-amber-300" />
                      {tour.bullet}
                    </div>
                  </div>
                  <button className="magnetic-button inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 hover:scale-[1.02] transition-transform">
                    View tour
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export function TrendingToursSkeleton() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <div className="mx-auto h-12 w-56 rounded-full bg-slate-800 animate-pulse" />
          <div className="mx-auto mt-4 h-5 w-80 rounded-full bg-slate-800 animate-pulse" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="h-96 rounded-[2rem] bg-slate-900 p-8 shadow-2xl shadow-black/20 animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}
