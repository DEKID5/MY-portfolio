import React from 'react';
import { Home, Briefcase, Layers, User, Mail } from 'lucide-react';

const menuItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Featured Works', icon: Layers },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const MobileMenu = () => {
  return (
    <nav className="mobile-navbar" aria-label="Mobile navigation">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <a key={item.id} href={`#${item.id}`}>
            <Icon className="w-5 h-5" />
            <span>{item.label === 'Featured Works' ? 'Works' : item.label}</span>
          </a>
        );
      })}
    </nav>
  );
};
