import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    n: '01',
    title: 'Buying\n& Selling',
    detail: 'Local knowledge. Global reach. Every transaction handled with precision and care.',
    size: 'large',
  },
  {
    n: '02',
    title: 'Short Term\nRental',
    detail: 'End-to-end management. Guests, cleaning, income — entirely handled.',
    accent: true,
    size: 'medium',
  },
  {
    n: '03',
    title: 'Long Term\nRental',
    detail: 'Reliable income. Tenant placement, lease management, monthly reporting.',
    size: 'medium',
  },
  {
    n: '04',
    title: 'Holiday\nHome Care',
    detail: 'Bi-weekly visits. Your property watched over year-round.',
    size: 'small',
  },
];

const EASE = [0.16, 1, 0.3, 1];

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ backgroundColor: '#F5F2EC' }} className="overflow-hidden">
      <div
        className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24"
        style={{ paddingTop: 'clamp(8rem, 14vw, 14rem)', paddingBottom: 'clamp(8rem, 14vw, 14rem)' }}
      >
        {/* Editorial header — left-anchored, large scale */}
        <div className="mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="font-inter uppercase"
            style={{ fontSize: 8.5, letterSpacing: '0.36em', color: '#8A8880' }}
          >
            Services
          </motion.p>
          <div className="mt-6 overflow-hidden">
            <motion.h2
              initial={{ y: '110%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.08, ease: EASE }}
              className="font-playfair font-medium"
              style={{ color: '#0C1117', fontSize: 'clamp(3rem, 6.5vw, 7rem)', letterSpacing: '-0.025em', lineHeight: 1.0 }}
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
              style={{ color: '#8A8880', fontSize: 'clamp(3rem, 6.5vw, 7rem)', letterSpacing: '-0.025em', lineHeight: 1.0 }}
            >
              One firm.
            </motion.h2>
          </div>
        </div>

        {/* Services — editorial list, varied rhythm */}
        <div>
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1.2, delay: i * 0.07 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ borderTop: i === 0 ? '1px solid rgba(12,17,23,0.07)' : 'none' }}
            >
              <Link
                to="/services"
                style={{
                  borderBottom: '1px solid rgba(12,17,23,0.06)',
                  display: 'grid',
                  gridTemplateColumns: i === 0 ? '52px 1fr max-content' : '52px 1fr max-content',
                  gap: 'clamp(2rem, 4vw, 4rem)',
                  alignItems: 'end',
                  paddingTop: i === 0 ? 'clamp(3rem, 5vw, 5.5rem)' : i === 1 ? 'clamp(2.4rem, 4vw, 4.5rem)' : 'clamp(2rem, 3.2vw, 3.5rem)',
                  paddingBottom: i === 0 ? 'clamp(3rem, 5vw, 5.5rem)' : i === 1 ? 'clamp(2.4rem, 4vw, 4.5rem)' : 'clamp(2rem, 3.2vw, 3.5rem)',
                  textDecoration: 'none',
                  paddingLeft: i === 1 ? 'clamp(0rem, 3vw, 3rem)' : i === 2 ? 'clamp(0rem, 1.5vw, 1.5rem)' : '0',
                  transition: 'padding-left 0.7s ease',
                }}
              >
                {/* Index number */}
                <span
                  className="font-cormorant font-light"
                  style={{
                    fontSize: i === 0 ? 'clamp(2rem, 3.5vw, 3.2rem)' : '1.5rem',
                    color: i === 0 ? 'rgba(12,17,23,0.1)' : 'rgba(12,17,23,0.07)',
                    lineHeight: 1,
                    transition: 'color 0.5s ease',
                  }}
                >
                  {s.n}
                </span>

                {/* Title + detail */}
                <div>
                  <h3
                    className="font-playfair font-medium"
                    style={{
                      fontSize: i === 0
                        ? 'clamp(2rem, 4vw, 4rem)'
                        : i === 1
                        ? 'clamp(1.6rem, 2.8vw, 2.8rem)'
                        : 'clamp(1.2rem, 2vw, 2rem)',
                      color: hovered === i ? '#0C1117' : i === 0 ? '#0C1117' : 'rgba(12,17,23,0.7)',
                      letterSpacing: '-0.014em',
                      lineHeight: 1.08,
                      whiteSpace: 'pre-line',
                      transition: 'color 0.5s ease',
                    }}
                  >
                    {s.title}
                    {s.accent && (
                      <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', backgroundColor: '#B8965A', marginLeft: 10, verticalAlign: 'middle', marginBottom: 3 }} />
                    )}
                  </h3>
                  <p
                    className="font-inter hidden md:block"
                    style={{
                      fontSize: 12,
                      lineHeight: 1.95,
                      color: 'rgba(138,136,128,0.7)',
                      marginTop: 10,
                      maxWidth: '36ch',
                      opacity: hovered === i ? 1 : i === 0 ? 0.8 : 0.5,
                      transition: 'opacity 0.5s ease',
                    }}
                  >
                    {s.detail}
                  </p>
                </div>

                {/* Arrow — appears on hover */}
                <span
                  className="font-inter"
                  style={{
                    fontSize: 11,
                    color: '#B8965A',
                    opacity: hovered === i ? 0.7 : 0,
                    transform: hovered === i ? 'translateX(0)' : 'translateX(8px)',
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                    alignSelf: 'center',
                  }}
                >
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer link — far right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-12 flex justify-end"
        >
          <Link
            to="/services"
            className="font-inter uppercase"
            style={{ fontSize: 8.5, letterSpacing: '0.3em', color: '#8A8880', transition: 'color 0.4s ease' }}
            onMouseEnter={e => e.target.style.color = '#0C1117'}
            onMouseLeave={e => e.target.style.color = '#8A8880'}
          >
            All services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
