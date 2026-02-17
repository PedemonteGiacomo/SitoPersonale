import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Section({ id, title, children, className, delay = 0 }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={cn("py-16 sm:py-20", className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-neon-green mb-12 text-center font-mono"
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </motion.section>
  );
}