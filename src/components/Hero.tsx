import React from 'react';
import { CV_DATA } from '../data';
import { Play } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative pb-20 pt-20" id="home">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <AnimatedSection className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left z-10 lg:pl-12">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] bg-white/20 hidden lg:block"></span>
            <p className="text-white/60 tracking-[0.2em] text-sm md:text-base font-medium uppercase">
              {CV_DATA.role}
            </p>
          </div>

          <div>
            <h1 className="matias-heading text-5xl md:text-6xl lg:text-[85px] tracking-tighter text-white leading-[1.1]">
              IT Professional <br/> & Web <br />
              <span className="matias-text-accent">Developer</span>
            </h1>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#ccff00] transition-colors relative">
                <Play className="text-white group-hover:text-[#ccff00] transition-colors relative z-10" size={24} fill="currentColor" />
                <div className="absolute inset-0 bg-[#ccff00]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
              <span className="text-sm tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">Work Process</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Right Image */}
        <AnimatedSection delay={200} className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[500px]">
            {/* Backdrop glow/decoration for the image */}
            <div className="absolute inset-0 bg-[#ccff00] opacity-5 blur-[100px] rounded-full"></div>
            
            <img 
              src="/images/IMG_2537.JPG.jpeg" 
              alt={CV_DATA.name} 
              className="relative z-10 w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              style={{
                maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
              }}
            />
          </div>
        </AnimatedSection>
      </div>

    </section>
  );
};
