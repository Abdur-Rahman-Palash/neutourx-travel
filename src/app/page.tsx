import Hero from "@/components/layout/Hero";
import ValueProposition from "@/components/layout/ValueProposition";
import FeaturedDestinations from "@/components/layout/FeaturedDestinations";
import BundleSection from "@/components/layout/BundleSection";
import TopExperiences from "@/components/layout/TopExperiences";
import TrustSection from "@/components/layout/TrustSection";
import Newsletter from "@/components/layout/Newsletter";
import Features from "@/components/layout/Features";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex flex-col bg-background text-foreground selection:bg-accent-cyan selection:text-primary">
        <Hero />
        <ValueProposition />
        <FeaturedDestinations />
        <BundleSection />
        <TopExperiences />
        <Features />
        <TrustSection />
        <Newsletter />
      </main>
    </div>
  );
}
