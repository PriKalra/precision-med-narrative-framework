
import React from 'react';
import FadeIn from '../ui/FadeIn';

const challenges = [
  { 
    title: 'Data Standardization and Quality', 
    icon: '💾', 
    description: "Implementation requires standardized, machine-readable data formats compliant with SEND and ADaM guidelines. High-quality, harmonized datasets are essential for training robust AI models and ensuring reproducible results across pharmaceutical organizations and regulatory submissions.", 
    delay: 0 
  },
  { 
    title: 'Model Validation and Interpretability', 
    icon: '🔍', 
    description: 'Regulatory acceptance demands rigorous model validation and mechanistic interpretability. Agentic AI systems must provide transparent, biologically meaningful explanations for predictions and decisions, moving beyond black-box approaches to enable scientific scrutiny and regulatory confidence.', 
    delay: 200 
  },
  { 
    title: 'Computational Infrastructure and Scalability', 
    icon: '💻', 
    description: 'Large-scale deployment requires substantial computational resources and optimized algorithms. Cloud-based architectures and distributed computing frameworks are necessary to handle the computational demands of complex PBPK simulations and machine learning model training at pharmaceutical scale.', 
    delay: 400 
  },
];

const FutureSection: React.FC<{ id: string }> = ({ id }) => {
    return (
        <section id={id} className="py-20 min-h-screen snap-start flex items-center bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Implementation Challenges and Strategic Directions</h2>
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto">Realizing the transformative potential of Agentic AI in MIDD requires addressing fundamental challenges in data infrastructure, regulatory science, and computational scalability. Success depends on coordinated efforts across pharmaceutical organizations, technology providers, and regulatory agencies.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {challenges.map(challenge => (
                        <FadeIn key={challenge.title} delay={challenge.delay}>
                            <div className="p-6 bg-card rounded-xl shadow-lg h-full">
                                <div className="text-4xl text-primary mb-4">{challenge.icon}</div>
                                <h3 className="font-semibold text-xl mb-3">{challenge.title}</h3>
                                <p className="text-muted-foreground">{challenge.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={600}>
                  <div className="mt-12 space-y-6 text-muted-foreground max-w-4xl mx-auto text-center">
                    <p>Implementation success requires robust validation frameworks, enhanced model interpretability, and establishment of trust among regulatory bodies and clinical practitioners. These technical challenges are accompanied by organizational needs for workforce training, change management, and integration with existing pharmaceutical development processes.</p>
                  </div>
                </FadeIn>

                <FadeIn>
                    <div className="mt-20 text-center bg-card p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-foreground">Unified Computational Pharmacology Platform</h3>
                        <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">The evolution toward integrated computational pharmacology dissolves traditional boundaries between PBPK modeling, pharmacokinetic-pharmacodynamic analysis, and quantitative systems pharmacology. This convergence enables:</p>
                        <ul className="list-disc list-inside text-left max-w-xl mx-auto mt-4 text-muted-foreground space-y-2">
                            <li><span className="font-semibold text-foreground">Continuous Translation:</span> Seamless progression from in vitro to in vivo, preclinical to clinical, and population to individual patient modeling.</li>
                            <li><span className="font-semibold text-foreground">Integrated Decision Support:</span> Comprehensive assessment of drug exposure, efficacy, and safety across all development stages.</li>
                            <li><span className="font-semibold text-foreground">Collaborative Science:</span> Interdisciplinary integration of assay development, omics analysis, pharmacological modeling, and formulation science.</li>
                        </ul>
                        <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-6">This unified approach requires synergistic collaboration among computational scientists, pharmacologists, clinicians, and regulatory scientists to establish the methodological and technological foundation for precision therapeutics development.</p>
                    </div>
                </FadeIn>

                <FadeIn>
                  <div className="mt-20 text-center bg-transparent p-8 rounded-xl">
                      <h3 className="text-2xl font-bold text-foreground">Conclusion</h3>
                      <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">Agentic AI integration into MIDD represents a fundamental paradigm shift for pharmaceutical development. By augmenting mechanistic models with autonomous, adaptive intelligence, this approach addresses limitations of traditional fragmented workflows while accelerating timelines and enhancing mechanistic understanding. Success requires continued focus on data standardization, model validation, and regulatory science to transform precision medicine from aspiration to clinical reality.</p>
                  </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default FutureSection;
