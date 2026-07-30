import React from 'react';
import { CV_DATA } from '../data';
import { AnimatedSection } from './AnimatedSection';

export const About = () => {
  return (
    <section className="py-24 border-t border-white/10" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Heading & Image */}
        <AnimatedSection className="lg:col-span-5 flex flex-col gap-12">
          <div>
            <div className="matias-subheading">ABOUT ME</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl matias-heading">
              Professional <br /> <span className="text-white/50">&</span> <span className="matias-text-accent">Dedicated</span>
            </h2>
          </div>
          
          <div className="hidden lg:flex justify-center items-center w-full relative mt-8 -ml-8">
            <img 
              src="/images/cartoon-about.png" 
              alt="Cartoon Developer" 
              className="w-[120%] max-w-none h-auto object-contain"
              style={{
                maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 80%)'
              }}
            />
          </div>
        </AnimatedSection>

        {/* Right Column: Content */}
        <AnimatedSection delay={200} className="lg:col-span-7 flex flex-col justify-center">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-12">
            {CV_DATA.summary}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Core Tech Stack */}
            <div className="bg-[#111] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors">
              <h3 className="text-xl font-bold mb-6 tracking-wide uppercase">Core Tech Stack</h3>
              <ul className="space-y-4 text-white/60">
                {[...CV_DATA.skills.programming, ...CV_DATA.skills.frameworks].map((skill, idx) => (
                  <li key={`fe-${idx}`} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Infrastructure & QA */}
            <div className="bg-[#111] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors">
              <h3 className="text-xl font-bold mb-6 tracking-wide uppercase">Infrastructure & QA</h3>
              <ul className="space-y-4 text-white/60">
                {[...CV_DATA.skills.infrastructure, ...CV_DATA.skills.qa].map((skill, idx) => (
                  <li key={`tool-${idx}`} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
        
      </div>
    </section>
  );
};
