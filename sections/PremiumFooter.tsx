'use client';

import { motion } from 'framer-motion';
import { Sparkles, Globe, ShieldCheck, Phone } from 'lucide-react';
import { useTextSplitReveal, useRevealEffect } from '@/animations/gsap';

const links = [
  { label: 'Our Story', href: '#' },
  { label: 'Exclusive Experiences', href: '#' },
  { label: 'Bespoke Services', href: '#' },
  { label: 'Contact Concierge', href: '#' },
];

const socials = ['Instagram', 'LinkedIn', 'TikTok', 'Pinterest'];

export default function PremiumFooter() {
  const titleRef = useTextSplitReveal(0.03);
  const contentRef = useRevealEffect();

  return (
    <footer className="bg-slate-950 text-slate-200 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
            Premium support, curated connections, total travel confidence.
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-slate-400">
            From private arrivals to 24/7 concierge, your journey remains seamless long after the booking is confirmed.
          </p>
        </div>

        <motion.div ref={contentRef} className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <div className="mb-6 inline-flex items-center gap-3 text-cyan-300">
                <Sparkles className="h-5 w-5" />
                <span className="uppercase tracking-[0.3em] text-sm">Signature service</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Dedicated team support, VIP arrival services, and custom itinerary management for every step of your trip.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
              <div className="mb-6 inline-flex items-center gap-3 text-cyan-300">
                <Globe className="h-5 w-5" />
                <span className="uppercase tracking-[0.3em] text-sm">Global reach</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                A world-class network of boutique hotels, private guides, and trusted brands across every destination.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Concierge</p>
                <h3 className="text-3xl font-semibold text-white">Contact our premium travel desk</h3>
              </div>
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div className="space-y-4 text-slate-300">
              <p>Need same-day itinerary adjustments or private event access? Speak with our expert travel advisors anytime.</p>
              <p className="font-semibold text-white">hello@neutourx.com</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 border-t border-white/10 pt-10 text-slate-400 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="uppercase tracking-[0.3em] text-xs text-cyan-300">Navigation</p>
            <div className="flex flex-wrap gap-4">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="text-sm transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <p className="uppercase tracking-[0.3em] text-xs text-cyan-300">Follow us</p>
            <div className="flex flex-wrap gap-4">
              {socials.map((social) => (
                <a key={social} href="#" className="text-sm transition hover:text-white">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
