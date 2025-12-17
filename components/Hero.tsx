import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronRight, User, Sliders, X, RefreshCw } from 'lucide-react';
import { TextReveal } from './ui/TextReveal';
import { MeshGradientBackground } from './ui/MeshGradientBackground';

interface HeroProps {
  onOpenStory: () => void;
}

// Curated Palettes for the Generator - Sky / Light Blue Theme
const PRESETS = [
  { name: "Sky Drift", colors: ["#000000", "#08121c", "#172b42", "#32506d"] }, // Soft, airy sky blue
  { name: "Stratosphere", colors: ["#000000", "#050a14", "#0f1e33", "#223854"] }, // Deep atmospheric blue
  { name: "Azure Mist", colors: ["#000000", "#091421", "#16283d", "#2c4a66"] }, // Muted calm blue
];

export const Hero: React.FC<HeroProps> = ({ onOpenStory }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Generator State
  const [showControls, setShowControls] = useState(false);
  const [colors, setColors] = useState<string[]>(PRESETS[0].colors); // Default to Sky Drift
  const [speed, setSpeed] = useState<number>(0.3); // Slow for calm atmosphere
  const [complexity, setComplexity] = useState<number>(4); // Simpler mesh for elegance

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Reduce complexity on mobile for better performance
      if (window.innerWidth < 768) {
        setComplexity(3);
        setSpeed(0.2);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Parallax Logic - Disable on mobile for performance
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden bg-background"
    >
      {/* Interactive Mesh Generator Background - Soft & Atmospheric - Reduced opacity on mobile */}
      {!isMobile && (
        <div className="absolute inset-0 opacity-80 mix-blend-screen">
            <MeshGradientBackground colors={colors} speed={speed} complexity={complexity} />
        </div>
      )}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 to-black opacity-60" />
      )}

      {/* Control Panel Toggle - Hidden on mobile */}
      {!isMobile && (
        <motion.div 
          className="absolute bottom-6 right-6 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <button
            onClick={() => setShowControls(!showControls)}
            className={`p-3 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-xl ${showControls ? 'bg-white text-black border-white' : 'bg-white/5 text-white/50 border-white/5 hover:bg-white/10 hover:text-white'}`}
          >
            {showControls ? <X size={20} /> : <Sliders size={20} />}
          </button>
        </motion.div>
      )}

      {/* Generator Controls - Desktop only */}
      <AnimatePresence>
        {showControls && !isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-6 z-30 w-80 glass p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold font-display text-white uppercase tracking-wider">Mesh Generator</h3>
              <RefreshCw size={14} className="text-textSecondary" />
            </div>

            {/* Colors */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-display font-semibold text-textSecondary uppercase tracking-wide">Palette</span>
              <div className="grid grid-cols-3 gap-2">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => setColors(preset.colors)}
                    className={`h-8 w-full rounded-lg border-2 transition-all ${JSON.stringify(colors) === JSON.stringify(preset.colors) ? 'border-white scale-105' : 'border-transparent hover:border-white/20'}`}
                    style={{ background: `linear-gradient(135deg, ${preset.colors[1]}, ${preset.colors[3]})` }}
                    title={preset.name}
                  />
                ))}
              </div>
            </div>

            {/* Speed Slider */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-xs font-display font-semibold text-textSecondary uppercase tracking-wide">
                <span>Flow Speed</span>
                <span>{(speed * 100).toFixed(0)}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="2.0"
                step="0.1"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>

            {/* Complexity Slider */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-display font-semibold text-textSecondary uppercase tracking-wide">
                <span>Complexity</span>
                <span>{complexity} Nodes</span>
              </div>
              <input
                type="range"
                min="3"
                max="8"
                step="1"
                value={complexity}
                onChange={(e) => setComplexity(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div 
        style={{ y: textY, opacity, scale }}
        className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center space-y-12"
      >
        
        {/* Status Badge - Soft Sky Tone */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="group relative flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/5 backdrop-blur-md shadow-2xl shadow-black/20 hover:bg-white/10 transition-colors duration-500 cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-20"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500/80"></span>
          </span>
          <span className="text-[11px] font-bold font-display text-textSecondary/80 tracking-[0.2em] uppercase">
            Available for Opportunities
          </span>
        </motion.div>

        {/* Name Display */}
        <div className="flex flex-col items-center">
            {/* Primary Name */}
            <div className="relative">
                <TextReveal 
                    text="Tushar Shandilya" 
                    className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white mb-4"
                    delay={isMobile ? 0.2 : 0.5} 
                    stagger={isMobile ? 0.03 : 0.05}
                />
                 {/* Subtle Ambient Glow behind text - Soft Sky - Reduced on mobile */}
                 <div className="absolute inset-0 bg-sky-900/20 blur-[60px] md:blur-[100px] -z-10 rounded-full" />
            </div>
            
            {/* Secondary Role Title */}
            <TextReveal 
                text="Data Scientist & AI Product Builder" 
                className="font-display text-base sm:text-lg md:text-2xl font-medium text-textSecondary tracking-tight px-4"
                delay={isMobile ? 0.8 : 1.5}
                stagger={isMobile ? 0.01 : 0.02}
            />
        </div>

        {/* Supporting Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 10, filter: isMobile ? "blur(0px)" : "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: isMobile ? 0.8 : 1.2, delay: isMobile ? 1.2 : 2.2, ease: "easeOut" }}
          className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-textSecondary/80 font-sans font-light leading-relaxed tracking-wide px-4"
        >
          Transforming raw data into intelligent decision systems through multimodal AI and clear storytelling.
        </motion.p>

        {/* Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: isMobile ? 1.5 : 2.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-6 w-full sm:w-auto px-4"
        >
          <button 
            onClick={onOpenStory}
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-black font-display font-semibold text-sm sm:text-base tracking-tight overflow-hidden transition-all duration-500 active:scale-[0.98] sm:hover:scale-[1.02] sm:hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
          >
             <span className="relative z-10 flex items-center justify-center gap-2">
                About Me 
                <User size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
             </span>
          </button>
          
          <a 
            href="#work"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-textPrimary text-sm sm:text-base font-display font-medium tracking-tight transition-all duration-300 hover:text-white flex items-center justify-center gap-2 hover:bg-white/5 active:bg-white/10"
          >
            <span>View Work</span>
            <ChevronRight size={16} className="text-textSecondary group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </a>
        </motion.div>

      </motion.div>

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-textSecondary/30 to-transparent" />
      </motion.div>
    </section>
  );
};