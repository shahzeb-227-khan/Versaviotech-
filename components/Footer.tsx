
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-thistle-950 pt-24 pb-12 border-t border-thistle-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold font-heading mb-4 text-gradient">Versavio Tech</h3>
            <p className="text-thistle-300 text-sm leading-relaxed mb-6">
              Transforming businesses through innovative and practical approaches. Your trusted partner in digital transformation and intelligent solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/versavio-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-thistle-400 hover:text-thistle-100 transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-thistle-400 group-hover:text-thistle-100 transition-colors">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.604 0 4.27 2.372 4.27 5.456v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.114 20.452H3.56V9h3.555v11.452z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-thistle-50 font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-thistle-400">
              <li><Link to="/" className="hover:text-thistle-200 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-thistle-200 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-thistle-200 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-thistle-200 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-thistle-200 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-thistle-50 font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm text-thistle-400">
              <li>Business Process Improvements</li>
              <li>Intelligent & Custom Solutions</li>
              <li>ERP & System Integration</li>
              <li>Consulting & Strategy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-thistle-50 font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-thistle-400">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-thistle-400 mr-2">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                info@versaviotech.com
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-thistle-400 mr-2">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.48 2.53.74 3.89.74a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.36.26 2.68.74 3.89a1 1 0 01-.21 1.11l-2.2 2.2z" />
                </svg>
                +92 322 0220670
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-thistle-900/50 flex flex-col md:flex-row justify-between items-center text-[12px] text-thistle-600">
          <p>© 2025 Versavio Tech (Private Limited). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
