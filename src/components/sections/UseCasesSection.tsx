
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Framework in Action: From Pipeline to Patient</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">This section demonstrates practical applications of our unified data and modeling framework. Each use case highlights how the system leverages integrated data, bioinformatics, and AI to answer critical questions at every stage of the drug development pipeline—from preclinical translation to personalized clinical application.</p>
                </div>

                <div className="space-y-20">
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Use Case 1: De-risking Preclinical Translation</h3>
                        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">Translating findings from preclinical species to humans is a major hurdle. By integrating physiological and pharmacokinetic data from multiple species from our data platform, we can build more robust allometric scaling and PBPK models, improving the accuracy of first-in-human dose predictions and reducing the risk of clinical failure.</p>
                        <SpeciesComparisonChart />
                    </FadeIn>
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Use Case 2: AI-Enhanced IVIVE and Clearance Prediction</h3>
                        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">The "microsome-hepatocyte disconnect" exemplifies a classic *in vitro-in vivo* extrapolation (IVIVE) challenge. Our AI models resolve this by learning from a richer dataset that includes not just HLM/HH assays, but also relevant bioinformatics like transporter and enzyme expression data. This provides a more mechanistically sound intrinsic clearance value, directly improving DDI predictions.</p>
                        <ClearancePrediction />
                    </FadeIn>
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Use Case 3: Personalization via Bioinformatics & Expression Data</h3>
                        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">Individual drug response is highly variable. Our framework directly addresses this by integrating population-scale bioinformatics. By incorporating genomic data on enzyme variants (e.g., CYP polymorphisms) and quantitative proteomics data on transporter expression, we can stratify populations and fine-tune PBPK models to predict outcomes for specific patient subgroups.</p>
                        <EnzymeTabs />
                    </FadeIn>
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Use Case 4: LLM-Powered DDI Assessment</h3>
                        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">Our LLM agent acts as a pharmacologist's assistant. Trained on our curated knowledge graph of literature, clinical data, and regulatory documents, it can rapidly synthesize information to explain complex DDI mechanisms. This moves beyond simple alerts to provide actionable, context-rich insights for clinical decision support.</p>
                        <DDIExplainer />
                    </FadeIn>
                     <FadeIn>
                        <h3 className="text-2xl font-semibold mb-2 text-center">Use Case 5: Automated PBPK Model Assembly</h3>
                        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">This tool demonstrates the automated synthesis at the heart of our framework. A GNN auto-generates drug-specific parameters from a simple molecular structure. These are instantly combined with curated, system-specific physiological data drawn from our unified platform. The result is a foundational PBPK model, ready for simulation in seconds, not weeks.</p>
                        <PBPKModelBuilder />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
