import React from 'react';
import { Sidebar } from './components/Sidebar';
import { RightNav } from './components/RightNav';
import { MobileMenu } from './components/MobileMenu';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Ambient background glow */}
      <div className="ambient-glow" />
      
      {/* Left profile sidebar */}
      <Sidebar />
      
      {/* Right floating navigation */}
      <RightNav />
      
      {/* Mobile hamburger menu */}
      <MobileMenu />
      
      {/* Main content offset */}
      <main className="main-content relative">
        <div className="max-w-[890px] mx-auto px-4 md:px-6 lg:px-8">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <About />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
