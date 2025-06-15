import React from 'react';
import FadeIn from '../ui/FadeIn';

const SolutionSection: React.FC<{ id: string }> = ({ id }) => {
    return (
        <section id={id} className="py-20 min-h-screen snap-start flex items-center">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">The Solution: A Synergistic MIDD Framework</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">To overcome the limitations of conventional models, we propose a framework that synergistically integrates advanced computational technologies. This section details how Graph Neural Networks (GNNs) provide molecular insights while Agentic AI orchestrates complex workflows, creating a dynamic, predictive, and intelligent system for MIDD.</p>
                </div>

                <div className="space-y-16">
                    <FadeIn>
                        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">1. GNNs: The Molecular Architects</h3>
                                <p className="text-muted-foreground mb-4">Graph Neural Networks (GNNs) excel at processing data structured as graphs. By representing drug molecules as graphs—where atoms are nodes and bonds are edges—GNNs can predict physicochemical and ADME properties directly from a chemical structure. This accelerates model parameterization and automates a critical step in early drug discovery.</p>
                                <p className="text-muted-foreground">Furthermore, GNNs can model the body as a graph of interconnected organs, learning how the physiological network influences drug distribution and pharmacokinetics.</p>
                            </div>
                            <div className="mt-10 lg:mt-0 p-4 bg-card rounded-xl shadow-lg">
                                <div className="flex items-center justify-center h-48 space-x-4">
                                    <span className="text-sm font-mono text-center text-muted-foreground">Molecule<br/>(SMILES)</span>
                                    <span className="text-2xl text-gray-400">&rarr;</span>
                                    <div className="text-center">
                                        <div className="relative w-24 h-24 animate-pulse">
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full"></div>
                                            <div className="absolute top-2 left-2 w-4 h-4 bg-primary/70 rounded-full"></div>
                                            <div className="absolute bottom-2 right-2 w-4 h-4 bg-primary/70 rounded-full"></div>
                                            <div className="absolute top-2 right-2 w-4 h-4 bg-primary/70 rounded-full"></div>
                                            <div className="absolute bottom-2 left-2 w-4 h-4 bg-primary/70 rounded-full"></div>
                                        </div>
                                        <span className="text-sm font-semibold mt-2 block">GNN Model</span>
                                    </div>
                                    <span className="text-2xl text-gray-400">&rarr;</span>
                                    <div className="text-left text-sm font-mono text-muted-foreground">
                                        <p>Vss: 1.5 L/kg</p>
                                        <p>CL: 20 mL/min</p>
                                        <p>Papp: 10e-6</p>
                                        <span className="text-xs font-semibold mt-2 block text-foreground">(Predicted ADME)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                            <div className="mt-10 lg:mt-0 p-4 bg-card rounded-xl shadow-lg lg:order-last">
                                <div className="flex items-center justify-center h-48 space-x-2 text-center">
                                    <div className="text-sm font-mono text-muted-foreground">
                                        <p className="font-bold text-foreground">Genomics</p>
                                        <p className="font-bold text-foreground">Clinical Data</p>
                                        <p className="font-bold text-foreground">Literature</p>
                                        <span className="text-xs font-semibold mt-2 block text-foreground">(Multimodal Data)</span>
                                    </div>
                                    <span className="text-2xl text-gray-400">&rarr;</span>
                                    <div className="text-center">
                                        <div className="p-4 bg-primary rounded-lg text-primary-foreground font-bold">Agentic AI</div>
                                        <span className="text-sm font-semibold mt-2 block">Orchestration & Reasoning</span>
                                    </div>
                                    <span className="text-2xl text-gray-400">&rarr;</span>
                                    <div className="text-left text-sm font-mono text-muted-foreground">
                                        <p className="text-foreground">Automated<br/>Workflows</p>
                                        <p className="text-foreground">New Hypotheses</p>
                                        <p className="text-foreground">Refined Models</p>
                                        <span className="text-xs font-semibold mt-2 block text-foreground">(Actionable Insights)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:order-first">
                                <h3 className="text-2xl font-semibold mb-4">2. Agentic AI: The Cognitive & Automation Engine</h3>
                                <p className="text-muted-foreground mb-4">Agentic AI provides the cognitive core of the framework. It automates complex workflows, from hypothesis generation to model parameterization. These systems employ Large Language Models for sophisticated reasoning but extend beyond them by using external tools and adaptive memory to execute multi-step tasks autonomously.</p>
                                <p className="text-muted-foreground">This transforms the development process from a series of manual steps into a cohesive, self-optimizing pipeline. By orchestrating data analysis, simulation, and evaluation, Agentic AI enhances both operational efficiency and deep mechanistic understanding.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
