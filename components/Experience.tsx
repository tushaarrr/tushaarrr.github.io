import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { RevealBox } from './ui/RevealBox';
import { GlassCard } from './ui/GlassCard';
import { Typewriter } from './ui/Typewriter';

export const Experience: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 w-full max-w-4xl mx-auto">
        <div className="mb-20 text-center">
            <RevealBox>
                <div className="font-display text-3xl md:text-4xl font-bold tracking-tighter text-textPrimary mb-4">
                     <Typewriter text="Selected Experience" delay={0.2} speed={0.05} />
                </div>
                <p className="text-textSecondary text-base font-sans font-light">A timeline of technical leadership and impact.</p>
            </RevealBox>
        </div>

        <div className="space-y-12">
            {EXPERIENCE_DATA.map((job, index) => (
                <RevealBox key={job.id} delay={index * 0.1}>
                    <GlassCard className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-start group !p-8 md:!p-10">
                        <div className="md:w-36 md:shrink-0 pt-1.5">
                            <span className="font-display text-sm font-semibold text-textSecondary block mb-1.5 tracking-tight">{job.period}</span>
                            <span className="font-display text-xs text-textSecondary/50 uppercase tracking-wide font-medium leading-relaxed block">{job.location}</span>
                        </div>
                        
                        <div className="flex-1">
                            <h3 className="font-display text-xl md:text-2xl font-bold text-textPrimary group-hover:text-accent transition-colors duration-300 leading-tight mb-2 tracking-tighter">
                                {job.company}
                            </h3>
                            <p className="text-base text-textSecondary mb-8 leading-snug font-sans font-medium">{job.role}</p>
                            
                            <ul className="space-y-3 mb-8">
                                {job.description.map((item, idx) => (
                                    <li key={idx} className="text-textSecondary/90 text-sm md:text-base leading-relaxed font-sans font-light flex items-start">
                                        <span className="mr-3 opacity-40 mt-1.5 text-[10px]">●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                                {job.techStack.map(tech => (
                                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-textSecondary font-mono hover:bg-white/10 transition-colors mt-2">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                </RevealBox>
            ))}
        </div>
    </section>
  );
};