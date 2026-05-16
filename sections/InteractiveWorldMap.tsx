'use client';

import { motion } from 'framer-motion';
import { Globe, MapPin, Sparkles, Compass } from 'lucide-react';
import { useFadeInOnScroll, useParallax, useSectionTransition, useTextSplitReveal } from '@/animations/gsap';
import { SectionSkeleton } from '@/components/ui/SectionSkeleton';

const points = [
  { label: 'Paris', description: 'Curated city escapes with private museum access.', left: '54%', top: '34%', icon: Compass },
  { label: 'Dubai', description: 'Skyline resorts, desert safaris, and business luxury.', left: '68%', top: '44%', icon: Sparkles },
  { label: 'Tokyo', description: 'Modern design retreats with traditional immersive journeys.', left: '83%', top: '28%', icon: Globe },
  { label: 'Cape Town', description: 'Coastal villas and vineyard adventures.', left: '60%', top: '70%', icon: MapPin },
];

export default function InteractiveWorldMap() {
  const titleRef = useTextSplitReveal(0.03);
  const sectionRef = useFadeInOnScroll();
  const mapRef = useParallax(0.15);
  const contentRef = useSectionTransition();
  const isLoading = false;

  if (isLoading) {
    return <SectionSkeleton />;
  }

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.12),_transparent_20%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div ref={sectionRef} className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            Explore the map of premium travel intelligence.
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300">
            Pinpoint the journeys that match your style, then jump to personalized planning in one click.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <motion.div
            ref={mapRef}
            className="relative h-[640px] rounded-[2rem] overflow-hidden border border-white/10 bg-[url('/world-map.jpg')] bg-cover bg-center shadow-[0_40px_120px_rgba(15,23,42,0.25)]"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.label}
                  className="absolute w-56 rounded-3xl border border-white/10 bg-slate-950/85 p-4 shadow-xl"
                  style={{ left: point.left, top: point.top, transform: 'translate(-50%, -50%)' }}
                >
                  <div className="inline-flex items-center gap-2 text-sm text-slate-300 mb-3">
                    <Icon className="h-4 w-4 text-cyan-300" />
                    {point.label}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-200">{point.description}</p>
                </div>
              );
            })}
          </motion.div>

          <div ref={contentRef} className="space-y-8">
            <div className="rounded-[2rem] bg-white/5 p-8 border border-white/10 backdrop-blur-xl shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
              <p className="uppercase tracking-[0.3em] text-sm text-cyan-200 mb-3">Interactive planning</p>
              <h3 className="text-3xl font-semibold text-white mb-4">Navigate journeys with precision and confidence.</h3>
              <p className="text-slate-300 leading-relaxed">
                Our world map experience layers curated destinations, premium tours, and local insights into one immersive planning surface.
              </p>
            </div>

            <div className="grid gap-6">
              {['Real-time destination filtering', 'Pro-level itinerary discovery', 'VIP route recommendations'].map((feature) => (
                <div key={feature} className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-6 shadow-lg shadow-black/20">
                  <p className="text-lg font-semibold text-white mb-3">{feature}</p>
                  <p className="text-slate-300">Designed to make every trip feel curated, fast, and unforgettable.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
