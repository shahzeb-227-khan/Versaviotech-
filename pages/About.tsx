
import React from 'react';
import { motion } from 'framer-motion';
import { MotionWrapper } from '../components/MotionWrapper';
import { Card3D } from '../components/Card3D';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { OptimizedImage } from '../components/OptimizedImage';

// Structured data for About page
const aboutStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'Versavio Tech',
    description: 'Versavio Tech helps businesses turn ideas into reliable, scalable technology. We partner with organizations to understand their challenges, simplify complexity, and build solutions that work in the real world.',
    foundingDate: '2024',
    knowsAbout: ['AI Solutions', 'SAP Integration', 'Workflow Automation', 'Enterprise Software', 'Digital Transformation'],
  }
};

export const About: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Versavio Tech — Enterprise AI & Digital Transformation"
        description="Learn about Versavio Tech's mission to deliver AI consulting, workflow automation, and enterprise software solutions focused on business impact, usability, and long-term value."
        canonicalUrl="/about"
        structuredData={aboutStructuredData}
      />
      
      <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MotionWrapper>
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8">About <span className="text-gradient">Versavio Tech</span></h1>
              <p className="text-xl text-thistle-100 mb-8 leading-relaxed">
                Versavio Tech helps businesses turn ideas into reliable, scalable technology. We partner with organizations to understand their challenges, simplify complexity, and build solutions that work in the real world.
              </p>
              <p className="text-thistle-300 mb-12">
                Our approach is flexible and technology-agnostic. We choose the right tools for your goals — not the other way around. From modernizing legacy systems to developing custom digital solutions, we focus on performance, usability, and long-term value.
              </p>

            </MotionWrapper>
            <MotionWrapper delay={0.2} direction="right">
               <div className="relative group">
                 <div className="absolute -inset-1 bg-gradient-to-r from-thistle-600 to-thistle-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" aria-hidden="true"></div>
                 <OptimizedImage 
                   src="/assets/aboutus.png" 
                   alt="Versavio Tech team and AI visualization representing our approach to enterprise technology" 
                   className="relative rounded-3xl w-full"
                   width={600}
                   height={400}
                   priority={true}
                 />
               </div>
            </MotionWrapper>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <MotionWrapper>
            <div className="glass p-12 rounded-[2.5rem] h-full border-l-4 border-thistle-500">
              <h2 className="text-3xl font-bold font-heading mb-6">Our Mission</h2>
              <p className="text-thistle-200 text-lg leading-relaxed">
                To design and deliver tailored technology solutions that improve efficiency, streamline workflows, and create measurable value by addressing each client’s unique requirements and business challenges.
              </p>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <div className="glass p-12 rounded-[2.5rem] h-full border-l-4 border-thistle-300">
              <h2 className="text-3xl font-bold font-heading mb-6">Our Vision</h2>
              <p className="text-thistle-200 text-lg leading-relaxed">
                To be a trusted technology partner for businesses, enabling them to grow and operate more effectively through well-designed, integrated, and adaptable technology solutions.
              </p>
            </div>
          </MotionWrapper>
        </section>

        {/* Core Values */}
        <section className="mb-32">
          <MotionWrapper className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Our Core Values</h2>
            <p className="text-thistle-400 text-xl font-medium tracking-wide uppercase">The Principles That Guide Everything We Do</p>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Business Impact First", desc: "Every solution we deliver is driven by real business outcomes. We focus on measurable value, not technology trends." },
              { title: "Trust & Transparency", desc: "We believe in clear communication, honest recommendations, and dependable delivery at every stage." },
              { title: "Tailored Solutions", desc: "No two businesses are the same. Our solutions are customized to each client’s processes, goals, and challenges." },
              { title: "Simplicity by Design", desc: "We build intuitive, efficient, and scalable technology — reducing complexity rather than adding to it." },
              { title: "Continuous Improvement", desc: "As your business evolves, so do we. We continuously refine and optimize solutions for long-term success." },
              { title: "Ownership & Accountability", desc: "We take full responsibility for our work, from design through deployment and ongoing support." }
            ].map((value, i) => (
              <Card3D key={i}>
                <h3 className="text-xl font-bold mb-4 font-heading text-thistle-50">{value.title}</h3>
                <p className="text-thistle-300 leading-relaxed text-sm">{value.desc}</p>
              </Card3D>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <MotionWrapper>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-thistle-600 via-thistle-500 to-thistle-400 rounded-[3rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-gradient" aria-hidden="true" />
              <div className="relative max-w-3xl mx-auto glass p-16 rounded-[3rem] border border-thistle-500/20">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Work with Our Expert Team?</h2>
                <p className="text-thistle-200 mb-10 text-lg">Let's discuss how our expertise can transform your business operations and deliver measurable results.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="bg-thistle-500 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">Schedule Consultation</Link>
                  <Link to="/projects" className="glass px-10 py-4 rounded-full font-bold hover:bg-thistle-800 transition-colors">View Our Work</Link>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </section>
      </div>
    </div>
    </>
  );
};
