
import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MotionWrapper } from '../components/MotionWrapper';
import { MotionWrapperLazy } from '../components/MotionWrapperLazy';
import { Card3D } from '../components/Card3D';
import { SEOHead } from '../components/SEOHead';
import { OptimizedImage } from '../components/OptimizedImage';
import { blogPosts } from '../data/blogPosts';

/**
 * SEO-OPTIMIZED HOMEPAGE
 * 
 * CRITICAL: This page is optimized for Google Search Console rendering
 * 
 * Key optimizations:
 * 1. MotionWrapper (above-fold): Uses immediate `animate` trigger for hero content
 *    - NO blur filters that hide text from Googlebot
 *    - Content always visible (opacity: 1)
 *    - Transform-based animations only (translateY, translateX)
 * 
 * 2. MotionWrapperLazy (below-fold): Uses `whileInView` for content below fold
 *    - Preserves animations for user experience
 *    - Doesn't block initial render for SEO
 * 
 * 3. All critical content (H1, hero text, CTAs) renders synchronously
 *    - No useEffect dependencies
 *    - No conditional rendering that blocks SEO
 *    - Semantic HTML structure preserved
 * 
 * DO NOT:
 * - Add opacity: 0 initial states
 * - Use blur filters on above-fold content
 * - Gate content behind animations or delays
 * - Remove semantic HTML elements
 */

// Memoized story card to prevent re-renders
const StoryCard = memo(({ story, index, imageSrc }: { story: { title: string; tag: string; desc: string }; index: number; imageSrc: string }) => (
  <MotionWrapperLazy delay={index * 0.1}>
    <div className="glass rounded-3xl p-10 flex flex-col md:flex-row gap-8 items-center group transition-all hover:border-thistle-500/40">
      <div className="flex-1">
        <span className="text-thistle-500 font-bold text-sm tracking-widest uppercase mb-4 block">{story.tag}</span>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">{story.title}</h3>
        <p className="text-thistle-300 mb-8 leading-relaxed">{story.desc}</p>
        <Link to="/projects" className="inline-flex items-center text-thistle-50 font-bold group-hover:text-thistle-400 transition-colors">
          View Project Details <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
        </Link>
      </div>
      <div className="w-full md:w-1/3 rounded-2xl overflow-hidden aspect-video">
        <OptimizedImage 
          src={imageSrc} 
          alt={`${story.title} — featured project image`} 
          className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
          loading="lazy"
        />
      </div>
    </div>
  </MotionWrapperLazy>
));

StoryCard.displayName = 'StoryCard';

// Memoized blog card component
const BlogCard = memo(({ post, index }: { post: typeof blogPosts[0]; index: number }) => (
  <MotionWrapperLazy delay={index * 0.1}>
    <Link to={`/blog/${post.slug}`}>
      <article className="glass rounded-[2.5rem] overflow-hidden border border-thistle-500/10 h-full flex flex-col hover:border-thistle-500/40 transition-all duration-500 hover:-translate-y-2 group">
        <div className="relative aspect-[16/10] overflow-hidden">
          <OptimizedImage 
            src={post.imageUrl} 
            alt={`${post.title} - ${post.category} article`} 
            className="w-full h-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-thistle-950/80 to-transparent" aria-hidden="true" />
          <span className="absolute top-4 left-4 bg-thistle-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            {post.category}
          </span>
        </div>
        
        <div className="p-8 flex flex-col flex-1">
          <time className="text-thistle-400 text-xs font-medium mb-3 uppercase tracking-wider" dateTime={post.date}>
            {post.date} • By {post.author}
          </time>
          <h3 className="text-2xl font-bold font-heading text-thistle-50 mb-4 group-hover:text-thistle-300 transition-colors">
            {post.title}
          </h3>
          <p className="text-thistle-300 text-sm leading-relaxed line-clamp-3 mb-8">
            {post.excerpt}
          </p>
          <div className="mt-auto flex items-center text-thistle-100 font-bold text-sm group-hover:text-thistle-400">
            Read Article <span className="ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true">→</span>
          </div>
        </div>
      </article>
    </Link>
  </MotionWrapperLazy>
));

BlogCard.displayName = 'BlogCard';

// Home page structured data for SEO
const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Versavio Tech',
  description: 'AI Solutions, SAP Integration, Workflow Automation, and Enterprise Software Development',
  url: 'https://www.versaviotech.com',
  telephone: '+92-322-0220670',
  email: 'info@versaviotech.com',
  priceRange: '$$',
  serviceType: ['AI Consulting', 'SAP Integration', 'Workflow Automation', 'Enterprise Software Development'],
  areaServed: { '@type': 'Place', name: 'Worldwide' },
};

