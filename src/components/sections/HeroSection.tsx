
import React from 'react';
import FadeIn from '../ui/FadeIn';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center snap-start bg-transparent">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4">Revolutionizing Drug Development</h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Agentic AI in Model-Informed Drug Discovery and Development represents a paradigm shift for pharmaceutical research, integrating autonomous artificial intelligence systems with mechanistic computational modeling to accelerate therapeutic innovation and advance precision medicine.</p>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
