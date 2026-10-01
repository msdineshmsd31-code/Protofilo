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
}

const projects: Project[] = [
  {
    title: 'Digital Marketer Discovery App',
    subtitle: 'Banking App Redesign — UX Case Study',
    tools: ['Figma', 'Miro', 'Maze'],
    overview:
      'Comprehensive UX case study focused on redesigning an existing banking application to improve usability and task completion rates.',
    problem:
      'Users faced significant pain points navigating the existing banking app, leading to frustration and low task completion rates.',
    solution:
      'Conducted extensive user research with 20+ participants, created data-driven personas and journey maps, then designed high-fidelity interactive prototypes informed by real user insights.',
    features: [
      'User interviews & surveys with 20+ participants',
      'User personas & journey maps',
      'Information architecture redesign',
      'Low-fidelity wireframes',
      'High-fidelity interactive prototypes in Figma',
      'Usability testing sessions with iterative design',
    ],
    outcome: 'Improved task completion rate by 35% through iterative design and user testing.',
    gradient: 'from-blue-600 to-cyan-500',
    accentColor: 'blue',
  },
  {
    title: 'E-Commerce Website UX',
    subtitle: 'Checkout Flow Redesign — Case Study',
    tools: ['Adobe XD', 'Figma', 'Google Forms'],
    overview:
      'End-to-end UX case study focused on redesigning the checkout flow of an e-commerce website to reduce cart abandonment rates.',
    problem:
      'The existing checkout flow was causing high cart abandonment rates due to poor UX, confusing navigation, and lack of visual consistency.',
    solution:
      'Built a comprehensive reusable design system and redesigned the entire checkout flow with consistent components, validated through moderated usability tests.',
    features: [
      'Checkout flow analysis & redesign',
      'Reusable design system (15+ screens)',
      'Consistent component library',
      'Clickable prototypes',
      'Moderated usability testing',
      'Detailed case study published on Behance',
    ],
    outcome:
      'Reduced cart abandonment through streamlined checkout UX, documented in a detailed Behance case study.',
    gradient: 'from-purple-600 to-pink-500',
    accentColor: 'purple',
  },
  {
    title: 'E-Commerce Website Design',
    subtitle: 'Mobile Accessories Store — Internship Project',
    tools: ['Figma', 'Adobe XD'],
    overview:
      'Designed a complete mobile accessories e-commerce website during internship at Accent Techno Soft, applying professional UI/UX design principles.',
    problem:
      'The client needed a modern, user-friendly e-commerce website for mobile accessories with smooth navigation and excellent usability.',
    solution:
      'Applied clean visual design, accessibility standards, and user-centered design principles to create user-friendly layouts with smooth navigation.',
    features: [
      'User-friendly product layouts',
      'Smooth navigation & usability focus',
      'Clean visual design language',
      'Accessibility-first approach',
      'Multiple UI screen designs',
      'User experience optimization',
    ],
    outcome:
      'Delivered production-ready UI screens that improved overall user experience and engagement for the client.',
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
