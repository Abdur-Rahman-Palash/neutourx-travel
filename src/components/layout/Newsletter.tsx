'use client';

import { useRef, useState } from 'react';
import { ArrowRight, Mail, Gift, Zap, Shield } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [hoveredButton, setHoveredButton] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    return (
        <section ref={ref} className="relative py-24 md:py-32 bg-gradient-to-b from-primary via-primary/95 to-primary/90">
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Enhanced Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        className="w-20 h-20 bg-gradient-to-r from-accent-cyan to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-accent-cyan/30"
                    >
                        <Gift className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Enhanced Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-4"
                    >
                        Unlock Exclusive
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-gold animate-gradient">
                            Travel Deals
                        </span>
                    </motion.h2>
                    
                    {/* Enhanced Subtext */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Join 100,000+ luxury travelers receiving weekly curation of hidden gems and flash sales.
                    </motion.p>

                    {/* Enhanced Form */}
                    <motion.form
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="max-w-md mx-auto relative group"
                    >
                        {/* Email Input */}
                        <div className="relative">
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-16 pl-6 pr-40 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder-gray-400 focus:border-accent-cyan focus:bg-white/20 focus:ring-2 focus:ring-accent-cyan/20 outline-none transition-all duration-300 shadow-lg focus:shadow-accent-cyan/30"
                            />
                            
                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onHoverStart={() => setHoveredButton(true)}
                                onHoverEnd={() => setHoveredButton(false)}
                                type="submit"
                                className={`absolute right-2 top-2 px-6 h-12 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                                    hoveredButton 
                                        ? 'bg-gradient-to-r from-accent-cyan to-blue-500 text-white shadow-lg shadow-accent-cyan/30' 
                                        : 'bg-white/20 backdrop-blur-xl text-white hover:bg-white/30'
                                }`}
                            >
                                {isSubmitted ? (
                                    <>
                                        <Zap className="w-4 h-4" />
                                        <span>Subscribed!</span>
                                    </>
                                ) : (
                                    <>
                                        <Mail className="w-4 h-4" />
                                        <span>Join Insider</span>
                                    </>
                                )}
                            </motion.button>
                        </div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex items-center justify-center gap-8 mt-6"
                        >
                            <div className="flex items-center gap-2 text-gray-400">
                                <Shield className="w-4 h-4 text-accent-cyan" />
                                <span className="text-sm">Secure & Private</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Gift className="w-4 h-4 text-accent-gold" />
                                <span className="text-sm">Exclusive Deals</span>
                            </div>
                        </motion.div>
                    </motion.form>

                    {/* Enhanced Terms */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="text-sm text-gray-400 mt-8 max-w-md mx-auto"
                    >
                        By joining, you agree to our Terms of Service and Privacy Policy. Unsubscribe anytime.
                    </motion.p>

                    {/* Bottom Gradient Line */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-16 h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent max-w-md mx-auto"
                    />
                </motion.div>
            </div>
        </section>
    );
}
