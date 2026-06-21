import React from 'react';
import { motion } from 'motion/react';
import { CV_DATA } from '../data';
import { Code2, ExternalLink } from 'lucide-react';
import { TextReveal } from './TextReveal';
import { SpotlightCard } from './SpotlightCard';

export const Projects = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 md:flex md:items-end md:justify-between"
        >
          <div>
            <h2 className="font-display text-4xl font-bold text-white mb-4 uppercase tracking-widest">Featured <span className="text-zinc-500">Work</span></h2>
            <p className="text-zinc-400 max-w-2xl font-mono text-sm uppercase tracking-wider">A selection of my recent work detailing my technical involvement.</p>
          </div>
        </motion.div>

        <div className="space-y-32">
          {CV_DATA.projects.map((project, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative">
              {/* Sticky Mockup / Visual Side */}
              <div className="w-full lg:w-1/2 lg:sticky lg:top-24 h-[60vh] lg:h-[80vh] flex flex-col items-center justify-center space-y-6">
                
                {project.link ? (
                  <>
                    <div className="relative h-full max-h-[800px] aspect-[9/19.5] rounded-[3rem] md:rounded-[3.5rem] overflow-visible border-[10px] md:border-[14px] border-[#0a0a0a] bg-black ring-1 ring-white/10 flex flex-col shadow-2xl shrink-0 mx-auto">
                    {/* Dynamic Island / Notch area */}
                    <div className="absolute top-2 inset-x-1/2 -translate-x-1/2 w-[30%] h-7 bg-[#0a0a0a] rounded-full z-20 flex items-center justify-end px-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10 mr-1"></div>
                    </div>
                    
                    {/* Side Buttons */}
                    <div className="absolute top-24 -left-[12px] md:-left-[16px] w-[3px] h-10 bg-[#1a1a1a] rounded-l-md z-0"></div>
                    <div className="absolute top-40 -left-[12px] md:-left-[16px] w-[3px] h-16 bg-[#1a1a1a] rounded-l-md z-0"></div>
                    <div className="absolute top-60 -left-[12px] md:-left-[16px] w-[3px] h-16 bg-[#1a1a1a] rounded-l-md z-0"></div>
                    <div className="absolute top-36 -right-[12px] md:-right-[16px] w-[3px] h-20 bg-[#1a1a1a] rounded-r-md z-0"></div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 inset-x-1/3 h-1.5 bg-white/50 rounded-full z-20 mix-blend-difference"></div>

                    {/* Content / iframe */}
                    <div className="flex-1 relative bg-[#111] w-full h-full rounded-[2.5rem] md:rounded-[2.8rem] overflow-hidden isolate">
                      <iframe 
                        src={project.link} 
                        className="absolute inset-y-0 left-0 w-[calc(100%+24px)] h-full border-0"
                        title={project.name}
                        loading="lazy"
                      />
                    </div>
                  </div>
                    
                  <a 
                    href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5 text-xs text-white font-mono uppercase tracking-widest hover-lift flex items-center shrink-0"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open Live Site
                    </a>
                  </>
                ) : (
                  <SpotlightCard className="w-full h-[40vh] lg:h-[60vh]">
                    <div className="relative w-full h-full border border-white/10 rounded-3xl flex flex-col items-center justify-center mb-0 overflow-hidden group">
                      <div className="absolute inset-0 bg-[#020202] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
                      
                      {/* Demo abstract shapes */}
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-32 h-32 border border-white/20 rotate-45 flex items-center justify-center group-hover:rotate-90 transition-transform duration-1000 ease-out"
                      >
                        <div className="w-16 h-16 border border-white/40 -rotate-45 flex items-center justify-center">
                           <Code2 className="w-6 h-6 text-white/50" />
                        </div>
                      </motion.div>

                      <div className="absolute bottom-6 left-6 font-mono text-sm text-zinc-500 uppercase tracking-widest">
                        ID: PRJ-{index + 1}00
                      </div>
                    </div>
                  </SpotlightCard>
                )}
              </div>
              
              {/* Scrolling Details Side */}
              <div className="w-full lg:w-1/2 py-8 lg:py-24 flex flex-col justify-center min-h-[60vh]">
                <div className="inline-flex px-3 py-1 glass-panel text-white/70 w-fit rounded text-sm font-mono uppercase tracking-widest mb-6">
                  Case Study
                </div>

                <div className="mb-8">
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tight">{project.name}</h3>
                  <TextReveal 
                    text={project.description} 
                    className="text-zinc-400 font-light leading-relaxed text-lg mb-8 block" 
                  />
                </div>

                <div className="mb-12 space-y-6">
                  <h4 className="text-sm font-mono tracking-widest text-white uppercase border-b border-white/10 pb-4">Implementation Details</h4>
                  <ul className="space-y-4">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2.5 mr-4 shrink-0 transition-opacity" />
                        <TextReveal text={detail} className="text-zinc-300 font-light leading-relaxed block" />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-12">
                  <h4 className="text-sm font-mono tracking-widest text-white uppercase border-b border-white/10 pb-4 mb-6">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-[#111] border border-white/10 rounded-md text-sm font-mono text-zinc-300 uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
