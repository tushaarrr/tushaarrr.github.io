import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { PersonalStory } from './components/PersonalStory';

const App: React.FC = () => {
  const [showStory, setShowStory] = useState(false);

  // If story mode is active, render only the story component
  if (showStory) {
    return <PersonalStory onBack={() => setShowStory(false)} />;
  }

  return (
    <main className="min-h-screen bg-background text-textPrimary selection:bg-accent/30 selection:text-white relative">
      {/* Global Texture */}
      <div className="fixed inset-0 bg-dots pointer-events-none opacity-40 z-0" />
      
      <Navbar />
      
      <div className="relative z-10">
        <Hero onOpenStory={() => setShowStory(true)} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
};

export default App;