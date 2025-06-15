
import React from 'react';
import FadeIn from '../ui/FadeIn';

const SolutionSection: React.FC<{ id: string }> = ({ id }) => {
    return (
        <section id={id} className="py-20 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">The Solution: A Unified Data & Modeling Ecosystem</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Inspired by industry-leading initiatives like Data42, our solution is built on a unified data ecosystem. We shatter traditional silos by integrating diverse data—genomic, preclinical, clinical, and literature—into a single source of truth. This FAIR (Findable, Accessible, Interoperable, Reusable) data foundation empowers a new generation of AI-driven tools that build a cohesive, predictive, and automated drug development pipeline.</p>
                </div>

                <div className="space-y-16">
                    <FadeIn>
                        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">1. GNNs: Automated Molecular Parameterization</h3>
                                <p className="text-gray-700 mb-4">Graph Neural Networks (GNNs) are the bridge from chemical structure to biological activity. By representing molecules as graphs, they learn to predict critical ADME properties directly from a SMILES string. This automates the once-laborious process of parameterizing our models, allowing us to rapidly screen and characterize new chemical entities against our vast integrated database of biological systems.</p>
                                <p className="text-gray-700">This automated pipeline is the first step in constructing a "digital twin" for a new drug candidate.</p>
                            </div>
                            <div className="mt-10 lg:mt-0 p-4 bg-white rounded-xl shadow-lg">
                                <div className="flex items-center justify-center h-48 space-x-4">
                                    <span className="text-sm font-mono text-center">Molecule<br/>(SMILES)</span>
                                    <span className="text-2xl text-gray-400">&rarr;</span>
                                    <div className="text-center">
                                        <div className="relative w-24 h-24 animate-pulse">
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full"></div>
                                            <div className="absolute top-2 left-2 w-4 h-4 bg-blue-300 rounded-full"></div>
                                            <div className="absolute bottom-2 right-2 w-4 h-4 bg-blue-300 rounded-full"></div>
                                            <div className="absolute top-2 right-2 w-4 h-4 bg-blue-300 rounded-full"></div>
                                            <div className="absolute bottom-2 left-2 w-4 h-4 bg-blue-300 rounded-full"></div>
                                        </div>
                                        <span className="text-sm font-semibold mt-2 block">GNN Model</span>
                                    </div>
                                    <span className="text-2xl text-gray-400">&rarr;</span>
                                    <div className="text-left text-sm font-mono">
                                        <p>Vss: 1.5 L/kg</p>
                                        <p>CL: 20 mL/min</p>
                                        <p>Papp: 10e-6</p>
                                        <span className="text-xs font-semibold mt-2 block">(Predicted ADME)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                            <div className="mt-10 lg:mt-0 p-4 bg-white rounded-xl shadow-lg lg:order-last">
                                <div className="flex items-center justify-center h-48 space-x-2 text-center">
                                    <div className="text-sm font-mono">
                                        <p className="font-bold">Genomics</p>
                                        <p className="font-bold">Clinical Data</p>
                                        <p className="font-bold">Literature</p>
                                        <span className="text-xs font-semibold mt-2 block">(Unified Data Platform)</span>
                                    </div>
                                    <span className="text-2xl text-gray-400">&rarr;</span>
                                    <div className="text-center">
                                        <div className="p-4 bg-blue-500 rounded-lg text-white font-bold">AI / LLM</div>
                                        <span className="text-sm font-semibold mt-2 block">Bioinformatics & QSP Engine</span>
                                    </div>
                                    <span className="text-2xl text-gray-400">&rarr;</span>
                                    <div className="text-left text-sm font-mono">
                                        <p>Personalized<br/>Parameters</p>
                                        <p>DDI Risk</p>
                                        <p>New Hypotheses</p>
                                        <span className="text-xs font-semibold mt-2 block">(Actionable Insights)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:order-first">
                                <h3 className="text-2xl font-semibold mb-4">2. AI & Bioinformatics: The QSP Knowledge Engine</h3>
                                <p className="text-gray-700 mb-4">Our AI/ML suite acts as a Quantitative Systems Pharmacology (QSP) engine, powered by the unified data platform. It moves beyond simple predictions by integrating bioinformatics—mining genomic, proteomic, and metabolomic data to understand the biological mechanisms of variability. This allows us to personalize model parameters for specific populations or even individuals.</p>
                                <p className="text-gray-700">Large Language Models (LLMs) augment this by continuously scanning biomedical literature, identifying emerging safety signals, predicting novel drug-drug interactions (DDIs), and generating testable hypotheses, transforming our PBPK models into dynamic, learning systems.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
