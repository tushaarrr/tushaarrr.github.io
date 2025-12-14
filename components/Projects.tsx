import React from 'react';
import { PROJECT_DATA } from '../constants';
import { RevealBox } from './ui/RevealBox';
import { GlassCard } from './ui/GlassCard';
import { ArrowUpRight } from 'lucide-react';
import { Typewriter } from './ui/Typewriter';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-20 lg:px-32 w-full max-w-7xl mx-auto">
        <div className="mb-16">
            <RevealBox>
                <div className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-textPrimary">
                    <Typewriter text="Recent Work" delay={0.2} speed={0.05} />
                </div>
            </RevealBox>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECT_DATA.map((project, index) => (
                <RevealBox key={project.id} delay={index * 0.1} className="h-full">
                    <GlassCard 
                        className={`h-full flex flex-col justify-between group relative overflow-hidden ${project.link ? 'cursor-pointer' : ''}`}
                        onClick={() => project.link && window.open(project.link, '_blank')}
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <h3 className="font-display text-2xl font-bold tracking-tighter text-textPrimary group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <ArrowUpRight className={`text-textSecondary group-hover:text-white transition-all duration-300 ${project.link ? 'group-hover:translate-x-1 group-hover:-translate-y-1' : ''}`} />
                            </div>

                            {project.stats && (
                                <div className="mb-6 inline-block px-4 py-2 bg-accent/10 rounded-lg border border-accent/20">
                                    <span className="font-display text-accent font-semibold tracking-wide text-sm">{project.stats}</span>
                                </div>
                            )}

                            <div className="space-y-3 mb-8">
                                {project.description.map((desc, idx) => (
                                    <p key={idx} className="text-textSecondary text-sm leading-relaxed font-sans font-light">
                                        {desc}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10 pt-6 border-t border-white/5">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="text-xs font-mono text-textSecondary/60">
                                        {t}
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