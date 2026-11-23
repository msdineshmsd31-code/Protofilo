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
import { SiSketch, SiMiro, SiNotion } from 'react-icons/si';
import { TbBrandAdobeXd, TbBrandAdobePhotoshop, TbBrandAdobeIllustrator } from 'react-icons/tb';
import { FaInvision } from 'react-icons/fa6';

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
      { name: 'Figma', icon: <Figma size={18} />, level: 92 },
      { name: 'Adobe XD', icon: <TbBrandAdobeXd size={18} />, level: 86 },
      { name: 'Sketch (basic)', icon: <SiSketch size={18} />, level: 50 },
      { name: 'Adobe Photoshop', icon: <TbBrandAdobePhotoshop size={18} />, level: 75 },
      { name: 'Adobe Illustrator', icon: <TbBrandAdobeIllustrator size={18} />, level: 70 },
    ],
  },
  {
    title: 'Prototyping & Wireframing',
    color: 'from-brand-primary to-brand-secondary',
    skills: [
      { name: 'High-Fidelity Wireframes', icon: <Layers size={18} />, level: 90 },
      { name: 'Low-Fidelity Wireframes', icon: <Pen size={18} />, level: 92 },
      { name: 'Interactive Prototypes', icon: <Monitor size={18} />, level: 88 },
      { name: 'Design Systems', icon: <Palette size={18} />, level: 85 },
    ],
  },
  {
    title: 'UX Research',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'User Interviews', icon: <Users size={18} />, level: 88 },
      { name: 'Surveys', icon: <Search size={18} />, level: 85 },
      { name: 'Personas', icon: <MessageSquare size={18} />, level: 90 },
      { name: 'User Journey Mapping', icon: <Pen size={18} />, level: 86 },
      { name: 'Usability Testing', icon: <Search size={18} />, level: 84 },
      { name: 'Card Sorting', icon: <Layers size={18} />, level: 75 },
    ],
  },
  {
    title: 'Concepts',
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'Design Thinking', icon: <Lightbulb size={18} />, level: 90 },
      { name: 'Information Architecture', icon: <Layers size={18} />, level: 85 },
      { name: 'Accessibility (WCAG basics)', icon: <Users size={18} />, level: 80 },
      { name: 'Responsive Design', icon: <Monitor size={18} />, level: 88 },
    ],
  },
  {
    title: 'Other Tools',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'Zeplin', icon: <Code size={18} />, level: 75 },
      { name: 'Miro', icon: <SiMiro size={18} />, level: 82 },
      { name: 'HTML/CSS (basic)', icon: <Code size={18} />, level: 60 },
      { name: 'Figjam', icon: <Figma size={18} />, level: 85 },
      { name: 'Google Forms', icon: <Search size={18} />, level: 85 },
    ],
  },
  {
    title: 'Soft Skills & Strengths',
    color: 'from-rose-500 to-pink-500',
    skills: [
      { name: 'User-Centered Empathy', icon: <Brain size={18} />, level: 92 },
      { name: 'English Communication', icon: <MessageSquare size={18} />, level: 85 },
      { name: 'Tamil Communication', icon: <MessageSquare size={18} />, level: 95 },
      { name: 'Collaboration & Adaptability', icon: <Users size={18} />, level: 90 },
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
