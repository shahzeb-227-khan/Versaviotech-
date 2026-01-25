
import React from 'react';
import { motion, Variants, Easing } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const MotionWrapper: React.FC<Props> = ({ children, delay = 0, className = "", direction = "up" }) => {
  // SEO-FIRST: Content is ALWAYS visible (opacity: 1), animations use transform only
  // NO blur filter - Googlebot needs to see readable text immediately
  const variants: Variants = {
    hidden: { 
      opacity: 1, // CRITICAL: Never hide content from Googlebot
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
      // NO blur filter - makes content invisible to search engines
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        duration: 0.8, // Faster animation for better UX
        delay, 
        ease: [0.19, 1, 0.22, 1] as Easing 
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible" // Direct animation, not whileInView - critical for above-fold content
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
