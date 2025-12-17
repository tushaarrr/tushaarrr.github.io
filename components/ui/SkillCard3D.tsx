import React, { useRef, useState, useEffect } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Motion values for tilt effect - Disabled on mobile
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for the tilt
  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  // Map mouse position to rotation degrees - No rotation on mobile
  const rotateX = useTransform(mouseY, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["-15deg", "15deg"]);
  
  // Dynamic shadow - Disabled on mobile
  const shadowX = useTransform(mouseX, [-0.5, 0.5], ["0px", "0px"]);
  const shadowY = useTransform(mouseY, [-0.5, 0.5], ["0px", "0px"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !ref.current) return;
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
        transformStyle: isMobile ? "flat" : "preserve-3d",
        perspective: isMobile ? 0 : 1000
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative min-h-[300px] md:min-h-[420px] w-full bg-surface/40 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] p-6 md:p-8 flex flex-col items-center justify-center transition-colors duration-500 ${isMobile ? '' : 'cursor-pointer hover:border-accent/30'} ${className}`}
    >
      {/* Dynamic Shadow Element */}
      <motion.div 
        style={{ x: shadowX, y: shadowY, opacity: isHovered ? 0.4 : 0 }}
        className="absolute inset-0 bg-accent/20 blur-[60px] -z-10 rounded-full transition-opacity duration-500"
      />

      {/* Category Title - Floating */}
      <motion.h3 
        style={{ transform: isMobile ? "translateZ(0px)" : "translateZ(40px)" }}
        className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-10 tracking-tight text-center"
      >
        {category}
      </motion.h3>

      {/* Skills Grid - Floating Deep */}
      <div 
        style={{ transform: isMobile ? "translateZ(0px)" : "translateZ(80px)", transformStyle: isMobile ? "flat" : "preserve-3d" }}
        className="grid grid-cols-3 gap-x-3 gap-y-6 md:gap-x-4 md:gap-y-8 w-full max-w-[280px]"
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
      style={{ transformStyle: "flat" }}
    >
      <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center border border-white/10 shadow-lg backdrop-blur-sm md:group-hover:bg-white/10 md:group-hover:border-accent/50 transition-all duration-300 overflow-hidden shrink-0">
        <img 
          src={iconSrc} 
          alt={skill.name}
          className="w-5 h-5 md:w-6 md:h-6 opacity-80 md:group-hover:opacity-100 transition-opacity object-contain"
          loading="lazy"
          onError={(e) => {
            // Fallback to hiding image if it fails to load
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-textSecondary text-center font-medium leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
};