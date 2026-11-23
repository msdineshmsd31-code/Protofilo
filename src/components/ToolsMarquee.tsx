import { motion } from 'framer-motion';
import {
  Figma,
  Layers,
  Palette,
  Layout,
  Code,
  Globe,
  Sliders,
  Sparkles,
} from 'lucide-react';
import {
  SiSketch,
  SiMiro,
  SiNotion,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import {
  TbBrandAdobeXd,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
} from 'react-icons/tb';
import { FaInvision } from 'react-icons/fa6';

interface Tool {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const tools: Tool[] = [
  { name: 'Figma', category: 'UI/UX Design', icon: <Figma size={22} className="text-[#F24E1E]" /> },
  { name: 'Adobe XD', category: 'Prototyping', icon: <TbBrandAdobeXd size={22} className="text-[#FF61F6]" /> },
  { name: 'Photoshop', category: 'Asset Prep', icon: <TbBrandAdobePhotoshop size={22} className="text-[#31A8FF]" /> },
  { name: 'Illustrator', category: 'Vectors & SVGs', icon: <TbBrandAdobeIllustrator size={22} className="text-[#FF9A00]" /> },
  { name: 'Sketch (basic)', category: 'Interface Design', icon: <SiSketch size={22} className="text-[#F7B500]" /> },
  { name: 'Miro', category: 'User Journeys', icon: <SiMiro size={22} className="text-[#FFD02F]" /> },
  { name: 'Zeplin', category: 'Dev Handoff', icon: <Layers size={22} className="text-[#FBAE00]" /> },
  { name: 'Figjam', category: 'UX Brainstorming', icon: <Figma size={22} className="text-[#A259FF]" /> },
  { name: 'HTML5', category: 'Semantic Web', icon: <SiHtml5 size={22} className="text-[#E34F26]" /> },
  { name: 'CSS3', category: 'Modern Styling', icon: <SiCss size={22} className="text-[#1572B6]" /> },
  { name: 'Notion', category: 'Design Docs', icon: <SiNotion size={22} className="text-white" /> },
  { name: 'GitHub', category: 'Collaboration', icon: <SiGithub size={22} className="text-white" /> },
];

export function ToolsMarquee() {
  return (
    <section className="py-16 relative overflow-hidden bg-brand-bg/50 border-y border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-brand-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 text-center mb-8">
        <p className="text-xs uppercase tracking-widest text-brand-secondary font-semibold">
          Ecosystem & Software Stack
        </p>
        <h3 className="font-heading text-2xl font-bold text-brand-text mt-1">
          Tools I Work With Daily
        </h3>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative flex overflow-x-hidden">
        {/* Left & Right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-brand-bg to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none" />

        <div className="flex animate-[marquee_28s_linear_infinite] gap-4 shrink-0">
          {[...tools, ...tools].map((tool, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-brand-primary/40 hover:bg-white/[0.06] transition-all duration-200 shrink-0 group"
            >
              <div className="w-8 h-8 rounded-lg bg-black/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-brand-text">{tool.name}</p>
                <p className="text-[10px] text-brand-muted">{tool.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
