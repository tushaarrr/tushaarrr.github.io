import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface MeshGradientBackgroundProps {
  colors: string[];
  speed: number;
  complexity: number;
}

export const MeshGradientBackground: React.FC<MeshGradientBackgroundProps> = ({
  colors,
  speed,
  complexity
}) => {
  // Generate deterministic but organic starting positions for the gradient nodes
  const nodes = useMemo(() => {
    return Array.from({ length: complexity }).map((_, i) => ({
      id: i,
      // Distribute somewhat randomly across the 100x100 viewbox
      initialX: Math.random() * 80 + 10, 
      initialY: Math.random() * 80 + 10,
      radius: 40 + Math.random() * 30, // Large radii for blending
    }));
  }, [complexity]);

  // Normalize speed: higher speed value = lower duration
  const baseDuration = Math.max(5, 40 / Math.max(speed, 0.1));

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full h-full opacity-90 mix-blend-screen"
        style={{ filter: 'contrast(120%) brightness(110%)' }}
      >
        <defs>
          {/* Heavy blur to merge the circles into a mesh */}
          <filter id="mesh-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix 
              in="blur" 
              type="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" 
              result="goo" 
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
        
        {/* Base background layer */}
        <rect width="100%" height="100%" fill={colors[0]} />

        {/* Animated Nodes Group */}
        <g filter="url(#mesh-blur)">
          {nodes.map((node, i) => (
            <motion.circle
              key={node.id}
              cx={node.initialX}
              cy={node.initialY}
              r={node.radius}
              fill={colors[(i + 1) % colors.length]}
              initial={{ 
                cx: node.initialX, 
                cy: node.initialY 
              }}
              animate={{
                cx: [
                    node.initialX, 
                    (node.initialX + 30) % 100, 
                    (node.initialX - 20 + 100) % 100, 
                    node.initialX
                ],
                cy: [
                    node.initialY, 
                    (node.initialY - 20 + 100) % 100, 
                    (node.initialY + 40) % 100, 
                    node.initialY
                ],
                scale: [1, 1.2, 0.9, 1]
              }}
              transition={{
                duration: baseDuration * (0.8 + Math.random() * 0.4), // Natural variance
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror"
              }}
            />
          ))}
        </g>
      </svg>
      
      {/* Cinematic Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} 
      />
      
      {/* Vignette for focus */}
      <div className="absolute inset-0 bg-background/30 radial-gradient-vignette" style={{ background: 'radial-gradient(circle at center, transparent 20%, #000000 100%)' }} />
    </div>
  );
};