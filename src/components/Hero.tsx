import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  Figma,
  Palette,
  Pen,
  Layers,
  Monitor,
  Sparkles,
  ArrowDown,
  Mail,
  Download,
} from 'lucide-react';
import { fadeUp, staggerContainer } from '../lib/animations';

const floatingIcons = [
  { Icon: Figma, x: '8%', y: '20%', delay: 0, size: 28 },
  { Icon: Palette, x: '85%', y: '15%', delay: 0.5, size: 24 },
  { Icon: Pen, x: '12%', y: '70%', delay: 1.2, size: 22 },
  { Icon: Layers, x: '90%', y: '65%', delay: 0.8, size: 26 },
  { Icon: Monitor, x: '75%', y: '80%', delay: 1.5, size: 24 },
  { Icon: Sparkles, x: '20%', y: '45%', delay: 0.3, size: 20 },
];

interface HeroProps {
  onOpenResume?: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-primary/[0.07] blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-accent/[0.06] blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-secondary/[0.04] blur-[140px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-brand-primary/20 hidden md:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + delay, duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon size={size} />
          </motion.div>
        </motion.div>
      ))}

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-brand-primary/10 text-brand-secondary border border-brand-primary/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          variants={fadeUp}
          className="text-brand-muted text-lg sm:text-xl mb-3 font-body"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
        >
          <span className="gradient-text">Dinesh S</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          variants={fadeUp}
          className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold mb-6 h-10 flex items-center justify-center"
        >
          <TypeAnimation
            sequence={[
              'UI/UX Designer',
              2500,
              'Product Designer',
              2000,
              'Design Thinker',
              2000,
              'Figma Expert',
              2000,
              'User Researcher',
              2000,
              'Prototyping Specialist',
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="text-brand-secondary"
          />
        </motion.div>

        {/* Summary */}
        <motion.p
          variants={fadeUp}
          className="text-brand-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Creative UI/UX Designer crafting intuitive, accessible, and visually stunning
          digital experiences. Passionate about solving real user problems through
          user-centered design and interactive prototyping.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-glow group px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-primary to-blue-600 text-white shadow-lg shadow-brand-primary/25 hover:shadow-glow-blue hover:-translate-y-0.5 transition-all duration-300"
          >
            Hire Me
            <Sparkles size={16} className="inline ml-2 group-hover:rotate-12 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group px-7 py-3.5 rounded-xl font-semibold text-sm border border-brand-primary/30 text-brand-text hover:border-brand-secondary hover:text-brand-secondary hover:bg-brand-primary/5 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Mail size={16} className="inline mr-2" />
            Contact Me
          </a>
          <button
            onClick={onOpenResume}
            className="group px-7 py-3.5 rounded-xl font-semibold text-sm border border-brand-primary/30 text-brand-secondary hover:bg-brand-primary/10 hover:border-brand-secondary hover:-translate-y-0.5 transition-all duration-300 flex items-center"
          >
            <Download size={16} className="inline mr-2" />
            Resume
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16"
        >
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-brand-muted/50 hover:text-brand-secondary transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowDown size={18} />
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
