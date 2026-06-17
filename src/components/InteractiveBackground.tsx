import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'motion/react';

export const InteractiveBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1 based on window center
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Smooth transforms based on mouse interactions
  const mouseRotateX = useTransform(mouseY, [-1, 1], [10, -10]);
  const mouseRotateY = useTransform(mouseX, [-1, 1], [-10, 10]);
  const translateX = useTransform(mouseX, [-1, 1], [-40, 40]);
  const translateY = useTransform(mouseY, [-1, 1], [-40, 40]);

  // Scroll transforms
  const scrollRotateX = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const scrollTranslateY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // Combine transforms
  const rotateX = useTransform(() => mouseRotateX.get() + scrollRotateX.get());
  
  const smoothRotateX = useSpring(rotateX, { damping: 50, stiffness: 100 });
  const smoothRotateY = useSpring(mouseRotateY, { damping: 50, stiffness: 100 });
  const smoothTranslateX = useSpring(translateX, { damping: 50, stiffness: 100 });
  const smoothTranslateY = useSpring(translateY, { damping: 50, stiffness: 100 });

  return (
    <div className="fixed inset-0 z-[-1] flex items-center justify-center pointer-events-none overflow-hidden">
      <motion.div
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          x: smoothTranslateX,
          y: useTransform(() => smoothTranslateY.get() + scrollTranslateY.get()),
          scale: scrollScale,
          transformPerspective: 1500,
          transformStyle: "preserve-3d"
        }}
        className="relative w-[140vw] h-[120vh] md:w-[100vw] md:h-[100vh] opacity-[0.25] mix-blend-screen flex items-center justify-center"
      >
        {/* Changed image to one displaying coding on a screen */}
        <img 
          src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2000&auto=format&fit=crop" 
          alt="3D Macbook Workspace with Code" 
          className="w-full h-full object-cover grayscale scale-110"
          style={{
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 65%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 15%, rgba(0,0,0,0) 65%)'
          }}
        />
        
        {/* Parallax Floating Elements */}
        <motion.div 
          className="absolute top-[30%] left-[15%] w-64 h-64 border border-white/10 rounded-full"
          style={{ z: 200, opacity: 0.3 }}
        />
        <motion.div 
          className="absolute bottom-[25%] right-[20%] w-96 h-96 border border-white/5 rounded-full"
          style={{ z: 250, opacity: 0.2 }}
        />
        <motion.div 
          className="absolute top-[45%] right-[25%] w-16 h-16 border border-white/20 rotate-45"
          style={{ z: 350, opacity: 0.4 }}
        />
      </motion.div>
    </div>
  );
};
