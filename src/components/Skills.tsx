import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
import { fadeUp, staggerContainer } from '../lib/animations';
import {
  Figma,
  Pen,
  Search,
  Lightbulb,
  Code,
  Layers,
  Palette,
  Monitor,
  Users,
  MessageSquare,
  Brain,
  Clock,
} from 'lucide-react';
import { SiAdobexd, SiSketch, SiAdobephotoshop, SiAdobeillustrator, SiMiro, SiInvision, SiNotion } from 'react-icons/si';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  level: number;
}

interface SkillCategory {
  title: string;
  color: string;
  skills: SkillItem[];
}

const categories: SkillCategory[] = [
  {
    title: 'Design Tools',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Figma', icon: <Figma size={18} />, level: 90 },
      { name: 'Adobe XD', icon: <SiAdobexd size={18} />, level: 85 },
      { name: 'Sketch', icon: <SiSketch size={18} />, level: 45 },
      { name: 'Photoshop', icon: <SiAdobephotoshop size={18} />, level: 70 },
      { name: 'Illustrator', icon: <SiAdobeillustrator size={18} />, level: 65 },
    ],
  },
  {
    title: 'Prototyping & Wireframing',
    color: 'from-brand-primary to-brand-secondary',
    skills: [
      { name: 'Hi-Fi Prototypes', icon: <Layers size={18} />, level: 88 },
      { name: 'Lo-Fi Wireframes', icon: <Pen size={18} />, level: 90 },
      { name: 'Interactive Prototypes', icon: <Monitor size={18} />, level: 85 },
      { name: 'Design Systems', icon: <Palette size={18} />, level: 80 },
    ],
  },
  {
    title: 'UX Research',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'User Interviews', icon: <Users size={18} />, level: 85 },
      { name: 'Usability Testing', icon: <Search size={18} />, level: 82 },
      { name: 'User Personas', icon: <MessageSquare size={18} />, level: 88 },
      { name: 'Journey Mapping', icon: <Pen size={18} />, level: 85 },
      { name: 'Card Sorting', icon: <Layers size={18} />, level: 72 },
      { name: 'Surveys', icon: <Search size={18} />, level: 80 },
    ],
  },
  {
    title: 'Design Concepts',
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'Design Thinking', icon: <Lightbulb size={18} />, level: 88 },
      { name: 'Info Architecture', icon: <Layers size={18} />, level: 82 },
      { name: 'Accessibility (WCAG)', icon: <Users size={18} />, level: 70 },
      { name: 'Responsive Design', icon: <Monitor size={18} />, level: 85 },
    ],
  },
  {
    title: 'Collaboration Tools',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Zeplin', icon: <Code size={18} />, level: 72 },
      { name: 'Miro', icon: <SiMiro size={18} />, level: 78 },
      { name: 'InVision', icon: <SiInvision size={18} />, level: 68 },
      { name: 'Notion', icon: <SiNotion size={18} />, level: 75 },
      { name: 'HTML/CSS', icon: <Code size={18} />, level: 50 },
    ],
  },
  {
    title: 'Soft Skills',
    color: 'from-rose-500 to-pink-500',
    skills: [
      { name: 'Problem Solving', icon: <Brain size={18} />, level: 88 },
      { name: 'Communication', icon: <MessageSquare size={18} />, level: 85 },
      { name: 'Team Collaboration', icon: <Users size={18} />, level: 90 },
      { name: 'Time Management', icon: <Clock size={18} />, level: 82 },
    ],
  },
];

export function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="skills">
      <SectionHeading
        title="Skills & Expertise"
        subtitle="A comprehensive toolkit for designing exceptional digital experiences"
      />

      <div ref={ref}>
        {/* Category tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? 'bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-glow-blue'
                  : 'bg-white/5 text-brand-muted hover:text-brand-text hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {categories[activeTab].skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card rounded-xl p-5 group relative overflow-hidden card-accent-top"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary/20 transition-colors">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-sm text-brand-text">{skill.name}</span>
                </div>
                <span className="text-xs font-semibold text-brand-secondary">{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`h-full rounded-full bg-gradient-to-r ${categories[activeTab].color}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
