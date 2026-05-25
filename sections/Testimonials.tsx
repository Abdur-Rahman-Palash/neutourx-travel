'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useFadeInOnScroll, useTextReveal } from '@/animations/gsap';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'NEUTOURX made planning our family vacation to Europe effortless. The attention to detail and personalized recommendations were outstanding.',
    avatar: '/avatar1.jpg', // placeholder
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    rating: 5,
    text: 'The booking process was incredibly smooth, and the customer support team was available 24/7. Highly recommend for business travelers.',
    avatar: '/avatar2.jpg',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    location: 'Madrid, Spain',
    rating: 5,
    text: 'Found the perfect honeymoon package through NEUTOURX. Every detail was taken care of, making our trip truly magical.',
    avatar: '/avatar3.jpg',
  },
];

export default function Testimonials() {
  const fadeRef = useFadeInOnScroll();
  const titleRef = useTextReveal();

  return (
    <section className="py-20 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div ref={fadeRef} className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            What Our Travelers Say
          </h2>
          <p className="text-xl text-text-secondary">
            Real experiences from real travelers who chose NEUTOURX
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-surface-secondary rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-foreground italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-border">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-text-secondary">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}