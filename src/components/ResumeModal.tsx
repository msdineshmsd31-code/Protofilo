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
import { SiBehance } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

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
              <div className="border-b border-white/10 pb-6 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div>
                    <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      DINESH S
                    </h1>
                    <p className="text-brand-secondary font-medium text-lg mt-0.5">
                      UI/UX Designer
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-3 text-xs sm:text-sm text-brand-muted mt-3">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-brand-primary" /> Chennai, Tamil Nadu, India
                  </span>
                  <span>|</span>
                  <a
                    href="tel:+919092349160"
                    className="flex items-center gap-1 hover:text-brand-secondary transition-colors"
                  >
                    <Phone size={14} className="text-brand-primary" /> +91-9092349160
                  </a>
                  <span>|</span>
                  <a
                    href="mailto:msdineshmsd31@gmail.com"
                    className="flex items-center gap-1 hover:text-brand-secondary transition-colors"
                  >
                    <Mail size={14} className="text-brand-primary" /> msdineshmsd31@gmail.com
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-3 text-xs">
                  <a
                    href="https://www.linkedin.com/in/dinesh-s29568943b"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <FaLinkedinIn size={12} /> linkedin.com/in/dinesh-s29568943b
                  </a>
                  <span className="text-white/20">|</span>
                  <a
                    href="https://www.behance.net/dineshdinesh87"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <SiBehance size={12} /> Portfolio: behance.net/dineshdinesh87
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
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="font-semibold text-brand-text">• Design Tools: </span>
                    <span className="text-brand-muted">
                      Figma, Adobe XD, Sketch (basic), Adobe Photoshop, Adobe Illustrator
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="font-semibold text-brand-text">• Prototyping & Wireframing: </span>
                    <span className="text-brand-muted">
                      Low & High-Fidelity Wireframes, Interactive Prototypes, Design Systems
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="font-semibold text-brand-text">• UX Research: </span>
                    <span className="text-brand-muted">
                      User Interviews, Surveys, Personas, User Journey Mapping, Usability Testing, Card Sorting
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="font-semibold text-brand-text">• Concepts: </span>
                    <span className="text-brand-muted">
                      Design Thinking, Information Architecture, Accessibility (WCAG basics), Responsive Design
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <span className="font-semibold text-brand-text">• Other Tools: </span>
                    <span className="text-brand-muted">HTML/CSS (basic), Zeplin, Miro</span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Education
                </h2>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-brand-text">Bachelor of Science (Computer Science)</h3>
                      <p className="text-brand-secondary text-xs sm:text-sm mt-0.5">
                        Muthayammal College of Arts and Science, Namakkal / Periyar University
                      </p>
                      <p className="text-brand-muted text-xs mt-1">CGPA: 6.6 / 10</p>
                    </div>
                    <span className="text-brand-muted text-xs font-semibold sm:text-right shrink-0">
                      2023 — 2026
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-brand-text">Higher Secondary Certificate (12th Grade)</h3>
                      <p className="text-brand-secondary text-xs sm:text-sm mt-0.5">
                        Goverment Boys Higher Secondary School, Sendhamangalam
                      </p>
                      <p className="text-brand-muted text-xs mt-1">Percentage: 55%</p>
                    </div>
                    <span className="text-brand-muted text-xs font-semibold sm:text-right shrink-0">
                      2020 — 2022
                    </span>
                  </div>
                </div>
              </div>

              {/* Academic Projects */}
              <div>
                <h2 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Academic Projects
                </h2>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-bold text-sm sm:text-base text-brand-text">
                        Digital Marketer Discovery App (Case Study)
                      </h3>
                      <span className="text-xs text-brand-accent font-medium mt-1 sm:mt-0">
                        Tools: Figma, Figjam, Google Forms
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-brand-muted list-disc list-inside">
                      <li>Conducted user interviews and surveys with 10+ participants to identify pain points in an existing banking app.</li>
                      <li>Created user personas, journey maps, and information architecture to guide the redesign.</li>
                      <li>Designed low-fidelity wireframes and high-fidelity interactive prototypes in Figma.</li>
                      <li>Performed usability testing and refined the design based on user feedback to enhance the overall user experience.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-bold text-sm sm:text-base text-brand-text">
                        Saral-Mobile Banking App
                      </h3>
                      <span className="text-xs text-brand-accent font-medium mt-1 sm:mt-0">
                        Tools: Figma
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-brand-muted list-disc list-inside">
                      <li>Redesigned a 16-screen mobile banking app to make digital banking easier for first-time users.</li>
                      <li>Built a design system with consistent colours, typography and reusable components.</li>
                      <li>Added 8 Indian languages, voice commands and amounts shown in words to improve accessibility.</li>
                      <li>Documented the design process and final screens in a case study published on Behance.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Internship */}
              <div>
                <h2 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Internship
                </h2>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-brand-text">
                        UI/UX Design Intern (Accent Techno Soft , Coimbatore)
                      </h3>
                    </div>
                    <span className="text-xs text-brand-muted mt-1 sm:mt-0 font-medium">
                      May 2025 — June 2025
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

              {/* Certifications & Additional Information */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h2 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Certifications
                  </h2>
                  <ul className="space-y-1.5 text-xs text-brand-muted list-disc list-inside">
                    <li><strong className="text-brand-text">Design Thinking for Beginners</strong> – Simplilearn SkillUp</li>
                    <li><strong className="text-brand-text">AI Neural Networks & Tools</strong> – Accent Techno Soft (ATS)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Additional Information
                  </h2>
                  <div className="space-y-2 text-xs text-brand-muted">
                    <p>
                      <strong className="text-brand-text">Languages Known:</strong> English, Tamil<br />
                      <strong className="text-brand-text">Willing to Relocate:</strong> Yes<br />
                      <strong className="text-brand-text">Availability:</strong> Immediate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
