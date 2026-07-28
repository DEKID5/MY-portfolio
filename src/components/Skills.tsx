import React, { useState } from 'react';
import { CV_DATA } from '../data';
import { Code2, Layers, Database, Bug, Server, MonitorSmartphone, ChevronDown, Globe, ArrowUpRight } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  programming: <Code2 className="w-7 h-7" />,
  frameworks: <Layers className="w-7 h-7" />,
  databases: <Database className="w-7 h-7" />,
  qa: <Bug className="w-7 h-7" />,
  infrastructure: <Server className="w-7 h-7" />,
  core: <MonitorSmartphone className="w-7 h-7" />,
};

const formatTitle = (key: string) => {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
};

export const Skills = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const categories = Object.entries(CV_DATA.skills);

  return (
    <div className="section-services" id="skills">
      <div className="section-services-inner">
        <div className="text-sm dot-before subtitle text-white/70 uppercase tracking-widest mb-12">
          Services
        </div>

        <div className="services-wrap accordion-wrap" id="accordion-services">
          {categories.map(([category, skills], index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={category}
                className={`accordion-item ${isOpen ? '' : 'collapsed'}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setOpenIndex(isOpen ? -1 : index);
                  }
                }}
              >
                <div className="accordion-head">
                  <div className="icon">
                    {icons[category]}
                  </div>
                  <div className="text-display-2 title flex items-center gap-2 text-2xl md:text-3xl font-bold uppercase tracking-tight">
                    <div>{formatTitle(category)}</div>
                    <span className="text-sm text-white/50 font-normal">
                      ({String(index + 1).padStart(2, '0')})
                    </span>
                  </div>
                  <div className="ml-auto">
                    <ChevronDown
                      className={`w-6 h-6 text-white/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>
                <div className="accordion-body">
                  <div className="list-text pb-6">
                    {skills.map((skill) => (
                      <div
                        key={skill}
                        className="text sub-heading text-white/70 text-base md:text-lg uppercase tracking-widest py-2"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="more-infor mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="worldwide text-sm text-white/70 flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Available to <span className="text-white font-semibold">Worldwide</span>
          </div>
          <a
            href="#contact"
            className="text-sm text-white/70 uppercase tracking-widest hover:text-j-primary transition-colors flex items-center gap-2"
          >
            Contact me
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
