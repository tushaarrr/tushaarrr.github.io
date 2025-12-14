import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { RevealBox } from './ui/RevealBox';
import { Typewriter } from './ui/Typewriter';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 px-6 text-center relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
            <RevealBox>
                <div className="font-display text-5xl md:text-7xl font-bold text-textPrimary mb-8 tracking-tighter leading-tight">
                    <Typewriter text="Let's Build Something" delay={0.2} speed={0.05} />
                    <br />
                    <span className="text-textSecondary">
                         <Typewriter text="Intelligent." delay={1.2} speed={0.05} />
                    </span>
                </div>
                <p className="text-xl text-textSecondary mb-12 font-sans font-light">
                    Open for analytics engineering and product roles.
                </p>
            </RevealBox>

            <RevealBox delay={0.2}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <a 
                        href={`mailto:${SOCIAL_LINKS.email}`}
                        className="font-display font-semibold bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition-transform duration-300 tracking-tight"
                    >
                        Send an Email
                    </a>
                    <a 
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-semibold glass px-8 py-4 rounded-full text-white hover:bg-white/10 transition-colors duration-300 tracking-tight"
                    >
                        LinkedIn Profile
                    </a>
                </div>
            </RevealBox>

            <footer className="mt-32 text-sm text-textSecondary/40 font-mono">
                <p>&copy; {new Date().getFullYear()} Tushar Shandilya.</p>
            </footer>
        </div>
    </section>
  );
};