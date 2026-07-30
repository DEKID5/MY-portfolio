import React from 'react';
import { CV_DATA } from '../data';
import { AnimatedSection } from './AnimatedSection';

export const Experience = () => {
  return (
    <section className="py-24 border-t border-white/10" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Heading */}
        <AnimatedSection className="lg:col-span-5">
          <div className="matias-subheading">EXPERIENCE</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl matias-heading mb-8">
            Work <br /> <span className="matias-text-accent">History</span>
          </h2>
        </AnimatedSection>

        {/* Right Column: Content */}
        <div className="lg:col-span-7">
          <div className="flex flex-col gap-8">
            {CV_DATA.experience.map((exp, idx) => (
              <AnimatedSection key={idx} delay={idx * 150} className="relative pl-8 md:pl-0">
                
                {/* Timeline line (mobile only) */}
                <div className="md:hidden absolute left-0 top-2 bottom-0 w-[1px] bg-white/20"></div>
                <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full matias-bg-accent"></div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline p-8 rounded-2xl bg-matias-card border border-matias-border hover:border-[#ccff00] transition-colors group">
                  
                  {/* Period & Location */}
                  <div className="md:col-span-4 text-white/50 text-sm tracking-widest uppercase font-medium">
                    {exp.period}
                    <div className="text-xs mt-1 text-white/30">{exp.location}</div>
                  </div>
                  
                  {/* Role & Company & Details */}
                  <div className="md:col-span-8">
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-[#ccff00] transition-colors">{exp.role}</h3>
                    <div className="text-white/60 mb-6 uppercase tracking-wider text-sm">{exp.company}</div>
                    
                    <ul className="flex flex-col gap-4">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex gap-3 text-white/70 text-sm leading-relaxed">
                          <span className="text-[#ccff00] opacity-50 mt-1">▹</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
