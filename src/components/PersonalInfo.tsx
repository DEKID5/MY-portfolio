import React from 'react';
import { CV_DATA } from '../data';
import * as Icons from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const PersonalInfo = () => {
  return (
    <section className="py-24 border-t border-white/10" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Cartoon Image */}
        <AnimatedSection className="lg:col-span-5 flex justify-center">
          <img 
            src="/images/cartoon.png" 
            alt="3D Cartoon Developer" 
            className="w-full max-w-[400px] h-auto drop-shadow-2xl"
          />
        </AnimatedSection>

        {/* Right Column: Info Cards */}
        <AnimatedSection delay={200} className="lg:col-span-7 flex flex-col gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Personal Info
            </h2>
            <p className="text-white/60 leading-relaxed font-light mb-8">
              {CV_DATA.summary.substring(0, 200)}... I am always open to discussing product design work or partnership opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Email Block */}
            <div className="bg-[#111] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-colors">
              <div className="text-white/50 text-sm mb-3">Email</div>
              <a href="#compose" className="text-white font-medium hover:text-[#ccff00] transition-colors break-words">
                {CV_DATA.email}
              </a>
            </div>

            {/* Phone */}
            <div className="bg-[#111] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-colors">
              <div className="text-white/50 text-sm mb-3">Phone</div>
              <a href={`tel:${CV_DATA.phone}`} className="text-white font-medium hover:text-[#ccff00] transition-colors">
                {CV_DATA.phone}
              </a>
            </div>

            {/* Address */}
            <div className="bg-[#111] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-colors">
              <div className="text-white/50 text-sm mb-3">Address</div>
              <div className="text-white font-medium">
                {CV_DATA.location}
              </div>
            </div>

            {/* Follow */}
            <div className="bg-[#111] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-colors">
              <div className="text-white/50 text-sm mb-3">Follow</div>
              <div className="flex gap-4">
                {CV_DATA.socials.map((social, idx) => {
                  const Icon = (Icons as any)[social.icon] || Icons.Link;
                  return (
                    <a 
                      key={idx}
                      href={social.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-white hover:text-[#ccff00] transition-colors"
                      title={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
