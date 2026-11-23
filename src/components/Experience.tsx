import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
import { fadeUp, staggerContainer } from '../lib/animations';
import { MapPin, Calendar, Building2, ChevronRight } from 'lucide-react';

const responsibilities = [
  'Designed a mobile accessories e-commerce website using UI/UX design principles',
  'Created user-friendly layouts with a focus on smooth navigation and usability',
  'Applied clean visual design, accessibility, and user-centered design principles',
  'Developed UI screens to improve the overall user experience and engagement',
];

export function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="experience">
      <SectionHeading
        title="Experience"
        subtitle="Professional experience and hands-on learning journey"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-3xl mx-auto"
      >
        {/* Internship Card */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -4 }}
          className="glass-card rounded-2xl overflow-hidden card-accent-top"
        >
          {/* Gradient header */}
          <div className="h-2 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent" />

          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Internship
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-brand-text mt-2">
                  UI/UX Design Intern
                </h3>
                <div className="flex items-center gap-2 mt-1 text-brand-secondary">
                  <Building2 size={15} />
                  <span className="font-medium text-sm">Accent Techno Soft</span>
                </div>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-brand-muted">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>May 2025 — Jun 2025</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span>Coimbatore, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-3">
              {responsibilities.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-1 shrink-0">
                    <ChevronRight
                      size={14}
                      className="text-brand-primary group-hover:text-brand-secondary transition-colors"
                    />
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>

            {/* Skills tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['UI Design', 'UX Design', 'E-commerce', 'Figma', 'Accessibility', 'User Research'].map(
                tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-brand-primary/8 text-brand-muted border border-white/5 hover:border-brand-primary/30 hover:text-brand-secondary transition-colors"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div variants={fadeUp} className="mt-8">
          <h3 className="font-heading text-lg font-semibold text-brand-text mb-5 text-center">
            Learning & Practice
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                emoji: '🎨',
                title: 'Design Thinking (Simplilearn)',
                desc: 'Certified in user empathy, ideation, and rapid prototyping principles',
              },
              {
                emoji: '🤖',
                title: 'AI Tools & Neural Networks',
                desc: 'Certified by Accent Techno Soft (ATS) in AI-driven tools & workflow speed',
              },
              {
                emoji: '📱',
                title: 'Behance Case Study',
                desc: 'Published Saral Banking app with 16 screens & 8 Indian languages',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -3 }}
                className="glass-card rounded-xl p-5 text-center"
              >
                <span className="text-2xl mb-3 block">{item.emoji}</span>
                <h4 className="font-heading text-sm font-semibold text-brand-text mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
