import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MapPin,
  GraduationCap,
  Target,
  Heart,
  Zap,
  Globe,
  Calendar,
  Briefcase,
} from 'lucide-react';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
import { fadeUp, staggerContainer } from '../lib/animations';

const quickFacts = [
  { icon: MapPin, label: 'Location', value: 'Chennai, Tamil Nadu' },
  { icon: GraduationCap, label: 'Education', value: 'B.Sc Computer Science' },
  { icon: Calendar, label: 'Availability', value: 'Immediate' },
  { icon: Globe, label: 'Languages', value: 'English & Tamil' },
  { icon: Briefcase, label: 'Experience', value: 'Internship + Projects' },
  { icon: Target, label: 'Goal', value: 'UI/UX Designer Role' },
];

const strengths = [
  { icon: '🎨', text: 'User-Centered Design' },
  { icon: '🔬', text: 'UX Research & Testing' },
  { icon: '📐', text: 'Wireframing & Prototyping' },
  { icon: '🧩', text: 'Design Systems' },
  { icon: '♿', text: 'Accessibility (WCAG)' },
  { icon: '📱', text: 'Responsive Design' },
];

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Me"
        subtitle="Passionate about creating meaningful digital experiences that put users first"
      />

      <div ref={ref} className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Left - About text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="lg:col-span-3 space-y-6"
        >
          <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 md:p-8">
            <h3 className="font-heading text-xl font-semibold text-brand-text mb-4">
              Who I Am
            </h3>
            <div className="space-y-4 text-brand-muted leading-relaxed text-[0.95rem]">
              <p>
                I'm <span className="text-brand-secondary font-medium">Dinesh S</span>, a creative
                and user-focused <span className="text-brand-text">UI/UX Designer</span> based in
                Chennai, India. With a strong foundation in user-centered design, I specialize in
                transforming complex problems into intuitive, accessible, and visually engaging
                interfaces.
              </p>
              <p>
                Currently completing my{' '}
                <span className="text-brand-text">B.Sc in Computer Science</span> at Muthayammal
                College of Arts and Science (Periyar University), I combine technical knowledge
                with design thinking to build products that truly resonate with users.
              </p>
              <p>
                From conducting user research with 20+ participants to building reusable design
                systems across 15+ screens, I bring a data-driven and empathetic approach to every
                project. My internship at{' '}
                <span className="text-brand-text">Accent Techno Soft</span> further strengthened
                my ability to deliver production-ready designs in real-world settings.
              </p>
            </div>
          </motion.div>

          {/* Strengths */}
          <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 md:p-8">
            <h3 className="font-heading text-xl font-semibold text-brand-text mb-5">
              Core Strengths
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {strengths.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-primary/30 transition-colors"
                >
                  <span className="text-lg">{s.icon}</span>
                  <span className="text-sm text-brand-muted">{s.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Quick facts */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="lg:col-span-2 space-y-4"
        >
          <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 md:p-8">
            <h3 className="font-heading text-xl font-semibold text-brand-text mb-5">
              Quick Facts
            </h3>
            <div className="space-y-4">
              {quickFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/20 transition-colors shrink-0">
                    <fact.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted uppercase tracking-wider">
                      {fact.label}
                    </p>
                    <p className="text-sm font-medium text-brand-text">{fact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Passion Card */}
          <motion.div
            variants={fadeUp}
            className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <Heart size={18} className="text-rose-400" />
                <h3 className="font-heading text-lg font-semibold text-brand-text">
                  My Passion
                </h3>
              </div>
              <p className="text-brand-muted text-sm leading-relaxed">
                I'm passionate about solving real user problems through intuitive design.
                Every pixel I place, every flow I design, is guided by empathy and a deep
                understanding of the people who will use it. Design isn't just my
                profession — it's how I make the world a little easier to navigate.
              </p>
            </div>
          </motion.div>

          {/* Status badge */}
          <motion.div
            variants={fadeUp}
            className="glass-card rounded-2xl p-5 flex items-center gap-4"
          >
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <div>
              <p className="text-sm font-medium text-brand-text">Available for Opportunities</p>
              <p className="text-xs text-brand-muted">Willing to relocate • Immediate joining</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
