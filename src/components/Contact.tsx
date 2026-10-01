import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
import { fadeUp, staggerContainer } from '../lib/animations';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { SiBehance, SiLinkedin } from 'react-icons/si';

export function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        title="Get In Touch"
        subtitle="Ready to discuss an upcoming product design role, design system initiative, or creative collaboration"
      />

      <div ref={ref} className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Contact Info (2 columns) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="lg:col-span-2 space-y-4"
        >
          {/* Card: Email */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            className="glass-card rounded-2xl p-5 flex items-start justify-between group card-accent-top"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-brand-muted font-medium">Email Me</p>
                <a
                  href="mailto:dineshui26design@gmail.com"
                  className="text-sm font-semibold text-brand-text hover:text-brand-secondary transition-colors"
                >
                  dineshui26design@gmail.com
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy('dineshui26design@gmail.com', 'email')}
              className="p-2 rounded-lg hover:bg-white/10 text-brand-muted hover:text-brand-text transition-colors"
              title="Copy Email"
            >
              {copiedType === 'email' ? (
                <Check size={16} className="text-emerald-400" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </motion.div>

          {/* Card: Phone */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -3 }}
            className="glass-card rounded-2xl p-5 flex items-start justify-between group card-accent-top"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-brand-muted font-medium">Call / WhatsApp</p>
                <a
                  href="tel:+919092349160"
                  className="text-sm font-semibold text-brand-text hover:text-emerald-400 transition-colors"
                >
                  +91-9092349160
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy('+919092349160', 'phone')}
              className="p-2 rounded-lg hover:bg-white/10 text-brand-muted hover:text-brand-text transition-colors"
              title="Copy Phone"
            >
              {copiedType === 'phone' ? (
                <Check size={16} className="text-emerald-400" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </motion.div>

          {/* Card: Location */}
          <motion.div variants={fadeUp} className="glass-card rounded-2xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-brand-muted font-medium">Location</p>
              <p className="text-sm font-semibold text-brand-text">Chennai, Tamil Nadu, India</p>
              <p className="text-xs text-brand-muted mt-0.5">Willing to relocate • Open to remote & hybrid</p>
            </div>
          </motion.div>

          {/* Social Profiles */}
          <motion.div variants={fadeUp} className="glass-card rounded-2xl p-5">
            <p className="text-xs uppercase tracking-wider text-brand-muted font-medium mb-3">
              Professional Profiles
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.linkedin.com/in/dinesh-s-29568943b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group"
              >
                <SiLinkedin size={18} className="text-[#0A66C2]" />
                <span className="text-xs font-semibold text-brand-text group-hover:text-blue-400">
                  LinkedIn
                </span>
                <ExternalLink size={12} className="ml-auto text-brand-muted" />
              </a>

              <a
                href="https://behance.net/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all group"
              >
                <SiBehance size={18} className="text-[#1769FF]" />
                <span className="text-xs font-semibold text-brand-text group-hover:text-cyan-400">
                  Behance
                </span>
                <ExternalLink size={12} className="ml-auto text-brand-muted" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form (3 columns) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="lg:col-span-3 glass-card rounded-2xl p-6 md:p-8 relative"
        >
          <h3 className="font-heading text-xl font-bold text-brand-text mb-2">
            Send Me a Message
          </h3>
          <p className="text-sm text-brand-muted mb-6">
            Fill out the form below and I'll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-brand-muted mb-1.5 uppercase tracking-wider">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-brand-text placeholder-brand-muted/50 text-sm focus:outline-none focus:border-brand-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-brand-muted mb-1.5 uppercase tracking-wider">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@company.com"
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-brand-text placeholder-brand-muted/50 text-sm focus:outline-none focus:border-brand-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-brand-muted mb-1.5 uppercase tracking-wider">
                Subject *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. UI/UX Designer Opportunity / Freelance Project"
                value={formState.subject}
                onChange={e => setFormState({ ...formState, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-brand-text placeholder-brand-muted/50 text-sm focus:outline-none focus:border-brand-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-brand-muted mb-1.5 uppercase tracking-wider">
                Message *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about your team, role, or design requirements..."
                value={formState.message}
                onChange={e => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-brand-text placeholder-brand-muted/50 text-sm focus:outline-none focus:border-brand-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-glow w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-primary to-blue-600 text-white shadow-lg shadow-brand-primary/25 hover:shadow-glow-blue transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={16} />
                </>
              )}
            </button>
          </form>

          {/* Success Banner */}
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3"
              >
                <Sparkles size={18} className="shrink-0" />
                <span>Thank you! Your message has been sent successfully. I'll get back to you soon.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
