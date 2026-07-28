import React from 'react';
import { CV_DATA } from '../data';
import { Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import profileImg from '@/assets/images/IMG_2537.JPG.jpeg';

const socialIcons: Record<string, React.ReactNode> = {
  Github: <Github className="w-5 h-5" />,
  Linkedin: <Linkedin className="w-5 h-5" />,
  Instagram: <Instagram className="w-5 h-5" />,
};

export const Sidebar = () => {
  return (
    <aside className="left-sidebar">
      <div className="heading">
        <div className="text-xl font-bold tracking-widest uppercase text-white">
          Seth<span className="gradient-text">Codes</span>
        </div>
        <div className="box-status">
          <div className="dot" />
          <div className="text-sm text-white/70">
            Available for <span className="text-white font-semibold">work</span>
          </div>
        </div>
      </div>

      <div className="image">
        <div className="avatar avatar-wrap">
          <img
            src={profileImg}
            alt={CV_DATA.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="infor">
        <h6 className="text-lg text-j-light-gray mb-1">{CV_DATA.email}</h6>
        <div className="text-sm text-j-gray uppercase">{CV_DATA.location}</div>
      </div>

      <ul className="social-links justify-content-center">
        {CV_DATA.socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              {socialIcons[social.icon]}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="bot-button">
        <div className="text-body-1 text">Contact Me</div>
        <div className="icon">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </a>
    </aside>
  );
};
