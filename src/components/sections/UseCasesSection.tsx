import React from 'react';
import FadeIn from '../ui/FadeIn';
import SpeciesComparisonChart from '../use-cases/SpeciesComparisonChart';
import ClearancePrediction from '../use-cases/ClearancePrediction';
import EnzymeTabs from '../use-cases/EnzymeTabs';
import DDIExplainer from '../use-cases/DDIExplainer';
import VirtualTwinVisual from '../use-cases/VirtualTwinVisual';
import VirtualTwinComplexities from '../use-cases/VirtualTwinComplexities';

const UseCasesSection: React.FC<{ id: string }> = ({ id }) => {
    return (
        <section id={id} className="py-20 min-h-screen snap-start bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Framework in Action: Key Use Cases</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">This section demonstrates practical applications of the integrated MIDD framework, showcasing how the synergy between mechanistic simulation and Agentic AI enables more personalized, efficient, and safer drug development. The following use cases illustrate how this approach addresses key scientific and operational challenges in pharmacology.</p>
                </div>

                <div className="space-y-20">
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Use Case 1: Multi-Species Extrapolation</h3>
                        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">PBPK models are developed in preclinical species (rat, mouse, monkey) and scaled to predict human pharmacokinetics. This process is complex due to significant physiological differences. The chart below illustrates how key parameters vary across species. Select a species to see its physiological profile.</p>
                        <SpeciesComparisonChart />
                    </FadeIn>
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Use Case 2: Advanced Clearance Prediction & DDI Utilization</h3>
                        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">Accurate clearance prediction is vital but challenging. Our AI models help reconcile the "microsome-hepatocyte disconnect," directly impacting the accuracy of drug-drug interaction (DDI) predictions by providing a more reliable estimation of a drug's true intrinsic clearance.</p>
                        <ClearancePrediction />
                    </FadeIn>
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Use Case 3: Enzyme & Transporter Variability via Expression Profiles</h3>
                        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">Drug metabolism is driven by enzymes (like CYPs) and transporters (like MDR1). Their expression levels and activity vary hugely between individuals and species. By integrating these unique expression profiles, the framework can more accurately predict DDI risk and guide personalized drug regimens. Click on the tabs to learn about key players.</p>
                        <EnzymeTabs />
                    </FadeIn>
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Use Case 4: Agentic AI for DDI Assessment ✨</h3>
                        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">This demonstrates a specialized task agent designed for Drug-Drug Interaction (DDI) assessment. By leveraging a Large Language Model fine-tuned on biomedical literature, the agent provides rapid, context-aware analysis of potential interactions. This exemplifies how Agentic AI can augment clinical decision support by automating knowledge extraction and synthesis, grounded in established pharmacological principles.</p>
                        <DDIExplainer />
                    </FadeIn>
                     <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Use Case 5: Real-time Personalized PBPK with Virtual Twins & Wearables</h3>
                        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">The ultimate frontier is the "virtual twin"—a dynamic model that mirrors an individual's evolving physiology. This framework integrates real-time data from wearables to continuously optimize the PBPK model, enabling highly personalized dosing strategies tailored to a patient's immediate physiological context.</p>
                        <VirtualTwinVisual />
                        <VirtualTwinComplexities />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
