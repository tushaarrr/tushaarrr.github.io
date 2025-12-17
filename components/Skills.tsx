import React from 'react';
import { SKILLS_DATA } from '../constants';
import { RevealBox } from './ui/RevealBox';
import { Typewriter } from './ui/Typewriter';
import { SkillCard3D } from './ui/SkillCard3D';

export const Skills: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-20 lg:px-32 w-full max-w-7xl mx-auto border-t border-white/5">
        <RevealBox>
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-textPrimary mb-3 sm:mb-4">
                     <Typewriter text="Technical Arsenal" delay={0.2} speed={0.05} />
                </div>
                <p className="text-textSecondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans font-light px-4">
                  Interactive visualization of my core technologies. Hover to explore.
                </p>
            </div>
        </RevealBox>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 perspective-2000">
            {SKILLS_DATA.map((category, idx) => (
                <RevealBox key={idx} delay={idx * 0.15}>
                    <SkillCard3D 
                      category={category.category} 
                      skills={category.skills}
                    />
                </RevealBox>
            ))}
        </div>
    </section>
  );
};