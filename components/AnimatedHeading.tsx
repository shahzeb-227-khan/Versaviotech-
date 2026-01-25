
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export const AnimatedHeading: React.FC<Props> = ({ children, className = "", as = 'h2' }) => {
  const Tag = as;
  
  return (
    <Tag className={`relative inline-block ${className}`}>
      <motion.span
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="bg-[length:200%_auto] bg-clip-text text-transparent bg-gradient-to-r from-thistle-100 via-thistle-400 to-thistle-100"
      >
        {children}
      </motion.span>
    </Tag>
  );
};
