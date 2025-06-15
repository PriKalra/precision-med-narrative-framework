import React from 'react';
import FadeIn from '../ui/FadeIn';
import SpeciesComparisonChart from '../use-cases/SpeciesComparisonChart';
import ClearancePrediction from '../use-cases/ClearancePrediction';
import EnzymeTabs from '../use-cases/EnzymeTabs';
import DDIExplainer from '../use-cases/DDIExplainer';
import PBPKModelBuilder from '../use-cases/PBPKModelBuilder';

const UseCasesSection: React.FC<{ id: string }> = ({ id }) => {
    return (
        <section id={id} className="py-20 min-h-screen bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Framework in Action: Key Use Cases</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">This section demonstrates the practical applications of the integrated GNN-PBPK-AI framework for advancing precision medicine. By combining mechanistic simulation with advanced AI, the system enables more personalized, efficient, and safer drug development. Explore the interactive visualizations below to see how the model addresses key challenges.</p>
                </div>

                <div className="space-y-20">
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Use Case 1: Multi-Species Extrapolation</h3>
                        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">PBPK models are developed in preclinical species (rat, mouse, monkey) and scaled to predict human pharmacokinetics. This process is complex due to significant physiological differences. The chart below illustrates how key parameters vary across species. Select a species to see its physiological profile.</p>
                        <SpeciesComparisonChart />
                    </FadeIn>
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Use Case 2: Advanced Clearance Prediction & DDI Utilization</h3>
                        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">Accurate clearance prediction is vital but challenging. A key issue is the "microsome-hepatocyte disconnect," where lab tests using liver microsomes (HLM) often predict higher clearance than tests with whole hepatocytes (HH), the more physiologically relevant system. Our AI models help reconcile this discrepancy, directly impacting the accuracy of drug-drug interaction (DDI) predictions by providing a more reliable estimation of a drug's true intrinsic clearance.</p>
                        <ClearancePrediction />
                    </FadeIn>
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Use Case 3: Enzyme & Transporter Variability via Expression Profiles</h3>
                        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">Drug metabolism is driven by enzymes (like CYPs) and transporters (like MDR1). Their *expression levels* and activity vary hugely between individuals and species. Our model explicitly incorporates this quantitative data to improve predictive precision and better understand drug-drug interactions (DDIs). By integrating these unique expression profiles, the framework can more accurately predict DDI risk and guide personalized drug regimens. Click on the tabs to learn about key players.</p>
                        <EnzymeTabs />
                    </FadeIn>
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Use Case 4: LLM-Powered Drug-Drug Interaction Explainer ✨</h3>
                        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">Leverage the power of Large Language Models to quickly assess potential drug-drug interactions. Input two common drug names, and our AI will provide a concise explanation of how they might interact, highlighting relevant mechanisms and clinical considerations. This demonstrates how LLMs can enhance clinical decision support.</p>
                        <DDIExplainer />
                    </FadeIn>
                     <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Use Case 5: Interactive PBPK Model Builder</h3>
                        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">This tool demonstrates the core data integration step of the framework. Enter a drug molecule's SMILES string to simulate its physicochemical parameterization via a GNN. These properties are then combined with physiological data (from sources like NHANES) to populate the foundational parameters of a PBPK model, ready for simulation.</p>
                        <PBPKModelBuilder />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
