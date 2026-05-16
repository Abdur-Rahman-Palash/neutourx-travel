'use client';

import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';
import { useTextSplitReveal, useRevealEffect } from '@/animations/gsap';
import { SectionSkeleton } from '@/components/ui/SectionSkeleton';

export default function NewsletterCTA() {
  const titleRef = useTextSplitReveal(0.03);
  const contentRef = useRevealEffect();
  const isLoading = false;

  if (isLoading) {
    return <SectionSkeleton />;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.18),_transparent_20%)]" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <h2 ref={titleRef} className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
              Stay first in line for curated travel exclusives.
            </h2>
            <p className="max-w-2xl text-base text-slate-200 leading-relaxed">
              Receive luxury travel alerts, private access updates, and bespoke itinerary recommendations delivered directly to your inbox.
            </p>
          </div>

          <motion.form
            ref={contentRef}
            className="space-y-4 rounded-[2rem] bg-slate-900/90 p-6 shadow-xl shadow-black/20"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-3 text-slate-200">
              <Mail className="h-5 w-5 text-cyan-300" />
              <span className="font-semibold uppercase tracking-[0.3em] text-slate-300">Exclusive updates</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                className="min-w-0 rounded-3xl border border-white/10 bg-slate-950/90 px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="rounded-3xl bg-cyan-400 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-950 transition hover:bg-cyan-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Join a select community of travelers who receive the best in private villas, suites, and experiential escapes first.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
