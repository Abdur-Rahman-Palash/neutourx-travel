'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowRight, PenTool, Globe } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTextSplitReveal, useRevealEffect } from '@/animations/gsap';
import { SectionSkeleton } from '@/components/ui/SectionSkeleton';

const posts = [
  {
    title: 'Insider Access to Hidden Villas',
    category: 'Luxury Living',
    excerpt: 'See how our editors uncover the most exclusive private villa experiences across the globe.',
  },
  {
    title: 'The Art of Slow Travel',
    category: 'Curated Journeys',
    excerpt: 'Learn why thoughtful travel planning leads to more meaningful luxury escapes.',
  },
  {
    title: 'Wellness Retreats Reimagined',
    category: 'Health & Style',
    excerpt: 'A guide to the most transformative spa escapes and wellness sanctuaries.',
  },
];

export default function TravelBlogs() {
  const titleRef = useTextSplitReveal(0.03);
  const cardRef = useRevealEffect();
  const isLoading = false;

  if (isLoading) {
    return <SectionSkeleton />;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            Journeys, stories, and hotels that inspire every itinerary.
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-slate-300">
            Learn from premium travel insiders who design unforgettable experiences for discerning guests.
          </p>
        </div>

        <div ref={cardRef} className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
          >
            {posts.map((post) => (
              <SwiperSlide key={post.title}>
                <motion.article
                  className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="mb-4 inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
                    <PenTool className="h-4 w-4" />
                    {post.category}
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-4">{post.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-8">{post.excerpt}</p>
                  <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-white/15 hover:bg-slate-100 transition">
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
