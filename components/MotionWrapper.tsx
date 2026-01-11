
import React from 'react';
import { motion, Variants, Easing } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const MotionWrapper: React.FC<Props> = ({ children, delay = 0, className = "", direction = "up" }) => {
  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
      filter: 'blur(8px)'
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      filter: 'blur(0px)',
      transition: { 
        duration: 1.2, 
        delay, 
        ease: [0.19, 1, 0.22, 1] as Easing 
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
