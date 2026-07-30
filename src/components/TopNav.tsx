import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CV_DATA } from '../data';

export const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#projects' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-wider flex items-center gap-2">
          <div className="w-8 h-8 rounded-full matias-bg-accent text-black flex items-center justify-center font-bold text-xl">
            {CV_DATA.name.charAt(0)}
          </div>
          {CV_DATA.name.split(' ')[0]}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium tracking-widest uppercase hover:text-[#ccff00] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-6">
          <a href="#contact" className="hidden md:flex matias-btn gap-2 group">
            Let's Talk 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <button 
            className="lg:hidden text-white hover:text-[#ccff00] transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-[#111] border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium tracking-widest uppercase hover:text-[#ccff00] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="matias-btn justify-center mt-4 w-full" onClick={() => setIsOpen(false)}>
            Let's Talk →
          </a>
        </div>
      )}
    </header>
  );
};
