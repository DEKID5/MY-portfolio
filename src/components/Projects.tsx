import React from 'react';
import { motion } from 'motion/react';
import { CV_DATA } from '../data';
import { Code2 } from 'lucide-react';
import { TextReveal } from './TextReveal';

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
              <div className="w-full lg:w-1/2 lg:sticky lg:top-32 h-[40vh] lg:h-[60vh] glass-panel rounded-2xl overflow-hidden flex items-center justify-center p-2 md:p-8 border-white/10 relative">
                
                {project.link ? (
                  <div className="w-full h-full relative rounded-xl overflow-hidden glass-panel border-white/10 flex flex-col bg-[#080808]">
                    {/* Browser Bar */}
                    <div className="h-8 border-b border-white/10 flex items-center px-4 space-x-2 shrink-0 bg-[#111]">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-600"></div>
                      <div className="ml-4 px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-zinc-500 truncate max-w-[200px]">
                        {project.link.replace(/^https?:\/\//, '')}
                      </div>
                    </div>
                    {/* Content / iframe */}
                    <div className="flex-1 relative bg-black">
                      <iframe 
                        src={project.link} 
                        className="absolute inset-0 w-full h-full border-0"
                        title={project.name}
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : (
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
