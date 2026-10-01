import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { SiLinkedin, SiBehance } from 'react-icons/si';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={e => e.stopPropagation()}
            className="bg-[#111827] border border-brand-primary/30 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative text-brand-text"
          >
            {/* Modal Action Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-brand-bg/80 border-b border-white/10 shrink-0 no-print">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <h3 className="font-heading font-semibold text-sm sm:text-base text-brand-text">
                  Dinesh S — Professional Resume
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-brand-secondary transition-colors"
                >
                  <Printer size={14} />
                  <span>Print / Save as PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-brand-muted hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Resume Document Content */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0D1526]">
              {/* Header */}
              <div className="border-b border-white/10 pb-6">
                <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-1">
                  DINESH S
                </h1>
                <p className="text-brand-secondary font-medium text-lg mb-3">
                  UI/UX Designer & Product Designer
                </p>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-brand-muted">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-brand-primary" /> Chennai, Tamil Nadu, India
                  </span>
                  <span>•</span>
                  <a
                    href="tel:+919092349160"
                    className="flex items-center gap-1 hover:text-brand-secondary transition-colors"
                  >
                    <Phone size={14} className="text-brand-primary" /> +91-9092349160
                  </a>
                  <span>•</span>
                  <a
                    href="mailto:dineshui26design@gmail.com"
                    className="flex items-center gap-1 hover:text-brand-secondary transition-colors"
                  >
                    <Mail size={14} className="text-brand-primary" /> dineshui26design@gmail.com
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs">
                  <a
                    href="https://www.linkedin.com/in/dinesh-s-29568943b"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <SiLinkedin size={12} /> linkedin.com/in/dinesh-s-29568943b
                  </a>
                  <span className="text-white/20">|</span>
                  <a
                    href="https://behance.net/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <SiBehance size={12} /> Portfolio: behance.net/yourusername
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h2 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Professional Summary
                </h2>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Creative and user-focused fresher with a strong foundation in user-centered design,
                  wireframing, and prototyping. Skilled in conducting user research, building design
                  systems, and creating high-fidelity interactive prototypes using Figma and Adobe XD.
                  Passionate about solving real user problems through intuitive, accessible, and
                  visually engaging interfaces. Seeking a UI/UX Designer role to contribute to
                  end-to-end product design.
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Technical Skills
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <p className="font-semibold text-brand-text mb-1">Design & Prototyping Tools:</p>
                    <p className="text-brand-muted">
                      Figma, Adobe XD, Sketch (basic), Adobe Photoshop, Adobe Illustrator
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <p className="font-semibold text-brand-text mb-1">Prototyping & Wireframing:</p>
                    <p className="text-brand-muted">
                      Low & High-Fidelity Wireframes, Interactive Prototypes, Reusable Design Systems
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <p className="font-semibold text-brand-text mb-1">UX Research & Strategy:</p>
                    <p className="text-brand-muted">
                      User Interviews, Surveys, Personas, User Journey Mapping, Usability Testing, Card Sorting
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <p className="font-semibold text-brand-text mb-1">Core Concepts & Collaboration:</p>
                    <p className="text-brand-muted">
                      Design Thinking, Information Architecture, Accessibility (WCAG), HTML/CSS (basic), Zeplin, Miro, InVision, Notion
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Internship Experience
                </h2>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-brand-text">
                        UI/UX Design Intern
                      </h3>
                      <p className="text-xs text-brand-secondary">
                        Accent Techno Soft • Coimbatore, India
                      </p>
                    </div>
                    <span className="text-xs text-brand-muted mt-1 sm:mt-0 font-medium">
                      Jun 2025 — Aug 2025
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-brand-muted pt-2 list-disc list-inside">
                    <li>Designed a mobile accessories e-commerce website using UI/UX design principles.</li>
                    <li>Created user-friendly layouts with a focus on smooth navigation and usability.</li>
                    <li>Applied clean visual design, accessibility, and user-centered design principles.</li>
                    <li>Developed UI screens to improve the overall user experience and engagement.</li>
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Academic Projects & Case Studies
                </h2>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h3 className="font-bold text-sm text-brand-text">
                        Digital Marketer Discovery App (Case Study)
                      </h3>
                      <span className="text-xs text-brand-accent">Tools: Figma, Miro, Maze</span>
                    </div>
                    <ul className="space-y-1 text-xs text-brand-muted list-disc list-inside">
                      <li>Conducted user interviews and surveys with 20+ participants to identify pain points in an existing banking app.</li>
                      <li>Created user personas, journey maps, and information architecture to guide the redesign.</li>
                      <li>Designed low-fidelity wireframes and high-fidelity interactive prototypes in Figma.</li>
                      <li>Ran usability testing sessions and iterated on designs, improving task completion rate by 35%.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h3 className="font-bold text-sm text-brand-text">
                        E-Commerce Website UX Case Study
                      </h3>
                      <span className="text-xs text-brand-accent">Tools: Adobe XD, Figma, Google Forms</span>
                    </div>
                    <ul className="space-y-1 text-xs text-brand-muted list-disc list-inside">
                      <li>Redesigned the checkout flow of an e-commerce website to help reduce cart abandonment.</li>
                      <li>Built a reusable design system with consistent components across 15+ screens.</li>
                      <li>Created clickable prototypes and gathered feedback through moderated usability tests.</li>
                      <li>Documented the process and outcomes in a detailed case study published on Behance.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Education
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <p className="font-bold text-brand-text">B.Sc Computer Science (2023 — 2026)</p>
                    <p className="text-brand-secondary">Muthayammal College of Arts and Science, Namakkal / Periyar University</p>
                    <p className="text-brand-muted mt-1">CGPA: 6.6 / 10</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <p className="font-bold text-brand-text">Higher Secondary Certificate (12th Grade) (2020 — 2022)</p>
                    <p className="text-brand-secondary">Government Boys Higher Secondary School, Sendhamangalam</p>
                    <p className="text-brand-muted mt-1">Percentage: 55%</p>
                  </div>
                </div>
              </div>

              {/* Certifications & Additional */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h2 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Certifications
                  </h2>
                  <ul className="space-y-1 text-xs text-brand-muted list-disc list-inside">
                    <li>Google UX Design Professional Certificate — Coursera</li>
                    <li>UI/UX Design Specialization — Udemy / Coursera</li>
                    <li>Figma for UI/UX Design — Design+Code / Udemy</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Additional Info
                  </h2>
                  <p className="text-xs text-brand-muted">
                    <strong className="text-brand-text">Languages:</strong> English, Tamil<br />
                    <strong className="text-brand-text">Willing to Relocate:</strong> Yes<br />
                    <strong className="text-brand-text">Availability:</strong> Immediate<br />
                    <strong className="text-brand-text">Achievements:</strong> Hackathon Finalist, 1,000+ Behance views
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
