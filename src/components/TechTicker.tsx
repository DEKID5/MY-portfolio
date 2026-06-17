import React from 'react';
import { CV_DATA } from '../data';

export const TechTicker = () => {
  const allSkills = [
    ...CV_DATA.skills.programming,
    ...CV_DATA.skills.frameworks,
    ...CV_DATA.skills.databases,
    "Docker", "RESTful API", "Git"
  ];
  
  // Duplicate the array to create a seamless loop
  const tickerItems = [...allSkills, ...allSkills];

  return (
    <div className="w-full overflow-hidden border-y border-white/5 bg-white/[0.01] py-8 my-12 relative flex items-center">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none" />
      
      <div className="animate-ticker space-x-12 px-6">
        {tickerItems.map((skill, idx) => (
          <span 
            key={`${skill}-${idx}`} 
            className="text-2xl md:text-3xl font-display font-medium text-white/20 whitespace-nowrap uppercase tracking-[0.2em] hover:text-white/60 transition-colors cursor-default select-none"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
