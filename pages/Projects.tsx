
import React, { useState, useMemo, useCallback, memo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionWrapper } from '../components/MotionWrapper';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { projectsData } from '../data/projects';
import { SEOHead } from '../components/SEOHead';
import { OptimizedImage } from '../components/OptimizedImage';

const categories = ["All Projects", "Healthcare", "E-commerce", "Events", "Enterprise"];

// Memoized project card for performance
const ProjectCard = memo(({ project, index }: { project: typeof projectsData[0]; index: number }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group relative h-full"
  >
    <Link to={`/projects/${project.id}`} className="block h-full">
      <article className="glass neon-border h-full rounded-[2.5rem] overflow-hidden flex flex-col border border-thistle-500/10 hover:border-thistle-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(157,65,190,0.4)]">
        <div className="relative aspect-video overflow-hidden">
          <OptimizedImage 
            src={project.imageUrl} 
            alt={`${project.title} - ${project.category} case study`} 
            className="w-full h-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-thistle-950/80 to-transparent pointer-events-none" aria-hidden="true" />
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
            View Case Study <span className="ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true">→</span>
          </div>
        </div>
      </article>
    </Link>
  </motion.div>
));

ProjectCard.displayName = 'ProjectCard';

// Projects page structured data
const projectsStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Versavio Tech Case Studies & Projects',
  description: 'Explore AI, automation, SAP integrations, and enterprise software case studies with measurable business outcomes.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: projectsData.slice(0, 5).map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Article',
        name: project.title,
        description: project.description,
        url: `https://www.versaviotech.com/projects/${project.id}`
      }
    }))
  }
};

export const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [search, setSearch] = useState("");

  // Memoize filtered projects
  const filteredProjects = useMemo(() => 
    projectsData.filter(p => {
      const matchesCategory = activeCategory === "All Projects" || p.category === activeCategory;
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    }), [activeCategory, search]);

  // Memoize handlers
  const handleCategoryClick = useCallback((cat: string) => setActiveCategory(cat), []);
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value), []);
  const handleCtaClick = useCallback(() => navigate('/contact'), [navigate]);
  const handleCtaKeyDown = useCallback((e: React.KeyboardEvent) => { if (e.key === 'Enter') navigate('/contact'); }, [navigate]);

  return (
    <>
      <SEOHead
        title="Projects — Case Studies in AI, Automation & SAP"
        description="Explore Versavio Tech case studies showcasing AI, automation, SAP integrations, and document intelligence that drive measurable business outcomes."
        canonicalUrl="/projects"
        structuredData={projectsStructuredData}
      />
      
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
                  <label htmlFor="project-search" className="block text-sm font-bold text-thistle-400 mb-2 uppercase tracking-tight">Search projects</label>
                  <input 
                    id="project-search"
                    type="text" 
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Filter by keywords..."
                    className="w-full bg-thistle-950/50 border border-thistle-500/20 rounded-xl px-4 py-3 text-thistle-100 focus:outline-none focus:border-thistle-400 transition-colors"
                  />
                </div>
                <div className="flex-1 w-full overflow-x-auto">
                   <label className="block text-sm font-bold text-thistle-400 mb-2 uppercase tracking-tight">Domain Filters</label>
                   <div className="flex gap-2" role="group" aria-label="Filter projects by category">
                     {categories.map(cat => (
                       <button
                         key={cat}
                         onClick={() => handleCategoryClick(cat)}
                         aria-pressed={activeCategory === cat}
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
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </AnimatePresence>
            </div>
            {filteredProjects.length === 0 && (
               <div className="text-center py-24 glass rounded-3xl border border-dashed border-thistle-500/30">
                 <p className="text-thistle-400 italic">No projects matching your criteria.</p>
               </div>
            )}
          </section>

          <section className="text-center">
            <MotionWrapper>
              <div
                className="glass neon-border p-20 rounded-[3rem] border border-thistle-500/20 max-w-4xl mx-auto relative overflow-hidden group"
                role="button"
                tabIndex={0}
                onClick={handleCtaClick}
                onKeyDown={handleCtaKeyDown}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-thistle-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <h2 className="text-4xl font-bold font-heading mb-6">Ready to Start Your Transformation?</h2>
                <p className="text-thistle-300 mb-12 text-lg">Join the businesses that have already transformed their operations with Versavio Tech.</p>
                <div className="flex flex-wrap justify-center gap-6">
                  <button type="button" onClick={handleCtaClick} className="bg-thistle-500 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-thistle-500/20 active:scale-95">
                    Start Your Project
                </button>
              </div>
            </div>
          </MotionWrapper>
        </section>
      </div>
    </div>
    </>
  );
};
