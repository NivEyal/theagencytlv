import React from 'react';
import { motion } from 'framer-motion';

export default function SectionLabel({ children, light = false }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`font-montserrat text-xs uppercase tracking-[0.2em] ${
        light ? 'text-gold/80' : 'text-gold'
      }`}
    >
      {children}
    </motion.span>
  );
}