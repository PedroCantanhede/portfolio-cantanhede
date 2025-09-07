import HeroSection from '@/sections/HeroSection';
import Navigation from '@/components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navigation />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
