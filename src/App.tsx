import React from 'react';
import { Sidebar } from './components/Sidebar';
import { RightNav } from './components/RightNav';
import { MobileMenu } from './components/MobileMenu';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { SciFiBackground } from './components/SciFiBackground';
import { useEffect, useState } from 'react';

export default function App() {
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    let targetX = 50;
    let targetY = 50;
    let currentX = 50;
    let currentY = 50;

    const renderBackgroundMotion = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      document.documentElement.style.setProperty('--pointer-x', `${currentX}%`);
      document.documentElement.style.setProperty('--pointer-y', `${currentY}%`);
      frame = requestAnimationFrame(renderBackgroundMotion);
    };

    const handlePointer = (event: PointerEvent) => {
      targetX = (event.clientX / window.innerWidth) * 100;
      targetY = (event.clientY / window.innerHeight) * 100;
    };

    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-depth', `${window.scrollY * 0.08}px`);
    };

    window.addEventListener('pointermove', handlePointer, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    frame = requestAnimationFrame(renderBackgroundMotion);

    const sections = document.querySelectorAll<HTMLElement>('main section, .footer');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
          if (entry.target.id === 'contact') {
            setIsContactVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    );
    sections.forEach((section) => {
      section.classList.add('scroll-reveal');
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', handlePointer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <SciFiBackground />
      
      {/* Left profile sidebar */}
      <Sidebar isContactVisible={isContactVisible} />
      
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
