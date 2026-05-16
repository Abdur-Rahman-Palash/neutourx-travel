'use client';

import { motion } from 'framer-motion';
import { Smartphone, ShieldCheck, Sparkles } from 'lucide-react';
import { useTextSplitReveal, useRevealEffect } from '@/animations/gsap';
import { SectionSkeleton } from '@/components/ui/SectionSkeleton';

export default function MobileAppPromotion() {
  const titleRef = useTextSplitReveal(0.03);
  const contentRef = useRevealEffect();
  const isLoading = false;

  if (isLoading) {
    return <SectionSkeleton />;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-white to-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[0.9fr_0.95fr] items-center">
        <div>
          <div className="text-center lg:text-left mb-10">
            <h2 ref={titleRef} className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
              Travel control in the palm of your hand.
            </h2>
            <p className="mx-auto lg:mx-0 max-w-2xl text-base sm:text-lg text-slate-600">
              Access your itinerary, concierge, and real-time trip updates through our premium mobile experience.
            </p>
          </div>

          <motion.div ref={contentRef} className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Instant booking', icon: Smartphone },
              { label: '24/7 concierge', icon: ShieldCheck },
              { label: 'VIP notifications', icon: Sparkles },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="text-lg font-semibold text-slate-900">{item.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[420px] rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-[0_40px_80px_rgba(15,23,42,0.14)]"
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="rounded-[2rem] overflow-hidden bg-slate-950 text-white">
            <div className="flex items-center justify-between px-5 py-4 bg-slate-900">
              <span className="text-sm uppercase tracking-[0.3em] text-cyan-300">App preview</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-100">v2.0</span>
            </div>
            <div className="space-y-5 p-6">
              <div className="rounded-3xl bg-slate-900/90 p-5">
                <div className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">Your journey</div>
                <div className="space-y-4">
                  {['Booking confirmed', 'Private transfer on route', 'Concierge note added'].map((item) => (
                    <div key={item} className="rounded-3xl bg-slate-950/80 p-4 text-sm text-slate-300">{item}</div>
                  ))}
                </div>
              </div>
              <button className="w-full rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-cyan-400 transition">
                Download the app
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
