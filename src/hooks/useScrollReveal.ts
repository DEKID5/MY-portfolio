import { useEffect, useState, useRef, RefObject } from 'react';

export function useScrollReveal(triggerOnce = false, rootMargin = '0px 0px -50px 0px'): [RefObject<HTMLDivElement>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce && elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    }, { rootMargin, threshold: 0 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [triggerOnce, rootMargin]);

  return [elementRef, isVisible];
}
