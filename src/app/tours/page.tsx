'use client';

import { Star, Clock, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const topTours = [
    {
        id: 1,
        title: "Kyoto Tea Ceremony & Private Geisha Dinner",
        location: "Kyoto, Japan",
        duration: "4 Hours",
        rating: 5.0,
        reviews: 84,
        price: 450,
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
        badge: "Exclusive"
    },
    {
        id: 2,
        title: "Skip-the-Line: Louvre Museum Private Tour",
        location: "Paris, France",
        duration: "3 Hours",
        rating: 4.9,
        reviews: 320,
        price: 180,
        image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=1000&auto=format&fit=crop",
        badge: "Best Seller"
    },
    {
        id: 3,
        title: "Machu Picchu Luxury Train & Guided Hike",
        location: "Cusco, Peru",
        duration: "12 Hours",
        rating: 5.0,
        reviews: 42,
        price: 680,
        image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000&auto=format&fit=crop",
        badge: "Adventure"
    },
    {
        id: 4,
        title: "Amalfi Coast Private Yacht Charter",
        location: "Positano, Italy",
        duration: "6 Hours",
        rating: 5.0,
        reviews: 28,
        price: 1200,
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function ToursPage() {
    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Hero Banner */}
            <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
                <Image
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2600&auto=format&fit=crop"
                    alt="Tours Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">Curated Experiences</h1>
                    <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto">
                        Discover the world's most exclusive tours and activities, handpicked for the discerning traveler.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Filters Sidebar */}
                <div className="lg:col-span-1 space-y-8 sticky top-24 h-fit">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-lg mb-6 flex justify-between">
                            Filters
                            <span className="text-xs text-accent-cyan cursor-pointer font-medium hover:underline mt-1">Reset</span>
                        </h3>

                        {/* Price Range */}
                        <div className="mb-6">
                            <label className="text-sm font-semibold text-gray-700 mb-2 block">Price Range</label>
                            <div className="flex gap-2 text-sm">
                                <span className="bg-gray-100 px-3 py-1 rounded">£0</span>
                                <span className="text-gray-400 self-center">-</span>
                                <span className="bg-gray-100 px-3 py-1 rounded">£5,000+</span>
                            </div>
                            <input type="range" className="w-full mt-4 accent-primary" />
                        </div>

                        {/* Duration */}
                        <div className="mb-6 border-t border-gray-100 pt-6">
                            <label className="text-sm font-semibold text-gray-700 mb-3 block">Duration</label>
                            <div className="space-y-2">
                                {['Up to 1 hour', '1 to 4 hours', '4 hours to 1 day', 'Multi-day'].map(d => (
                                    <label key={d} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded -ml-1">
                                        <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                                        <span className="text-sm text-gray-600">{d}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="mb-6 border-t border-gray-100 pt-6">
                            <label className="text-sm font-semibold text-gray-700 mb-3 block">Rating</label>
                            <div className="space-y-2">
                                {[5, 4, 3].map(r => (
                                    <label key={r} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded -ml-1">
                                        <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                                        <div className="flex text-accent-gold">
                                            {Array.from({ length: r }).map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                            {Array.from({ length: 5 - r }).map((_, i) => <Star key={i} className="w-3 h-3 text-gray-200" />)}
                                        </div>
                                        <span className="text-xs text-gray-500">& Up</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="border-t border-gray-100 pt-6">
                            <label className="flex items-center gap-2 cursor-pointer mb-2">
                                <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                                <span className="text-sm text-gray-600 flex items-center gap-2">
                                    <ShieldCheck className="w-3 h-3 text-green-600" /> Free Cancellation
                                </span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded text-primary focus:ring-primary" />
                                <span className="text-sm text-gray-600 flex items-center gap-2">
                                    <Globe className="w-3 h-3 text-blue-500" /> English Speaking Guide
                                </span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Tour Grid */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {topTours.map((tour, idx) => (
                        <motion.div
                            key={tour.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group hover:shadow-lg transition-all duration-300"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {tour.badge && (
                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm uppercase tracking-wide">
                                        {tour.badge}
                                    </span>
                                )}
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-1.5 rounded-lg">
                                    {/* Heart icon placeholder */}
                                    <div className="w-4 h-4 rounded-full border border-white/50" />
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-1 text-accent-gold text-xs font-bold">
                                        <Star className="w-3 h-3 fill-current" />
                                        {tour.rating} <span className="text-gray-400 font-normal">({tour.reviews})</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                                        <Clock className="w-3 h-3" /> {tour.duration}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2 min-h-[3.5rem] group-hover:text-accent-cyan transition-colors">
                                    {tour.title}
                                </h3>

                                <p className="text-sm text-gray-500 mb-6 flex items-center gap-1">
                                    <Globe className="w-3 h-3" /> {tour.location}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                                    <div>
                                        <p className="text-xs text-gray-400">From</p>
                                        <p className="text-xl font-bold text-primary">£{tour.price}</p>
                                    </div>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-primary hover:text-white text-primary text-sm font-medium rounded-lg transition-all group-hover:bg-primary group-hover:text-white">
                                        View Details
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
