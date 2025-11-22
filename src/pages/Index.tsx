import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <ExperienceTimeline />
        <FinalCTA />
      </main>
    </div>
  );
};

export default Index;
