import React from 'react';
import { CV_DATA } from '../data';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export const Projects = () => {
  return (
    <section className="section-selected-works" id="projects">
      <div className="text-sm dot-before subtitle text-white/70 uppercase tracking-widest mb-6">
        Selected Works
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight leading-tight mb-12">
        Featured Projects
      </h2>

      <div className="project-marquee" aria-hidden="true">
        <div className="animate-marquee">
          {[...Array(4)].map((_, index) => (
            <React.Fragment key={index}>
              <span>Selected Work</span>
              <i />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="works-wrap space-y-6">
        {CV_DATA.projects.map((project, index) => (
          <div key={index} className="works-item j-card overflow-hidden group">
            <a
              className="project-preview"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.name}`}
            >
              <div className="project-preview-frame">
                <iframe
                  src={project.link}
                  title={`${project.name} live preview`}
                  loading="lazy"
                  tabIndex={-1}
                />
                <div className="project-preview-overlay">
                  <span>Open live site</span>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </a>

            <div className="content p-6 md:p-8">
              <div className="infor text-sm text-white/50 uppercase tracking-widest mb-3">
                {project.technologies.slice(0, 4).join(' / ')}
              </div>
              <div className="sub text-xs text-j-primary uppercase tracking-widest mb-2">
                Case Study {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="title text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-j-primary transition-colors"
                >
                  {project.name}
                </a>
              </h3>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                {project.description}
              </p>

              <ul className="space-y-3 mb-6">
                {project.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="text-white/60 text-sm leading-relaxed flex items-start"
                  >
                    <span className="mr-3 mt-2 shrink-0 block w-1 h-1 rounded-full bg-white/40" />
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs text-white/80 uppercase tracking-widest border border-white/10 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-links inline-flex items-center gap-3 px-5 py-3 bg-white text-black rounded-full text-sm uppercase tracking-widest hover:bg-j-primary hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Live Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
