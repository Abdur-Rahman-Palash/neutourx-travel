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
    <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={fadeRef} className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            What Our Travelers Say
          </h2>
          <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
            Real experiences from real travelers who chose NEUTOURX
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl"
              style={{
                backgroundColor: 'var(--color-surface-secondary)',
                boxShadow: 'var(--shadow-lg)',
              }}
              role="article"
              aria-labelledby={`testimonial-${testimonial.id}`}
            >
              <Quote
                className="absolute top-4 right-4 h-8 w-8 opacity-20"
                style={{ color: 'var(--color-accent)' }}
              />

              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>

              <blockquote className="text-lg mb-6 italic" style={{ color: 'var(--color-text)' }}>
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4" />
                <div>
                  <h4
                    id={`testimonial-${testimonial.id}`}
                    className="font-semibold"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {testimonial.name}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}