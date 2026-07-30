import React, { useState } from 'react';
import { CV_DATA } from '../data';
import {
  Code2,
  Layers,
  Database,
  Bug,
  Server,
  MonitorSmartphone,
  Globe,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  programming: <Code2 className="w-6 h-6 text-[#F3500F]" />,
  frameworks: <Layers className="w-6 h-6 text-[#FB8F10]" />,
  databases: <Database className="w-6 h-6 text-[#F3500F]" />,
  qa: <Bug className="w-6 h-6 text-[#FB8F10]" />,
  infrastructure: <Server className="w-6 h-6 text-[#F3500F]" />,
  core: <MonitorSmartphone className="w-6 h-6 text-[#FB8F10]" />,
};

const categoryLabels: Record<string, { title: string; badge: string }> = {
  programming: { title: 'Programming', badge: 'Core Languages' },
  frameworks: { title: 'Frameworks', badge: 'Frontend & Backend' },
  databases: { title: 'Databases', badge: 'Relational & SQL' },
  qa: { title: 'Quality Assurance', badge: 'Testing & Reliability' },
  infrastructure: { title: 'Infrastructure', badge: 'Servers & Systems' },
  core: { title: 'Core Competencies', badge: 'Engineering Focus' },
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = Object.entries(CV_DATA.skills);

  return (
    <div className="section-services pb-20" id="skills">
      <div className="section-services-inner p-6 sm:p-8 md:p-10 rounded-3xl bg-[#111111]/90 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3500F]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FB8F10]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 relative z-10">
          <div>
            <div className="text-xs dot-before text-[#FB8F10] uppercase tracking-widest mb-3 font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F3500F]" />
              Services & Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
              Technical <span className="gradient-text">Services</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm md:text-base max-w-md">
            Comprehensive software development, full-stack architecture, database design, and systems infrastructure solutions.
          </p>
        </div>

        {/* 3-Column Glassmorphic Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10 mb-10">
          {categories.map(([category, skills], index) => {
            const info = categoryLabels[category] || {
              title: category,
              badge: 'Technical',
            };
            const isHovered = activeCategory === category;

            return (
              <div
                key={category}
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`group p-6 rounded-2xl bg-neutral-900/80 border transition-all duration-300 relative flex flex-col justify-between overflow-hidden ${
                  isHovered
                    ? 'border-[#F3500F]/50 bg-neutral-900 shadow-[0_0_30px_rgba(243,80,15,0.15)] -translate-y-1'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Top Glowing Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F3500F] to-[#FB8F10] transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div>
                  {/* Card Header: Icon Badge + Index */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#F3500F]/15 group-hover:border-[#F3500F]/30 transition-all duration-300">
                      {icons[category]}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-white/40 uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                        ({String(index + 1).padStart(2, '0')})
                      </span>
                    </div>
                  </div>

                  {/* Title & Badge */}
                  <div className="mb-4">
                    <div className="text-[11px] font-mono text-[#FB8F10] uppercase tracking-wider mb-1">
                      {info.badge}
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-white transition-colors">
                      {info.title}
                    </h3>
                  </div>

                  {/* Skill Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80 font-medium tracking-wide group-hover:border-white/20 hover:bg-white/10 transition-all"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#FB8F10]/80" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Count */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
                  <span className="font-mono">{skills.length} Capabilities</span>
                  <span className="group-hover:text-[#F3500F] transition-colors font-mono uppercase tracking-wider">
                    Active
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Footer Bar */}
        <div className="more-infor pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div className="worldwide text-sm text-white/70 flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#FB8F10]" />
            Available for remote & worldwide technical contracts
          </div>
          <a
            href="#contact"
            className="bot-button inline-flex items-center justify-between gap-3 px-6 py-2.5 border border-white/15 rounded-full text-white text-sm hover:text-j-primary hover:border-j-primary transition-all w-full sm:w-auto justify-center"
          >
            <span>Contact Me</span>
            <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center font-bold">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

