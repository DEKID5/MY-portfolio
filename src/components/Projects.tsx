import React from 'react';
import { CV_DATA } from '../data';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const Projects = () => {
  return (
    <section className="py-24 border-t border-white/10" id="projects">
      <AnimatedSection className="matias-subheading mb-16">SELECTED WORKS</AnimatedSection>
      
      <div className="flex flex-col gap-12">
        {CV_DATA.projects.map((project, idx) => (
          <AnimatedSection 
            key={idx} 
            delay={idx * 150}
            className="group block relative overflow-hidden rounded-3xl bg-matias-card border border-matias-border p-8 md:p-12 hover:border-[#ccff00] transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Info Side */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-4 group-hover:text-[#ccff00] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-white/60 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="px-3 py-1 rounded-full border border-white/20 text-xs tracking-wider uppercase text-white/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-5 mt-4">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 matias-text-accent uppercase tracking-widest text-sm font-bold w-fit hover:opacity-80 transition-opacity"
                  >
                    Visit Project <ArrowUpRight size={18} />
                  </a>

                  {'secondaryLink' in project && (project as any).secondaryLink && (
                    <a 
                      href={(project as any).secondaryLink.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 text-white/70 hover:text-[#ccff00] uppercase tracking-widest text-xs md:text-sm font-semibold w-fit transition-colors"
                    >
                      {(project as any).secondaryLink.label} <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Details Side (replaces image for now to keep content focused) */}
              <div className="lg:col-span-7 bg-[#0a0a0a] rounded-2xl p-8 border border-white/5">
                <ul className="flex flex-col gap-6">
                  {project.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-4">
                      <div className="mt-2 w-2 h-2 shrink-0 rounded-full matias-bg-accent"></div>
                      <p className="text-white/70 leading-relaxed">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};
