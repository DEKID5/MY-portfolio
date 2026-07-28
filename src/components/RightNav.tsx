import React, { useState, useEffect } from 'react';
import { Home, Briefcase, Layers, User, Wrench, Mail } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Featured Works', icon: Layers },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const RightNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
      
      const sections = navItems.map((item) => ({
        id: item.id,
        offset: document.getElementById(item.id)?.offsetTop || 0,
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`right-nav ${isVisible ? 'opacity-100' : 'opacity-0'} ${isOpen ? 'is-open' : ''}`}>
      <button
        className="right-nav-toggle"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <span className="nav-close">×</span> : <span className="nav-grid">⌘</span>}
      </button>
      <div className="right-nav-drawer">
        <div className="right-nav-drawer-title">Navigate</div>
        <ul className="right-nav-list">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={isActive ? 'active' : ''}
                aria-label={item.label}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span className="tooltip text-xs">{item.label}</span>
              </a>
            </li>
          );
        })}
        </ul>
      </div>
    </nav>
  );
};
