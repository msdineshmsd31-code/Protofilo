import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Award, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import { SiCoursera, SiUdemy, SiGoogle } from 'react-icons/si';

interface Certification {
  title: string;
  provider: string;
  platform: string;
  icon: React.ReactNode;
  badgeColor: string;
  gradient: string;
  skills: string[];
  description: string;
}

const certifications: Certification[] = [
  {
    title: 'Google UX Design Professional Certificate',
    provider: 'Google',
    platform: 'Coursera',
    icon: <SiGoogle size={24} className="text-[#4285F4]" />,
    badgeColor: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
    gradient: 'from-blue-600 to-indigo-600',
    skills: [
      'Foundations of UX Design',
      'Empathize, Define, and Ideate',
      'Wireframing & Low-Fidelity Prototyping',
      'High-Fidelity Mockups & Interactive Prototypes',
      'Conducting UX Research & Usability Studies',
    ],
    description:
      'Rigorous industry-recognized program covering end-to-end design thinking, user empathy, accessibility, and high-fidelity interactive prototypes in Figma.',
  },
  {
    title: 'UI/UX Design Specialization',
    provider: 'Design Specialist Curriculum',
    platform: 'Udemy / Coursera',
    icon: <SiCoursera size={24} className="text-[#0056D2]" />,
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    gradient: 'from-cyan-600 to-teal-600',
    skills: [
      'Visual Design & Hierarchy',
      'User Flow & Information Architecture',
      'Micro-interactions & Animations',
      'Design System Components & Variants',
    ],
    description:
      'Specialized coursework focused on advanced typography, color theory, responsive layouts, and user-centered digital product interfaces.',
  },
  {
    title: 'Figma for UI/UX Design',
    provider: 'Design+Code & Udemy',
    platform: 'Udemy',
    icon: <SiUdemy size={24} className="text-[#A435F0]" />,
    badgeColor: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
    gradient: 'from-purple-600 to-pink-600',
    skills: [
      'Auto-Layout Mastery',
      'Variables & Design Tokens',
      'Component Sets & Interactive Variants',
      'Smart Animate & Prototype Transitions',
    ],
    description:
      'Hands-on mastery of Figma modern workflows: building scalable design libraries, atomic component architectures, and responsive prototypes.',
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
                Completed & Certified
              </span>
              <span className="text-brand-muted flex items-center gap-1 group-hover:text-brand-secondary transition-colors">
                Coursera / Udemy <ExternalLink size={12} />
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
