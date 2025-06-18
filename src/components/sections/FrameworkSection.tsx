
import React from 'react';
import FadeIn from '../ui/FadeIn';
import { ArrowDown, Brain, Database, Cpu, Users } from 'lucide-react';

const frameworkSteps = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Human Expert Input",
    description: "Pharmacologist defines problem and research objectives",
    color: "bg-blue-50 border-blue-200"
  },
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "Agentic AI Planning",
    description: "AI agents decompose complex tasks and orchestrate workflows",
    color: "bg-green-50 border-green-200"
  },
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "Data Integration",
    description: "Multi-modal data retrieval and knowledge extraction",
    color: "bg-purple-50 border-purple-200"
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "Model Execution",
    description: "PBPK/PK/PD simulation with continuous refinement",
    color: "bg-orange-50 border-orange-200"
  }
];

const FrameworkSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-20 min-h-screen snap-start flex items-center bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Framework in Action</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              The Agentic AI-MIDD integration operates through a systematic, iterative framework that combines human expertise with autonomous AI capabilities to accelerate pharmaceutical research and development.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-4xl mx-auto">
          {frameworkSteps.map((step, index) => (
            <FadeIn key={step.title} delay={index * 200}>
              <div className="flex items-center mb-12 last:mb-0">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${step.color} border-2 flex items-center justify-center`}>
                  {step.icon}
                </div>
                <div className="ml-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < frameworkSteps.length - 1 && (
                  <div className="flex-shrink-0 ml-6">
                    <ArrowDown className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={800}>
          <div className="mt-16 p-8 bg-card rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-center">Continuous Learning Loop</h3>
            <p className="text-muted-foreground text-center">
              The framework operates as a closed-loop system where each iteration improves model accuracy, 
              hypothesis generation, and predictive capabilities through continuous feedback and refinement.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FrameworkSection;
