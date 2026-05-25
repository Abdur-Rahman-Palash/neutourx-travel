'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Heart, ShieldCheck, Sparkles, Star, Bell, MapPin, ArrowRight, UserPlus } from 'lucide-react';

const premiumMetrics = [
  { key: 'journeys', label: 'Booked Journeys', value: 2150, suffix: '+' },
  { key: 'satisfaction', label: 'Traveler Happiness', value: 98, suffix: '%' },
  { key: 'savings', label: 'Savings Unlocked', value: 32, suffix: '%' },
];

const premiumOffers = [
  { title: 'Executive Weekend Escape', description: 'Private lounge access, flexible cancellation, concierge transport.', badge: 'Best seller' },
  { title: 'Global Discovery Pass', description: 'Recommended for power travelers with premium loyalty credits.', badge: 'Enterprise level' },
  { title: 'Sky Suite Upgrade', description: 'Instant seat upgrade and in-flight wellness package.', badge: 'Limited time' },
];

const recommendedTrips = [
  { id: 'dubai', title: 'Dubai weekend luxury', details: 'Private tours, sunset desert drive, Michelin dining.' },
  { id: 'bali', title: 'Bali wellness retreat', details: 'Spa rituals, ocean-view villas, curated cultural sessions.' },
  { id: 'zurich', title: 'Zurich alpine escape', details: 'Helicopter transfers, private chalet, Swiss gourmet dining.' },
];

const compareTripsData = [
  { id: 'london', title: 'London Executive', tag: 'Smart city', price: '$3,800' },
  { id: 'tokyo', title: 'Tokyo Cultural', tag: 'Immersive', price: '$4,250' },
  { id: 'cape-town', title: 'Cape Town Active', tag: 'Adventure', price: '$3,420' },
];

const notifications = [
  { title: 'VIP reward unlocked', message: 'You earned 5,200 points for premium booking activity.' },
  { title: 'New offer available', message: 'AI matched a last-minute suite upgrade for your upcoming trip.' },
  { title: 'Booking reminder', message: 'Verify travel documents before your next departure.' },
];

function formatMetric(value: number, suffix: string) {
  return `${value.toLocaleString()}${suffix}`;
}

