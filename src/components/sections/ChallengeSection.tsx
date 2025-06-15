import React from 'react';
import FadeIn from '../ui/FadeIn';

const challenges = [
  {
    title: 'Inter-Individual Variability',
    description: 'No two people are the same. Genetic differences in metabolic enzymes, anatomical variations in organ size, age, and lifestyle factors like diet and smoking all create a unique pharmacokinetic profile for each individual. Traditional models often use "average" human parameters, failing to capture this diversity.',
    delay: 0,
  },
  {
    title: 'Intra-Individual Variability',
    description: "An individual's physiology is dynamic; hormonal fluctuations during the menstrual cycle, physiological shifts during pregnancy, and changes with aging can alter how a drug is processed. Modeling these dynamic, time-dependent changes is a significant hurdle for conventional PBPK.",
    delay: 200,
  },
  {
    title: 'Data Scarcity',
    description: "Building robust models requires high-quality data. For many specific tissues, like the reproductive tract or thyroid, comprehensive data on local drug absorption and metabolism is limited or inconsistent. This data gap is a major bottleneck for creating truly predictive models.",
    delay: 400,
  },
];

const ChallengeSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-20 min-h-screen snap-start flex items-center bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">The Challenge: Biological Complexity</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">This section explores the core limitations of traditional PBPK models. While powerful, they struggle to account for the immense variability between and within individuals. Real-world biology is far more complex than a standard set of equations can capture, leading to a gap between model predictions and clinical reality. True precision medicine requires bridging this gap.</p>
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
