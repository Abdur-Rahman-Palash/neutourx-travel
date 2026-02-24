'use client';

import Image from 'next/image';
import { Star, ShieldCheck, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        text: "Neutourx completely redefined our honeymoon. The private access to the Vatican was surreal.",
        author: "Sarah & James",
        location: "New York, USA"
    },
    {
        text: "Seamless from start to finish. The concierge handled our flight change instantly when a storm hit.",
        author: "Michael T.",
        location: "London, UK"
    },
    {
        text: "I've never seen such curated experiences. The desert safari was pure magic.",
        author: "Elena R.",
        location: "Dubai, UAE"
    }
];

export default function TrustSection() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Rating Summary */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-6 h-6 text-accent-gold fill-accent-gold" />
                        ))}
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-2">Trusted by 10,000+ Travelers</h2>
                    <p className="text-gray-500">Rated 4.9/5 based on verified reviews</p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-2xl relative"
                        >
                            <p className="text-primary font-medium text-lg leading-relaxed relative z-10 mb-6">
                                {t.text}
                            </p>
                            <div>
                                <p className="font-bold text-primary">{t.author}</p>
                                <p className="text-sm text-gray-500">{t.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Security & Payment Badges */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-gray-100">
                    <div className="flex items-center gap-6 text-gray-400">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-accent-cyan" />
                            <span className="text-sm font-medium">ATOL Protected</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Lock className="w-5 h-5 text-accent-cyan" />
                            <span className="text-sm font-medium">SSL Encrypted</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                        {/* 
                    Using text placeholders or basic SVG shapes for payment icons 
                    to avoid external image dependency for icons in this demo 
                */}
                        <span className="font-bold text-xl italic text-[#1A1F71]">VISA</span>
                        <span className="font-bold text-xl text-[#EB001B]">Mastercard</span>
                        <span className="font-bold text-xl text-[#003087] italic">Amex</span>
                        <span className="font-bold text-xl text-[#009cde]">PayPal</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
