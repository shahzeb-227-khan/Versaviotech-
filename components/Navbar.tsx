
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/new_logo.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' }
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass rounded-full px-8 py-3 flex items-center justify-between transition-all ${isScrolled ? 'shadow-2xl shadow-thistle-950/50 border-thistle-500/20' : ''}`}>
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="VersaView logo" className="h-9 w-auto object-contain cursor-pointer" />
            <div className="flex flex-col">
              <span className="text-xl font-bold font-heading text-thistle-50 tracking-tight leading-none">Versavio Tech</span>
              <span className="text-[10px] uppercase tracking-widest text-thistle-400 font-medium">Intelligence in Action</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-thistle-300 ${location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)) ? 'text-thistle-300' : 'text-thistle-100'}`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="bg-thistle-500 hover:bg-thistle-400 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-thistle-500/20">
              Get Started
            </Link>
          </div>

          <button 
            className="md:hidden text-thistle-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 mt-2 px-6"
          >
            <div className="glass rounded-3xl p-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-thistle-100 hover:text-thistle-300"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-thistle-500 text-white text-center py-3 rounded-2xl font-bold"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
