
import React, { useState, useEffect, useRef } from 'react';
import FadeIn from '../ui/FadeIn';
import AgenticAIFlowchart from '../solution/AgenticAIFlowchart';

const storySteps = [
    {
        title: "Agentic AI: Autonomous Intelligence",
        description: [
            "Agentic AI represents sophisticated artificial intelligence systems designed to operate autonomously, adapt in real-time to dynamic environments, and solve complex, multi-step problems. Unlike traditional automation, these systems possess autonomy, sophisticated reasoning capabilities, extensive tool use, and adaptive memory systems.",
            "The defining characteristics include independent task initiation, contextual decision-making, integration with external tools and databases, and continuous learning from past experiences."
        ],
    },
    {
        title: "Multi-Agent Architecture",
        description: [
            "Agentic AI systems employ multiple specialized agents that collaborate to perform complex tasks. A Conversational Agent processes natural language queries from researchers, while a Planning Agent decomposes high-level objectives into structured workflows.",
            "This modular approach enables efficient task distribution and allows for human review and approval at critical decision points, maintaining scientific rigor and ethical oversight."
        ],
    },
    {
        title: "Data Integration and Knowledge Extraction",
        description: [
            "Specialized agents perform parallel data retrieval from internal databases, public literature, and biomedical knowledge graphs. Knowledge Extraction agents process and contextualize diverse information sources, while Hypothesis Generation agents synthesize this data to propose novel drug targets or repurposing candidates.",
            "Machine Learning agents simultaneously predict ADME parameters using Graph Neural Networks and other algorithms, accelerating model parameterization."
        ],
    },
    {
        title: "Mechanistic Simulation Platform",
        description: [
            "The Simulation Agent executes complex PBPK, PK/PD, and QSP models to predict drug disposition, efficacy, and toxicity. These mechanistic models provide quantitative predictions of drug behavior across multiple biological scales, from molecular interactions to organ-level responses.",
            "This platform enables in silico experimentation and virtual trial capabilities, reducing reliance on costly physical experiments."
        ],
    },
    {
        title: "Iterative Optimization Loop",
        description: [
            "An Evaluation Agent assesses simulation results against predefined criteria including efficacy, safety, and mechanistic coherence. The Refinement Agent processes this feedback to formulate structured improvements for subsequent iterations.",
            "This continuous optimization loop transforms drug development from a linear process into a dynamic, self-improving system that adapts based on real-time data and outcomes."
        ],
    },
    {
        title: "Human-Centered Control",
        description: [
            "Human Oversight agents ensure expert review of critical outputs, validation of model logic, and strategic direction. This collaborative model augments human expertise rather than replacing it, maintaining scientific accountability and regulatory compliance.",
            "Regulatory and Reporting agents automate documentation generation while ensuring adherence to industry standards and compliance requirements."
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Agentic AI Integration in MIDD</h2>
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto">The synergistic integration of Agentic AI with MIDD creates a transformative computational pharmacology platform. This architecture enables autonomous hypothesis generation, intelligent experimental design, accelerated model parameterization, and continuous optimization of drug development workflows through mechanistic simulation and iterative refinement.</p>
                </div>
                
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                    <div className="relative">
                        {storySteps.map((step, index) => (
                            <div 
                                key={index} 
                                ref={el => stepRefs.current[index] = el}
                                className="min-h-[70vh] flex items-center" 
                            >
                                <FadeIn>
                                    <div className={`transition-opacity duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-30'}`}>
                                        <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                                        {step.description.map((paragraph, pIndex) => (
                                            <p key={pIndex} className="text-foreground/80 text-lg leading-relaxed mb-4 last:mb-0">{paragraph}</p>
                                        ))}
                                    </div>
                                </FadeIn>
                            </div>
                        ))}
                    </div>

                    <div className="lg:sticky top-24 h-full">
                       <div className="hidden lg:flex items-center justify-center h-full min-h-[70vh]">
                            <AgenticAIFlowchart activeStep={activeStep} />
                       </div>
                       <div className="lg:hidden mt-8">
                           <AgenticAIFlowchart activeStep={5} />
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
