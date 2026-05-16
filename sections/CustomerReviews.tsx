'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTextSplit, useRevealEffect, useStaggeredChildren } from '@/animations/gsap';
import { fadeIn } from '@/animations/presets';

const reviews = [
  {
    author: 'Lena Morales',
    title: 'A flawless luxury journey',
    location: 'Miami, USA',
    rating: 5,
    quote: 'NEUTOURX curated a private island retreat that felt effortless and unforgettable.',
  },
  {
    author: 'Nikos Stavros',
    title: 'The art of travel',
    location: 'Athens, Greece',
    rating: 5,
    quote: 'Every moment was personalized, from the hotel to the exclusive villa dining.',
  },
  {
    author: 'Aya Tanaka',
    title: 'Premium service from start to finish',
    location: 'Tokyo, Japan',
    rating: 5,
    quote: 'The planning team anticipated every need and delivered incredible experiences.',
  },
];

export default function CustomerReviews() {
  const headingRef = useTextSplit();
  const gridRef = useRevealEffect();
  const containerRef = useStaggeredChildren();
  const isLoading = false;

  if (isLoading) {
    return <CustomerReviewsSkeleton />;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="mb-12 text-center">
          <h2 ref={headingRef} className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            Customer Reviews
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-400">
            Trusted testimonials from travelers who experienced NEUTOURX first-hand.
          </p>
        </div>

        <div ref={gridRef} className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.author}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition-transform duration-400"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-slate-700 opacity-30" />
              <div className="mb-6 flex gap-2 text-amber-400">
                {[...Array(review.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5" />
                ))}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{review.title}</h3>
              <p className="text-slate-300 leading-relaxed mb-6">{review.quote}</p>
              <div className="rounded-3xl bg-white/5 p-5">
                <p className="text-lg font-semibold">{review.author}</p>
                <p className="text-sm text-slate-400">{review.location}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CustomerReviewsSkeleton() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <div className="mx-auto h-12 w-56 rounded-full bg-slate-800 animate-pulse" />
          <div className="mx-auto mt-4 h-5 w-80 rounded-full bg-slate-800 animate-pulse" />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="h-80 rounded-[2rem] bg-slate-900 p-8 animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}
