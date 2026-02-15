'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const recentTrips = [
    {
        id: "t1",
        destination: "Kyoto, Japan",
        dates: "Apr 12 - Apr 20, 2026",
        status: "Upcoming",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "t2",
        destination: "Paris, France",
        dates: "Nov 05 - Nov 12, 2025",
        status: "Completed",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop"
    }
];

export default function DashboardPage() {
    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-primary">Welcome back, Alex</h1>
                    <p className="text-gray-500 mt-1">Here's what's happening with your travels.</p>
                </div>
                <button className="bg-primary text-white font-medium px-6 py-2.5 rounded-xl hover:bg-accent-cyan hover:text-primary transition-all text-sm shadow-lg shadow-primary/20">
                    Plan New Trip
                </button>
            </div>

            {/* Stats Grid - using skeleton loading state simulation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Total Trips</p>
                    <p className="text-3xl font-bold text-primary mt-2">12</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Countries Visited</p>
                    <p className="text-3xl font-bold text-primary mt-2">8</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">Next Trip In</p>
                    <p className="text-3xl font-bold text-accent-cyan mt-2">42 Days</p>
                </div>
            </div>

            {/* Recent Trips */}
            <h2 className="text-xl font-bold text-primary mb-6">Recent Trips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentTrips.map((trip) => (
                    <motion.div
                        key={trip.id}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm group cursor-pointer"
                    >
                        <div className="relative h-48">
                            <Image
                                src={trip.image}
                                alt={trip.destination}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${trip.status === 'Upcoming' ? 'bg-accent-cyan text-primary' : 'bg-gray-100 text-gray-500'
                                }`}>
                                {trip.status}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-primary mb-1">{trip.destination}</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                <Calendar className="w-4 h-4" />
                                {trip.dates}
                            </div>
                            <div className="w-full h-px bg-gray-100 mb-4" />
                            <button className="text-sm font-medium text-primary hover:text-accent-cyan transition-colors flex items-center gap-1">
                                View Itinerary <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                ))}

                {/* Skeleton Loader Example */}
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 p-6 animate-pulse hidden md:block opacity-50">
                    <div className="w-full h-32 bg-gray-200 rounded-xl mb-4" />
                    <div className="w-3/4 h-6 bg-gray-200 rounded mb-2" />
                    <div className="w-1/2 h-4 bg-gray-100 rounded" />
                </div>
            </div>
        </div>
    );
}
