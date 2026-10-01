import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp } from '../lib/animations';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'center' | 'left';
}

export function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      <p className="text-brand-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
      <div className={`mt-6 flex ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent" />
      </div>
    </div>
  );
}
