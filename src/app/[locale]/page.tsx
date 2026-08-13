import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import { AboutSection } from '@/components/sections/about-section';
import { ExpertiseBentoGrid } from '@/components/sections/expertise-bento';
import { HeroSection } from '@/components/sections/hero-section';
import { LeadCTASection } from '@/components/sections/lead-cta-section';
import { LocationSection } from '@/components/sections/location-section';
import { PainPointsSection } from '@/components/sections/pain-points';
import { ProcessTimeline } from '@/components/sections/process-timeline';
import { ReviewsSection } from '@/components/sections/reviews-section';
import { TrustBadges } from '@/components/sections/trust-badges';
import { CookieBanner } from '@/components/ui/cookie-banner';

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-[#F8F6F0] selection:bg-[#C5A059] selection:text-[#0B0F17]">
      <Navbar />
      <HeroSection />
      <TrustBadges />
      <AboutSection />
      <PainPointsSection />
      <ExpertiseBentoGrid />
      <ProcessTimeline />
      <ReviewsSection />
      <LocationSection />
      <LeadCTASection />
      <Footer />
      <CookieBanner />
    </main>
  );
}
