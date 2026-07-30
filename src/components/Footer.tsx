import React from 'react';
import { CV_DATA } from '../data';
import { Mail, MapPin } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-white/10" id="contact">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Column: Text & Contact Info */}
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-white/20"></div>
              <span className="text-[#ccff00] italic text-xl font-medium" style={{ fontFamily: 'cursive' }}>
                Need a Project?
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-16 leading-tight tracking-tight">
              Let's Work Together.<br />
              Fixed A Meeting
            </h2>

            <div className="flex flex-col gap-10">
              {/* Email Block */}
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 shrink-0 rounded-full matias-bg-accent flex items-center justify-center">
                  <Mail className="text-black" size={28} />
                </div>
                <div>
                  <div className="text-white/50 text-sm mb-1">Email</div>
                  <a href="#compose" className="text-xl font-medium hover:text-[#ccff00] transition-colors break-all">
                    {CV_DATA.email}
                  </a>
                </div>
              </div>

              {/* Location Block */}
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 shrink-0 rounded-full matias-bg-accent flex items-center justify-center">
                  <MapPin className="text-black" size={28} />
                </div>
                <div>
                  <div className="text-white/50 text-sm mb-1">Location</div>
                  <div className="text-xl font-medium">
                    {CV_DATA.location}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Cartoon Image */}
          <AnimatedSection delay={200} className="flex justify-center lg:justify-end">
            <img 
              src="/images/cartoon-desk.png" 
              alt="Cartoon Developer at Desk" 
              className="w-full max-w-[500px] h-auto drop-shadow-2xl"
            />
          </AnimatedSection>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/40 text-sm tracking-wider">
            © {new Date().getFullYear()} {CV_DATA.name}. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            {CV_DATA.socials.map((social, idx) => (
              <a 
                key={idx} 
                href={social.url} 
                className="text-white/40 hover:text-[#ccff00] text-sm uppercase tracking-widest transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
