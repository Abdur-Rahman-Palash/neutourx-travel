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
    <footer className="bg-background text-foreground py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Premium support, curated connections, total travel confidence.
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-text-secondary">
            From private arrivals to 24/7 concierge, your journey remains seamless long after the booking is confirmed.
          </p>
        </div>

        <motion.div ref={contentRef} className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-sm">
              <div className="mb-6 inline-flex items-center gap-3 text-blue-500">
                <Sparkles className="h-5 w-5" />
                <span className="uppercase tracking-[0.3em] text-sm">Signature service</span>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Dedicated team support, VIP arrival services, and custom itinerary management for every step of your trip.
              </p>
            </div>
            <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-sm">
              <div className="mb-6 inline-flex items-center gap-3 text-blue-500">
                <Globe className="h-5 w-5" />
                <span className="uppercase tracking-[0.3em] text-sm">Global reach</span>
              </div>
              <p className="text-text-secondary leading-relaxed">
                A world-class network of boutique hotels, private guides, and trusted brands across every destination.
              </p>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-border bg-surface-secondary p-8 sm:p-10 shadow-sm">
            <div className="mb-6 inline-flex items-center gap-3 text-blue-500">
              <ShieldCheck className="h-5 w-5" />
              <span className="uppercase tracking-[0.3em] text-sm">Travel safe</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Secure & Reliable</h3>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Every booking is protected by industry-leading security and our travel guarantee.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-background font-bold transition-all hover:bg-primary/90">
                <Phone className="h-4 w-4" />
                Support
              </button>
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
