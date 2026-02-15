'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const destinations = [
    {
        id: 1,
        city: "Dubai",
        country: "UAE",
        price: "1,299",
        image: "/dubai.jpg",
        colSpan: "md:col-span-2 lg:col-span-1",
    },
    {
        id: 2,
        city: "London",
        country: "United Kingdom",
        price: "999",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop",
        colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
        id: 3,
        city: "New York",
        country: "USA",
        price: "1,450",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000&auto=format&fit=crop",
        colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
        id: 4,
        city: "Istanbul",
        country: "Turkey",
        price: "850",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1000&auto=format&fit=crop",
        colSpan: "md:col-span-2 lg:col-span-2",
    },
    {
        id: 5,
        city: "Kuala Lumpur",
        country: "Malaysia",
        price: "1,100",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000&auto=format&fit=crop",
        colSpan: "md:col-span-2 lg:col-span-1",
    }
];

export default function FeaturedDestinations() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 bg-background text-foreground relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-accent-cyan uppercase tracking-[0.2em] text-sm font-semibold mb-2 block">Curated Collection</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Trending Destinations</h2>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onClick={() => window.location.href = '/destinations'}
                        className="flex items-center gap-2 text-white hover:text-accent-cyan transition-colors group cursor-pointer"
                    >
                        <span className="uppercase tracking-widest text-sm font-medium">View All Locations</span>
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </motion.button>
                </div>

                {/* Grid */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations.map((dest, index) => (
                        <motion.div
                            key={dest.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.location.href = `/destinations?city=${dest.city.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`group relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer ${dest.colSpan}`}
                        >
                            {/* Background Image - Using a div for the hover scale effect wrapper if needed or just on Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={dest.image}
                                    alt={dest.city}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="text-accent-cyan text-xs font-bold tracking-widest mb-2 block uppercase">{dest.country}</span>
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <h3 className="text-3xl font-bold text-white mb-1">{dest.city}</h3>
                                            <p className="text-white/80 font-light">From <span className="text-white font-semibold">${dest.price}</span></p>
                                        </div>
                                        <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
