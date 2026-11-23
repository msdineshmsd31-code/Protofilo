import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Lightbulb, Brain, Layers } from 'lucide-react';
import { SiBehance } from 'react-icons/si';

interface Certification {
  title: string;
  provider: string;
  platform: string;
  icon: React.ReactNode;
  badgeColor: string;
  gradient: string;
  skills: string[];
  description: string;
  linkText?: string;
  linkUrl?: string;
}

const certifications: Certification[] = [
  {
    title: 'Design Thinking for Beginners',
    provider: 'Simplilearn SkillUp',
    platform: 'Simplilearn',
    icon: <Lightbulb size={24} className="text-amber-400" />,
    badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    gradient: 'from-amber-500 to-orange-500',
    skills: [
      '5 Stages of Design Thinking',
      'User Empathy & Problem Definition',
      'Ideation & Creative Brainstorming',
      'Low & High-Fidelity Prototyping',
      'Usability Validation & User Feedback',
    ],
    description:
      'Industry-recognized certification covering human-centered design thinking, empathy mapping, user pain point identification, and iterative validation of product ideas.',
    linkText: 'Simplilearn SkillUp',
  },
  {
    title: 'AI Neural Networks & Tools',
    provider: 'Accent Techno Soft (ATS)',
    platform: 'ATS Academy',
    icon: <Brain size={24} className="text-cyan-400" />,
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    gradient: 'from-cyan-600 to-blue-600',
    skills: [
      'Neural Network Foundations',
      'AI-Powered Design & Prototyping Tools',
      'Generative Workflows for UI/UX',
      'Workflow Automation & Asset Creation',
      'Future-Ready Digital Product Strategy',
    ],
    description:
      'Technical certification exploring neural network mechanisms and leveraging cutting-edge AI tools to accelerate design ideation, workflow efficiency, and UI asset generation.',
    linkText: 'Accent Techno Soft',
  },
  {
    title: 'Product Design & Behance Case Studies',
    provider: 'Published Portfolio Case Studies',
    platform: 'Behance',
    icon: <SiBehance size={24} className="text-blue-400" />,
    badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
    gradient: 'from-purple-600 to-pink-600',
    skills: [
      'Saral Banking App (16 Screens, 8 Languages)',
      'Expense Tracker Case Study (25 Screens)',
      'Design Systems with Reusable Components',
      'WCAG Accessibility & Voice Commands',
    ],
    description:
      'Demonstrated mastery in end-to-end product design with in-depth case studies published on Behance, featuring reusable component libraries, multi-language support, and usability research.',
    linkText: 'View on Behance',
    linkUrl: 'https://www.behance.net/dineshdinesh87',
  },
];

export function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        title="Certifications & Credentials"
        subtitle="Industry-validated expertise in human-centered design, prototyping, and modern design systems"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            variants={fadeUp}
            custom={index}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group card-accent-top"
          >
            {/* Top Glow Accent */}
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
            />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1.5 ${cert.badgeColor}`}
                >
                  <ShieldCheck size={13} />
                  Verified Credential
                </span>
              </div>

              {/* Title & Platform */}
              <h3 className="font-heading text-lg font-bold text-brand-text mb-1 group-hover:text-brand-secondary transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-brand-secondary font-medium mb-3">
                {cert.provider} • <span className="text-brand-muted">{cert.platform}</span>
              </p>
              <p className="text-brand-muted text-xs sm:text-sm leading-relaxed mb-5">
                {cert.description}
              </p>

              {/* Skills list */}
              <div className="space-y-1.5 pt-3 border-t border-white/5 mb-6">
                <p className="text-[11px] font-semibold text-brand-text uppercase tracking-wider mb-2">
                  Key Competencies Covered:
                </p>
                {cert.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2 text-xs text-brand-muted">
                    <CheckCircle2 size={13} className="text-brand-accent mt-0.5 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-emerald-400 flex items-center gap-1 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Completed & Verified
              </span>
              {cert.linkUrl ? (
                <a
                  href={cert.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-secondary flex items-center gap-1 hover:underline transition-colors"
                >
                  {cert.linkText || cert.platform} <ExternalLink size={12} />
                </a>
              ) : (
                <span className="text-brand-muted flex items-center gap-1">
                  {cert.linkText || cert.platform}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
