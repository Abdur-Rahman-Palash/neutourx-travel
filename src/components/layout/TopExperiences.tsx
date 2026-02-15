'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const experiences = [
    {
        id: 1,
        title: "Private Desert Safari & Stargazing",
        location: "Dubai, UAE",
        rating: 5.0,
        reviews: 124,
        duration: "6 Hours",
        price: 350,
        image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Helicopter Tour Over Manhattan",
        location: "New York, USA",
        rating: 4.9,
        reviews: 89,
        duration: "30 Mins",
        price: 299,
        image: "https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Private Yacht Cruise on the Bosphorus",
        location: "Istanbul, Turkey",
        rating: 5.0,
        reviews: 56,
        duration: "4 Hours",
        price: 600,
        image: "https://images.unsplash.com/photo-1622587853578-dd1bf9608d26?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Exclusive Westminster Abbey Access",
        location: "London, UK",
        rating: 4.8,
        reviews: 210,
        duration: "3 Hours",
        price: 180,
        image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Petronas Towers Private Dining",
        location: "Kuala Lumpur, Malaysia",
        rating: 5.0,
        reviews: 42,
        duration: "3 Hours",
        price: 250,
        image: "https://images.unsplash.com/photo-1618600078866-e04f03473954?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function TopExperiences() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex items-end justify-between">
                <div>
                    <span className="text-accent-gold uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">Unforgettable Moments</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary">Top Experiences</h2>
                </div>
                <button onClick={() => window.location.href = '/tours'} className="hidden md:flex items-center gap-2 text-primary hover:text-accent-cyan transition-colors font-medium cursor-pointer">
                    View All Experiences <ArrowRight className="w-5 h-5" />
                </button>
            </div>

            {/* Slider Container */}
            <div
                ref={containerRef}
                className="flex gap-6 overflow-x-auto pb-12 px-6 md:px-12 no-scrollbar snap-x snap-mandatory"
                style={{ scrollBehavior: 'smooth' }}
            >
                {experiences.map((exp) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.location.href = `/tours?experience=${exp.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex-shrink-0 w-[300px] md:w-[350px] bg-white rounded-2xl overflow-hidden shadow-lg snap-center group cursor-pointer relative"
                    >
                        {/* Image Container */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={exp.image}
                                alt={exp.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-primary shadow-sm z-10">
                                <Star className="w-3 h-3 text-accent-gold fill-accent-gold" />
                                <span>{exp.rating}</span>
                                <span className="text-gray-400 font-normal">({exp.reviews})</span>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {exp.duration}</span>
                                <span>•</span>
                                <span className="flex items-center gap-1 text-green-600"><CheckCircle className="w-3 h-3" /> Free Cancel</span>
                            </div>

                            <h3 className="text-lg font-bold text-primary mb-1 line-clamp-2 min-h-[3.5rem] group-hover:text-accent-cyan transition-colors">
                                {exp.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">{exp.location}</p>

                            <div className="flex items-center justify-end pt-4 border-t border-gray-100 mt-auto">
                                <div className="flex flex-col mr-auto">
                                    <span className="text-xs text-gray-400">From</span>
                                    <span className="text-xl font-bold text-primary">${exp.price}</span>
                                </div>

                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-accent-cyan group-hover:text-primary transition-colors duration-300 shadow-md">
                                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
                {/* Padding for end of list */}
                <div className="w-6 md:w-12 flex-shrink-0" />
            </div>

            <div className="px-6 md:hidden mt-4">
                <button onClick={() => window.location.href = '/tours'} className="flex w-full justify-center items-center gap-2 text-primary font-medium py-3 border border-primary/10 rounded-lg cursor-pointer">
                    View All Experiences <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </section>
    );
}
