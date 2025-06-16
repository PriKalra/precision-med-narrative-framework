
import React, { useState, useEffect, useRef } from 'react';
import FadeIn from '../ui/FadeIn';
import PBPKDiagram from '../introduction/PBPKDiagram';

const storySteps = [
    {
        title: "MIDD: Quantitative Drug Development",
        description: [
            "Model-Informed Drug Discovery and Development (MIDD) represents a pivotal scientific discipline that quantifies drug behavior within biological systems. This interdisciplinary approach integrates computational modeling techniques including pharmacokinetics (PK), pharmacodynamics (PD), exposure-response modeling, and Physiologically-Based Pharmacokinetic (PBPK) modeling.",
            "PBPK models provide mechanistic frameworks by integrating drug physicochemical properties with physiological characteristics of biological systems, enabling a priori simulation of drug concentration-time profiles in specific organs and tissues."
        ],
    },
    {
        title: "Regulatory Recognition and Clinical Impact",
        description: [
            "The FDA explicitly defines MIDD as 'quantifying information by developing mathematical models based on full use of all available data, from sources such as in vitro, preclinical and clinical studies.' This recognition underscores MIDD's critical role in informing clinical trial designs and dosing recommendations.",
            "Quantitative Systems Pharmacology (QSP) models extend this capability by elucidating drug mechanisms of action across multiple biological scales, from molecular interactions to organ-level networks, facilitating personalized treatment strategies."
        ],
    },
    {
        title: "Current Limitations and Challenges",
        description: [
            "Traditional MIDD workflows face inherent limitations including fragmented applications lacking strategic consistency across the drug development pipeline. Conventional PBPK models rely on predefined equations and fixed assumptions, preventing full capture of biological variability and dynamic interactions.",
            "Additional challenges include data scarcity for complex physiological systems, pronounced inter-individual variability, and the computational complexity required for accurate model parameterization and validation."
        ],
    }
];

const IntroductionSection: React.FC<{ id: string }> = ({ id }) => {
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Model-Informed Drug Discovery and Development</h2>
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto">MIDD represents a quantitative approach to pharmaceutical development, leveraging computational models to predict drug behavior and optimize therapeutic strategies. This mechanistic foundation enables informed decision-making throughout the development pipeline, from target identification to personalized dosing strategies.</p>
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
                            <PBPKDiagram activeStep={activeStep} />
                       </div>
                       <div className="lg:hidden mt-8">
                           <PBPKDiagram activeStep={2} />
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;
