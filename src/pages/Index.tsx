import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import GameChanger from "@/components/GameChanger";
import Superpoder from "@/components/Superpoder";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <GameChanger />
      <Superpoder />
      <ExperienceTimeline />
      <TechStack />
      <FeaturedProjects />
      <ContactSection />
    </div>
  );
};

export default Index;
