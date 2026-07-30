import { useEffect, useState, useRef, RefObject } from 'react';

export function useScrollReveal(options = { threshold: 0.15, triggerOnce: true }): [RefObject<HTMLDivElement>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.triggerOnce && elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.triggerOnce]);

  return [elementRef, isVisible];
}
