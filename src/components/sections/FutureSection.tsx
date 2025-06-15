
import React from 'react';
import FadeIn from '../ui/FadeIn';

const challenges = [
  { title: 'Data Quality & Standardization', icon: '💾', description: "A persistent challenge is the availability of high-quality, standardized data. Enforcing industry standards like SEND and ADaM is crucial for harmonizing data to make it machine-readable and improve the predictive accuracy of AI models.", delay: 0 },
  { title: 'Model Validation & Interpretability', icon: '🔍', description: 'For regulatory acceptance and clinical adoption, models must be rigorously validated. "Black-box" predictions are insufficient; the framework must provide explainable, biologically meaningful reasoning for its outputs.', delay: 200 },
  { title: 'Computational & Scalability Demands', icon: '💻', description: 'Training large-scale models requires immense computational resources. Future work must focus on algorithmic efficiency and scalability to ensure these powerful tools are practical for real-world clinical decision support.', delay: 400 },
];

const FutureSection: React.FC<{ id: string }> = ({ id }) => {
    return (
        <section id={id} className="py-20 min-h-screen snap-start flex items-center bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Challenges and Future Directions</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Despite the immense potential, several significant challenges must be addressed to fully realize this framework's promise in precision medicine.</p>
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
                    <p>The success of this framework hinges not just on its predictive power, but on addressing the "last mile" challenges of robust validation, enhanced interpretability, and building trust among regulatory bodies and clinical practitioners.</p>
                  </div>
                </FadeIn>

                <FadeIn>
                    <div className="mt-20 text-center bg-card p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-foreground">Towards a Unified Computational Pharmacology Framework</h3>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">Future development points towards a convergence of PBPK (drug movement), PK/PD (drug effect), and QSP (biological systems). Our integrated framework dissolves these traditional boundaries, creating a continuous feedback loop from molecule to population and back to the individual. This will enable:</p>
                        <ul className="list-disc list-inside text-left max-w-xl mx-auto mt-4 text-muted-foreground space-y-2">
                            <li><span className="font-semibold text-foreground">Continuous Translation:</span> Seamless transition of insights from in vitro to in vivo, preclinical to clinical, and population to individual.</li>
                            <li><span className="font-semibold text-foreground">Holistic Decision-Making:</span> Integrating drug exposure, efficacy, and safety across all stages for more informed, proactive decisions.</li>
                            <li><span className="font-semibold text-foreground">Reduced Silos:</span> Fostering interdisciplinary collaboration and a shared understanding of drug action from molecular to systemic levels.</li>
                        </ul>
                        <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-6">This unified approach promises to dramatically streamline drug development. To achieve this, synergistic collaboration among assay specialists, omics scientists, pharmacologists, computational modelers, and formulations scientists is imperative. This is the bedrock upon which the next generation of precision therapeutics will be built.</p>
                    </div>
                </FadeIn>

                <FadeIn>
                  <div className="mt-20 text-center bg-transparent p-8 rounded-xl">
                      <h3 className="text-2xl font-bold text-foreground">Conclusion</h3>
                      <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">The integration of Agentic AI into Model-Informed Drug Discovery and Development represents a paradigm shift for the pharmaceutical industry. By augmenting mechanistic models with autonomous, adaptive, and collaborative AI, we can overcome the limitations of traditional, fragmented workflows. The framework presented here promises to accelerate timelines, enhance efficiency, and foster deeper mechanistic understanding. Realizing this vision requires a continued commitment to addressing challenges in data standardization, model validation, and regulatory science, paving the way for a future where precision medicine is not just an ambition, but a clinical reality.</p>
                  </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default FutureSection;
