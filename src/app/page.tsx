import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import TrainersSection from '@/components/sections/TrainersSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import LocationSection from '@/components/sections/LocationSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProgramsSection />
      <TrainersSection />
      <ReviewsSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
