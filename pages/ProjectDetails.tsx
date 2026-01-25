
import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MotionWrapper } from '../components/MotionWrapper';
import { projectsData } from '../data/projects';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { SEOHead } from '../components/SEOHead';
import { OptimizedImage } from '../components/OptimizedImage';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  // Generate case study structured data
  const projectStructuredData = useMemo(() => {
    if (!project) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `https://www.versaviotech.com/projects/${project.id}`,
      headline: `${project.title} - Case Study`,
      description: project.overview.substring(0, 160),
      image: project.imageUrl.startsWith('http') ? project.imageUrl : `https://www.versaviotech.com${project.imageUrl}`,
      author: {
        '@type': 'Organization',
        name: 'Versavio Tech',
        url: 'https://www.versaviotech.com'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Versavio Tech',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.versaviotech.com/assets/new_logo.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://www.versaviotech.com/projects/${project.id}`
      },
      about: {
        '@type': 'Thing',
        name: project.category
      },
      keywords: [project.category, ...project.technologies].join(', ')
    };
  }, [project]);

  // Breadcrumb structured data
  const breadcrumbStructuredData = useMemo(() => {
    if (!project) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.versaviotech.com/' },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://www.versaviotech.com/projects' },
        { '@type': 'ListItem', position: 3, name: project.title, item: `https://www.versaviotech.com/projects/${project.id}` }
      ]
    };
  }, [project]);

  if (!project) return <Navigate to="/projects" />;

  return (
    <>
      <SEOHead
        title={`${project.title} - Case Study`}
        description={project.overview.substring(0, 160)}
        canonicalUrl={`/projects/${project.id}`}
        ogImage={project.imageUrl.startsWith('http') ? project.imageUrl : `https://www.versaviotech.com${project.imageUrl}`}
        structuredData={projectStructuredData || undefined}
      />
      
      {/* Breadcrumb structured data */}
      {breadcrumbStructuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      )}
      
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <Link to="/projects" className="text-thistle-400 hover:text-thistle-100 mb-8 inline-flex items-center group">
              <span className="mr-2 group-hover:-translate-x-1 transition-transform" aria-hidden="true">←</span> Back to Projects
            </Link>
          </nav>

          {/* Hero Section */}
          <section className="mb-20">
            <MotionWrapper>
              <div className="flex flex-col items-start gap-4 mb-6">
                <span className="px-4 py-1 rounded-full border border-thistle-500/30 bg-thistle-500/10 text-thistle-300 text-xs font-bold uppercase tracking-widest">
                  {project.category}
                </span>
                <AnimatedHeading as="h1" className="text-5xl md:text-7xl font-bold font-heading">
                  {project.title}
                </AnimatedHeading>
              </div>
              
              <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden border border-thistle-500/20 group">
                <motion.div 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  className="w-full h-full"
                >
                  <OptimizedImage 
                    src={project.imageUrl} 
                    alt={`${project.title} - ${project.category} case study`}
                    className="w-full h-full grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
                    priority={true}
                    width={1200}
                    height={514}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-thistle-950/80 via-transparent to-transparent" aria-hidden="true" />
              </div>
            </MotionWrapper>
          </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <MotionWrapper>
              <h2 className="text-3xl font-bold font-heading mb-6 border-b border-thistle-800 pb-4">Overview</h2>
              <p className="text-thistle-200 text-lg leading-relaxed whitespace-pre-line">{project.overview}</p>
            </MotionWrapper>

            <MotionWrapper>
              <h2 className="text-3xl font-bold font-heading mb-6 border-b border-thistle-800 pb-4 text-gradient">The Challenge</h2>
              <p className="text-thistle-300 text-lg leading-relaxed whitespace-pre-line">{project.challenge}</p>
            </MotionWrapper>

            <MotionWrapper>
              <h2 className="text-3xl font-bold font-heading mb-6 border-b border-thistle-800 pb-4 text-gradient">The Solution</h2>
              <p className="text-thistle-200 text-lg leading-relaxed whitespace-pre-line">{project.solution}</p>
            </MotionWrapper>
          </div>

          <aside className="space-y-8">
            <MotionWrapper delay={0.2}>
              <div className="glass p-8 rounded-3xl border border-thistle-500/10">
                <h3 className="text-xl font-bold font-heading mb-6 text-gradient">Key Results</h3>
                <ul className="space-y-4">
                  {project.keyResults.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-thistle-500 mt-1">✦</span>
                      <span className="text-thistle-100 font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <div className="glass p-8 rounded-3xl border border-thistle-500/10">
                <h3 className="text-xl font-bold font-heading mb-6 text-gradient">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-thistle-950 border border-thistle-800 rounded-lg text-xs font-mono text-thistle-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          </aside>
        </div>

        {/* CTA */}
        <section className="mt-32">
          <MotionWrapper>
            <div className="glass p-12 md:p-20 rounded-[3rem] text-center bg-gradient-to-br from-thistle-950 to-thistle-900 border border-thistle-500/20">
              <h2 className="text-4xl font-bold font-heading mb-6">Project Ready for Your Scale?</h2>
              <p className="text-thistle-300 text-lg mb-10 max-w-2xl mx-auto">Let's discuss how we can implement a similar high-impact solution for your specific business requirements.</p>
              <Link to="/contact" className="bg-thistle-500 text-white px-10 py-4 rounded-full font-bold hover:shadow-[0_0_30px_rgba(157,65,190,0.4)] transition-all inline-block">
                Start a Conversation
              </Link>
            </div>
          </MotionWrapper>
        </section>
      </div>
    </div>
    </>
  );
};
