export interface Destination {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: string;
  description: string;
}

import type { ComponentType } from 'react';

export interface TravelPackage {
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  highlights: string[];
  icon: ComponentType<{ className?: string }>;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}
