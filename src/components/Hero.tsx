import React, { useEffect, useState } from 'react';
import { CV_DATA } from '../data';

const skillTags = [
  ...CV_DATA.skills.programming.slice(0, 2),
  ...CV_DATA.skills.frameworks.slice(0, 2),
  'Full-Stack Development',
  'E-Commerce Solutions',
];

export const Hero = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Africa/Accra',
      });
      setTime(`${CV_DATA.location} ${timeString}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-hero" id="home">
      <div className="icon-gradient" />
      <div className="infor dot-before text-sm text-white/70 mb-8 uppercase tracking-widest">
        {time}
      </div>

      <div className="main-title">
        <div className="text-sm dot-before subtitle text-white/70 uppercase tracking-widest mb-6">
          Introduction
        </div>
        <h1 className="title text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight leading-none mb-6">
          {CV_DATA.name}
        </h1>
        <div className="text-body-2 text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          {CV_DATA.title} specializing in modern, scalable web applications.
        </div>
      </div>

      <div className="indicators">
        <ul className="list-tags">
          {skillTags.map((tag, index) => (
            <li key={index}>
              <a
                href="#skills"
                className="text-sm text-white/70 uppercase tracking-widest hover:text-j-primary transition-colors"
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>

        <div className="indicators-wrap">
          <div className="indicators-item">
            <div className="text-sm dot-before indicators-title text-white/70 uppercase tracking-widest">
              Projects Completed
            </div>
            <div className="flex items-center justify-end">
              <div className="text-5xl md:text-6xl font-bold">{CV_DATA.projects.length}</div>
              <span className="text-4xl md:text-5xl font-bold">+</span>
            </div>
          </div>
          <div className="indicators-item type-1">
            <div className="text-sm dot-before indicators-title text-white/70 uppercase tracking-widest">
              Experience
            </div>
            <div className="flex items-center justify-end">
              <div className="text-5xl md:text-6xl font-bold">1</div>
              <span className="text-4xl md:text-5xl font-bold">+</span>
            </div>
            <div className="text-xs text-white/50 uppercase tracking-widest text-right mt-1">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
};
