import React, { useEffect } from 'react';
import { TopNav } from './components/TopNav';
import { VerticalIndicators } from './components/VerticalIndicators';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { PersonalInfo } from './components/PersonalInfo';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('main section, .footer');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
    );
    
    sections.forEach((section) => {
      section.classList.add('scroll-reveal');
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Subtle Background Graphic */}
      <div className="matias-bg-graphic"></div>
      
      <TopNav />
      <VerticalIndicators />
      
      <main className="main-content">
        <div className="px-6 md:px-12 lg:px-24 xl:px-40">
          <Hero />
          <About />
          <Experience />
        </div>

        <div className="px-6 md:px-12 lg:px-24 xl:px-40">
          <Projects />
          <PersonalInfo />
        </div>
      </main>
      
      <Footer />
      <ContactModal />
    </div>
  );
}
