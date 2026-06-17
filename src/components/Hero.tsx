import React from 'react';
import { motion } from 'motion/react';
import { CV_DATA } from '../data';
import profileImg from '@/assets/images/IMG_2537.JPG.jpeg';
import { Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 px-6" id="home">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10"
      >
        <div className="col-span-1 lg:col-span-7 flex flex-col items-start space-y-6">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]">
            <span className="opacity-40 text-4xl md:text-6xl">Hello, I'm</span><br />{CV_DATA.name}
          </h1>

          <h2 className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            {CV_DATA.title} specializing in modern, scalable web applications.
          </h2>

          <div className="flex flex-wrap gap-4 pt-8">
            <a href="#projects" className="px-8 py-4 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 uppercase tracking-widest text-sm font-mono hover-lift flex items-center justify-center">
              View Work
            </a>
            <a href="#contact" className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/5 uppercase tracking-widest text-sm text-white font-mono hover-lift flex items-center justify-center">
              Contact Me
            </a>

          </div>
        </div>

        <div className="col-span-1 lg:col-span-5 mt-16 lg:mt-0 lg:ml-auto w-full max-w-sm flex items-center justify-center relative">
          {/* Faded Image Placeholder */}
          <div
            className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl group select-none pointer-events-none"
            style={{
              maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 80%)'
            }}
          >
            <img
              src={profileImg}
              alt="Seth Lokou"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* Subtle frame corners */}
          <div className="absolute top-0 right-4 w-6 h-6 border-t border-r border-white/20 rounded-tr" />
          <div className="absolute bottom-0 left-4 w-6 h-6 border-b border-l border-white/20 rounded-bl" />
        </div>
      </motion.div>
    </section>
  );
};
