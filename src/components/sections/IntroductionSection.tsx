import React, { useState, useEffect, useRef } from 'react';
import FadeIn from '../ui/FadeIn';
import PBPKDiagram from '../introduction/PBPKDiagram';

const storySteps = [
    {
        title: "A Mechanistic View of the Body",
        description: "Traditional PBPK models create a virtual representation of an organism by linking major organs like the liver, kidney, and brain through the circulatory system. Each organ is a compartment defined by its real-world volume, blood flow, and how it partitions a drug between tissue and plasma. This detailed, bottom-up approach allows for the prediction of drug Absorption, Distribution, Metabolism, and Elimination (ADME) before a drug ever enters human trials, supporting critical decisions in early development.",
    },
    {
        title: "Simulating Drug Distribution",
        description: "The animation shows how a drug might distribute throughout the body, visiting different organs over time. This bottom-up approach allows us to simulate drug Absorption, Distribution, Metabolism, and Elimination (ADME), forming the foundation for predicting a drug's journey.",
    },
    {
        title: "Beyond the Standard Model",
        description: "True precision requires modeling specialized systems. Our framework enhances this foundation by integrating data for reproductive and thyroid tissues. Our model includes specialized reproductive (green/pink) and thyroid (red) organs for enhanced precision, which are critical for specific drugs and patient populations.",
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
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">This section introduces the core concept of PBPK modeling. PBPK models are mechanistic frameworks that simulate how a drug moves through the body. They represent the body as a series of interconnected organ compartments, each with specific physiological properties. This allows scientists to predict drug concentrations in various tissues over time, providing a powerful tool for drug development.</p>
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
                                <FadeIn>
                                    <div className={`transition-opacity duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-30'}`}>
                                        <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                                        <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
                                    </div>
                                </FadeIn>
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
