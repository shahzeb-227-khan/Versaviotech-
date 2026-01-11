
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MotionWrapper } from '../components/MotionWrapper';
import { Card3D } from '../components/Card3D';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Versavio Tech — AI Solutions & Enterprise Software';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Versavio Tech builds AI solutions and enterprise software for SAP, automation, and digital transformation. We deliver practical systems that improve workflows and drive business results.';
    if (meta) meta.setAttribute('content', content);
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-thistle-900/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
        
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
                    <img src="https://img.rocket.new/generatedImages/rocket_gen_img_1d007642e-1764655545206.png" alt="Abstract purple 3D digital cube representing technology" className="w-full h-auto" />
                    <div className="absolute inset-0 bg-gradient-to-t from-thistle-950 via-transparent to-transparent" />
                  </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-thistle-500/30 blur-2xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-thistle-700/20 blur-2xl rounded-full" />
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <MotionWrapper className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Why Choose Versavio Tech?</h2>
            <p className="text-thistle-300 text-lg max-w-3xl mx-auto">
              We deliver customized, business-first technology solutions — never one-size-fits-all software. Our approach begins with understanding your business, processes, and challenges, and ends with practical, reliable systems that create measurable value, improve usability, and support long-term growth.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-24 bg-thistle-950/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <MotionWrapper>
              <h2 className="text-4xl font-bold font-heading mb-4">Our Core Services</h2>
            </MotionWrapper>
            <MotionWrapper delay={0.1}>
              <Link to="/services" className="text-thistle-400 hover:text-thistle-200 font-bold inline-flex items-center mt-2">
                Explore All Services <span className="ml-2">→</span>
              </Link>
            </MotionWrapper>
          </div>

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
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <MotionWrapper className="mb-16 text-center">
            <h2 className="text-4xl font-bold font-heading mb-4">Featured Success Stories</h2>
            <p className="text-thistle-400 text-lg max-w-3xl mx-auto">Real results from real businesses. See how we’ve helped companies transform their operations with intelligent and practical solutions.</p>
          </MotionWrapper>

          <div className="space-y-12">
            {[
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
            ].map((story, i) => (
              <MotionWrapper key={i} delay={i * 0.1}>
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
                      {(() => {
                        const storyImages = [
                          'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
                          'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
                          'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
                        ];
                        const src = storyImages[i] ?? storyImages[0];
                        return (
                          <img src={src} alt={story.title + ' — featured image'} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                        );
                      })()}
                    </div>
                </div>
              </MotionWrapper>
            ))}
          </div>

          <MotionWrapper className="text-center mt-16">
            <Link to="/projects" className="glass px-10 py-4 rounded-full font-bold hover:bg-thistle-500 transition-colors">
              View All Projects
            </Link>
          </MotionWrapper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-thistle-500/20 blur-3xl -z-10" />
            <MotionWrapper>
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
            </MotionWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};


