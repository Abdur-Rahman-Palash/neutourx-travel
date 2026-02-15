'use client';

import {
    Clock,
    Globe,
    Star,
    Check,
    MapPin,
    Calendar,
    Users,
    ShieldCheck,
    Share2,
    Heart
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TourDetailPage() {
    return (
        <div className="min-h-screen bg-white pb-24">

            {/* Gallery (Simplified for Demo) */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-gray-100">
                <Image
                    src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop"
                    alt="Kyoto Tea Ceremony"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full text-white z-10">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-accent-gold text-white text-xs font-bold uppercase tracking-wider rounded-full">
                                    Exclusive
                                </span>
                                <span className="flex items-center gap-1 text-sm font-medium">
                                    <Star className="w-4 h-4 text-accent-cyan fill-accent-cyan" /> 5.0 (84 Reviews)
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-2 max-w-2xl">Kyoto Tea Ceremony & Private Geisha Dinner</h1>
                            <p className="flex items-center gap-2 text-lg text-gray-200">
                                <MapPin className="w-5 h-5 text-accent-cyan" /> Kyoto, Japan
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white hover:text-primary transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                            <button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white hover:text-red-500 transition-colors">
                                <Heart className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12 relative">

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Quick Info */}
                    <div className="flex flex-wrap gap-6 md:gap-12 pb-8 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-50 rounded-lg text-primary">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Duration</p>
                                <p className="font-semibold text-primary">4 Hours</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-50 rounded-lg text-primary">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Language</p>
                                <p className="font-semibold text-primary">English, Japanese</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gray-50 rounded-lg text-primary">
                                <ShieldCheck className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Cancellation</p>
                                <p className="font-semibold text-green-600">Free up to 24h</p>
                            </div>
                        </div>
                    </div>

                    {/* Overview */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-6">Experience Overview</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Immerse yourself in strict Japanese tradition with this exclusive, private tea ceremony hosted in a 300-year-old Machiya townhouse. Unlike generic tourist experiences, this intimate gathering is led by a master of the Urasenke school.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Following the ceremony, enjoy a Kaiseki dinner prepared by a Michelin-starred chef, accompanied by a Geisha performance - a rare privilege usually reserved for vetted guests.
                        </p>
                    </section>

                    {/* Highlights */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-6">Highlights</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Private access to a historic Machiya townhouse",
                                "Authentic Urasenke tea ceremony",
                                "Includes full Kaiseki dinner interaction",
                                "Photos with Geisha allowed",
                                "Round-trip luxury transfer included"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Map Placeholder */}
                    <section>
                        <h2 className="text-2xl font-bold text-primary mb-6">Meeting Point</h2>
                        <div className="w-full h-64 bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                            <MapPin className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                            <span className="text-sm text-gray-500 mt-2 absolute bottom-4">View on Google Maps</span>
                            {/* Static Map Image would go here */}
                        </div>
                        <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> Gion District, Kyoto (Exact location sent after booking)
                        </p>
                    </section>

                    {/* Reviews Summary */}
                    <section className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                                <span className="block text-3xl font-bold text-primary">5.0</span>
                                <div className="flex gap-0.5 text-accent-gold justify-center my-1">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                                </div>
                                <span className="text-xs text-gray-400">84 Reviews</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-primary">Traveler Favorite</h3>
                                <p className="text-sm text-gray-500">Rated higher than 99% of activities in Kyoto.</p>
                            </div>
                        </div>
                    </section>

                </div>

                {/* Booking Module (Sticky) */}
                <div className="lg:col-span-1 relative">
                    <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 shadow-xl p-6 md:p-8 space-y-6">
                        <div className="flex justify-between items-end border-b border-gray-100 pb-6">
                            <div>
                                <p className="text-sm text-gray-500 line-through">£500</p>
                                <p className="text-3xl font-bold text-primary">£450</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-bold mb-1">
                                    <ShieldCheck className="w-3 h-3" /> Best Price
                                </div>
                                <p className="text-xs text-gray-400">per person</p>
                            </div>
                        </div>

                        {/* Date Selector */}
                        <div className="space-y-4">
                            <label className="text-sm font-bold text-primary block">Select Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/10 transition-shadow" />
                            </div>
                        </div>

                        {/* Guests Selector */}
                        <div className="space-y-4">
                            <label className="text-sm font-bold text-primary block">Guests</label>
                            <div className="relative">
                                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/10 transition-shadow appearance-none cursor-pointer">
                                    <option>2 Adults</option>
                                    <option>3 Adults</option>
                                    <option>4 Adults</option>
                                </select>
                            </div>
                        </div>

                        {/* Total */}
                        <div className="pt-4 flex justify-between items-center text-sm font-medium text-gray-600">
                            <span>Total (2 Guests)</span>
                            <span className="text-primary font-bold text-lg">£900</span>
                        </div>

                        <button className="w-full py-4 bg-accent-cyan text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all shadow-lg shadow-accent-cyan/20 active:scale-95 duration-200">
                            Reserve Now
                        </button>

                        <p className="text-center text-xs text-gray-400 mt-4">
                            You won't be charged yet. Free cancellation up to 24 hours before.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
