import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { TechTicker } from './components/TechTicker';
import { Footer } from './components/Footer';
import { InteractiveBackground } from './components/InteractiveBackground';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white/20 selection:text-white relative z-0">
      {/* Global Ambient Background - Glyph Interface Style */}
      <div className="fixed inset-0 z-[-2] bg-[#020202] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_2px,transparent_2px)] bg-[size:64px_64px] animate-glyph-dots w-[calc(100%+64px)] h-[calc(100%+64px)] -top-16 -left-16"></div>
      </div>
      
      <InteractiveBackground />

      <Navbar />
      
      <main>
        <Hero />
        <TechTicker />
        <About />
        <Experience />
        <Projects />
        <Skills />
      </main>

      <Footer />
    </div>
  );
}