export default function EnterpriseSuite() {
  const [stats, setStats] = useState({ journeys: 0, satisfaction: 0, savings: 0 });
  const [favoriteTrips, setFavoriteTrips] = useState<string[]>([]);
  const [selectedTrips, setSelectedTrips] = useState<string[]>([]);
  const [activeNotice, setActiveNotice] = useState(0);
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);

  const loyaltyProgress = 72;

  const handleConciergeRequest = () => {
    setIsConciergeOpen(true);
    // You can add logic here to open a chat, send an email, or show a success message
    alert('Thank you for your interest! Our premium concierge team will contact you shortly to assist with your upgrades and itinerary planning.');
  };

  useEffect(() => {
    const targets = { journeys: 2150, satisfaction: 98, savings: 32 };
    const interval = window.setInterval(() => {
      setStats((current) => {
        if (current.journeys >= targets.journeys && current.satisfaction >= targets.satisfaction && current.savings >= targets.savings) {
          window.clearInterval(interval);
          return current;
        }

        return {
          journeys: Math.min(current.journeys + 38, targets.journeys),
          satisfaction: Math.min(current.satisfaction + 2, targets.satisfaction),
          savings: Math.min(current.savings + 1, targets.savings),
        };
      });
    }, 40);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const cycle = window.setInterval(() => {
      setActiveNotice((current) => (current + 1) % notifications.length);
    }, 5200);

    return () => window.clearInterval(cycle);
  }, []);

  const selectedItems = useMemo(
    () => compareTripsData.filter((trip) => selectedTrips.includes(trip.id)),
    [selectedTrips],
  );

  const handleFavorite = (id: string) => {
    setFavoriteTrips((current) =>
      current.includes(id) ? current.filter((trip) => trip !== id) : [...current, id],
    );
  };

  const handleCompareToggle = (id: string) => {
    setSelectedTrips((current) =>
      current.includes(id) ? current.filter((trip) => trip !== id) : [...current, id],
    );
  };

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] items-start">
          <div className="space-y-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
                <Sparkles className="h-4 w-4" />
                Enterprise travel automation, concierge, and loyalty intelligence.
              </div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Premium travel operations built for enterprise-ready journeys.
              </h2>
              <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
                Activate superior route recommendations, loyalty acceleration, booking transparency, and intelligent support that scales from corporate programs to private packages.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {premiumMetrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-sm dark:border-slate-800/90 dark:bg-slate-900/90"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{metric.label}</p>
                    <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      Live
                    </div>
                  </div>
                  <p className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                    {formatMetric(stats[metric.key as keyof typeof stats], metric.suffix)}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {metric.label} powered by intelligent personalization and premium service delivery.
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-4 xl:grid-cols-[1fr_0.92fr]">
              <motion.article
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="rounded-[2rem] border border-slate-200/90 bg-gradient-to-br from-white to-slate-100 p-6 shadow-xl dark:border-slate-800/90 dark:from-slate-900 dark:to-slate-950"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                      Mission control
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-slate-50">
                      Enterprise offers engineered for loyalty and conversion.
                    </h3>
                  </div>
                  <ShieldCheck className="h-8 w-8 text-blue-600 dark:text-cyan-300" />
                </div>

                <div className="mt-6 space-y-4">
                  {premiumOffers.map((offer) => (
                    <div key={offer.title} className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{offer.title}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{offer.description}</p>
                        </div>
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
                          {offer.badge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>

              <motion.aside
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="rounded-[2rem] border border-slate-200/90 bg-white/95 p-6 shadow-xl dark:border-slate-800/90 dark:bg-slate-900/95"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Notifications</p>
                    <p className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100">Live concierge updates</p>
                  </div>
                  <Bell className="h-5 w-5 text-slate-500 dark:text-slate-300" />
                </div>

                <div className="mt-6 space-y-4">
                  {notifications.map((note, index) => (
                    <div
                      key={note.title}
                      className={`rounded-3xl border p-4 transition-all ${index === activeNotice ? 'border-blue-500/20 bg-blue-50/80 dark:border-cyan-500/20 dark:bg-cyan-500/10' : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950'}`}
                    >
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{note.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{note.message}</p>
                    </div>
                  ))}
                </div>
              </motion.aside>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200/90 bg-white/95 p-6 shadow-xl dark:border-slate-800/90 dark:bg-slate-900/95">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Compare trips</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-slate-50">Spot the right package with one view.</h3>
                </div>
                <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
                  {selectedItems.length} selected
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {compareTripsData.map((trip) => (
                  <button
                    type="button"
                    key={trip.id}
                    onClick={() => handleCompareToggle(trip.id)}
                    className={`w-full rounded-3xl border p-4 text-left transition ${selectedTrips.includes(trip.id) ? 'border-blue-500 bg-blue-50/80 dark:border-cyan-500 dark:bg-cyan-500/10' : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950'}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-slate-100">{trip.title}</p>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{trip.tag}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{trip.price}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Compare</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Compare up to 3 premium itineraries with real-time cost and service signals.
                </p>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
                  disabled={selectedItems.length < 2}
                >
                  Review selection
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="rounded-[2rem] border border-slate-200/90 bg-white/95 p-6 shadow-xl dark:border-slate-800/90 dark:bg-slate-900/95"
            >
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-amber-400" />
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Recommendations</p>
              </div>
              <div className="mt-6 space-y-4">
                {recommendedTrips.map((trip) => (
                  <div key={trip.id} className="flex items-start justify-between gap-4 rounded-3xl border border-slate-200/90 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/80">
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100">{trip.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">{trip.details}</p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Add ${trip.title} to favorites`}
                      onClick={() => handleFavorite(trip.id)}
                      className={`rounded-full p-2 transition ${favoriteTrips.includes(trip.id) ? 'bg-rose-500 text-white' : 'bg-white text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200'}`}
                    >
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="rounded-[2rem] border border-slate-200/90 bg-gradient-to-br from-slate-950 to-slate-900 p-6 shadow-2xl text-white"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Loyalty performance</p>
                  <h3 className="mt-3 text-2xl font-semibold">Drive loyalty at every touchpoint.</h3>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                  Dark mode active
                </span>
              </div>
              <div className="mt-6 rounded-3xl bg-slate-800/80 p-4">
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Program completion</span>
                  <span>{loyaltyProgress}%</span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-700">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all" style={{ width: `${loyaltyProgress}%` }} />
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-4">
                  <p className="text-sm text-slate-400">Elite member benefits</p>
                  <p className="mt-2 text-lg font-semibold">Priority service</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-4">
                  <p className="text-sm text-slate-400">Travel intelligence</p>
                  <p className="mt-2 text-lg font-semibold">AI itinerary insights</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-950" />

      <div className="pointer-events-none absolute right-8 bottom-24 hidden h-60 w-60 rounded-full bg-blue-500/10 blur-3xl dark:block" />

      <div className="fixed bottom-6 right-6 z-40 rounded-3xl border border-slate-200/80 bg-white/95 p-4 shadow-2xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/95">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-xl">
            <UserPlus className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950 dark:text-white">Live travel concierge</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Ask about upgrades, alerts, and itinerary planning.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleConciergeRequest}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
        >
          {isConciergeOpen ? 'Request Sent' : 'Request concierge'}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
