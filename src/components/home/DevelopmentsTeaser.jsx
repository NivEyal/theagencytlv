import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const developments = [
  {
    city: 'Tel Aviv',
    descriptor: 'Rothschild · White City',
    price: 'From ₪ 4.5M',
    image: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1400&q=88&auto=format&fit=crop',
  },
  {
    city: 'Jerusalem',
    descriptor: 'Old City Fringe · Stone',
    price: 'From ₪ 3.2M',
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1000&q=88&auto=format&fit=crop',
  },
  {
    city: 'Sharon Coast',
    descriptor: 'Mediterranean · Coastal',
    price: 'From ₪ 2.8M',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=88&auto=format&fit=crop',
  },
];

export default function DevelopmentsTeaser() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ backgroundColor: '#F5F2EC' }} className="overflow-hidden">

      {/* Section header */}
      <div
        className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24"
        style={{ paddingTop: 'clamp(8rem, 14vw, 14rem)', paddingBottom: 'clamp(3rem, 5vw, 5rem)' }}
      >
        <div className="flex items-end justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
              className="font-inter uppercase"
              style={{ fontSize: 8.5, letterSpacing: '0.36em', color: '#8A8880' }}
            >
              Developments
            </motion.p>
            <div className="overflow-hidden mt-5">
              <motion.h2
                initial={{ y: '110%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.06, ease: EASE }}
                className="font-playfair font-medium"
                style={{ color: '#0C1117', fontSize: 'clamp(2.5rem, 5.5vw, 6rem)', letterSpacing: '-0.022em', lineHeight: 1.0 }}
              >
                Where to own
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '110%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.14, ease: EASE }}
                className="font-playfair font-medium italic"
                style={{ color: '#8A8880', fontSize: 'clamp(2.5rem, 5.5vw, 6rem)', letterSpacing: '-0.022em', lineHeight: 1.0 }}
              >
                in Israel.
              </motion.h2>
            </div>
          </div>
          <Link
            to="/developments"
            className="hidden md:block font-inter uppercase mb-2"
            style={{ fontSize: 8.5, letterSpacing: '0.3em', color: '#8A8880', transition: 'color 0.4s ease' }}
            onMouseEnter={e => e.target.style.color = '#0C1117'}
            onMouseLeave={e => e.target.style.color = '#8A8880'}
          >
            All locations →
          </Link>
        </div>
      </div>

      {/* Expanding accordion — full viewport width */}
      <div className="flex flex-col md:flex-row md:h-[clamp(300px,50vw,640px)]">
        {developments.map((d, i) => (
          <motion.div
            key={d.city}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: i * 0.12 }}
            className="relative overflow-hidden cursor-pointer"
            style={{
              flex: hovered === i ? 1.85 : hovered !== null ? 0.6 : 1,
              transition: 'flex 1s cubic-bezier(0.16,1,0.3,1)',
              height: 'clamp(220px, 55vw, 360px)',
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link to="/developments" className="block" style={{ position: 'absolute', inset: 0 }}>
              <img
                src={d.image}
                alt={d.city}
                style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  objectFit: 'cover',
                  transform: hovered === i ? 'scale(1.06)' : 'scale(1.02)',
                  transition: 'transform 1.6s cubic-bezier(0.16,1,0.3,1)',
                  filter: 'contrast(1.04) saturate(0.82)',
                }}
              />

              {/* Cinematic darkening */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,10,15,0.96) 0%, rgba(6,10,15,0.28) 42%, rgba(6,10,15,0.06) 100%)' }} />
              <div style={{ position: 'absolute', inset: 0, backgroundColor: `rgba(8,14,24,${hovered === i ? 0.18 : 0.36})`, transition: 'background-color 1s ease' }} />

              {/* Panel divider */}
              {i < developments.length - 1 && (
                <div style={{ position: 'absolute', top: 0, right: 0, width: 1, height: '100%', backgroundColor: 'rgba(255,255,255,0.05)' }} className="hidden md:block" />
              )}

              {/* Text overlay */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 'clamp(2rem, 4vw, 3.5rem)' }}>
                <p className="font-inter uppercase" style={{ fontSize: 7, letterSpacing: '0.32em', color: 'rgba(255,255,255,0.2)', marginBottom: 12 }}>
                  {d.descriptor}
                </p>
                <h3 className="font-playfair font-medium leading-none" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.8rem)', color: 'rgba(255,255,255,0.92)' }}>
                  {d.city}
                </h3>

                {/* Price — revealed on hover */}
                <div style={{
                  overflow: 'hidden',
                  maxHeight: hovered === i ? 32 : 0,
                  opacity: hovered === i ? 1 : 0,
                  marginTop: hovered === i ? 14 : 0,
                  transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
                }}>
                  <p className="font-cormorant font-light" style={{ fontSize: '1.2rem', color: 'rgba(184,150,90,0.7)' }}>
                    {d.price}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
