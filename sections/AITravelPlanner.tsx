'use client';

import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Sparkles, Rocket } from 'lucide-react';
import { useTextSplitReveal, useRevealEffect } from '@/animations/gsap';
import { SectionSkeleton } from '@/components/ui/SectionSkeleton';

const features = [
  { title: 'Intelligent itinerary design', description: 'AI learns your preferences and recommends ultra-personalized travel routes.', icon: Cpu },
  { title: 'Smart budgeting', description: 'Maximize luxury without compromise using curated cost insights.', icon: ShieldCheck },
  { title: 'Instant concierge', description: 'Book dining, transport, and experiences from one intelligent interface.', icon: Rocket },
];

export default function AITravelPlanner() {
  const titleRef = useTextSplitReveal(0.03);
  const contentRef = useRevealEffect();
  const isLoading = false;

  if (isLoading) {
    return <SectionSkeleton />;
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.25),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.18),_transparent_20%)] pointer-events-none" />
        <div className="relative z-10 text-center mb-16">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            AI-powered planning for seamless, unforgettable journeys.
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-slate-300">
            Generate tailored luxury travel plans in seconds, with proactive recommendations and premium service cues built in.
          </p>
        </div>

        <motion.div ref={contentRef} className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr] items-start relative z-10">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
            <div className="mb-8 space-y-6">
              <span className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-slate-200">
                <Sparkles className="h-4 w-4 text-amber-300" />
                Next-generation concierge
              </span>
              <h3 className="text-3xl font-semibold text-white">Every journey designed intelligently.</h3>
              <p className="text-slate-300 leading-relaxed">
                Start with a destination, mood, or event — then let the planner present options with the right balance of luxury, adventure, and effortless execution.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/15 text-cyan-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div
            className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-[0_40px_100px_rgba(15,23,42,0.24)]"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="mb-8 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6">
              <div className="flex items-center justify-between gap-4 mb-6 text-slate-200">
                <span className="text-sm uppercase tracking-[0.3em] text-cyan-300">Planner snapshot</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-100">AI</span>
              </div>
              <div className="space-y-5">
                {['Luxury suite selection', 'Private transfer options', 'Cultural event alerts'].map((item) => (
                  <div key={item} className="rounded-3xl bg-white/5 p-4 text-sm text-slate-300">
                    • {item}
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full rounded-full bg-cyan-400 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-cyan-300 transition">
              Start your custom plan
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
