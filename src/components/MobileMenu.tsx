import React, { useState } from 'react';
import { Home, Briefcase, Layers, User, Wrench, Mail, X, Menu } from 'lucide-react';

const menuItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Featured Works', icon: Layers },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:hidden fixed top-6 right-6 z-[110]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[109] bg-black/90 backdrop-blur-xl">
          <div className="flex flex-col h-full p-8 pt-24">
            <nav className="flex flex-col gap-6">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 text-2xl font-semibold text-white/80 hover:text-j-primary transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
