import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Trophy, Eye, Users, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';

const stats = [
  {
    icon: Sparkles,
    value: '16-Screen',
    label: 'Saral Banking App',
    subtext: 'Published design case study on Behance',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Eye,
    value: '8',
    label: 'Indian Languages',
    subtext: 'Voice accessibility & regional support',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: Users,
    value: '10+',
    label: 'Research Participants',
    subtext: 'Interviews & surveys for banking app redesign',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Trophy,
    value: '2',
    label: 'Certifications',
    subtext: 'Design Thinking (Simplilearn) & AI Tools (ATS)',
    gradient: 'from-emerald-400 to-teal-500',
  },
];

const achievementsList = [
  {
    title: 'Published Case Studies on Behance',
    category: 'Design Portfolio & Research',
    description:
      'Published comprehensive case studies including the 16-screen Saral Mobile Banking App with 8 regional Indian languages, voice commands, and amounts written in words, showcasing user empathy, typography, and atomic component systems.',
    highlights: ['Saral 16-Screen Banking App', '8 Indian Regional Languages', 'Design systems with reusable components'],
  },
  {
    title: 'UI/UX Design Internship at Accent Techno Soft',
    category: 'Industry Experience',
    description:
      'Completed internship designing a complete mobile accessories e-commerce website in Coimbatore. Delivered user-friendly layouts, intuitive navigation, and clean visual design adhering to accessibility standards.',
    highlights: ['E-commerce UI workflows', 'Smooth navigation architecture', 'Client-ready UI delivery'],
  },
  {
    title: 'Industry Certifications in Design Thinking & AI Tools',
    category: 'Continuous Professional Learning',
    description:
      'Earned credentials in Design Thinking for Beginners from Simplilearn SkillUp and AI Neural Networks & Tools from Accent Techno Soft (ATS), combining creative empathy with modern AI-accelerated workflows.',
    highlights: ['Simplilearn Design Thinking', 'Accent Techno Soft AI Certification', 'Human-centered methodology'],
  },
];

export function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="achievements">
      <SectionHeading
        title="Achievements & Impact"
        subtitle="Tangible outcomes, community involvement, and recognitions earned through design excellence"
      />

      <div ref={ref}>
        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 text-center relative overflow-hidden group card-accent-top"
            >
              <div
                className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.gradient} opacity-20 flex items-center justify-center group-hover:opacity-30 transition-opacity`}
              >
                <stat.icon size={22} className="text-brand-text" />
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </h3>
              <p className="text-sm font-semibold text-brand-text mb-1">{stat.label}</p>
              <p className="text-xs text-brand-muted">{stat.subtext}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {achievementsList.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={index}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between card-accent-top"
            >
              <div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-primary/10 text-brand-secondary border border-brand-primary/20 inline-block mb-3">
                  {item.category}
                </span>
                <h4 className="font-heading text-lg font-bold text-brand-text mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-1.5">
                {item.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs text-brand-muted">
                    <CheckCircle size={13} className="text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
