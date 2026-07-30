import React from 'react';
import { CV_DATA } from '../data';
import * as Icons from 'lucide-react';

export const VerticalIndicators = () => {
  return (
    <>
      {/* Left Indicator - Scroll Down & Phone */}
      <div className="hidden xl:flex fixed left-8 top-0 h-full flex-col justify-between items-center py-32 z-40">
        
        {/* Top: Phone Number */}
        <div className="vertical-text">
          {CV_DATA.phone}
        </div>

        {/* Bottom: Scroll Down */}
        <div className="flex flex-col items-center gap-4">
          <div className="vertical-text text-white/50">
            SCROLL DOWN
          </div>
          <div className="w-[1px] h-20 bg-white/20 mt-4"></div>
          <div className="text-white/50 text-xs mt-2">↓</div>
        </div>
        
      </div>

      {/* Right Indicator - Follow Me & Socials */}
      <div className="hidden xl:flex fixed right-8 top-0 h-full flex-col justify-between items-center py-32 z-40">
        
        {/* Top: Social Icons */}
        <div className="flex flex-col gap-4">
          {CV_DATA.socials.map((social, idx) => {
            const Icon = (Icons as any)[social.icon] || Icons.Link;
            return (
              <a 
                key={idx}
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-white/70 hover:text-[#ccff00] hover:border-[#ccff00] transition-all"
                title={social.name}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        {/* Bottom: Follow Me */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-white/50 text-xs mb-2">↓</div>
          <div className="w-[1px] h-20 bg-white/20 mb-4"></div>
          <div className="vertical-text text-white/50">
            FOLLOW ME
          </div>
        </div>

      </div>
    </>
  );
};
