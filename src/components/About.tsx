import React from 'react';
import { CV_DATA } from '../data';

export const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="heading mb-12">
        <div className="text-sm dot-before subtitle text-white/70 uppercase tracking-widest mb-6">
          About Me
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight mb-6">
            {CV_DATA.title}
          </h2>
          <div className="text-white/70 text-lg leading-relaxed">
            {CV_DATA.summary}
          </div>
        </div>
      </div>

    </section>
  );
};
