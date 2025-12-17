import React from 'react';
import { RevealBox } from './ui/RevealBox';
import { Typewriter } from './ui/Typewriter';
import { EDUCATION_DATA } from '../constants';
import { GlassCard } from './ui/GlassCard';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 w-full max-w-4xl mx-auto">
      <RevealBox>
        <div className="font-display text-accent font-semibold tracking-widest text-xs sm:text-sm uppercase mb-4 sm:mb-6 block">
            <Typewriter text="About Me" delay={0.2} speed={0.05} />
        </div>
      </RevealBox>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        <div className="md:col-span-2 space-y-6 sm:space-y-8">
          <RevealBox delay={0.1}>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter leading-tight text-textPrimary mb-4 sm:mb-6">
              I combine rigorous data engineering with product vision to build systems that scale.
            </h2>
          </RevealBox>
          
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-textSecondary font-sans font-light leading-relaxed">
            <RevealBox delay={0.2}>
              <p>
                From architecting multimodal diagnostic engines to optimizing business intelligence workflows, my work bridges the gap between complex algorithms and practical business value.
              </p>
            </RevealBox>
            <RevealBox delay={0.3}>
              <p>
                I specialize in <strong>Agentic AI</strong>, <strong>RAG Pipelines</strong>, and <strong>Automated Extraction Systems</strong>. My goal is to build transparent, explainable AI solutions that empower decision-makers.
              </p>
            </RevealBox>
          </div>

          <div className="pt-2 sm:pt-4">
            <RevealBox delay={0.4}>
                <h3 className="font-display text-base sm:text-lg font-bold text-textPrimary mb-3 sm:mb-4 tracking-tighter">Education</h3>
                <div className="space-y-3 sm:space-y-4">
                    {EDUCATION_DATA.map((edu, idx) => (
                        <div key={idx} className="border-l-2 border-accent/30 pl-3 sm:pl-4 relative">
                            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                            <h4 className="font-display text-white font-semibold text-sm sm:text-base tracking-tight">{edu.institution}</h4>
                            <p className="text-textSecondary/80 text-xs sm:text-sm font-sans">{edu.degree}</p>
                            <span className="text-[9px] sm:text-[10px] text-textSecondary/50 uppercase tracking-wide font-display font-medium mt-0.5 block">{edu.period} • {edu.location}</span>
                        </div>
                    ))}
                </div>
            </RevealBox>
          </div>
        </div>
        
        <div className="md:col-span-1">
           <RevealBox delay={0.4}>
              <GlassCard className="h-full flex flex-col justify-center !p-4 sm:!p-5" hoverEffect={true}>
                 <h3 className="font-display text-white font-bold mb-3 text-base sm:text-lg tracking-tighter">Core Competencies</h3>
                 <ul className="space-y-1.5 text-textSecondary">
                    <li className="flex items-center gap-2 text-xs sm:text-sm font-medium font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        Multimodal AI Systems
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm font-medium font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        Automated Data Pipelines
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm font-medium font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        RAG & Vector Search
                    </li>
                     <li className="flex items-center gap-2 text-xs sm:text-sm font-medium font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        Explainable AI (XAI)
                    </li>
                    <li className="flex items-center gap-2 text-xs sm:text-sm font-medium font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        Business Intelligence
                    </li>
                 </ul>
              </GlassCard>
           </RevealBox>
        </div>
      </div>
    </section>
  );
};