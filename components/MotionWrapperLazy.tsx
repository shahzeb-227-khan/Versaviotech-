// SEO-SAFE lazy animation wrapper for BELOW-THE-FOLD content only
// Use MotionWrapper for above-the-fold, this for sections further down the page
import React from 'react';
import { motion, Variants, Easing } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const MotionWrapperLazy: React.FC<Props> = ({ children, delay = 0, className = "", direction = "up" }) => {
  const variants: Variants = {
    hidden: { 
      opacity: 1,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        duration: 0.8, 
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
