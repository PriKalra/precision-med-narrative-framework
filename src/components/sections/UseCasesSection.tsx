
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Clinical Applications: Agentic AI-MIDD Integration</h2>
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto">These applications demonstrate the practical implementation of Agentic AI within MIDD workflows, showcasing how autonomous systems address critical challenges in pharmaceutical development including cross-species extrapolation, clearance prediction, drug-drug interactions, and personalized medicine through virtual patient modeling.</p>
                </div>

                <div className="space-y-20">
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Multi-Species PBPK Extrapolation</h3>
                        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">Preclinical PBPK models developed in laboratory species require sophisticated scaling approaches to predict human pharmacokinetics. Physiological differences across species create significant extrapolation challenges. This interactive visualization demonstrates key parameter variations that influence cross-species scaling accuracy.</p>
                        <SpeciesComparisonChart />
                    </FadeIn>
                    
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Clearance Prediction and DDI Assessment</h3>
                        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">Accurate clearance prediction remains challenging due to the microsome-hepatocyte disconnect, where in vitro liver microsome assays often overpredict clearance compared to hepatocyte systems. Machine learning models trained on comprehensive datasets help reconcile these discrepancies, improving drug-drug interaction predictions.</p>
                        <ClearancePrediction />
                    </FadeIn>
                    
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Enzyme and Transporter Expression Profiling</h3>
                        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">Drug metabolism and transport exhibit substantial inter-individual and inter-species variability due to differential expression of cytochrome P450 enzymes, UDP-glucuronosyltransferases, and efflux transporters. Integrating population-specific expression profiles enhances PBPK model accuracy and DDI risk assessment.</p>
                        <EnzymeTabs />
                    </FadeIn>
                    
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Automated DDI Assessment Platform</h3>
                        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">This demonstrates an Agentic AI system for automated drug-drug interaction assessment. The platform integrates biomedical literature mining, mechanistic knowledge extraction, and pharmacological reasoning to provide rapid, evidence-based DDI analysis for clinical decision support.</p>
                        <DDIExplainer />
                    </FadeIn>
                    
                     <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Virtual Patient Twins and Precision Dosing</h3>
                        <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">Virtual patient modeling represents the convergence of PBPK simulation with real-time physiological monitoring. These digital twins integrate patient-specific parameters with continuous biomarker data to enable dynamic dose optimization and personalized therapeutic strategies.</p>
                        <VirtualTwinVisual />
                        <VirtualTwinComplexities />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
