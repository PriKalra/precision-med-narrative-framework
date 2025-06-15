import React, { useState, useEffect, useRef } from 'react';
import PBPKDiagram from '../introduction/PBPKDiagram';

const storySteps = [
    {
        title: "A Mechanistic View of the Body",
        description: "Physiologically Based Pharmacokinetic (PBPK) models create a virtual representation of an organism by linking major organs—liver, kidney, brain—through the circulatory system. Each organ is a compartment defined by physiological parameters like volume and blood flow. This bottom-up approach enables the prediction of a drug's Absorption, Distribution, Metabolism, and Elimination (ADME), supporting critical decisions in early development.",
    },
    {
        title: "Simulating Drug Disposition",
        description: "The simulation illustrates how a drug distributes throughout the virtual organism, with concentrations changing in different organs over time. This quantitative characterization of drug disposition forms the mechanistic foundation for predicting a drug's journey and its potential effects, long before it is tested in humans.",
    },
    {
        title: "Modeling Specialized Systems",
        description: "Achieving true precision requires extending beyond standard models. This framework enhances the foundational PBPK structure by integrating models for specialized systems, such as reproductive and thyroid tissues. Incorporating these complexities is critical for assessing the safety and efficacy of specific drugs in distinct patient populations.",
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">The Foundation: Physiologically Based Pharmacokinetics (PBPK)</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">This section introduces Physiologically Based Pharmacokinetic (PBPK) modeling, a foundational discipline within Model-Informed Drug Discovery and Development (MIDD). PBPK models are mechanistic frameworks that quantify drug behavior by simulating its movement through a virtual representation of an organism. By defining the body as a network of organ compartments with distinct physiological properties, these models predict drug concentration-time profiles in various tissues, providing a critical quantitative tool for drug development.</p>
                </div>
                
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                    {/* Left Column: Scrolling Text */}
                    <div className="relative">
                        {storySteps.map((step, index) => (
                            <div 
                                key={index} 
                                ref={el => stepRefs.current[index] = el}
                                // Each step needs significant height to ensure proper scroll-triggering
                                className="min-h-[70vh] flex items-center" 
                            >
                                <div className={`transition-all duration-500 ease-in-out ${activeStep === index ? 'opacity-100 scale-100 blur-0' : 'opacity-40 scale-98 blur-sm'}`}>
                                    <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                                    <p className="text-foreground/80 text-lg leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Sticky Visual */}
                    {/* On mobile, this will stack naturally. On desktop, it becomes sticky. */}
                    <div className="lg:sticky top-24 h-full">
                       <div className="hidden lg:flex items-center justify-center h-full min-h-[70vh]">
                            <PBPKDiagram activeStep={activeStep} />
                       </div>
                       {/* A simplified, non-sticky view for mobile, shown once. */}
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
