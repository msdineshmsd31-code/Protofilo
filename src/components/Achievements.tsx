import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Trophy, Eye, Users, Sparkles, TrendingUp, CheckCircle } from 'lucide-react';

const stats = [
  {
    icon: Eye,
    value: '1,000+',
    label: 'Case Study Views',
    subtext: 'Combined readership across Behance & Medium',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Trophy,
    value: 'Finalist',
    label: 'Design Hackathon',
    subtext: 'College-level UI/UX competition solution',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    icon: Users,
    value: '20+',
    label: 'User Research Interviews',
    subtext: 'Conducted for Digital Marketer Case Study',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: TrendingUp,
    value: '+35%',
    label: 'Task Completion Boost',
    subtext: 'Validated through Maze usability testing',
    gradient: 'from-emerald-400 to-teal-500',
  },
];

const achievementsList = [
  {
    title: 'Published UX Case Studies on Behance & Medium',
    category: 'Thought Leadership & Portfolio',
    description:
      'Authored two comprehensive end-to-end UX case studies detailing user empathy, personas, wireframes, component design systems, and moderated usability testing. Gathered over 1,000+ views and community appreciation.',
    highlights: ['15+ screen design systems', 'Maze testing telemetry', 'Interactive Figma prototypes'],
  },
  {
    title: 'Finalist / Winner — College-Level UI/UX Design Hackathon',
    category: 'Rapid Prototyping & Problem Solving',
    description:
      'Competed in an intense timed design sprint solving real-world user interface challenges. Conceptualized, wireframed, and presented an accessible prototype judged on usability, visual hierarchy, and feasibility.',
    highlights: ['Time-constrained prototyping', 'User journey optimization', 'Jury recognition'],
  },
  {
    title: 'Active Core Member — College Design & HCI Club',
    category: 'Community & Peer Mentorship',
    description:
      'Collaborates with fellow computer science peers and design enthusiasts to organize UI/UX workshops, Figma tips sessions, and design critique circles at Muthayammal College.',
    highlights: ['Design critique sessions', 'Design thinking advocacy', 'Cross-functional collaboration'],
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
