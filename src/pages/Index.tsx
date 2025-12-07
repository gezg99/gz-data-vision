import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import GameChanger from "@/components/GameChanger";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <GameChanger />
      <ExperienceTimeline />
      <ContactSection />
    </div>
  );
};

export default Index;
