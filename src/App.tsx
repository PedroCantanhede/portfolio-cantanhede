import Navigation from '@/components/Navigation';
import HeroSection from '@/sections/HeroSection';
import AboutSection from '@/sections/AboutSection';
import JourneySection from '@/sections/JourneySection';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection /> 
        <JourneySection />
      </main>
    </div>
  );
}

export default App;
