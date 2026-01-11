
import React, { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MotionWrapper } from '../components/MotionWrapper';
import { blogPosts } from '../data/blogPosts';
import { AnimatedHeading } from '../components/AnimatedHeading';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (post) {
      document.title = `${post.metaTitle} | Versavio Tech`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', post.metaDescription);
      window.scrollTo(0, 0);
    }
  }, [post]);

  if (!post) return <Navigate to="/blog" />;

  return (
    <div className="pt-32 pb-24 relative">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-thistle-500 z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="mb-12 text-xs text-thistle-500 font-medium uppercase tracking-widest flex items-center gap-2">
          <Link to="/" className="hover:text-thistle-300">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-thistle-300">Blog</Link>
          <span>/</span>
          <span className="text-thistle-300">{post.category}</span>
        </nav>

        <article>
          <MotionWrapper>
            <AnimatedHeading as="h1" className="text-4xl md:text-6xl font-bold font-heading mb-12 leading-tight">
              {post.title}
            </AnimatedHeading>

            <div className="flex items-center gap-6 mb-16 text-thistle-300 border-b border-thistle-900/50 pb-8">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-thistle-800 rounded-full border border-thistle-500/20" />
                 <span className="font-bold text-sm">By {post.author}</span>
               </div>
               <div className="w-1 h-1 bg-thistle-700 rounded-full" />
               <span className="text-sm">{post.date}</span>
            </div>

            <div className="relative aspect-video rounded-[3rem] overflow-hidden mb-16 border border-thistle-500/20 shadow-2xl shadow-thistle-950/50">
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-thistle-950/40 to-transparent" />
            </div>

            <div 
              className="prose prose-invert prose-thistle max-w-none text-thistle-200 text-lg leading-relaxed 
                prose-headings:text-thistle-50 prose-headings:font-heading prose-headings:mt-16
                prose-a:text-thistle-400 prose-a:font-bold hover:prose-a:text-thistle-100
                prose-strong:text-thistle-50 prose-p:mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </MotionWrapper>
        </article>

        {/* Footer CTA */}
        <section className="mt-24 border-t border-thistle-900 pt-16">
          <MotionWrapper>
            <div className="glass p-12 rounded-[3rem] text-center border border-thistle-500/20 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-thistle-500/50 to-transparent" />
              <h3 className="text-3xl font-bold font-heading mb-6">Implementing Enterprise Excellence</h3>
              <p className="text-thistle-300 mb-8 max-w-xl mx-auto">
                Ready to apply these insights to your business? Our experts specialize in SAP integration, AI automation, and strategic digital transformation.
              </p>
              <Link to="/contact" className="bg-thistle-500 text-white px-10 py-4 rounded-full font-bold hover:shadow-[0_0_30px_rgba(157,65,190,0.5)] transition-all inline-block">
                Schedule a Strategic Review
              </Link>
            </div>
          </MotionWrapper>
        </section>
      </div>
    </div>
  );
};
