
import React from 'react';
import FadeIn from '../ui/FadeIn';

const SolutionSection: React.FC<{ id: string }> = ({ id }) => {
    return (
        <section id={id} className="py-20 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">The Solution: An Integrated AI-Powered Framework</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">To overcome the limitations of traditional models, we propose a synergistic framework that integrates three powerful computational technologies. This section explains how Graph Neural Networks (GNNs), Artificial Intelligence (AI), and Large Language Models (LLMs) work together to create a more dynamic, predictive, and intelligent PBPK system.</p>
                </div>

                <div className="space-y-16">
                    <FadeIn>
                        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">1. GNNs: The Molecular Architects</h3>
                                <p className="text-gray-700 mb-4">GNNs are a specialized form of AI that excels at understanding data structured as graphs. We represent drug molecules as graphs—atoms are nodes and bonds are edges. The GNN can "read" this structure to predict a molecule's physicochemical and ADME properties (like permeability or clearance) directly from its chemical blueprint. This automates parameter generation and accelerates early drug discovery.</p>
                                <p className="text-gray-700">GNNs also model the body itself as a graph of interconnected organs, learning how the network of organ interactions influences overall drug distribution.</p>
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
                                <h3 className="text-2xl font-semibold mb-4">2. AI/LLMs: The Knowledge Engine</h3>
                                <p className="text-gray-700 mb-4">We use a suite of AI and Machine Learning models to learn from diverse, high-dimensional data. These models can predict pharmacokinetic parameters from chemical structures, creating hybrid frameworks that forecast human PK profiles for new molecules. They excel in data-limited scenarios by integrating prior biological knowledge to guide their predictions.</p>
                                <p className="text-gray-700">Large Language Models (LLMs) act as a reasoning layer, scanning vast biomedical literature to extract knowledge, predict complex drug-drug interactions (DDIs), and even generate hypotheses for new drug targets. They also translate complex model outputs into human-readable reports.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
