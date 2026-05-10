import React from 'react';
import { Building2, Key, FileText, Home, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/shared/FadeIn';
import SectionLabel from '../components/shared/SectionLabel';

const services = [
  {
    icon: Building2,
    title: 'Buying & Selling',
    description: 'Expert guidance through every step of buying or selling property in Israel. From market analysis to closing, we ensure you get the best deal with local knowledge and global reach.',
    features: ['Comprehensive market analysis', 'Property valuations', 'Negotiation on your behalf', 'Legal coordination', 'End-to-end transaction management'],
  },
  {
    icon: Key,
    title: 'Short Term Rental Management',
    description: 'We handle everything — tenant screening, guest check-ins, maintenance, cleaning coordination, and bi-weekly property inspections so you don\'t have to.',
    features: ['Airbnb & booking platform management', 'Guest communication & check-in', 'Professional cleaning coordination', 'Bi-weekly property inspections', 'Dynamic pricing optimization'],
  },
  {
    icon: FileText,
    title: 'Long Term Rental Management',
    description: 'Reliable income with full lease management, rent collection, tenant relations, and ongoing property oversight for complete peace of mind.',
    features: ['Tenant screening & placement', 'Lease preparation & management', 'Monthly rent collection', 'Maintenance coordination', 'Regular property reports'],
  },
  {
    icon: Home,
    title: 'Holiday Home Management',
    description: 'Bi-weekly property visits, maintenance coordination, bill management, and complete peace of mind for absentee owners who want their property cared for year-round.',
    features: ['Bi-weekly property visits', 'Mail & bill management', 'Emergency response', 'Renovation project management', 'Arrival preparation service'],
  },
];

export default function Services() {
  return (
    <>
      <section className="pt-36 pb-24 md:pt-44 md:pb-32 bg-navy">
        <div className="max-w-4xl mx-auto px-8 lg:px-12">
          <SectionLabel light>Our Services</SectionLabel>
          <FadeIn>
            <h1 className="mt-6 font-playfair text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-tight" style={{ letterSpacing: '-0.022em' }}>
              Full-Service Real<br />Estate Solutions
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-8 font-inter text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
              From buying and selling to full property management — comprehensive solutions tailored to international property owners in Israel.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ paddingTop: 'clamp(6rem, 12vw, 12rem)', paddingBottom: 'clamp(6rem, 12vw, 12rem)', backgroundColor: '#F5F2EC' }}>
        <div className="max-w-6xl mx-auto px-8 lg:px-12 space-y-24 md:space-y-32">
          {services.map((service, i) => (
            <FadeIn key={service.title}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h2 className="font-playfair text-3xl md:text-4xl text-foreground font-medium" style={{ letterSpacing: '-0.016em' }}>
                      {service.title}
                    </h2>
                  </div>
                  <p className="font-inter text-base md:text-lg text-foreground/65 leading-relaxed" style={{ maxWidth: '38ch' }}>
                    {service.description}
                  </p>
                </div>
                <div className={`bg-white p-10 lg:p-12 ${i % 2 === 1 ? 'lg:order-1' : ''}`} style={{ borderTop: '2px solid rgba(184,150,90,0.18)' }}>
                  <h3 className="font-inter text-xs uppercase tracking-widest text-gold mb-8" style={{ letterSpacing: '0.28em' }}>
                    What's Included
                  </h3>
                  <ul className="space-y-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-4">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        <span className="font-inter text-base text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section style={{ paddingTop: 'clamp(5rem, 10vw, 10rem)', paddingBottom: 'clamp(5rem, 10vw, 10rem)' }} className="bg-navy text-center">
        <div className="max-w-2xl mx-auto px-8">
          <FadeIn>
            <h2 className="font-playfair text-4xl md:text-5xl text-white font-medium" style={{ letterSpacing: '-0.018em' }}>
              Not sure which service<br />is right for you?
            </h2>
            <p className="mt-5 font-inter text-lg text-white/55">Speak to our team for a free, no-obligation consultation.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-gold text-navy font-inter text-xs uppercase tracking-wider hover:bg-gold/90 transition-all duration-400"
              style={{ letterSpacing: '0.22em' }}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
