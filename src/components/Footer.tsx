import { ArrowUp, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { SiLinkedin, SiBehance } from 'react-icons/si';

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-brand-bg border-t border-brand-border pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center font-heading font-bold text-base text-white">
                D
              </div>
              <span className="font-heading font-semibold text-lg text-brand-text">
                Dinesh S<span className="text-brand-primary">.</span>
              </span>
            </a>
            <p className="text-brand-muted text-sm max-w-sm leading-relaxed">
              Creative and user-focused UI/UX Designer dedicated to crafting accessible,
              intuitive, and impactful interfaces. Open for full-time opportunities and internships.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/dinesh-s-29568943b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted hover:text-blue-400 hover:border-blue-400/40 transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin size={16} />
              </a>
              <a
                href="https://behance.net/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted hover:text-cyan-400 hover:border-cyan-400/40 transition-colors"
                aria-label="Behance"
              >
                <SiBehance size={16} />
              </a>
              <a
                href="mailto:dineshui26design@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted hover:text-brand-secondary hover:border-brand-secondary/40 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+919092349160"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-muted hover:text-emerald-400 hover:border-emerald-400/40 transition-colors"
                aria-label="Phone"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-brand-text mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              {footerLinks.slice(0, 4).map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-brand-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Sections & Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-brand-text mb-4 uppercase tracking-wider">
              Sections
            </h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              {footerLinks.slice(4).map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-brand-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <p>
            © {new Date().getFullYear()} Dinesh S. All rights reserved. Designed with user empathy & precision.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-primary/40 text-brand-muted hover:text-brand-text transition-all duration-200 group"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
