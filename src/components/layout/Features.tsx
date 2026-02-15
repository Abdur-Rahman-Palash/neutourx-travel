'use client';

import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Gem } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
    {
        icon: MapPin,
        title: "Hidden Sanctuaries",
        description: "Access to private islands and secluded estates unavailable to the public."
    },
    {
        icon: ShieldCheck,
        title: "Uncompromising Privacy",
        description: "Complete discretion for high-profile individuals and families seeking solitude."
    },
    {
        icon: Gem,
        title: "Bespoke Curation",
        description: "Every journey is tailored to your exacting standards, from culinary to cultural immersion."
    }
];

export default function Features() {
    return (
        <section className="bg-background relative py-24 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="glass-card hover:border-accent-cyan/30 group"
                        >
                            <div className="mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:bg-accent-cyan/10 transition-colors">
                                <feature.icon className="w-8 h-8 text-accent-cyan group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed font-light">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
