'use client';

import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';
import { useTextSplitReveal, useRevealEffect } from '@/animations/gsap';
import { SectionSkeleton } from '@/components/ui/SectionSkeleton';

export default function NewsletterCTA() {
  const titleRef = useTextSplitReveal(0.03);
  const contentRef = useRevealEffect<HTMLFormElement>();
  const isLoading = false;

  if (isLoading) {
    return <SectionSkeleton />;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="relative max-w-6xl mx-auto rounded-[2.5rem] border border-border bg-surface-secondary p-10 shadow-[0_40px_120px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.1),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(236,72_153,0.05),_transparent_20%)]" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <h2 ref={titleRef} className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4 text-foreground">
              Stay first in line for curated travel exclusives.
            </h2>
            <p className="max-w-2xl text-base text-text-secondary leading-relaxed">
              Receive luxury travel alerts, private access updates, and bespoke itinerary recommendations delivered directly to your inbox.
            </p>
          </div>

          <motion.form
            ref={contentRef}
            className="space-y-4 rounded-[2rem] bg-background border border-border p-6 shadow-xl shadow-black/5"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-3 text-text-secondary">
              <Mail className="h-5 w-5 text-blue-500" />
              <span className="font-semibold uppercase tracking-[0.3em] text-xs">Exclusive updates</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                className="min-w-0 rounded-3xl border border-border bg-background px-5 py-4 text-foreground placeholder:text-foreground/30 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              <button
                type="submit"
                className="rounded-3xl bg-primary px-8 py-4 font-bold text-background transition-all hover:bg-primary/90 active:scale-95"
              >
                Join Now
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
