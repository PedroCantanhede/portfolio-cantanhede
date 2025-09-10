import Navigation from '@/components/Navigation';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import JourneySection from '@/sections/JourneySection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import ProjectsSection from '@/sections/ProjectsSection';
import ContactSection from '@/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection /> 
        <JourneySection />
        <TestimonialsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
