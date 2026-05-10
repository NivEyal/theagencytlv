import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { label: 'About',        path: '/about' },
  { label: 'Services',     path: '/services' },
  { label: 'Developments', path: '/developments' },
  { label: 'Contact',      path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [loc]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.3 }}
        className="fixed top-0 inset-x-0 z-50"
        style={{
          backgroundColor: scrolled ? 'rgba(8,12,17,0.88)' : 'transparent',
          backdropFilter:   scrolled ? 'blur(8px) saturate(1.1)' : 'none',
          borderBottom:     scrolled ? '1px solid rgba(255,255,255,0.024)' : '1px solid transparent',
          transition: 'background-color 0.8s ease, backdrop-filter 0.8s ease, border-color 0.8s ease',
        }}
      >
        <div
          className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 flex items-center justify-between"
          style={{ height: scrolled ? 38 : 54, transition: 'height 0.8s ease' }}
        >
          {/* Wordmark */}
          <Link
            to="/"
            className="font-playfair relative z-10"
            style={{ color: 'rgba(255,255,255,0.84)', fontSize: scrolled ? '0.85rem' : '0.98rem', letterSpacing: '-0.01em', transition: 'font-size 0.6s ease' }}
          >
            The Agency{' '}
            <span style={{ color: '#B8965A', opacity: 0.68 }}>TLV</span>
          </Link>

          {/* Desktop nav — absolutely centred */}
          <div className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {NAV.map(l => (
              <Link
                key={l.path}
                to={l.path}
                className="font-inter uppercase"
                style={{
                  fontSize: 8,
                  letterSpacing: '0.26em',
                  color: loc.pathname === l.path ? 'rgba(184,150,90,0.6)' : 'rgba(255,255,255,0.24)',
                  transition: 'color 0.5s ease',
                }}
                onMouseEnter={e => { if (loc.pathname !== l.path) e.target.style.color = 'rgba(255,255,255,0.6)'; }}
                onMouseLeave={e => { if (loc.pathname !== l.path) e.target.style.color = 'rgba(255,255,255,0.24)'; }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Phone */}
          <a
            href="tel:+972527771715"
            className="hidden lg:block font-inter uppercase"
            style={{ fontSize: 8, letterSpacing: '0.26em', color: 'rgba(255,255,255,0.18)', transition: 'color 0.5s ease' }}
            onMouseEnter={e => e.target.style.color = 'rgba(184,150,90,0.58)'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.18)'}
          >
            +972 52 777 1715
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(v => !v)}
            className="lg:hidden flex flex-col gap-[5px] p-1 relative z-10"
            aria-label="Menu"
          >
            <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.32 }} className="block w-5" style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.55)' }} />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} className="block w-3.5" style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.32)' }} />
            <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.32 }} className="block w-5" style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.55)' }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.38 }}
            className="fixed inset-0 z-40 flex flex-col justify-between px-8 pt-20 pb-12"
            style={{ backgroundColor: '#08090D' }}
          >
            <nav>
              {NAV.map((l, i) => (
                <motion.div
                  key={l.path}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.06 }}
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <Link
                    to={l.path}
                    className="block py-6 font-playfair font-medium"
                    style={{ fontSize: '2rem', color: loc.pathname === l.path ? 'rgba(184,150,90,0.72)' : 'rgba(255,255,255,0.75)' }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.32 }} className="space-y-3">
              <a href="tel:+972527771715" className="block font-inter uppercase" style={{ fontSize: 9, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.2)' }}>+972 52 777 1715</a>
              <a href="https://wa.me/972527771715" target="_blank" rel="noopener noreferrer" className="block font-inter uppercase" style={{ fontSize: 9, letterSpacing: '0.28em', color: 'rgba(255,255,255,0.2)' }}>WhatsApp</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
