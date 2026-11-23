import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
import { fadeUp, staggerContainer } from '../lib/animations';
import {
  ExternalLink,
  Github,
  ChevronRight,
  Users,
  Target,
  Lightbulb,
  CheckCircle2,
  X,
} from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  tools: string[];
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  outcome: string;
  gradient: string;
  accentColor: string;
  behanceUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Digital Marketer Discovery App',
    subtitle: 'Banking App Redesign — Case Study',
    tools: ['Figma', 'Figjam', 'Google Forms'],
    overview:
      'In-depth academic UX case study focused on uncovering pain points in an existing banking application and designing user-centric solutions to improve task completion and usability.',
    problem:
      'Users experienced significant friction and cognitive overload navigating the existing banking app, resulting in frustration and drop-offs during routine transactions.',
    solution:
      'Conducted user interviews and surveys with 10+ participants to identify core friction points. Formulated personas, journey maps, and information architecture, followed by low-fidelity wireframes and interactive Figma prototypes.',
    features: [
      'Conducted user interviews & surveys with 10+ participants to identify pain points',
      'Created data-driven user personas, journey maps & clear information architecture',
      'Designed low-fidelity wireframes and high-fidelity interactive prototypes in Figma',
      'Conducted usability testing sessions and refined the design based on user feedback',
    ],
    outcome:
      'Substantially reduced user confusion and improved navigation clarity through iterative user feedback and testing.',
    gradient: 'from-blue-600 to-cyan-500',
    accentColor: 'blue',
  },
  {
    title: 'Saral-Mobile Banking App',
    subtitle: '16-Screen Banking App for First-Time Users — Case Study',
    tools: ['Figma'],
    overview:
      'Comprehensive 16-screen mobile banking app redesign thoughtfully engineered to eliminate barriers for first-time digital banking users, featuring extensive accessibility and regional language support.',
    problem:
      'First-time digital banking users in India frequently struggle with complex interfaces, language barriers, English financial terminology, and lack of confidence in numeric entries.',
    solution:
      'Built a complete design system with cohesive colors, typography, and reusable components. Added multi-language support across 8 Indian languages, voice commands, and amounts written in words to guarantee clarity and trust.',
    features: [
      'Redesigned 16 comprehensive mobile banking screens for first-time digital users',
      'Engineered an atomic design system with consistent colours, typography & reusable components',
      'Added support for 8 Indian regional languages & integrated voice navigation commands',
      'Displayed monetary amounts in words alongside numbers to maximize accessibility and trust',
      'Documented the full end-to-end design process in a published Behance case study',
    ],
    outcome:
      'Published comprehensive case study on Behance, presenting an inclusive and empathetic mobile banking experience.',
    gradient: 'from-purple-600 to-pink-500',
    accentColor: 'purple',
    behanceUrl: 'https://www.behance.net/dineshdinesh87',
  },
  {
    title: 'Mobile Accessories E-Commerce',
    subtitle: 'Store Redesign — Internship Project (Accent Techno Soft)',
    tools: ['Figma', 'Adobe XD'],
    overview:
      'Designed a modern mobile accessories e-commerce website during UI/UX design internship at Accent Techno Soft, applying industry-standard user-centered design practices.',
    problem:
      'The client required a contemporary, accessible, and high-converting storefront layout that allowed users to quickly find compatible accessories for their devices.',
    solution:
      'Created user-friendly layouts prioritizing smooth navigation, visual hierarchy, and usability. Applied clean design aesthetics and accessibility (WCAG) guidelines across all product discovery and checkout screens.',
    features: [
      'Designed mobile accessories e-commerce layouts focused on intuitive browsing',
      'Created smooth navigation paths and streamlined filtering by device model',
      'Applied clean visual design, accessibility (WCAG basics), and user-centered design principles',
      'Developed multiple production-ready UI screens to elevate user engagement',
    ],
    outcome:
      'Delivered polished UI screens that enhanced user experience and browsing efficiency for client handover.',
    gradient: 'from-emerald-600 to-teal-500',
    accentColor: 'emerald',
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={e => e.stopPropagation()}
        className="glass-card rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 border-brand-primary/20"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="font-heading text-2xl font-bold gradient-text mb-1">
              {project.title}
            </h3>
            <p className="text-brand-muted text-sm">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 text-brand-muted hover:text-brand-text transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map(tool => (
            <span
              key={tool}
              className="px-3 py-1 text-xs font-medium rounded-full bg-brand-primary/10 text-brand-secondary border border-brand-primary/20"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={16} className="text-brand-secondary" />
              <h4 className="font-heading font-semibold text-brand-text">Overview</h4>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed">{project.overview}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target size={16} className="text-rose-400" />
              <h4 className="font-heading font-semibold text-brand-text">Problem Statement</h4>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <h4 className="font-heading font-semibold text-brand-text">Solution</h4>
            </div>
            <p className="text-brand-muted text-sm leading-relaxed">{project.solution}</p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-brand-text mb-3">Key Features</h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-brand-muted">
                  <ChevronRight size={14} className="text-brand-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-xl p-4 bg-emerald-500/5 border-emerald-500/20">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <h4 className="font-heading font-semibold text-emerald-400 text-sm">Outcome</h4>
            </div>
            <p className="text-brand-muted text-sm">{project.outcome}</p>
          </div>

          {project.behanceUrl && (
            <div className="pt-2">
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium text-xs hover:shadow-glow-blue transition-all"
              >
                <span>View Case Study on Behance</span>
                <ExternalLink size={14} />
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Featured Projects"
        subtitle="Real-world case studies and design work showcasing my end-to-end design process"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            variants={fadeUp}
            custom={i}
            whileHover={{ y: -6 }}
            className="glass-card rounded-2xl overflow-hidden group cursor-pointer card-accent-top"
            onClick={() => setSelectedProject(project)}
          >
            {/* Gradient header */}
            <div
              className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-5 right-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map(tool => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/20 text-white backdrop-blur-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                <span className="px-4 py-2 rounded-lg bg-white/20 text-white text-sm font-medium backdrop-blur-sm border border-white/20">
                  View Details →
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-heading text-lg font-semibold text-brand-text mb-1 group-hover:text-brand-secondary transition-colors">
                {project.title}
              </h3>
              <p className="text-brand-muted text-xs mb-3">{project.subtitle}</p>
              <p className="text-brand-muted text-sm leading-relaxed line-clamp-2">
                {project.overview}
              </p>
              <div className="mt-4 flex items-center text-brand-primary text-sm font-medium group-hover:gap-2 transition-all">
                View Case Study <ChevronRight size={16} className="ml-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
