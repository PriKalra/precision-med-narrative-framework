
import React from 'react';
import FadeIn from '../ui/FadeIn';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-background snap-start">
      <div className="container mx-auto px-6 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4">Advancing Precision Medicine</h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">A new paradigm integrating Graph Neural Networks, AI, and PBPK modeling to revolutionize drug discovery and personalized therapy. This framework aligns strategically with leading pharmaceutical initiatives, which aim to leverage vast, interconnected multimodal datasets to accelerate the discovery and development of novel therapeutics for patients.</p>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