export const Home: React.FC = () => {
  // Memoize story data to prevent recreating on each render
  const stories = useMemo(() => [
    {
      title: "AI-Powered Automation for Investment Services",
      tag: "Enterprise Solution",
      desc: "Streamlined front-office workflows with AI-driven task automation, intelligent assignment, and knowledge-based resolutions."
    },
    {
      title: "AI-Driven JIRA System Testing Automation",
      tag: "Enterprise Solution",
      desc: "Automated test case creation, intelligent task assignment, and defect triage using historical JIRA data."
    },
    {
      title: "AI-Based Stock Recommendation Engine",
      tag: "Enterprise Solution",
      desc: "Built AI-driven stock recommendations combining quantitative factors, risk metrics, and market news sentiment analysis."
    }
  ], []);

  const storyImages = useMemo(() => [
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=75',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=75',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=75'
  ], []);

  return (
    <>
      <SEOHead
        title="Versavio Tech | AI Solutions & Enterprise Software Development"
        description="Versavio Tech builds AI solutions and enterprise software for SAP, automation, and digital transformation. We deliver practical systems that improve workflows and drive business results."
        canonicalUrl="/"
        structuredData={homeStructuredData}
      />
      
      <div className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-thistle-900/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" aria-hidden="true" />
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionWrapper>
              <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-8">
              Building and Improving <span className="text-gradient">Technology</span> That Works for Your Business
            </h1>
            <p className="text-lg text-thistle-200 mb-10 leading-relaxed max-w-xl">
              Versavio Tech partners with you to design new systems or enhance existing ones. We take time to understand your business, identify improvement opportunities, and deliver reliable, user-friendly solutions using the right technology for your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-thistle-500 hover:bg-thistle-400 text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-[0_0_30px_rgba(157,65,190,0.5)]">
                Schedule Free Consultation
              </Link>
              <Link to="/projects" className="glass px-8 py-4 rounded-full font-bold hover:bg-thistle-100 hover:text-thistle-950 transition-all">
                View Our Work
              </Link>
            </div>
          </MotionWrapper>

          <div className="relative">
              <MotionWrapper delay={0.2} direction="right">
                <div className="relative z-10 rounded-3xl overflow-hidden border border-thistle-500/20 glow-purple">
                  <OptimizedImage 
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1d007642e-1764655545206.png" 
                    alt="Abstract purple 3D digital cube representing AI technology and digital transformation" 
                    className="w-full h-auto"
                    priority={true}
                    width={600}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-thistle-950 via-transparent to-transparent" aria-hidden="true" />
                </div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-thistle-500/30 blur-2xl rounded-full" aria-hidden="true" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-thistle-700/20 blur-2xl rounded-full" aria-hidden="true" />
              </MotionWrapper>
            </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <MotionWrapperLazy className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Why Choose Versavio Tech?</h2>
            <p className="text-thistle-300 text-lg max-w-3xl mx-auto">
              We deliver customized, business-first technology solutions — never one-size-fits-all software. Our approach begins with understanding your business, processes, and challenges, and ends with practical, reliable systems that create measurable value, improve usability, and support long-term growth.
            </p>
          </MotionWrapperLazy>
        </div>
      </section>

      {/* Who We're Best For Section */}
      <section className="py-24 bg-thistle-950/20">
        <div className="max-w-7xl mx-auto px-6">
          <MotionWrapperLazy className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Who We're Best For</h2>
            <p className="text-thistle-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Versavio Tech is a good fit for teams that want technology to actually solve day-to-day problems, not add more complexity. If you care about building systems that people genuinely use and that make work easier, you'll likely feel comfortable working with us.
            </p>
          </MotionWrapperLazy>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card3D>
              <h3 className="text-xl font-bold mb-4 text-thistle-100">A small or mid-sized business</h3>
              <p className="text-thistle-300 leading-relaxed">
                If your team is growing and manual work, spreadsheets, or disconnected tools are starting to slow things down, we help bring structure and clarity. The goal is not to replace everything at once, but to improve how things work step by step.
              </p>
            </Card3D>

            <Card3D>
              <h3 className="text-xl font-bold mb-4 text-thistle-100">A startup or product team</h3>
              <p className="text-thistle-300 leading-relaxed">
                If you are building or scaling a product and need internal tools, system integrations, testing automation, or custom solutions to support your operations, we focus on building things that are reliable, easy to maintain, and practical for real-world use.
              </p>
            </Card3D>

            <Card3D>
              <h3 className="text-xl font-bold mb-4 text-thistle-100">An operations-focused organization</h3>
              <p className="text-thistle-300 leading-relaxed">
                If your daily work involves repeatable tasks like approvals, reporting, testing, data handling, or coordination between teams, we help streamline those processes so they become more efficient and easier to manage.
              </p>
            </Card3D>

            <Card3D>
              <h3 className="text-xl font-bold mb-4 text-thistle-100">Exploring automation for the first time</h3>
              <p className="text-thistle-300 leading-relaxed">
                If you are unsure where automation or AI fits into your business and want a thoughtful conversation before investing time and money, we are happy to start by understanding your situation rather than selling a solution.
              </p>
            </Card3D>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-24 bg-thistle-950/30">
        <div className="max-w-7xl mx-auto px-6">
          <MotionWrapperLazy className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">Our Core Services</h2>
          </MotionWrapperLazy>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card3D>
              <h3 className="text-2xl font-bold mb-6 text-thistle-100 font-heading">Business Process Automation</h3>
              <ul className="space-y-4 text-thistle-300">
                <li className="flex items-start">
                  <span className="text-thistle-500 mr-2">•</span>
                  Identify and analyze manual, repetitive, or inefficient workflows
                </li>
                <li className="flex items-start">
                  <span className="text-thistle-500 mr-2">•</span>
                  Streamline and optimize approvals, data handling, and reporting
                </li>
                <li className="flex items-start">
                  <span className="text-thistle-500 mr-2">•</span>
                  Reduce errors and processing time for smoother operations
                </li>
              </ul>
            </Card3D>

            <Card3D>
              <h3 className="text-2xl font-bold mb-6 text-thistle-100 font-heading">Intelligent & Custom Solutions</h3>
              <ul className="space-y-4 text-thistle-300">
                <li className="flex items-start">
                  <span className="text-thistle-500 mr-2">•</span>
                  Tailored internal tools, dashboards, and workflow-driven applications
                </li>
                <li className="flex items-start">
                  <span className="text-thistle-500 mr-2">•</span>
                  Mobile apps and web platforms to enhance business operations
                </li>
                <li className="flex items-start">
                  <span className="text-thistle-500 mr-2">•</span>
                  Automation and smart tools implemented where they add real value
                </li>
              </ul>
            </Card3D>
          </div>

          <MotionWrapperLazy className="text-center mt-16">
            <Link to="/services" className="glass px-10 py-4 rounded-full font-bold hover:bg-thistle-500 transition-all hover:scale-105 inline-flex items-center gap-2 group">
              Explore All Services <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </MotionWrapperLazy>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <MotionWrapperLazy className="mb-16 text-center">
            <h2 className="text-4xl font-bold font-heading mb-4">Featured Success Stories</h2>
            <p className="text-thistle-400 text-lg max-w-3xl mx-auto">Real results from real businesses. See how we’ve helped companies transform their operations with intelligent and practical solutions.</p>
          </MotionWrapperLazy>

          <div className="space-y-12">
              {stories.map((story, i) => (
                <StoryCard 
                  key={i} 
                  story={story} 
                  index={i} 
                  imageSrc={storyImages[i]} 
                />
              ))}
            </div>

          <MotionWrapperLazy className="text-center mt-16">
            <Link to="/projects" className="glass px-10 py-4 rounded-full font-bold hover:bg-thistle-500 transition-all hover:scale-105 inline-flex items-center gap-2 group">
              View All Projects <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </MotionWrapperLazy>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-24 bg-thistle-950/30">
        <div className="max-w-7xl mx-auto px-6">
          <MotionWrapperLazy className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">Latest Insights</h2>
            <p className="text-thistle-400 text-lg max-w-3xl mx-auto">Stay informed with our research-backed articles on AI, SAP, automation, and enterprise technology.</p>
          </MotionWrapperLazy>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>

          <MotionWrapperLazy className="text-center mt-12">
            <Link to="/blog" className="glass px-10 py-4 rounded-full font-bold hover:bg-thistle-500 transition-all hover:scale-105 inline-flex items-center gap-2 group">
              View All Articles <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </MotionWrapperLazy>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-thistle-500/20 blur-3xl -z-10" aria-hidden="true" />
            <MotionWrapperLazy>
              <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">Ready to Transform Your Business?</h2>
              <p className="text-xl text-thistle-200 mb-12 max-w-2xl mx-auto">
                Schedule a free consultation with our experts and discover how we can help you achieve your business goals.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="bg-thistle-50 text-thistle-950 px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                  Get Free Consultation
                </Link>
                <Link to="/projects" className="border border-thistle-500 text-thistle-50 px-10 py-4 rounded-full font-bold hover:bg-thistle-500 transition-colors">
                  View Success Stories
                </Link>
              </div>
            </MotionWrapperLazy>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};