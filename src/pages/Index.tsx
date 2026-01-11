import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import HowIWork from "@/components/HowIWork";
import Skills from "@/components/Skills";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import OtherProjects from "@/components/OtherProjects";
import Education from "@/components/Education";
import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <SelectedWork />
      <HowIWork />
      <Skills />
      <ExperienceTimeline />
      <OtherProjects />
      <Education />
      <AboutMe />
      <ContactSection />
    </div>
  );
};

export default Index;
