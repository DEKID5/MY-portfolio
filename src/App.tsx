import React from 'react';
import { Sidebar } from './components/Sidebar';
import { RightNav } from './components/RightNav';
import { MobileMenu } from './components/MobileMenu';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('main section, .footer');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-revealed')),
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    );
    sections.forEach((section) => {
      section.classList.add('scroll-reveal');
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

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
          <About />
          <Experience />
          <Projects />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
