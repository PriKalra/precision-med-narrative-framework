
import React, { useState, useEffect, useRef } from 'react';
import FadeIn from '../ui/FadeIn';
import AgenticAIFlowchart from '../solution/AgenticAIFlowchart';

const storySteps = [
    {
        title: "1. Graph Neural Networks: Molecular Intelligence",
        description: [
            "Graph Neural Networks (GNNs) represent a paradigm shift in molecular property prediction, treating drug molecules as mathematical graphs where atoms become nodes and chemical bonds become edges. This graph-theoretic approach enables direct learning from molecular topology, capturing structural features that traditional descriptors miss.",
            "The conceptual framework leverages message-passing algorithms to propagate information across molecular substructures, enabling prediction of ADME properties (Vss, CLh, Papp, fu) directly from SMILES strings. This automated parameterization could theoretically accelerate virtual screening workflows by orders of magnitude."
        ],
    },
    {
        title: "2. Agentic AI: Autonomous Scientific Reasoning",
        description: [
            "Agentic AI extends beyond simple language models to create autonomous systems capable of scientific reasoning, tool usage, and adaptive learning. These theoretical agents would possess memory systems for context retention, planning capabilities for multi-step problem decomposition, and the ability to interact with external databases and simulation tools.",
            "The conceptual framework envisions specialized agents for different aspects of drug development—from hypothesis generation to model validation—working collaboratively under human oversight to accelerate discovery timelines while maintaining scientific rigor."
        ],
    },
    {
        title: "3. Natural Language Interface: Domain Expert Integration",
        description: [
            "The proposed workflow begins with natural language query interpretation, allowing pharmacologists to pose research questions in domain-specific terminology. A specialized conversational agent, fine-tuned on biomedical literature, would parse complex queries involving drug-drug interactions, clearance mechanisms, or population pharmacokinetics.",
            "An orchestration agent would then decompose high-level objectives into executable workflows, creating transparent, auditable plans that maintain the connection between scientific intent and computational execution."
        ],
    },
    {
        title: "4. Knowledge Integration: From Data to Insights",
        description: [
            "Specialized agents would mine disparate data sources—from ChEMBL and PubChem to proprietary databases—while knowledge extraction agents build contextual understanding from biomedical ontologies and literature. This multi-source integration addresses the data fragmentation challenge in pharmaceutical research.",
            "A hypothesis generation agent would synthesize this information to propose novel drug targets, mechanism-based DDI predictions, or repurposing opportunities. Simultaneously, machine learning agents would predict missing ADME parameters using QSAR/QSPR models, creating a comprehensive parameter space for mechanistic modeling."
        ],
    },
    {
        title: "5. Mechanistic Simulation: In Silico Experimentation",
        description: [
            "The simulation engine represents the mechanistic core, executing PBPK, PK/PD, and quantitative systems pharmacology (QSP) models with AI-predicted parameters. This hybrid approach combines the interpretability of mechanistic models with the predictive power of machine learning.",
            "The theoretical framework would enable large-scale virtual trials, exploring parameter uncertainty through Monte Carlo simulation and sensitivity analysis to identify critical knowledge gaps and de-risk development decisions."
        ],
    },
    {
        title: "6. Adaptive Learning: Self-Improving Systems",
        description: [
            "A continuous learning loop would enable the system to improve prediction accuracy through Bayesian model updating and active learning strategies. Evaluation agents would assess simulation results against efficacy, safety, and feasibility criteria, while refinement agents provide structured feedback for system optimization.",
            "This adaptive capability theoretically enables the framework to learn from both successes and failures, continuously refining its understanding of drug disposition and response mechanisms."
        ],
    },
    {
        title: "7. Human-Centric Governance: Augmented Intelligence",
        description: [
            "Despite automation capabilities, human expertise remains central to the conceptual framework. Expert validation agents would ensure critical decisions undergo human review, maintaining scientific oversight and ethical responsibility in the development process.",
            "Documentation agents would automatically generate regulatory submissions, study reports, and publication materials, ensuring that insights are captured in formats suitable for peer review and regulatory evaluation. This human-AI collaboration model aims to augment rather than replace scientific expertise."
        ],
    },
];

const SolutionSection: React.FC<{ id: string }> = ({ id }) => {
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        stepRefs.current = stepRefs.current.slice(0, storySteps.length);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (index > -1) {
                            setActiveStep(index);
                        }
                    }
                });
            },
            { rootMargin: '-40% 0px -60% 0px', threshold: 0 }
        );

        const currentRefs = stepRefs.current;
        currentRefs.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            currentRefs.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section id={id} className="py-20 min-h-screen snap-start">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Conceptual Framework: AI-Enhanced MIDD</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">This section presents a theoretical framework integrating Graph Neural Networks and Agentic AI with mechanistic pharmacological modeling. The proposed system represents a conceptual approach to addressing current limitations in drug development through autonomous, adaptive computational workflows.</p>
                    <div className="mt-4 inline-block bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-3 py-1 rounded text-sm">
                        Theoretical Framework • Research Concept
                    </div>
                </div>
                
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                    {/* Left Column: Scrolling Text */}
                    <div className="relative">
                        {storySteps.map((step, index) => (
                            <div 
                                key={index} 
                                ref={el => stepRefs.current[index] = el}
                                className="min-h-[80vh] flex items-center" 
                            >
                                <FadeIn>
                                    <div className={`transition-opacity duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-30'}`}>
                                        <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                                        <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
                                            {step.description.map((p, i) => <p key={i}>{p}</p>)}
                                        </div>
                                    </div>
                                </FadeIn>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Sticky Visual */}
                    <div className="lg:sticky top-24 h-full">
                       <div className="hidden lg:flex items-center justify-center h-full min-h-[80vh]">
                            <AgenticAIFlowchart activeStep={activeStep} />
                       </div>
                       <div className="lg:hidden mt-8">
                           <AgenticAIFlowchart activeStep={storySteps.length - 1} />
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
