import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { RevealBox } from './ui/RevealBox';
import { Typewriter } from './ui/Typewriter';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 text-center relative overflow-hidden">
        {/* Ambient Glow - Smaller on mobile */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-accent/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
            <RevealBox>
                <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-textPrimary mb-6 sm:mb-8 tracking-tighter leading-tight px-4">
                    <Typewriter text="Let's Build Something" delay={0.2} speed={0.05} />
                    <br />
                    <span className="text-textSecondary">
                         <Typewriter text="Intelligent." delay={1.2} speed={0.05} />
                    </span>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-textSecondary mb-8 sm:mb-10 md:mb-12 font-sans font-light px-4">
                    Open for analytics engineering and product roles.
                </p>
            </RevealBox>

            <RevealBox delay={0.2}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
                    <a 
                        href={`mailto:${SOCIAL_LINKS.email}`}
                        className="w-full sm:w-auto font-display font-semibold bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full active:scale-[0.98] sm:hover:scale-105 transition-transform duration-300 tracking-tight text-sm sm:text-base"
                    >
                        Send an Email
                    </a>
                    <a 
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto font-display font-semibold glass px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white hover:bg-white/10 active:bg-white/15 transition-colors duration-300 tracking-tight text-sm sm:text-base"
                    >
                        LinkedIn Profile
                    </a>
                </div>
            </RevealBox>

            <footer className="mt-20 sm:mt-24 md:mt-32 text-xs sm:text-sm text-textSecondary/40 font-mono">
                <p>&copy; {new Date().getFullYear()} Tushar Shandilya.</p>
            </footer>
        </div>
    </section>
  );
};