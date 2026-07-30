import React, { useState, useEffect } from 'react';
import { CV_DATA } from '../data';
import { Star } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = CV_DATA.testimonials || [];

  // Auto-advance slider
  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (!testimonials.length) return null;

  return (
    <section className="py-24 border-t border-white/10" id="testimonials">
      <AnimatedSection className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-white/20"></div>
          <span className="text-[#ccff00] italic font-medium" style={{ fontFamily: 'cursive' }}>
            Testimonial
          </span>
          <div className="w-8 h-[1px] bg-white/20"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Happy Words From <br/> Happy Customer
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={200} className="relative bg-[#0a0a0a] rounded-[40px] border border-white/5 p-8 md:p-16 overflow-hidden">
        
        {/* Background decorative images (Placeholder styles mimicking the reference) */}
        <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/10 overflow-hidden opacity-50 blur-[2px]">
          <img src="https://i.pravatar.cc/300?img=12" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="hidden lg:block absolute left-20 bottom-0 w-32 h-48 rounded-t-full border border-white/10 overflow-hidden opacity-30">
          <img src="https://i.pravatar.cc/300?img=60" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-48 h-64 rounded-full border border-white/10 overflow-hidden opacity-80">
          <img src="https://i.pravatar.cc/300?img=33" alt="bg" className="w-full h-full object-cover" />
        </div>

        {/* Huge quote watermark */}
        <div className="absolute top-12 left-12 lg:left-1/3 text-[200px] leading-none font-serif text-white/[0.02] select-none pointer-events-none">
          "
        </div>

        {/* Carousel Container */}
        <div className="relative z-10 max-w-2xl mx-auto min-h-[300px] flex flex-col justify-center">
          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testi, idx) => (
                <div key={idx} className="w-full shrink-0 px-4">
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        fill={i < testi.rating ? "#ccff00" : "transparent"} 
                        stroke={i < testi.rating ? "#ccff00" : "rgba(255,255,255,0.2)"} 
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light italic mb-8">
                    "{testi.quote}"
                  </p>

                  {/* Author */}
                  <div>
                    <h4 className="text-xl font-bold text-[#ccff00] mb-1">{testi.name}</h4>
                    <p className="text-white/40 text-sm uppercase tracking-widest">{testi.title}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-12 right-12 flex gap-3 z-20">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full border border-white/30 transition-all ${
                activeIndex === idx ? 'bg-[#ccff00] border-[#ccff00] scale-125' : 'hover:border-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </AnimatedSection>
    </section>
  );
};
