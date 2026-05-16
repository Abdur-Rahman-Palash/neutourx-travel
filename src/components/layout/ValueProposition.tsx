'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Sparkles, Globe2, Headset, Shield, Zap, Users, TrendingUp, Award, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
    {
        icon: Sparkles,
        title: "Smart Fare Intelligence",
        description: "Proprietary algorithms monitoring global inventory to secure premium seats at optimal value.",
        features: ["AI-Powered", "Real-time Updates", "Best Price Guarantee"],
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Globe2,
        title: "Curated Global Experiences",
        description: "Access a vetted portfolio of private tours and hidden gems, tailored to your distinct tastes.",
        features: ["Exclusive Access", "Local Experts", "Personalized Itineraries"],
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Headset,
        title: "Seamless Booking & Support",
        description: "24/7 dedicated concierge. From itinerary modifications to emergencies, we resolve it instantly.",
        features: ["24/7 Support", "Instant Assistance", "Personal Concierge"],
        color: "from-green-500 to-emerald-500"
    }
];

const stats = [
    { value: "98%", label: "Customer Satisfaction", icon: Users },
    { value: "150+", label: "Countries Covered", icon: Globe2 },
    { value: "24/7", label: "Support Available", icon: Clock },
    { value: "4.9★", label: "Average Rating", icon: Award },
];

export default function ValueProposition() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            const title = titleRef.current;
            const cards = cardsRef.current;
            const stats = statsRef.current;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });

            if (title) {
                tl.fromTo(title,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
                );
            }

            if (cards) {
                tl.fromTo(Array.from(cards.children),
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
                    "-=0.4"
                );
            }

            if (stats) {
                tl.fromTo(Array.from(stats.children),
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
                    "-=0.6"
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-24 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                {/* Enhanced Title */}
                <div className="text-center mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm font-medium mb-6"
                    >
                        <Shield className="w-4 h-4" />
                        <span>Why Choose Neutourx</span>
                        <TrendingUp className="w-4 h-4" />
                    </motion.div>
                    
                    <h2
                        ref={titleRef}
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 opacity-0"
                    >
                        Why Travel With
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-gold animate-gradient">
                            Neutourx?
                        </span>
                    </h2>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Experience travel reimagined with cutting-edge technology, personalized service, and unforgettable journeys.
                    </motion.p>
                </div>

                {/* Enhanced Value Cards */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20"
                >
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            <div className="relative h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:border-accent-cyan/30 hover:shadow-[0_20px_40px_rgba(0,209,255,0.2)]">
                                {/* Gradient Border Effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: `linear-gradient(135deg, ${item.color.split(' ')[0].replace('from-', '')}, ${item.color.split(' ')[1].replace('to-', '')})`,
                                        padding: '2px',
                                    }}
                                >
                                    <div className="w-full h-full bg-primary rounded-3xl" />
                                </div>
                                
                                <div className="relative z-10">
                                    {/* Enhanced Icon */}
                                    <div className="relative mb-6">
                                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            <item.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-gold rounded-full animate-pulse" />
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-cyan transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    
                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                    
                                    {/* Features List */}
                                    <div className="space-y-2">
                                        {item.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                                                <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {/* Stats Section */}
                <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex justify-center mb-3">
                                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center">
                                    <stat.icon className="w-6 h-6 text-accent-cyan" />
                                </div>
                            </div>
                            <div className="text-3xl font-black text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
