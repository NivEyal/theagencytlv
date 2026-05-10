import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ease = [0.25, 0.1, 0.0, 1.0];

export default function AboutTeaser() {
  return (
    <section style={{ backgroundColor: '#0A1628' }} className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Image — portrait crop, editorial */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.5, ease }}
          className="relative overflow-hidden order-2 lg:order-1"
          style={{ minHeight: 400 }}
        >
          <img
            src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1200&q=80&auto=format&fit=crop"
            alt=""
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%' }}
          />
          {/* Bleed into right text panel */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 30%, rgba(10,22,40,0.8) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10,22,40,0.28)' }} />
        </motion.div>

        {/* Text panel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
          className="flex flex-col justify-center order-1 lg:order-2"
          style={{ padding: 'clamp(3rem, 6vw, 6rem) clamp(2rem, 5vw, 5rem)' }}
        >
          <p
            className="font-inter uppercase"
            style={{ fontSize: 9, letterSpacing: '0.32em', color: 'rgba(184,150,90,0.45)' }}
          >
            About The Agency
          </p>

          <h2
            className="font-playfair font-medium"
            style={{
              color: 'rgba(255,255,255,0.88)',
              fontSize: 'clamp(1.9rem, 3.8vw, 3.8rem)',
              letterSpacing: '-0.015em',
              lineHeight: 1.07,
              marginTop: 'clamp(1.2rem, 2vw, 1.8rem)',
            }}
          >
            A favour for friends<br />
            became{' '}
            <em className="italic" style={{ color: 'rgba(255,255,255,0.2)' }}>
              an institution.
            </em>
          </h2>

          <div style={{ width: 28, height: 1, backgroundColor: 'rgba(184,150,90,0.22)', margin: '1.8rem 0' }} />

          <p
            className="font-inter"
            style={{ fontSize: 12.5, lineHeight: 2.0, color: 'rgba(255,255,255,0.28)', maxWidth: '28ch' }}
          >
            Founded by Selwyn, who made Aliyah from South Africa in 1978. Over 15 years, a personal favour became Israel's most trusted boutique property firm.
          </p>

          <Link
            to="/about"
            className="font-inter uppercase flex items-center gap-3"
            style={{ fontSize: 9, letterSpacing: '0.28em', color: 'rgba(184,150,90,0.45)', marginTop: '2.5rem', width: 'fit-content' }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(184,150,90,0.8)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(184,150,90,0.45)'}
          >
            <span style={{ display: 'block', width: 16, height: 1, backgroundColor: 'currentColor', opacity: 0.6 }} />
            Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}