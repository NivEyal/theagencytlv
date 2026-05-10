import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Key, FileText, Home, ArrowRight } from 'lucide-react';

const services = [
  {
    n: '01',
    icon: Building2,
    title: 'Buying & Selling',
    detail: 'Local knowledge. Global reach. Every transaction handled with precision and care.',
    tag: 'Transactions',
  },
  {
    n: '02',
    icon: Key,
    title: 'Short Term Rental',
    detail: 'End-to-end management. Guests, cleaning, income — entirely handled.',
    tag: 'Hospitality',
    accent: true,
  },
  {
    n: '03',
    icon: FileText,
    title: 'Long Term Rental',
    detail: 'Reliable income. Tenant placement, lease management, monthly reporting.',
    tag: 'Leasing',
  },
  {
    n: '04',
    icon: Home,
    title: 'Holiday Home Care',
    detail: 'Bi-weekly visits. Your property watched over year-round.',
    tag: 'Oversight',
  },
];

const EASE = [0.16, 1, 0.3, 1];

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ backgroundColor: '#0C1117' }} className="overflow-hidden">
      <div
        className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24"
        style={{ paddingTop: 'clamp(8rem, 14vw, 14rem)', paddingBottom: 'clamp(8rem, 14vw, 14rem)' }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
              className="font-inter uppercase"
              style={{ fontSize: 8.5, letterSpacing: '0.36em', color: 'rgba(184,150,90,0.7)', marginBottom: 20 }}
            >
              Services
            </motion.p>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '110%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.08, ease: EASE }}
                className="font-playfair font-medium"
                style={{ color: '#FFFFFF', fontSize: 'clamp(2.6rem, 5.5vw, 6rem)', letterSpacing: '-0.025em', lineHeight: 1.0 }}
              >
                Four disciplines.
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '110%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.16, ease: EASE }}
                className="font-playfair font-medium italic"
                style={{ color: 'rgba(255,255,255,0.35)', fontSize: 'clamp(2.6rem, 5.5vw, 6rem)', letterSpacing: '-0.025em', lineHeight: 1.0 }}
              >
                One firm.
              </motion.h2>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <Link
              to="/services"
              className="font-inter uppercase inline-flex items-center gap-3"
              style={{ fontSize: 8.5, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.35)', transition: 'color 0.4s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
            >
              All services
              <ArrowRight size={11} />
            </Link>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
          {services.map((s, i) => {
            const Icon = s.icon;
            const isHovered = hovered === i;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 1.0, delay: i * 0.1, ease: EASE }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHovered ? '#161D27' : '#0F1419',
                  transition: 'background 0.4s ease',
                }}
              >
                <Link
                  to="/services"
                  style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%', padding: 'clamp(2rem, 3.5vw, 3rem)' }}
                >
                  {/* Top row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
                    <span
                      className="font-cormorant font-light"
                      style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.14)', lineHeight: 1 }}
                    >
                      {s.n}
                    </span>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        border: '1px solid',
                        borderColor: isHovered ? 'rgba(184,150,90,0.5)' : 'rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'border-color 0.4s ease',
                        flexShrink: 0,
                      }}
                    >
                      <Icon
                        size={15}
                        style={{
                          color: isHovered ? '#B8965A' : 'rgba(255,255,255,0.35)',
                          transition: 'color 0.4s ease',
                        }}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-playfair font-medium"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                      color: isHovered ? '#FFFFFF' : 'rgba(255,255,255,0.82)',
                      letterSpacing: '-0.016em',
                      lineHeight: 1.15,
                      marginBottom: 16,
                      transition: 'color 0.4s ease',
                    }}
                  >
                    {s.title}
                    {s.accent && (
                      <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', backgroundColor: '#B8965A', marginLeft: 8, verticalAlign: 'middle', marginBottom: 4 }} />
                    )}
                  </h3>

                  {/* Detail */}
                  <p
                    className="font-inter"
                    style={{
                      fontSize: 13,
                      lineHeight: 1.8,
                      color: isHovered ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.28)',
                      transition: 'color 0.4s ease',
                      flexGrow: 1,
                    }}
                  >
                    {s.detail}
                  </p>

                  {/* Tag + arrow */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'clamp(2rem, 3vw, 2.5rem)', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                    <span
                      className="font-inter uppercase"
                      style={{ fontSize: 8, letterSpacing: '0.3em', color: isHovered ? 'rgba(184,150,90,0.8)' : 'rgba(255,255,255,0.2)', transition: 'color 0.4s ease' }}
                    >
                      {s.tag}
                    </span>
                    <span
                      style={{
                        color: '#B8965A',
                        opacity: isHovered ? 0.9 : 0,
                        transform: isHovered ? 'translateX(0)' : 'translateX(-6px)',
                        transition: 'opacity 0.4s ease, transform 0.4s ease',
                        fontSize: 13,
                      }}
                    >
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
