import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Skill } from '../../types';

interface SkillCard3DProps {
  category: string;
  skills: Skill[];
  className?: string;
  accentColor?: string;
}

export const SkillCard3D: React.FC<SkillCard3DProps> = ({ 
  category, 
  skills, 
  className = "",
  accentColor = "#407BBF" // Updated to Deep Ink Blue
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for the tilt
  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  // Map mouse position to rotation degrees
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  // Dynamic shadow
  const shadowX = useTransform(mouseX, [-0.5, 0.5], ["-20px", "20px"]);
  const shadowY = useTransform(mouseY, [-0.5, 0.5], ["-20px", "20px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseXFromCenter = e.clientX - rect.left - width / 2;
    const mouseYFromCenter = e.clientY - rect.top - height / 2;
    
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative min-h-[420px] w-full bg-surface/40 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex flex-col items-center justify-center cursor-pointer transition-colors duration-500 hover:border-accent/30 ${className}`}
    >
      {/* Dynamic Shadow Element */}
      <motion.div 
        style={{ x: shadowX, y: shadowY, opacity: isHovered ? 0.4 : 0 }}
        className="absolute inset-0 bg-accent/20 blur-[60px] -z-10 rounded-full transition-opacity duration-500"
      />

      {/* Category Title - Floating */}
      <motion.h3 
        style={{ transform: "translateZ(40px)" }}
        className="text-2xl font-bold text-white mb-10 tracking-tight text-center"
      >
        {category}
      </motion.h3>

      {/* Skills Grid - Floating Deep */}
      <div 
        style={{ transform: "translateZ(80px)", transformStyle: "preserve-3d" }}
        className="grid grid-cols-3 gap-x-4 gap-y-8 w-full max-w-[280px]"
      >
        {skills.map((skill, index) => (
          <SkillIcon 
            key={skill.name} 
            skill={skill} 
            index={index} 
            isHovered={isHovered}
          />
        ))}
      </div>
      
      {/* Decorative Plane */}
      <div 
        className="absolute inset-0 border border-white/5 rounded-[2rem] pointer-events-none"
        style={{ transform: "translateZ(20px)" }}
      />
    </motion.div>
  );
};

const SkillIcon: React.FC<{ skill: Skill; index: number; isHovered: boolean }> = ({ skill, index, isHovered }) => {
  // Staggered animation for hover state
  const zDepth = isHovered ? 20 + Math.random() * 30 : 0;

  // Determine image source: custom URL or Simple Icons CDN
  const iconSrc = skill.icon.startsWith('http') 
    ? skill.icon 
    : `https://cdn.simpleicons.org/${skill.icon}/f5f5f7`;
  
  return (
    <motion.div
      className="flex flex-col items-center justify-start gap-2 group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        z: zDepth
      }}
      transition={{ 
        type: "spring",
        stiffness: 200, 
        damping: 15,
        delay: index * 0.05 
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg backdrop-blur-sm group-hover:bg-white/10 group-hover:border-accent/50 transition-all duration-300 overflow-hidden shrink-0">
        <img 
          src={iconSrc} 
          alt={skill.name}
          className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity object-contain"
          onError={(e) => {
            // Fallback to hiding image if it fails to load
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <span className="text-[10px] uppercase tracking-wider text-textSecondary text-center font-medium leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
};