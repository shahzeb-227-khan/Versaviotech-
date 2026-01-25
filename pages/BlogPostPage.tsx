
import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { MotionWrapper } from '../components/MotionWrapper';
import { blogPosts } from '../data/blogPosts';
import { AnimatedHeading } from '../components/AnimatedHeading';
import { SEOHead } from '../components/SEOHead';
import { OptimizedImage } from '../components/OptimizedImage';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Generate article structured data
  const articleStructuredData = useMemo(() => {
    if (!post) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      image: post.imageUrl.startsWith('http') ? post.imageUrl : `https://www.versaviotech.com${post.imageUrl}`,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        '@type': 'Person',
        name: post.author,
        url: 'https://www.versaviotech.com/about'
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
        '@id': `https://www.versaviotech.com/blog/${post.slug}`
      },
      articleSection: post.category,
      keywords: [post.category, 'SAP', 'AI', 'Enterprise Technology', 'Digital Transformation']
    };
  }, [post]);

  // Breadcrumb structured data
  const breadcrumbStructuredData = useMemo(() => {
    if (!post) return null;
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.versaviotech.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.versaviotech.com/blog' },
        { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.versaviotech.com/blog/${post.slug}` }
      ]
    };
  }, [post]);

  if (!post) return <Navigate to="/blog" />;

  return (
    <>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        canonicalUrl={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.imageUrl.startsWith('http') ? post.imageUrl : `https://www.versaviotech.com${post.imageUrl}`}
        articlePublishedTime={post.date}
        articleAuthor={post.author}
        structuredData={articleStructuredData || undefined}
      />
      
      {/* Additional breadcrumb structured data */}
      {breadcrumbStructuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      )}
      
      <div className="pt-32 pb-24 relative">
        {/* Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-thistle-500 z-[60] origin-left"
          style={{ scaleX }}
          aria-hidden="true"
        />
        
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="mb-12 text-xs text-thistle-500 font-medium uppercase tracking-widest flex items-center gap-2" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-thistle-300">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/blog" className="hover:text-thistle-300">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-thistle-300">{post.category}</span>
          </nav>

          <article itemScope itemType="https://schema.org/BlogPosting">
            <MotionWrapper>
              <AnimatedHeading as="h1" className="text-4xl md:text-6xl font-bold font-heading mb-12 leading-tight">
                <span itemProp="headline">{post.title}</span>
              </AnimatedHeading>

              <div className="flex items-center gap-6 mb-16 text-thistle-300 border-b border-thistle-900/50 pb-8">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-thistle-800 rounded-full border border-thistle-500/20" aria-hidden="true" />
                   <span className="font-bold text-sm" itemProp="author" itemScope itemType="https://schema.org/Person">
                     By <span itemProp="name">{post.author}</span>
                   </span>
                 </div>
                 <div className="w-1 h-1 bg-thistle-700 rounded-full" aria-hidden="true" />
                 <time className="text-sm" itemProp="datePublished" dateTime={post.date}>{post.date}</time>
              </div>

              <div className="relative aspect-video rounded-[3rem] overflow-hidden mb-16 border border-thistle-500/20 shadow-2xl shadow-thistle-950/50">
                <OptimizedImage 
                  src={post.imageUrl} 
                  alt={`${post.title} - featured article image`}
                  className="w-full h-full"
                  priority={true}
                  width={1200}
                  height={675}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-thistle-950/40 to-transparent" aria-hidden="true" />
              </div>

              <div 
                className="prose prose-invert prose-thistle max-w-none text-thistle-200 text-lg leading-relaxed 
                  prose-headings:text-thistle-50 prose-headings:font-heading prose-headings:mt-16
                  prose-a:text-thistle-400 prose-a:font-bold hover:prose-a:text-thistle-100
                  prose-strong:text-thistle-50 prose-p:mb-8"
                itemProp="articleBody"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </MotionWrapper>
          </article>

          {/* Footer CTA */}
          <section className="mt-24 border-t border-thistle-900 pt-16">
            <MotionWrapper>
              <div className="glass p-12 rounded-[3rem] text-center border border-thistle-500/20 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-thistle-500/50 to-transparent" aria-hidden="true" />
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
    </>
  );
};
