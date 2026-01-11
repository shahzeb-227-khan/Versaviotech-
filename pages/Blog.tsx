
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MotionWrapper } from '../components/MotionWrapper';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { blogPosts } from '../data/blogPosts';

export const Blog: React.FC = () => {
  useEffect(() => {
    document.title = 'Insights — AI, SAP & Enterprise Technology';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Read Versavio Tech\'s insights on AI, SAP BTP, automation, and enterprise technology to stay informed on digital transformation strategies.';
    if (meta) meta.setAttribute('content', content);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <section className="mb-20 text-center">
          <MotionWrapper>
            <AnimatedHeading as="h1" className="text-5xl md:text-7xl font-bold font-heading mb-6">
              Insights & Intelligence
            </AnimatedHeading>
            <p className="text-xl text-thistle-200 max-w-3xl mx-auto leading-relaxed">
              Explore our research-backed articles on the future of SAP, AI, and Enterprise Technology. Data-driven perspectives for forward-thinking leaders.
            </p>
          </MotionWrapper>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="glass rounded-[2.5rem] overflow-hidden border border-thistle-500/10 h-full flex flex-col hover:border-thistle-500/40 transition-all duration-500 hover:-translate-y-2">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-thistle-950/80 to-transparent" />
                    <span className="absolute top-4 left-4 bg-thistle-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="text-thistle-400 text-xs font-medium mb-3 uppercase tracking-wider">
                      {post.date} • By {post.author}
                    </div>
                    <h2 className="text-2xl font-bold font-heading text-thistle-50 mb-4 group-hover:text-thistle-300 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-thistle-300 text-sm leading-relaxed line-clamp-3 mb-8">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center text-thistle-100 font-bold text-sm group-hover:text-thistle-400">
                      Read Article <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
