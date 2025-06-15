
import React from 'react';
import FadeIn from '../ui/FadeIn';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-4">Advancing Precision Medicine</h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">A new paradigm integrating Graph Neural Networks, AI, and PBPK modeling to revolutionize drug discovery and personalized therapy.</p>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
