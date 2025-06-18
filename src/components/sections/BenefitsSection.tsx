
import React from 'react';
import FadeIn from '../ui/FadeIn';
import { Clock, DollarSign, Target, TrendingUp, Shield, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Accelerated Timelines",
    description: "Reduce drug discovery time from years to months through automated hypothesis generation and rapid model iteration.",
    metric: "18 months",
    detail: "vs. traditional 4-5 years"
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "Cost Reduction",
    description: "Minimize experimental costs through virtual screening and in silico validation before wet lab testing.",
    metric: "60-80%",
    detail: "reduction in early-stage costs"
  },
  {
    icon: <Target className="w-8 h-8 text-primary" />,
    title: "Enhanced Precision",
    description: "Improve target identification and patient stratification through multi-modal data integration.",
    metric: "34.2%",
    detail: "faster task completion"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Higher Success Rates",
    description: "Increase probability of clinical success through better compound selection and optimization.",
    metric: "7.7%",
    detail: "improvement in accuracy"
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Risk Mitigation",
    description: "Early identification of safety concerns and drug-drug interactions through comprehensive modeling.",
    metric: "45%",
    detail: "improvement in tech sector"
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Resource Optimization",
    description: "Efficient allocation of R&D resources through intelligent prioritization and automated workflows.",
    metric: "13.6%",
    detail: "better resource utilization"
  }
];

const BenefitsSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-20 min-h-screen snap-start bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformative Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Agentic AI integration in MIDD delivers measurable improvements across the entire pharmaceutical development lifecycle, 
              from discovery through post-market surveillance.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <FadeIn key={benefit.title} delay={index * 150}>
              <div className="p-6 bg-card rounded-xl shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{benefit.metric}</div>
                    <div className="text-sm text-muted-foreground">{benefit.detail}</div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={900}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$46.9B</div>
                <div className="text-sm text-muted-foreground">Drug repurposing market by 2028</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">&lt;10%</div>
                <div className="text-sm text-muted-foreground">Phase I to FDA approval rate</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">13-15</div>
                <div className="text-sm text-muted-foreground">Years traditional development</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BenefitsSection;
