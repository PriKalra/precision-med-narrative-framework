
import React from 'react';
import FadeIn from '../ui/FadeIn';

const challenges = [
  {
    title: 'Pharmacogenomic Heterogeneity',
    description: 'CYP2D6 polymorphisms create a 50-fold range in metabolic capacity across populations. CYP3A4 expression varies 20-fold between individuals. Transporter polymorphisms (SLCO1B1, ABCB1) alter tissue distribution. UGT variants affect glucuronidation rates. Current PBPK models use population-average parameters, failing to capture this genetic-driven variability in drug-metabolizing enzymes and transporters.',
    delay: 0,
  },
  {
    title: 'Temporal Physiological Dynamics',
    description: "Circadian rhythms modulate hepatic enzyme expression and renal blood flow. Pregnancy alters cardiac output (30-50% increase), organ blood flows, and CYP enzyme activities across trimesters. Aging affects body composition, albumin levels, and clearance mechanisms. These time-dependent physiological changes require dynamic parameterization beyond static population models.",
    delay: 200,
  },
  {
    title: 'In Vitro-In Vivo Extrapolation (IVIVE) Gaps',
    description: "The hepatocyte-microsome disconnect represents a fundamental IVIVE challenge where intrinsic clearance (CLint) measured in liver microsomes often overestimates whole hepatocyte clearance by 2-10 fold. Binding artifacts, cofactor depletion, and subcellular localization effects create systematic prediction errors. Limited tissue-specific data for specialized organs (brain, reproductive tract) constrains mechanistic model development.",
    delay: 400,
  },
];

const ChallengeSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-20 min-h-screen snap-start flex items-center bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Scientific Challenges: Beyond Population Averages</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Traditional PBPK modeling faces fundamental limitations when confronting the reality of human biological diversity. This section examines the core scientific challenges that necessitate advanced computational approaches for achieving true personalized medicine.</p>
          <div className="mt-4 inline-block bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-3 py-1 rounded text-sm">
            Scientific Limitations • Research Gaps
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <FadeIn key={challenge.title} delay={challenge.delay} className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <div className="p-6 bg-card rounded-xl shadow-md h-full">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{challenge.title}</h3>
                <p className="text-muted-foreground">{challenge.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
