
import React from 'react';
import FadeIn from '../ui/FadeIn';

const challenges = [
  { title: 'Expanding the Data Ecosystem', icon: '💾', description: "The framework's power grows with its data. A key effort is continuously integrating new data modalities (e.g., imaging, real-world evidence) and enforcing FAIR principles to ensure all data is harmonized and accessible.", delay: 0 },
  { title: 'Model Validation & Causal Inference', icon: '🔍', description: 'Predictive accuracy is not enough. We must rigorously validate models against clinical outcomes and develop methods for causal inference to ensure our "black box" AI provides trustworthy, biologically meaningful insights for regulatory acceptance.', delay: 200 },
  { title: 'Scaling the Digital Twin', icon: '💻', description: 'Building and simulating population-scale digital twins requires immense computational resources. Future work involves optimizing algorithms and leveraging distributed computing to make these powerful tools accessible for real-time clinical decision support.', delay: 400 },
];

const FutureSection: React.FC<{ id: string }> = ({ id }) => {
    return (
        <section id={id} className="py-20 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">The Future: Towards the Patient Digital Twin</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">This integrated approach is not just an improvement—it's a paradigm shift. The ultimate goal is to move beyond siloed models and create a holistic "digital twin": a dynamic, in-silico representation of an individual's physiology and disease state, which allows us to predict how they will respond to a therapy before it's ever administered.</p>
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
                        <h3 className="text-2xl font-bold text-gray-800">Unifying PBPK, QSP, and Clinical Development</h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">This framework dissolves the boundaries between PBPK (drug movement), QSP (biological systems), and PK/PD (drug effect). By creating a continuous feedback loop—where clinical data refines the models that, in turn, guide clinical strategy—we establish a learning healthcare system. The GNN-PBPK-AI ecosystem is the engine for this continuous translation from molecule to population and back to the individual.</p>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">This convergence will enable:</p>
                        <ul className="list-disc list-inside text-left max-w-xl mx-auto mt-2 text-gray-700">
                            <li><span className="font-semibold">Seamless Translation:</span> A digital thread connecting discovery, development, and patient care, reducing late-stage attrition.</li>
                            <li><span className="font-semibold">Proactive Decision-Making:</span> Simulating trial outcomes and personalizing regimens based on a holistic view of exposure, efficacy, and safety.</li>
                            <li><span className="font-semibold">True Precision Medicine:</span> Delivering the right drug, at the right dose, to the right patient, based on their unique biological blueprint.</li>
                        </ul>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">By operationalizing data into predictive, mechanistic insights, we can dramatically accelerate the journey of bringing transformative medicines to the patients who need them.</p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default FutureSection;
