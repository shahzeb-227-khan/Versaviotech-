
import React, { useEffect, useMemo } from 'react';
import { MotionWrapper } from '../components/MotionWrapper';
import { SEOHead } from '../components/SEOHead';

const faqs = [
  { q: "How long does a consultation take?", a: "Typically 30–45 minutes, depending on your requirements." },
  { q: "Is the consultation really free?", a: "Yes. The consultation is completely free with no obligation." },
  { q: "What should I prepare for the consultation?", a: "A brief overview of your business challenges, goals, and any existing systems." },
  { q: "How quickly can you start a project?", a: "Project timelines depend on scope, but we typically begin within 1–2 weeks after requirements are finalized." }
];

export const Contact: React.FC = () => {
  useEffect(() => {
    // Load Calendly script dynamically
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Contact page structured data
  const contactStructuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Versavio Tech',
    description: 'Contact Versavio Tech to schedule a consultation on AI solutions, SAP integrations, workflow automation, and enterprise digital strategy.',
    url: 'https://www.versaviotech.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Versavio Tech',
      email: 'info@versaviotech.com',
      telephone: '+923220220670',
      url: 'https://www.versaviotech.com',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+923220220670',
        contactType: 'sales',
        email: 'info@versaviotech.com',
        availableLanguage: ['English']
      }
    }
  }), []);

  // FAQ structured data
  const faqStructuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  }), []);

  return (
    <>
      <SEOHead
        title="Contact — Schedule AI & SAP Strategy Consultation"
        description="Contact Versavio Tech to schedule a consultation on AI solutions, SAP integrations, workflow automation, and enterprise digital strategy."
        canonicalUrl="/contact"
        structuredData={contactStructuredData}
      />
      
      {/* FAQ structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      
      <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <section className="mb-24 text-center">
          <MotionWrapper>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8">Let’s Transform Your <span className="text-gradient">Business Together</span></h1>
            <p className="text-xl text-thistle-200 max-w-3xl mx-auto leading-relaxed">
              Ready to unlock the power of technology? Schedule a free consultation with our experts and discover how we can help you achieve your business goals.
            </p>
            <p className="mt-8 text-thistle-400 font-bold uppercase tracking-widest text-sm">Direct Access to Our Strategy Team</p>
          </MotionWrapper>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {/* Left Column: Calendly Integration */}
          <MotionWrapper>
            <div className="glass p-4 md:p-8 rounded-[3rem] border border-thistle-500/20 overflow-hidden">
              <div className="mb-8 px-4 pt-4">
                <h2 className="text-3xl font-bold font-heading mb-4">Book Your Discovery Session</h2>
                <p className="text-thistle-300">Schedule a free 30-minute consultation at your convenience to discuss your roadmap.</p>
              </div>
              
              <div 
                className="calendly-inline-widget w-full rounded-2xl overflow-hidden" 
                data-url="https://calendly.com/versaviotech-info/30min?primary_color=ff00f3" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </MotionWrapper>

          {/* Right Column: Info & Details */}
          <div className="space-y-8">
            <MotionWrapper delay={0.1}>
              <div className="glass p-10 rounded-[3rem] border border-thistle-500/20">
                <h3 className="text-2xl font-bold font-heading mb-8">Contact Options</h3>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-thistle-500/20 p-4 rounded-2xl mr-6">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-thistle-400">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-thistle-100">Email Us</h4>
                      <p className="text-thistle-400 text-sm mb-2">Send us a detailed message and we’ll get back to you within 24 hours.</p>
                      <a href="mailto:info@versaviotech.com" className="text-thistle-300 font-bold hover:text-thistle-100 transition-colors">info@versaviotech.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-thistle-500/20 p-4 rounded-2xl mr-6">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-thistle-400">
                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.48 2.53.74 3.89.74a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.36.26 2.68.74 3.89a1 1 0 01-.21 1.11l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-thistle-100">Call Us</h4>
                      <p className="text-thistle-400 text-sm mb-2">Speak directly with our team.</p>
                      <a href="tel:+923220220670" className="text-thistle-300 font-bold hover:text-thistle-100 transition-colors">+92 322 0220670</a>
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <div className="glass p-10 rounded-[3rem] border border-thistle-500/20">
                <h3 className="text-2xl font-bold font-heading mb-6">Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-thistle-200">
                    <span className="text-thistle-500 mr-3">✓</span> Instant Calendar Booking
                  </li>
                  <li className="flex items-center text-thistle-200">
                    <span className="text-thistle-500 mr-3">✓</span> No Obligation Strategy Call
                  </li>
                  <li className="flex items-center text-thistle-200">
                    <span className="text-thistle-500 mr-3">✓</span> Direct Expert Guidance
                  </li>
                </ul>
              </div>
            </MotionWrapper>

             <MotionWrapper delay={0.3}>
              <div className="glass p-10 rounded-[3rem] border border-thistle-500/20">
                <h3 className="text-2xl font-bold font-heading mb-4">Other Ways to Connect</h3>
                <p className="text-thistle-400 mb-6">Follow us for insights, updates, and industry news.</p>
                <a href="https://www.linkedin.com/company/versavio-tech/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-thistle-100 font-bold group">
                  Connect on LinkedIn <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </MotionWrapper>
          </div>
        </div>

        {/* FAQ Section */}
        <section>
          <MotionWrapper className="text-center mb-16">
            <h2 className="text-4xl font-bold font-heading mb-4">Frequently Asked Questions</h2>
          </MotionWrapper>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <MotionWrapper key={i} delay={i * 0.1}>
                <details className="group glass rounded-3xl overflow-hidden cursor-pointer transition-all hover:bg-thistle-900/40">
                  <summary className="flex items-center justify-between p-8 font-bold text-lg text-thistle-50">
                    {faq.q}
                    <span className="bg-thistle-500/20 p-2 rounded-full group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-8 pb-8 text-thistle-300 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </MotionWrapper>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  );
};
