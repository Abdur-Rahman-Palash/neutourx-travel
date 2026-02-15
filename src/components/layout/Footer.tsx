'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Twitter, Instagram, Linkedin, Facebook, Globe, CreditCard, Shield, Headphones, ChevronDown } from 'lucide-react';

const footerLinks = [
    {
        title: "Explore",
        links: [
            { label: "Flights", href: "/flights" },
            { label: "Tours", href: "/tours" },
            { label: "Packages", href: "/packages" },
            { label: "Hotels", href: "/hotels" },
            { label: "Destinations", href: "/destinations" }
        ]
    },
    {
        title: "Company",
        links: [
            { label: "About", href: "/about" },
            { label: "Careers", href: "/careers" },
            { label: "Press", href: "/press" },
            { label: "Blog", href: "/blog" }
        ]
    },
    {
        title: "Support",
        links: [
            { label: "Help Center", href: "/help" },
            { label: "Contact", href: "/contact" },
            { label: "Refund Policy", href: "/refund" },
            { label: "Terms", href: "/terms" },
            { label: "Privacy", href: "/privacy" }
        ]
    },
    {
        title: "Trust",
        links: [
            { label: "Secure Payments", href: "/security" },
            { label: "24/7 Support", href: "/support" }
        ]
    }
];

const socialIcons = [
    { Icon: Twitter, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" },
    { Icon: Facebook, href: "#" }
];

const paymentIcons = [
    { name: "VISA", color: "text-white" },
    { name: "Mastercard", color: "text-white" },
    { name: "Amex", color: "text-white italic" },
    { name: "PayPal", color: "text-white" }
];

export default function Footer() {
    const [selectedLanguage, setSelectedLanguage] = useState("EN");
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <footer ref={ref} className="relative bg-[#0B1C2D] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(0,209,255,0.05) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(0,209,255,0.05) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Top CTA Strip */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
                className="relative border-b border-white/10"
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                    <div className="text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white mb-4"
                        >
                            Plan Your Next
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-gold">
                                Intelligent Journey
                            </span>
                        </motion.h2>
                        
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
                        >
                            Premium travel planning powered by smart technology.
                        </motion.p>
                        
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,209,255,0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = '/trips'}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-blue-500 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,209,255,0.5)] active:scale-95 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2 cursor-pointer"
                        >
                            Start Planning
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Divider Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            {/* Main Footer Grid */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12"
                >
                    {/* Column 1 - Brand */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.9, duration: 0.6 }}
                        className="space-y-6"
                    >
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-black tracking-[0.2em] text-white">NEUTOURX</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed font-light max-w-sm">
                            Smart travel solutions for modern explorers.
                        </p>
                        
                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            {socialIcons.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                    transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
                                    whileHover={{ 
                                        scale: 1.2,
                                        textShadow: "0 0 10px rgba(0,209,255,0.5)"
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-gray-400 hover:text-accent-cyan transition-all duration-300"
                                >
                                    <social.Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Columns 2-5 - Links */}
                    {footerLinks.map((column, colIndex) => (
                        <motion.div
                            key={colIndex}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.9 + colIndex * 0.1, duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h4 className="text-sm font-bold uppercase tracking-widest text-accent-gold">
                                {column.title}
                            </h4>
                            <ul className="space-y-3">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="group relative inline-block text-gray-400 hover:text-accent-cyan transition-colors text-sm font-light"
                                        >
                                            {link.label}
                                            <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-cyan group-hover:w-full transition-all duration-300" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* Column 5 - Trust */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h4 className="text-sm font-bold uppercase tracking-widest text-accent-gold">
                            Trust
                        </h4>
                        
                        {/* Payment Icons */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                                {paymentIcons.map((payment, index) => (
                                    <span key={index} className={`font-bold text-lg ${payment.color}`}>
                                        {payment.name}
                                    </span>
                                ))}
                            </div>
                            
                            {/* SSL Badge */}
                            <div className="flex items-center gap-2 text-gray-400">
                                <Shield className="w-4 h-4 text-accent-cyan" />
                                <span className="text-sm">SSL Secured</span>
                            </div>
                            
                            {/* 24/7 Support */}
                            <div className="flex items-center gap-2 text-gray-400">
                                <Headphones className="w-4 h-4 text-accent-cyan" />
                                <span className="text-sm">24/7 Support</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-xs text-gray-500 font-light">
                            © {new Date().getFullYear()} Neutourx. All rights reserved.
                        </p>
                        
                        <div className="flex items-center gap-6">
                            {/* Language Selector */}
                            <div className="flex items-center gap-2 text-gray-400">
                                <Globe className="w-4 h-4" />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedLanguage(selectedLanguage === "EN" ? "ES" : "EN")}
                                    className="flex items-center gap-1 text-sm hover:text-white transition-colors"
                                >
                                    {selectedLanguage}
                                    <ChevronDown className="w-3 h-3" />
                                </motion.button>
                            </div>
                            
                            {/* Currency Selector */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCurrency(selectedCurrency === "USD" ? "EUR" : "USD")}
                                className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                                {selectedCurrency}
                                <ChevronDown className="w-3 h-3" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
