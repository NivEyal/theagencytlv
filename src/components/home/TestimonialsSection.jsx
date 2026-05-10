import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const testimonials = [
  {
    quote: 'I never have to worry. Responsive, professional — always one step ahead.',
    attribution: 'Sarah M.',
    origin: 'London, UK',
    year: '2024',
  },
  {
    quote: 'In a completely different league. Above asking price. Flawless from start to close.',
    attribution: 'David K.',
    origin: 'New York, USA',
    year: '2023',
  },
  {
    quote: 'They guided us every step — from viewing to closing. Exceptional in every way.',
    attribution: 'Rachel & Jonathan B.',
    origin: 'Johannesburg, SA',
    year: '2024',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[active];

  return (
    <section style={{ backgroundColor: '#EDE8DE' }} className="overflow-hidden">
      <div
        className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24"
        style={{ paddingTop: 'clamp(8rem, 14vw, 16rem)', paddingBottom: 'clamp(8rem, 14vw, 16rem)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-0">

          {/* Left — label + navigation */}
          <div className="flex flex-col justify-between lg:pr-20">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
                className="font-inter uppercase"
                style={{ fontSize: 8.5, letterSpacing: '0.36em', color: '#8A8880' }}
              >
                Client Voices
              </motion.p>

              {/* Large index display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mt-16 hidden lg:block"
                >
                  <div className="font-cormorant font-light leading-none" style={{ fontSize: 'clamp(5rem, 10vw, 9rem)', color: 'rgba(12,17,23,0.06)' }}>
                    0{active + 1}
                  </div>
                  <div className="font-cormorant font-light" style={{ fontSize: '1.2rem', color: 'rgba(12,17,23,0.1)', marginTop: 6 }}>
                    / 0{testimonials.length}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation dashes */}
            <div className="flex lg:flex-col gap-3 mt-12 lg:mt-0">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0', display: 'flex', alignItems: 'center' }}
                >
                  <div style={{
                    height: 1,
                    width: i === active ? 32 : 14,
                    backgroundColor: i === active ? '#B8965A' : 'rgba(12,17,23,0.15)',
                    transition: 'width 0.6s ease, background-color 0.6s ease',
                  }} />
                </button>
              ))}
            </div>
          </div>

          {/* Right — editorial quote */}
          <div className="relative">
            {/* Oversized decorative mark — background element */}
            <div
              className="font-cormorant font-light select-none absolute"
              style={{
                fontSize: 'clamp(10rem, 22vw, 20rem)',
                color: 'rgba(184,150,90,0.05)',
                lineHeight: 1,
                top: '-4rem',
                left: '-2rem',
                pointerEvents: 'none',
              }}
              aria-hidden
            >
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="relative"
              >
                <blockquote
                  className="font-playfair font-medium"
                  style={{
                    color: 'rgba(12,17,23,0.82)',
                    fontSize: 'clamp(1.8rem, 3.8vw, 3.8rem)',
                    lineHeight: 1.2,
                    letterSpacing: '-0.016em',
                    maxWidth: '22ch',
                  }}
                >
                  {t.quote}
                </blockquote>

                {/* Attribution — minimal, typographic */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 'clamp(3rem, 5vw, 5rem)' }}>
                  <div style={{ width: 18, height: 1, backgroundColor: 'rgba(184,150,90,0.3)' }} />
                  <div>
                    <p className="font-inter uppercase" style={{ fontSize: 8.5, letterSpacing: '0.26em', color: 'rgba(12,17,23,0.38)' }}>
                      {t.attribution}
                    </p>
                    <p className="font-inter" style={{ fontSize: 10, color: 'rgba(138,136,128,0.6)', marginTop: 5, letterSpacing: '0.04em' }}>
                      {t.origin} · {t.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next button — typographic */}
            <button
              onClick={() => setActive(p => (p + 1) % testimonials.length)}
              className="font-inter uppercase"
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                fontSize: 8.5, letterSpacing: '0.3em', color: '#8A8880',
                marginTop: 'clamp(3rem, 6vw, 5rem)',
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                transition: 'opacity 0.4s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.45'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <div style={{ width: 18, height: 1, backgroundColor: 'rgba(12,17,23,0.18)' }} />
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
