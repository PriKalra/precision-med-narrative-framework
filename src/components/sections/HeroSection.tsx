
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
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">A conceptual framework exploring the synergistic integration of Agentic AI with Model-Informed Drug Discovery and Development (MIDD). This narrative presents theoretical foundations and potential paradigms for enhancing computational modeling workflows in pharmaceutical research.</p>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-lg text-sm font-medium">
            📚 Conceptual Framework • Research Perspective • Not a Commercial Solution
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
