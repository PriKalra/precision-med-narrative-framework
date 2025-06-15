
import React from 'react';
import FadeIn from '../ui/FadeIn';

const challenges = [
  { title: 'Data & Standardization', icon: '💾', description: "The framework's success hinges on high-quality, standardized data. A major ongoing effort is to harmonize heterogeneous data from labs, clinical trials, and literature worldwide to build more robust and reliable models.", delay: 0 },
  { title: 'Validation & Interpretability', icon: '🔍', description: 'Models must be rigorously validated against real-world experimental data. Furthermore, these "black box" AI models need to be interpretable, providing clear, biologically meaningful reasoning for their predictions to gain trust from clinicians and regulators.', delay: 200 },
  { title: 'Computational Scale', icon: '💻', description: 'Training and running these complex, integrated models requires immense computational power. Future work will focus on creating more efficient algorithms and scalable infrastructure to make these tools accessible and practical for everyday use in drug development.', delay: 400 },
];

const FutureSection: React.FC<{ id: string }> = ({ id }) => {
    return (
        <section id={id} className="py-20 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Challenges and Future Directions</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">This section outlines the primary hurdles that must be overcome to fully realize the potential of this integrated framework. Addressing these challenges is crucial for the successful translation of these advanced computational models from research into widespread clinical and regulatory use.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {challenges.map(challenge => (
                        <FadeIn key={challenge.title} delay={challenge.delay}>
                            <div className="p-6 bg-white rounded-xl shadow-lg h-full">
                                <div className="text-4xl text-blue-500 mb-4">{challenge.icon}</div>
                                <h3 className="font-semibold text-xl mb-3">{challenge.title}</h3>
                                <p className="text-gray-700">{challenge.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn>
                    <div className="mt-20 text-center">
                        <h3 className="text-2xl font-bold text-gray-800">Towards a Unified Framework: PBPK, PK/PD, and QSP</h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">The future of computational pharmacology points towards a convergence of currently distinct disciplines. Historically, PBPK (Physiologically Based Pharmacokinetics), PK/PD (Pharmacokinetic/Pharmacodynamic), and QSP (Quantitative Systems Pharmacology) models have often existed in silos, each serving specific purposes at different stages of drug development—from early discovery to non-clinical, clinical, and clinical operations. PBPK focuses on drug movement, PK/PD links drug concentration to its effects, and QSP models complex biological systems and disease pathways.</p>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">Our integrated GNN-PBPK-AI/LLM framework lays the groundwork for dissolving these traditional boundaries. By mechanistically modeling drug disposition (PBPK), predicting ADME/PK parameters (AI/GNN), and leveraging LLMs for biological reasoning and hypothesis generation (QSP-like insights), we envision a seamless, continuous feedback loop across the entire pipeline. This convergence will allow for:</p>
                        <ul className="list-disc list-inside text-left max-w-xl mx-auto mt-2 text-gray-700">
                            <li><span className="font-semibold">Continuous Translation:</span> Smoother transition of insights from *in vitro* to *in vivo*, preclinical to clinical, and population to individual.</li>
                            <li><span className="font-semibold">Holistic Decision-Making:</span> Integrating drug exposure, efficacy, and safety across all stages, enabling more informed and proactive decisions.</li>
                            <li><span className="font-semibold">Reduced Silos:</span> Fostering interdisciplinary collaboration and a shared understanding of drug action from molecular to systemic levels.</li>
                        </ul>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">This unified approach promises to dramatically streamline the drug development process, bringing truly precision medicine from concept to reality.</p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default FutureSection;
