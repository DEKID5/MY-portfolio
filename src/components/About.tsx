import React from 'react';
import { CV_DATA } from '../data';
import { TextReveal } from './TextReveal';
import { SpotlightCard } from './SpotlightCard';

export const About = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SpotlightCard className="p-8 md:p-12 lg:p-24 relative">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
            <div className="md:col-span-4">
              <h2 className="font-display text-3xl font-bold text-white uppercase tracking-widest">Professional<br/><span className="text-zinc-500">Summary</span></h2>
              <div className="w-12 h-1 bg-white rounded-full mt-6 opacity-20" />
            </div>
            
            <div className="md:col-span-8">
              <TextReveal
                text={CV_DATA.summary}
                className="text-zinc-300 text-xl leading-relaxed font-light"
              />
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};
