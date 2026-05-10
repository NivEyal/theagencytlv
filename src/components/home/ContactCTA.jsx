import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ease = [0.25, 0.1, 0.0, 1.0];

export default function ContactCTA() {
  return (
    <section style={{ backgroundColor: '#0C1117', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient warm bloom */}
      <div
        style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 60% at 12% 70%, rgba(184,150,90,0.04), transparent)',
        }}
      />

      <div
        className="max-w-screen-xl mx-auto px-7 md:px-14 lg:px-20 relative"
        style={{ paddingTop: 'clamp(6rem, 12vw, 12rem)', paddingBottom: 'clamp(6rem, 12vw, 12rem)' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 lg:gap-24 items-end">

          {/* Big headline */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3 }}
              className="font-inter uppercase"
              style={{ fontSize: 9, letterSpacing: '0.32em', color: 'rgba(184,150,90,0.35)' }}
            >
              Get in Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: 0.1, ease }}
              className="mt-6 font-playfair font-medium"
              style={{
                color: 'rgba(255,255,255,0.82)',
                fontSize: 'clamp(3rem, 7.5vw, 8.5rem)',
                letterSpacing: '-0.028em',
                lineHeight: 1.0,
              }}
            >
              Your property.<br />
              <em className="italic" style={{ color: 'rgba(255,255,255,0.18)' }}>Our responsibility.</em>
            </motion.h2>
          </div>

          {/* Contact methods — typographic, no buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.25 }}
            className="flex flex-col"
            style={{ gap: '2.2rem', paddingBottom: 4 }}
          >
            {[
              { label: 'Telephone', value: '+972 52 777 1715', href: 'tel:+972527771715' },
              { label: 'WhatsApp',  value: 'Message directly', href: 'https://wa.me/972527771715', external: true },
            ].map(({ label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="group block"
              >
                <p
                  className="font-inter uppercase"
                  style={{ fontSize: 8, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.16)', marginBottom: 7 }}
                >
                  {label}
                </p>
                <p
                  className="font-cormorant font-light"
                  style={{
                    fontSize: '1.6rem',
                    color: 'rgba(255,255,255,0.48)',
                    transition: 'color 0.4s ease',
                  }}
                  onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.78)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.48)'}
                >
                  {value}
                </p>
                <div
                  style={{
                    width: 0, height: 1, backgroundColor: '#B8965A', opacity: 0.4, marginTop: 8,
                    transition: 'width 0.5s ease',
                  }}
                  onMouseEnter={e => e.target.style.width = '44px'}
                  onMouseLeave={e => e.target.style.width = '0'}
                />
              </a>
            ))}

            <Link
              to="/contact"
              className="font-inter uppercase flex items-center gap-3"
              style={{ fontSize: 9, letterSpacing: '0.28em', color: 'rgba(184,150,90,0.5)', marginTop: 8 }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(184,150,90,0.85)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(184,150,90,0.5)'}
            >
              <span style={{ display: 'block', width: 16, height: 1, backgroundColor: 'rgba(184,150,90,0.35)' }} />
              Send an enquiry
            </Link>
          </motion.div>
        </div>

        {/* Base strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{
            marginTop: 'clamp(5rem, 10vw, 9rem)',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.04)',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          }}
        >
          <Link
            to="/"
            className="font-playfair"
            style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.22)' }}
          >
            The Agency <span style={{ color: 'rgba(184,150,90,0.48)' }}>TLV</span>
          </Link>
          <p
            className="font-inter uppercase"
            style={{ fontSize: 8, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.1)' }}
          >
            © 2026 · Tel Aviv, Israel
          </p>
        </motion.div>
      </div>
    </section>
  );
}