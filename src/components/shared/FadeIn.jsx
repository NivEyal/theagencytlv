import React from 'react';
import { motion } from 'framer-motion';

// Opacity-only drift — nearly invisible, cinematic
export default function FadeIn({ children, delay = 0, className = '', direction = 'none' }) {
  const drift = {
    up:    { y: 8 },
    down:  { y: -8 },
    left:  { x: 7 },
    right: { x: -7 },
    none:  {},
  }[direction] || {};

  return (
    <motion.div
      initial={{ opacity: 0, ...drift }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
