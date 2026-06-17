import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'pt-2 px-4 md:px-0' : 'pt-6 px-6 md:px-0'}`}
    >
      <div className={`max-w-6xl mx-auto backdrop-blur-md px-6 py-4 flex items-center justify-between border-white/10 bg-[#020202]/70 transition-all duration-500 ${scrolled ? 'rounded-2xl border' : 'rounded-none border-b'}`}>
        
        {/* Modern Glyph Logo */}
        <a href="#home" className="text-xl font-display font-bold tracking-[0.2em] text-white flex items-center uppercase group">
          <div className="flex space-x-1 mr-3">
             <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} className="w-1.5 h-4 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
             <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-4 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
             <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-4 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          </div>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-2">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white px-4 py-2 hover:bg-white/5 transition-colors relative group"
            >
              <span className="absolute left-0 bottom-1 w-0 h-px bg-white transition-all group-hover:w-1/2"></span>
              {link.name}
            </a>
          ))}
          <div className="w-px h-4 bg-white/20 mx-4" />
          <a href="#contact" className="text-xs font-mono tracking-widest uppercase text-black px-6 py-2 bg-white hover:bg-zinc-200 transition-colors flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse mr-2" />
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-zinc-400 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Links */}
      <motion.div 
         animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
         className="absolute top-20 left-4 right-4 backdrop-blur-xl border border-white/10 bg-[#020202]/90 rounded-2xl flex flex-col md:hidden overflow-hidden"
       >
        <div className="p-4 flex flex-col space-y-2">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xs font-mono uppercase tracking-widest text-zinc-300 px-4 py-3 rounded-xl hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="text-xs font-mono uppercase tracking-widest text-center text-black px-4 py-4 rounded-xl bg-white mt-4"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};
