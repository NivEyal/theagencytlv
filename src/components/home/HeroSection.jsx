import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY  = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const fade  = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: 700, backgroundColor: '#080C11' }}
    >
      <motion.div style={{ y: imgY, position: 'absolute', inset: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=2000&q=90&auto=format&fit=crop"
          alt=""
          style={{ width: '100%', height: '110%', objectFit: 'cover', objectPosition: '68% 20%', filter: 'contrast(1.08) saturate(0.72) brightness(0.88)' }}
          loading="eager"
        />
      </motion.div>

      {/* Grading */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(112deg, rgba(6,9,14,0.98) 0%, rgba(6,9,14,0.74) 30%, rgba(6,9,14,0.14) 60%, rgba(6,9,14,0.04) 100%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(5,8,13,1) 0%, rgba(5,8,13,0.6) 20%, transparent 48%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 100% 80% at 78% 12%, rgba(14,8,2,0.38), transparent)', mixBlendMode: 'multiply' }} />

      {/* Text */}
      <motion.div style={{ opacity: fade, position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div className="px-8 md:px-16 lg:px-24" style={{ paddingBottom: 'clamp(5rem, 10vw, 11rem)' }}>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1.1 }}
            style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 'clamp(3.5rem, 7vw, 7rem)' }}
          >
            <div style={{ width: 20, height: 1, backgroundColor: 'rgba(184,150,90,0.28)' }} />
            <span className="font-inter uppercase" style={{ fontSize: 7, letterSpacing: '0.44em', color: 'rgba(255,255,255,0.16)' }}>
              Tel Aviv · Est. 2009
            </span>
          </motion.div>

          {/* Title */}
          <div style={{ fontFamily: 'Playfair Display, serif', lineHeight: 0.88, maxWidth: '70vw' }}>
            <div style={{ overflow: 'hidden' }}>
              <motion.span
                initial={{ y: '112%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'block', fontSize: 'clamp(5rem, 13vw, 15rem)', fontWeight: 600, color: '#FFFFFF', letterSpacing: '-0.032em', textShadow: '0 2px 40px rgba(0,0,0,0.45)' }}
              >
                Property
              </motion.span>
            </div>
            <div style={{ overflow: 'hidden', marginTop: '0.04em' }}>
              <motion.span
                initial={{ y: '112%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.5, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'block', fontSize: 'clamp(5rem, 13vw, 15rem)', fontWeight: 400, fontStyle: 'italic', color: 'rgba(255,255,255,0.55)', letterSpacing: '-0.032em', marginLeft: '0.04em' }}
              >
                Without
              </motion.span>
            </div>
            <div style={{ overflow: 'hidden', marginTop: '0.04em' }}>
              <motion.span
                initial={{ y: '112%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.5, delay: 0.76, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'block', fontSize: 'clamp(3.4rem, 9vw, 10rem)', fontWeight: 600, color: '#FFFFFF', letterSpacing: '-0.026em', textShadow: '0 2px 40px rgba(0,0,0,0.45)' }}
              >
                Compromise<span style={{ color: '#B8965A' }}>.</span>
              </motion.span>
            </div>
          </div>

          {/* CTAs — offset right, typographic only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.6, delay: 2.4 }}
            style={{ display: 'flex', alignItems: 'center', gap: 40, marginTop: 'clamp(5rem, 8vw, 9rem)', marginLeft: 'clamp(0rem, 2vw, 3rem)' }}
          >
            <Link
              to="/contact"
              className="font-inter uppercase"
              style={{ fontSize: 8.5, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.55)', transition: 'color 0.6s ease' }}
              onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.95)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
            >
              Speak with us
            </Link>
            <div style={{ width: 1, height: 13, backgroundColor: 'rgba(255,255,255,0.07)' }} />
            <Link
              to="/services"
              className="font-inter uppercase"
              style={{ fontSize: 8.5, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.16)', transition: 'color 0.6s ease' }}
              onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.16)'}
            >
              Our services
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Right vertical */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, delay: 2.6 }}
        className="absolute right-9 md:right-14 bottom-14 hidden md:flex flex-col items-center gap-5"
      >
        <span className="font-inter uppercase" style={{ fontSize: 6, letterSpacing: '0.42em', color: 'rgba(255,255,255,0.08)', writingMode: 'vertical-rl' }}>
          Boutique Real Estate
        </span>
        <div style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, rgba(255,255,255,0.06), transparent)' }} />
      </motion.div>

      {/* Scroll whisper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3.2 }}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 30, background: 'linear-gradient(to bottom, rgba(255,255,255,0.14), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
