import React from 'react';
import { CV_DATA } from '../data';
import { Building2, Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  return (
    <section className="section-experiences" id="experience">
      <div className="text-sm dot-before subtitle text-white/70 uppercase tracking-widest mb-6">
        Experiences
      </div>
      <h2 className="desc text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight mb-12">
        Building scalable digital solutions
      </h2>

      <div className="experiences-wrap">
        {CV_DATA.experience.map((job, index) => (
          <div
            key={index}
            className="experience-item j-card p-6 md:p-8 mb-6 last:mb-0"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wider mb-2">
                  {job.role}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/70 uppercase tracking-widest">
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" /> {job.company}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-j-primary text-sm font-semibold uppercase tracking-widest">
                <Calendar className="w-4 h-4" />
                {job.period}
              </div>
            </div>

            <ul className="space-y-4">
              {job.responsibilities.map((resp, idx) => (
                <li
                  key={idx}
                  className="text-white/70 text-base leading-relaxed flex items-start"
                >
                  <span className="mr-4 mt-2.5 shrink-0 block w-1.5 h-1.5 rounded-full bg-white/50" />
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
