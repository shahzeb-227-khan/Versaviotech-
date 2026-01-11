
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionWrapper } from '../components/MotionWrapper';
import { Link } from 'react-router-dom';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { projectsData } from '../data/projects';

const categories = ["All Projects", "Healthcare", "E-commerce", "Events", "Enterprise"];

export const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = 'Projects — Case Studies in AI, Automation & SAP';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Explore Versavio Tech case studies showcasing AI, automation, SAP integrations, and document intelligence that drive measurable business outcomes.';
    if (meta) meta.setAttribute('content', content);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  const filteredProjects = projectsData.filter(p => {
    const matchesCategory = activeCategory === "All Projects" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <section className="mb-24">
          <MotionWrapper>
            <AnimatedHeading as="h1" className="text-5xl md:text-7xl font-bold font-heading mb-8">
              Real Results from Real Businesses
            </AnimatedHeading>
            <p className="text-xl text-thistle-200 max-w-4xl leading-relaxed">
              Explore our portfolio of successful implementations. Each project demonstrates measurable business impact, innovative approaches, and the transformative power of intelligent technology solutions.
            </p>
          </MotionWrapper>
        </section>

        {/* Filters */}
        <section className="mb-16">
          <MotionWrapper className="glass neon-border p-8 rounded-3xl border border-thistle-500/10">
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              <div className="w-full lg:w-1/3">
                <label className="block text-sm font-bold text-thistle-400 mb-2 uppercase tracking-tight">Search intelligence...</label>
                <input 
                  type="text" 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Filter by keywords..."
                  className="w-full bg-thistle-950/50 border border-thistle-500/20 rounded-xl px-4 py-3 text-thistle-100 focus:outline-none focus:border-thistle-400 transition-colors"
                />
              </div>
              <div className="flex-1 w-full overflow-x-auto">
                 <label className="block text-sm font-bold text-thistle-400 mb-2 uppercase tracking-tight">Domain Filters</label>
                 <div className="flex gap-2">
                   {categories.map(cat => (
                     <button
                       key={cat}
                       onClick={() => setActiveCategory(cat)}
                       className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-thistle-500 text-white shadow-[0_0_20px_rgba(157,65,190,0.4)]' : 'glass text-thistle-400 hover:text-thistle-100'}`}
                     >
                       {cat}
                     </button>
                   ))}
                 </div>
              </div>
            </div>
          </MotionWrapper>
        </section>

        {/* Grid */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative h-full"
                >
                  <Link to={`/projects/${project.id}`} className="block h-full">
                    <div className="glass neon-border h-full rounded-[2.5rem] overflow-hidden flex flex-col border border-thistle-500/10 hover:border-thistle-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(157,65,190,0.4)]">
                      <div className="relative aspect-video overflow-hidden">
                        <motion.img 
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-thistle-950/80 to-transparent pointer-events-none" />
                        <span className="absolute top-4 left-4 text-thistle-500 font-bold text-[10px] uppercase tracking-widest bg-thistle-950/90 px-3 py-1 rounded-full border border-thistle-500/30 pointer-events-none">
                          {project.category}
                        </span>
                      </div>
                      
                      <div className="p-8 flex flex-col flex-1">
                        <h3 className="text-xl font-bold mb-4 font-heading text-thistle-50 leading-tight group-hover:text-thistle-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-thistle-300 text-sm leading-relaxed mb-8 flex-1">
                          {project.description}
                        </p>
                        <div className="text-thistle-100 font-bold text-sm flex items-center group-hover:text-thistle-400 transition-colors">
                          View Case Study <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {filteredProjects.length === 0 && (
             <div className="text-center py-24 glass rounded-3xl border border-dashed border-thistle-500/30">
               <p className="text-thistle-400 italic">No intelligence benchmarks matching your criteria.</p>
             </div>
          )}
        </section>

        <section className="text-center">
          <MotionWrapper>
            <div
              className="glass neon-border p-20 rounded-[3rem] border border-thistle-500/20 max-w-4xl mx-auto relative overflow-hidden group"
              role="button"
              tabIndex={0}
              onClick={() => navigate('/contact')}
              onKeyDown={(e) => { if (e.key === 'Enter') navigate('/contact'); }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-thistle-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h2 className="text-4xl font-bold font-heading mb-6">Ready to Start Your Transformation?</h2>
              <p className="text-thistle-300 mb-12 text-lg">Join the businesses that have already transformed their operations with Versavio Tech.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <button type="button" onClick={() => navigate('/contact')} className="bg-thistle-500 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-thistle-500/20 active:scale-95">
                  Start Your Project
                </button>
              </div>
            </div>
          </MotionWrapper>
        </section>
      </div>
    </div>
  );
};
