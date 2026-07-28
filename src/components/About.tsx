import React from 'react';
import { CV_DATA } from '../data';
import { GraduationCap, Calendar } from 'lucide-react';

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

      <div className="j-card p-6 md:p-8">
        <h3 className="text-2xl font-bold uppercase tracking-widest mb-8">
          Education
        </h3>
        <div className="space-y-6">
          {CV_DATA.education.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-6 border-b border-white/10 last:border-0 last:pb-0"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-j-secondary to-j-primary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-wider">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-white/60 uppercase tracking-widest mt-1">
                    {edu.institution}
                  </p>
                </div>
              </div>
              {edu.period && (
                <div className="flex items-center gap-2 text-j-primary text-sm font-semibold uppercase tracking-widest">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
