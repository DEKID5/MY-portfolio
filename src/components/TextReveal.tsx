import React from 'react';
import { motion } from 'motion/react';

export const TextReveal = ({ 
  text, 
  className = "", 
  delay = 0 
}: { 
  text: string, 
  className?: string,
  delay?: number
}) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.015, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(4px)"
    },
  };

  return (
    <motion.p
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ display: "inline-flex", flexWrap: "wrap", rowGap: "0.2em" }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};
