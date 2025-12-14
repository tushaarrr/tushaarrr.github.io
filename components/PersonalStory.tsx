import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface PersonalStoryProps {
  onBack: () => void;
}

export const PersonalStory: React.FC<PersonalStoryProps> = ({ onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#050505] text-[#e1e1e3] relative overflow-x-hidden"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-6 z-50 flex justify-between items-center bg-gradient-to-b from-[#050505] to-transparent">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-display font-medium text-textSecondary hover:text-white transition-colors uppercase tracking-wider"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-32">
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl font-bold mb-20 text-white tracking-tighter leading-tight"
        >
          The path isn't always linear. <br />
          <span className="text-textSecondary">Mine certainly wasn't.</span>
        </motion.h1>

        <div className="space-y-16 md:space-y-24">
          
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="prose prose-lg prose-invert leading-relaxed text-textSecondary/90 font-sans font-light text-xl md:text-2xl"
          >
            <p>
              I grew up in an army family. My father served, and in a way, I served too by packing bags, moving cities, and learning that "home" isn't a place, but a state of mind.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="prose prose-lg prose-invert leading-relaxed text-textSecondary/90 font-sans font-light text-xl md:text-2xl"
          >
            <p>
               That upbringing taught me discipline early on. But more importantly, it taught me how to adapt. To walk into a new room, a new school, or a new city, and find my footing.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="prose prose-lg prose-invert leading-relaxed text-textSecondary/90 font-sans font-light text-xl md:text-2xl"
          >
            <p>
              After school, I pursued my BCA. I made friends, I studied, but I also learned that the real world doesn't operate on syllabus logic. After graduation, I hit a wall. I was jobless. Uncertain. Stuck. It was a quiet, difficult phase where I had to ask myself what I really wanted.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="prose prose-lg prose-invert leading-relaxed text-textSecondary/90 font-sans font-light text-xl md:text-2xl pl-6 border-l-2 border-accent/30"
          >
            <p>
              I decided to change my trajectory entirely. I moved to Canada. 
            </p>
            <p className="mt-6">
              It wasn't just a change of location; it was a reset. I worked part-time jobs to keep the lights on, understanding the weight of responsibility in a way I hadn't before.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="prose prose-lg prose-invert leading-relaxed text-textSecondary/90 font-sans font-light text-xl md:text-2xl"
          >
            <p>
              Academically, it wasn't a straight line. I failed some subjects. I struggled. But I refused to let that be the end of the story. I went back, worked harder, and eventually excelled in those very same subjects, earning the trust and confidence of professors who had once seen me struggle.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="prose prose-lg prose-invert leading-relaxed text-textSecondary/90 font-sans font-light text-xl md:text-2xl"
          >
            <p>
              In my final semester, things clicked. I discovered the vision behind <span className="text-white font-normal">Cerebramha</span>. It shifted my perspective from "writing code" to "solving problems". I started seeing how data and technology could actually impact real lives.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="prose prose-lg prose-invert leading-relaxed text-textSecondary/90 font-sans font-light text-xl md:text-2xl"
          >
            <p>
              I took a remote job. I kept my head down. I built applications, AI agents, and SaaS products. Not because AI is the buzzword of the moment, but because I saw its potential to bring clarity to complex problems.
            </p>
          </motion.div>

          <motion.hr 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="border-white/10 my-20 origin-left"
          />

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <p className="font-display text-2xl md:text-3xl text-white font-medium leading-normal tracking-tight">
              That’s how I ended up here. Still learning. Still building. But much more aware of why I do what I do.
            </p>
            <button 
              onClick={onBack}
              className="mt-12 text-accent text-lg font-display font-medium hover:text-accent/80 transition-colors flex items-center gap-2 group"
            >
              See what I'm building now
              <ArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};