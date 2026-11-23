import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
import { fadeUp, staggerContainer } from '../lib/animations';
import { GraduationCap, Briefcase, Award, BookOpen, Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  location: string;
  type: 'education' | 'experience' | 'achievement';
  details: string[];
  metrics?: string;
}

const timelineData: TimelineItem[] = [
  {
    year: '2023 — 2026 (Present)',
    title: 'Bachelor of Science (Computer Science)',
    organization: 'Muthayammal College of Arts and Science / Periyar University',
    location: 'Namakkal, Tamil Nadu',
    type: 'education',
    details: [
      'Pursuing B.Sc in Computer Science with a strong foundation in HCI and computing principles',
      'Maintaining consistent academic performance with CGPA: 6.6 / 10',
      'Applying computer science and web fundamentals to intuitive UI/UX design and accessibility',
    ],
    metrics: 'CGPA: 6.6 / 10',
  },
  {
    year: 'May 2025 — Jun 2025',
    title: 'UI/UX Design Intern',
    organization: 'Accent Techno Soft',
    location: 'Coimbatore, Tamil Nadu',
    type: 'experience',
    details: [
      'Designed a mobile accessories e-commerce website using UI/UX design principles',
      'Created user-friendly layouts with a focus on smooth navigation and usability',
      'Applied clean visual design, accessibility (WCAG), and user-centered design principles',
      'Developed UI screens to improve the overall user experience and engagement',
    ],
    metrics: 'Production Handoff Delivered',
  },
  {
    year: '2024 — 2025',
    title: 'Certifications & Behance Design Case Studies',
    organization: 'Simplilearn SkillUp & Accent Techno Soft (ATS) • Behance',
    location: 'Online Verified',
    type: 'achievement',
    details: [
      'Certified in Design Thinking for Beginners by Simplilearn SkillUp',
      'Certified in AI Neural Networks & Tools by Accent Techno Soft (ATS)',
      'Published Saral-Mobile Banking App (16 screens, 8 Indian languages, voice commands) on Behance',
    ],
    metrics: 'Case Studies on Behance',
  },
  {
    year: '2020 — 2022',
    title: 'Higher Secondary Certificate (12th Grade)',
    organization: 'Government Boys Higher Secondary School',
    location: 'Sendhamangalam, Tamil Nadu',
    type: 'education',
    details: [
      'Completed Higher Secondary Certificate (12th Grade) with 55% aggregate',
      'Developed early interest in computing, creative problem solving, and visual arts',
    ],
    metrics: 'Percentage: 55%',
  },
];

export function Timeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="timeline">
      <SectionHeading
        title="Education & Career Timeline"
        subtitle="A chronological journey of academic milestones, industry training, and design achievements"
      />

      <div ref={ref} className="relative max-w-4xl mx-auto">
        {/* Central glowing vertical timeline line */}
        <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 sm:-translate-x-1/2 w-0.5 bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent/30" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8 sm:space-y-12"
        >
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                custom={index}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Central Icon Bubble */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-bg border-2 border-brand-primary flex items-center justify-center z-10 shadow-glow-blue">
                  {item.type === 'education' && (
                    <GraduationCap size={15} className="text-brand-secondary" />
                  )}
                  {item.type === 'experience' && (
                    <Briefcase size={15} className="text-emerald-400" />
                  )}
                  {item.type === 'achievement' && <Award size={15} className="text-amber-400" />}
                </div>

                {/* Content Card */}
                <div
                  className={`w-full pl-12 sm:pl-0 sm:w-[calc(50%-2rem)] ${
                    isEven ? 'sm:mr-auto sm:text-right' : 'sm:ml-auto'
                  }`}
                >
                  <div className="glass-card rounded-2xl p-6 hover:border-brand-secondary/40 transition-all group card-accent-top">
                    {/* Badge & Year */}
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-2 ${
                        isEven ? 'sm:justify-end' : 'justify-start'
                      }`}
                    >
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-primary/15 text-brand-secondary border border-brand-primary/30 flex items-center gap-1">
                        <Calendar size={12} />
                        {item.year}
                      </span>
                      {item.metrics && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {item.metrics}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-lg font-bold text-brand-text group-hover:text-brand-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-brand-muted mb-1">
                      {item.organization}
                    </p>
                    <p className="text-xs text-brand-muted/70 flex items-center gap-1 mb-4 justify-start">
                      <MapPin size={12} />
                      {item.location}
                    </p>

                    <ul className="space-y-1.5 text-xs sm:text-sm text-brand-muted text-left">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
