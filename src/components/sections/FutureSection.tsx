import React from 'react';
import FadeIn from '../ui/FadeIn';

const challenges = [
  { title: 'Data Availability, Quality & Standardization', icon: '💾', description: "A persistent challenge is the scarcity of high-quality data for specific tissues. Enforcing industry standards like SEND and ADAM is crucial to harmonize data, making it machine-readable for AI/ML models and improving predictive accuracy.", delay: 0 },
  { title: 'Model Validation, Interpretability & Generalizability', icon: '🔍', description: 'For regulatory acceptance and clinical translation, models must be rigorously validated and offer clear, interpretable, and biologically meaningful insights. Black-box predictions are insufficient; we need explainable reasoning.', delay: 200 },
  { title: 'Computational Demands & Scalability', icon: '💻', description: 'Training large models requires immense computational resources. Future work must focus on computational efficiency and scalability to ensure these powerful tools are accessible and practical for real-world clinical decision support.', delay: 400 },
];

const FutureSection: React.FC<{ id: string }> = ({ id }) => {
    return (
        <section id={id} className="py-20 min-h-screen snap-start flex items-center">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Challenges and Future Directions</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Despite the immense potential, several significant challenges must be addressed to fully realize this framework's promise. The ultimate goal is to move beyond siloed models and create a holistic "digital twin": a dynamic, in-silico representation of an individual's physiology and disease state.</p>
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

                <FadeIn>
                    <div className="mt-20 text-center bg-card p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-foreground">Towards a Unified Framework: PBPK, PK/PD, and QSP</h3>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">The future points towards a convergence of PBPK (drug movement), PK/PD (drug effect), and QSP (biological systems). Our integrated framework dissolves these traditional boundaries, creating a continuous feedback loop from molecule to population and back to the individual. This will enable:</p>
                        <ul className="list-disc list-inside text-left max-w-xl mx-auto mt-4 text-muted-foreground space-y-2">
                            <li><span className="font-semibold text-foreground">Continuous Translation:</span> Smoother transition of insights from in vitro to in vivo, preclinical to clinical, and population to individual.</li>
                            <li><span className="font-semibold text-foreground">Holistic Decision-Making:</span> Integrating drug exposure, efficacy, and safety across all stages for more informed, proactive decisions.</li>
                            <li><span className="font-semibold text-foreground">Reduced Silos:</span> Fostering interdisciplinary collaboration and a shared understanding of drug action from molecular to systemic levels.</li>
                        </ul>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">By operationalizing data into predictive, mechanistic insights, we can dramatically accelerate the journey of bringing transformative medicines to the patients who need them.</p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default FutureSection;
