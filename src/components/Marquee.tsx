import React from 'react';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left', className = '' }) => {
  // Repeat the text several times so it fills the screen for infinite scrolling
  const repeatedText = Array(10).fill(text);

  return (
    <div className={`overflow-hidden py-12 flex whitespace-nowrap bg-black border-y border-white/5 ${className}`}>
      <div className={direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}>
        <div className="flex items-center gap-12 px-6">
          {repeatedText.map((item, index) => (
            <div key={index} className="flex items-center gap-12 group">
              <span className="text-6xl md:text-8xl font-black uppercase text-outline transition-colors duration-300">
                {item}
              </span>
              {/* Star separator */}
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#ccff00] animate-spin-slow" fill="currentColor">
                <path d="M20 0L24.49 15.51L40 20L24.49 24.49L20 40L15.51 24.49L0 20L15.51 15.51L20 0Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
