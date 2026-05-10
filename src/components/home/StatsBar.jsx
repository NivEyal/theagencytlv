import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 15,  suffix: '+', label: 'Years active'       },
  { value: 500, suffix: '+', label: 'Properties managed' },
  { value: 98,  suffix: '%', label: 'Retention rate'     },
  { value: 3,   suffix: '',  label: 'Continents served'  },
];

function Counter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const duration = 2800;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <>{count}{suffix}</>;
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} style={{ backgroundColor: '#0C1117' }}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24">
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: i * 0.14 }}
              style={{
                padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.2rem, 3vw, 2.5rem)',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.03)' : 'none',
              }}
            >
              {/* Number — cormorant, generous size */}
              <div
                className="font-cormorant font-light leading-none"
                style={{
                  fontSize: i === 0 ? 'clamp(3rem, 5.5vw, 5rem)' : 'clamp(2.5rem, 4.5vw, 4rem)',
                  color: 'rgba(255,255,255,0.62)',
                  letterSpacing: '-0.02em',
                }}
              >
                <Counter target={s.value} suffix={s.suffix} inView={inView} />
              </div>

              {/* Divider */}
              <div style={{ width: 16, height: 1, backgroundColor: 'rgba(184,150,90,0.2)', margin: '1rem 0 0.8rem' }} />

              {/* Label */}
              <div className="font-inter uppercase" style={{ fontSize: 8, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.18)' }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
