
import React from 'react';
import FadeIn from '../ui/FadeIn';

const challenges = [
  { title: 'Regulatory Science & Model Qualification', icon: '⚖️', description: "Model qualification frameworks for AI-enhanced PBPK require rigorous validation against clinical data, uncertainty quantification, and bias assessment. Regulatory authorities need standardized approaches for evaluating hybrid mechanistic-ML models, including interpretability requirements and validation dataset specifications for novel therapeutic areas.", delay: 0 },
  { title: 'Mechanistic Interpretability & Explainable AI', icon: '🔍', description: 'Black-box predictions are insufficient for regulatory acceptance and clinical adoption. The framework requires explainable AI methods that provide mechanistic rationale for predictions, uncertainty bounds for critical parameters, and causal inference capabilities to distinguish correlation from biological mechanism.', delay: 200 },
  { title: 'Computational Scalability & Infrastructure', icon: '💻', description: 'Training large-scale GNNs and running population-scale PBPK simulations requires substantial computational resources. Future development must address algorithmic efficiency, distributed computing architectures, and cloud-based infrastructure for real-time clinical decision support at scale.', delay: 400 },
];

const FutureSection: React.FC<{ id: string }> = ({ id }) => {
    return (
        <section id={id} className="py-20 min-h-screen snap-start flex items-center bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Research Challenges & Future Directions</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Realizing this conceptual framework requires addressing fundamental challenges in regulatory science, model interpretability, and computational infrastructure. These research directions represent critical paths toward clinical implementation of AI-enhanced MIDD approaches.</p>
                    <div className="mt-4 inline-block bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-3 py-1 rounded text-sm">
                        Research Priorities • Implementation Challenges
                    </div>
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
                    <p>The translation of this conceptual framework into clinical practice depends on addressing these foundational challenges through collaborative research spanning computational sciences, regulatory science, and clinical pharmacology.</p>
                  </div>
                </FadeIn>

                <FadeIn>
                    <div className="mt-20 text-center bg-card p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-foreground">Toward Unified Computational Pharmacology</h3>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">The conceptual framework envisions convergence of traditionally separate modeling paradigms—PBPK (drug disposition), PK/PD (pharmacological response), and QSP (systems biology)—into a unified computational framework. This integration would create continuous feedback loops from molecular mechanisms to population outcomes.</p>
                        <ul className="list-disc list-inside text-left max-w-xl mx-auto mt-4 text-muted-foreground space-y-2">
                            <li><span className="font-semibold text-foreground">Seamless Scale Integration:</span> Molecular to tissue to organ to organism modeling with consistent parameterization.</li>
                            <li><span className="font-semibold text-foreground">Dynamic Model Adaptation:</span> Real-time parameter updating based on emerging clinical data and biomarker measurements.</li>
                            <li><span className="font-semibold text-foreground">Cross-Disciplinary Integration:</span> Unified platform enabling collaboration between medicinal chemists, pharmacologists, clinicians, and regulatory scientists.</li>
                        </ul>
                        <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-6">This research vision represents a long-term goal requiring sustained collaboration across academic institutions, pharmaceutical companies, and regulatory agencies. Success would fundamentally transform drug development from empirical trial-and-error to mechanistically-informed, predictive science.</p>
                    </div>
                </FadeIn>

                <FadeIn>
                  <div className="mt-20 text-center bg-transparent p-8 rounded-xl border-2 border-dashed border-muted">
                      <h3 className="text-2xl font-bold text-foreground">Research Perspective</h3>
                      <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">This narrative presents a conceptual exploration of integrating Agentic AI with mechanistic pharmacological modeling. The described framework represents theoretical possibilities and research directions rather than implemented solutions. Realizing these concepts would require extensive validation, regulatory development, and collaborative research across multiple disciplines and institutions.</p>
                      <div className="mt-6 inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-lg text-sm font-medium">
                        🧪 Conceptual Framework • 📚 Research Exploration • 🔬 Scientific Perspective
                      </div>
                  </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default FutureSection;
