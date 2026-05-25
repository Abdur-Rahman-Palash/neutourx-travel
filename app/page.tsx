import dynamic from 'next/dynamic';
import Hero from '@/sections/Hero';
import TravelPackages from '@/sections/TravelPackages';
import FeaturedDestinations from '@/sections/FeaturedDestinations';
import WhyChooseUs from '@/sections/WhyChooseUs';
import Testimonials from '@/sections/Testimonials';
import InteractiveWorldMap from '@/sections/InteractiveWorldMap';
import TravelInspiration from '@/sections/TravelInspiration';
import AITravelPlanner from '@/sections/AITravelPlanner';
import TravelBlogs from '@/sections/TravelBlogs';
import MobileAppPromotion from '@/sections/MobileAppPromotion';
import NewsletterCTA from '@/sections/NewsletterCTA';
import PremiumFooter from '@/sections/PremiumFooter';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Hero />
      <TravelPackages />
      <FeaturedDestinations />
      <InteractiveWorldMap />
      <TravelInspiration />
      <AITravelPlanner />
      <MobileAppPromotion />
      <TravelBlogs />
      <NewsletterCTA />
      <WhyChooseUs />
      <Testimonials />
      <PremiumFooter />
      <Footer />
    </div>
  );
}
