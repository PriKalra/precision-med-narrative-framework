
import React from 'react';
import FadeIn from '../ui/FadeIn';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center snap-start bg-transparent">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4">Advancing Precision Medicine</h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">A new paradigm for Model-Informed Drug Discovery and Development (MIDD) leveraging the synergistic integration of Agentic AI, computational modeling, and mechanistic science. This framework automates complex workflows and enhances data interpretation to accelerate the development of novel therapeutics and advance personalized medicine.</p>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
