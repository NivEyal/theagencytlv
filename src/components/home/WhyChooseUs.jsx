import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EASE = [0.16, 1, 0.3, 1];

const items = [
  'State-licensed brokers operating under Israeli law.',
  'English-first service for diaspora clients since 2009.',
  'Bi-weekly physical property inspections, without exception.',
  '24/7 emergency coordination and response.',
];

export default function WhyChooseUs() {
  return (
    <section style={{ backgroundColor: '#0A1628' }} className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left — full-bleed architectural image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 2, ease: EASE }}
          className="relative overflow-hidden"
          style={{ minHeight: 400 }}
        >
          <img
            src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1600&q=85&auto=format&fit=crop"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 30%', filter: 'saturate(0.78) contrast(1.06)' }}
          />
          {/* Bleed right into text */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 20%, rgba(10,22,40,0.85) 100%)' }} />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,22,40,0.28)' }} />
        </motion.div>

        {/* Right — typographic */}
        <div
          className="flex flex-col justify-center"
          style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(2.5rem, 6vw, 6rem)' }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="font-inter uppercase"
            style={{ fontSize: 8.5, letterSpacing: '0.36em', color: 'rgba(184,150,90,0.45)' }}
          >
            Our Difference
          </motion.p>

          <div className="overflow-hidden mt-7">
            <motion.h2
              initial={{ y: '110%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
              className="font-playfair font-medium"
              style={{ color: 'rgba(255,255,255,0.9)', fontSize: 'clamp(2rem, 4vw, 4.2rem)', letterSpacing: '-0.016em', lineHeight: 1.06 }}
            >
              Trusted by owners
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '110%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.18, ease: EASE }}
              className="font-playfair font-medium italic"
              style={{ color: 'rgba(255,255,255,0.18)', fontSize: 'clamp(2rem, 4vw, 4.2rem)', letterSpacing: '-0.016em', lineHeight: 1.06 }}
            >
              on three continents.
            </motion.h2>
          </div>

          {/* Subtle gold rule */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 28 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            style={{ height: 1, backgroundColor: 'rgba(184,150,90,0.2)', margin: '2.5rem 0' }}
          />

          {/* Item list — typographic rows */}
          <div>
            {items.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                style={{
                  borderBottom: i < items.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  display: 'flex', alignItems: 'baseline', gap: 18,
                  padding: `${i === 0 ? '0' : '1.4rem'} 0 1.4rem`,
                }}
              >
                <span className="font-cormorant font-light flex-shrink-0" style={{ fontSize: '1rem', color: 'rgba(184,150,90,0.25)', lineHeight: 1 }}>—</span>
                <p className="font-inter" style={{ fontSize: 12.5, lineHeight: 1.92, color: 'rgba(255,255,255,0.26)' }}>
                  {line}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8 }}
            style={{ marginTop: '2.8rem' }}
          >
            <Link
              to="/about"
              className="font-inter uppercase"
              style={{ fontSize: 8.5, letterSpacing: '0.3em', color: 'rgba(184,150,90,0.42)', transition: 'color 0.5s ease' }}
              onMouseEnter={e => e.target.style.color = 'rgba(184,150,90,0.8)'}
              onMouseLeave={e => e.target.style.color = 'rgba(184,150,90,0.42)'}
            >
              About the firm →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
