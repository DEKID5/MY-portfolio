import React, { useRef, useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { InteractiveBackground } from './components/InteractiveBackground';

const StackPage = ({ children, isFirst = false, zIndex }: { children: React.ReactNode, isFirst?: boolean, zIndex: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const updateTop = () => {
      if (ref.current) {
        const height = ref.current.offsetHeight;
        const windowHeight = window.innerHeight;
        if (height > windowHeight) {
          setTop(windowHeight - height);
        } else {
          setTop(0);
        }
      }
    };

    const observer = new ResizeObserver(updateTop);
    observer.observe(ref.current);
    
    window.addEventListener('resize', updateTop);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateTop);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`sticky w-full ${isFirst ? '' : 'backdrop-blur-2xl bg-[#020202]/85 border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]'}`}
      style={{ top: `${top}px`, zIndex }}
    >
      {children}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white/20 selection:text-white relative z-0">
      {/* Global Ambient Background - Glyph Interface Style */}
      <div className="fixed inset-0 z-[-2] bg-[#020202] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_2px,transparent_2px)] bg-[size:64px_64px] animate-glyph-dots w-[calc(100%+64px)] h-[calc(100%+64px)] -top-16 -left-16"></div>
      </div>
      
      {/* Subtle Grain Overlay */}
      <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <InteractiveBackground />

      <Navbar />
      
      <main className="relative flex flex-col">
        <div id="home" className="w-full h-px pointer-events-none invisible" />
        <StackPage zIndex={1} isFirst={true}>
          <Hero />
        </StackPage>

        <div id="about" className="w-full h-px pointer-events-none invisible" />
        <StackPage zIndex={2}>
          <About />
        </StackPage>

        <div id="experience" className="w-full h-px pointer-events-none invisible" />
        <StackPage zIndex={3}>
          <Experience />
        </StackPage>

        <div id="projects" className="w-full h-px pointer-events-none invisible" />
        <StackPage zIndex={4}>
          <Projects />
        </StackPage>

        <div id="skills" className="w-full h-px pointer-events-none invisible" />
        <StackPage zIndex={5}>
          <Skills />
        </StackPage>

      </main>

      <div className="relative z-[7] bg-[#020202]">
        <Footer />
      </div>
    </div>
  );
}
