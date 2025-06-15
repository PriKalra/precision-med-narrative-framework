
import React, { useState, useEffect, useRef } from 'react';
import FadeIn from '../ui/FadeIn';
import AgenticAIFlowchart from '../solution/AgenticAIFlowchart';

const storySteps = [
    {
        title: "1. GNNs: The Molecular Architects",
        description: [
            "Graph Neural Networks (GNNs) excel at processing data structured as graphs. By representing drug molecules as graphs—where atoms are nodes and bonds are edges—GNNs can predict physicochemical and ADME properties directly from a chemical structure.",
            "This capability accelerates model parameterization and automates a critical, time-consuming step in early drug discovery, enabling rapid screening of virtual compounds."
        ],
    },
    {
        title: "2. Agentic AI: The Cognitive Engine",
        description: [
            "Agentic AI provides the cognitive core of the framework, automating complex workflows from hypothesis generation to model validation. These systems employ Large Language Models for sophisticated reasoning but extend beyond them by using external tools and adaptive memory to execute multi-step tasks autonomously.",
            "This transforms the development process from a series of manual steps into a cohesive, self-optimizing pipeline."
        ],
    },
    {
        title: "3. The Core Workflow: From Query to Plan",
        description: [
            "The process begins with a human expert defining a research question. A Conversational Agent interprets this natural language query, translating it into a structured task.",
            "A Planning Agent then takes over, decomposing the high-level objective into a detailed, step-by-step workflow. This plan is presented back to the expert for review and approval, ensuring human-centric control from the outset."
        ],
    },
    {
        title: "4. Data Foundation & Hypothesis Generation",
        description: [
            "Once the plan is approved, specialized agents are dispatched. Data Retrieval agents mine internal databases and public literature, while Knowledge Extraction agents build context from biomedical knowledge graphs.",
            "A Hypothesis Generation agent then synthesizes this information to propose novel drug targets or repurposing candidates. Concurrently, a Machine Learning agent predicts key ADME parameters, feeding crucial data into the system."
        ],
    },
    {
        title: "5. Mechanistic Simulation at Scale",
        description: [
            "The heart of the framework is the Simulation Agent. It takes the generated hypotheses and predicted parameters to execute complex PBPK, PK/PD, or QSP models.",
            "These in silico experiments predict drug disposition, efficacy, and potential toxicity, providing a deep mechanistic understanding of how a candidate compound will behave in a biological system."
        ],
    },
    {
        title: "6. The Self-Optimizing Loop",
        description: [
            "Results from the simulation are passed to an Evaluation Agent, which assesses them against criteria like efficacy, safety, and novelty. Its findings are fed to a Refinement Agent.",
            "This agent formulates structured feedback to other agents, creating a closed loop of continuous improvement. This iterative process allows the system to autonomously learn, adapt, and optimize its strategies over time."
        ],
    },
    {
        title: "7. Human-in-the-Loop Governance",
        description: [
            "While automation drives efficiency, human expertise remains central. The Human Oversight agent ensures that experts review critical outputs, validate model logic, and provide strategic direction. This collaborative model augments human intellect rather than replacing it.",
            "Finally, a Regulatory & Reporting agent automates the generation of compliance documents and publication-ready materials, ensuring that insights are captured and communicated effectively."
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">The Solution: A Synergistic MIDD Framework</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">To overcome the limitations of conventional models, this framework synergistically integrates advanced computational technologies. It uses Graph Neural Networks (GNNs) for molecular insights and Agentic AI to orchestrate complex workflows, creating a dynamic, predictive, and intelligent system for MIDD.</p>
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
                       {/* A simplified, non-sticky view for mobile, shown once. */}
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
