
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MotionWrapper } from '../components/MotionWrapper';
import { Card3D } from '../components/Card3D';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  useEffect(() => {
    document.title = 'Services — AI Consulting, Workflow Automation, System Integration';
    const meta = document.querySelector('meta[name="description"]');
    const content = 'Versavio Tech services include AI consulting, workflow automation, ERP & system integration, and custom solutions to modernize SAP and enterprise systems.';
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
        <section className="mb-24">
          <MotionWrapper className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-8">Our <span className="text-gradient">Services</span></h1>
            <p className="text-lg md:text-xl text-thistle-200 max-w-3xl mx-auto leading-relaxed mb-10">
              We design and deliver customized technology solutions that improve operational efficiency, reduce manual effort, and enable smarter decision-making for businesses.
            </p>
            <Link to="/contact" className="bg-thistle-500 text-white px-8 py-4 rounded-full font-medium text-base hover:shadow-lg shadow-thistle-500/30 transition-all inline-block">
              Schedule Free Consultation
            </Link>
          </MotionWrapper>
        </section>

        <section className="mb-32">
          <h2 className="text-2xl font-semibold leading-[1.3] font-heading mb-12 border-b border-thistle-800 pb-4">Services Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card3D>
              <h3 className="text-lg font-semibold leading-[1.4] mb-6 font-heading">Business Process Automation</h3>
              <ul className="space-y-4 text-thistle-300 text-sm leading-[1.6]">
                <li>• Identify manual, repetitive, or inefficient workflows</li>
                <li>• Streamline approvals, data handling, and reporting</li>
                <li>• Reduce errors and processing time for smoother operations</li>
              </ul>
            </Card3D>
            
            <Card3D>
              <h3 className="text-lg font-semibold leading-[1.4] mb-6 font-heading">Intelligent & Custom Solutions</h3>
              <ul className="space-y-4 text-thistle-300 text-sm leading-[1.6]">
                <li>• Tailored internal tools, dashboards, and workflow-driven applications</li>
                <li>• Mobile apps and web platforms to enhance business operations</li>
                <li>• Smart automation implemented where it creates real value</li>
              </ul>
            </Card3D>

            <Card3D>
              <h3 className="text-lg font-semibold leading-[1.4] mb-6 font-heading">ERP & System Integration</h3>
              <ul className="space-y-4 text-thistle-300 text-sm leading-[1.6]">
                <li>• Integrate SAP, Microsoft Dynamics, Salesforce, Odoo, and other enterprise systems</li>
                <li>• Build API and middleware connections for seamless data flow</li>
                <li>• Ensure efficient communication between systems across the organization</li>
              </ul>
            </Card3D>

            <Card3D>
              <h3 className="text-lg font-semibold leading-[1.4] mb-6 font-heading">Consulting & Strategy</h3>
              <ul className="space-y-4 text-thistle-300 text-sm leading-[1.6]">
                <li>• Technology roadmaps, system audits, and business analysis</li>
                <li>• Data analysis and reporting solutions to support decision-making</li>
                <li>• Business consultancy to align technology with strategic goals</li>
              </ul>
            </Card3D>
          </div>
        </section>

        <section className="mb-32">
          <MotionWrapper className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight font-heading mb-4">How We Work</h2>
            <p className="text-2xl md:text-2xl font-semibold text-thistle-400">Our Delivery Approach</p>
            <p className="text-lg md:text-xl text-thistle-300 mt-4 mx-auto max-w-2xl leading-[1.6]">Our structured methodology ensures reliable, scalable, and secure solutions.</p>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { n: "1", t: "Discovery & Assessment", d: "Understand business goals, challenges, and current processes to identify high-impact opportunities." },
              { n: "2", t: "Solution Design", d: "Define a tailored solution architecture aligned with business priorities and long-term scalability." },
              { n: "3", t: "Development & Integration", d: "Build automation and integrations using proven best practices for reliability and performance." },
              { n: "4", t: "Testing & Deployment", d: "Validate functionality, ensure stability, and deploy with minimal business disruption." },
              { n: "5", t: "Support & Optimization", d: "Monitor performance, provide ongoing support, and continuously optimize solutions." }
            ].map((step, i) => (
              <MotionWrapper key={i} delay={i * 0.1}>
                <div className="glass h-full p-8 rounded-3xl relative overflow-hidden group">
                  <span className="text-6xl font-bold text-thistle-800/30 absolute -top-4 -right-4 font-heading">{step.n}</span>
                  <h4 className="text-lg font-semibold text-thistle-100 mb-4 mt-8 relative z-10">{step.t}</h4>
                  <p className="text-base text-thistle-400 relative z-10 leading-[1.6]">{step.d}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </section>

        <section className="mb-32">
          <MotionWrapper className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight font-heading mb-8">Industries We Serve</h2>
            <p className="text-lg md:text-xl text-thistle-400 mb-12 mx-auto max-w-2xl leading-[1.6]">Industry Expertise: Our team has extensive experience working with businesses across:</p>
            <div className="flex flex-wrap gap-4">
              {["Automotive", "Finance & Asset Management", "Manufacturing", "Consulting", "Semiconductor & System Solutions", "Technology & Software Development"].map((ind, i) => (
                <div key={i} className="px-8 py-4 glass border border-thistle-500/20 rounded-full font-medium hover:bg-thistle-500/10 transition-colors">
                  {ind}
                </div>
              ))}
            </div>
          </MotionWrapper>
        </section>

        <section className="text-center">
          <MotionWrapper>
            <div className="max-w-4xl mx-auto glass p-20 rounded-[3rem] glow-purple">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">Ready to Transform Your Business?</h2>
              <p className="text-thistle-200 mb-12 text-lg">Schedule a free consultation with our experts and discover the perfect solution for your business needs.</p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="bg-thistle-50 text-thistle-950 px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">Schedule Free Consultation</Link>
                <Link to="/projects" className="border border-thistle-500 px-10 py-4 rounded-full font-bold hover:bg-thistle-500 transition-all">View Success Stories</Link>
              </div>
            </div>
          </MotionWrapper>
        </section>
      </div>
    </div>
  );
};
