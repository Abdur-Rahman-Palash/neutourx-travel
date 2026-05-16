'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function BundleSection() {
    const containerRef = useRef<HTMLElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Collect valid refs
        const validImages = [
            leftColRef.current?.children[0] as HTMLDivElement,
            leftColRef.current?.children[1] as HTMLDivElement,
            leftColRef.current?.children[2] as HTMLDivElement
        ].filter(Boolean);

        if (validImages.length === 0) return;

        const ctx = gsap.context(() => {
            // Parallax effect for images
            validImages.forEach((img, i) => {
                const speed = (i + 1) * 30; // Increased speed for visibility

                gsap.to(img, {
                    y: -speed,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                });
            });

            // Content reveal
            if (rightColRef.current) {
                gsap.fromTo(rightColRef.current.children,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: rightColRef.current,
                            start: "top 80%",
                        }
                    }
                );
            }

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column - Image Collage */}
                    <div ref={leftColRef} className="relative h-[600px] w-full isolate">
                        {/* Main large image */}
                        <div
                            className="absolute top-0 left-0 w-[75%] h-[75%] rounded-3xl overflow-hidden shadow-2xl z-10 transition-transform hover:scale-[1.02] duration-500"
                        >
                            <Image
                                src="/hotel.jpg"
                                alt="Luxury Resort"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Secondary overlapping image (Bottom Right) */}
                        <div
                            className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-3xl overflow-hidden shadow-2xl z-20 border-8 border-white transition-transform hover:scale-[1.02] duration-500"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop"
                                alt="Adventure Travel"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Accent floating image */}
                        <div
                            className="absolute top-[20%] right-[5%] w-[35%] h-[25%] rounded-2xl overflow-hidden shadow-xl z-30 border-4 border-white hidden md:block transition-transform hover:scale-[1.05] duration-500"
                        >
                            <Image
                                src="/flight.jpg"
                                alt="First Class Flight"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div ref={rightColRef} className="space-y-8 lg:pl-10 text-center lg:text-left">
                        <div className="space-y-4">
                            <span className="text-accent-cyan uppercase tracking-[0.2em] text-sm font-semibold">Smart Packages</span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                                Bundle Flights <br className="hidden lg:block" />
                                <span className="text-accent-gold">+</span> Hotels <br className="hidden lg:block" />
                                <span className="text-accent-gold">+</span> Tours
                            </h2>
                        </div>

                        <p className="text-lg text-gray-600 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Unlock exclusive savings up to 40% when you curate your entire journey with Neutourx.
                            Our intelligent algorithms automatically pair the best flights with our vetted luxury stays.
                        </p>

                        <div className="pt-4">
                            <button className="btn-primary group">
                                Build My Trip
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
