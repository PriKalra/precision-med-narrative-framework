
import React, { useState, useEffect, useRef } from 'react';
import FadeIn from '../ui/FadeIn';
import PBPKDiagram from '../introduction/PBPKDiagram';

const storySteps = [
    {
        title: "Mechanistic Foundation: PBPK as Digital Physiology",
        description: "Physiologically Based Pharmacokinetic (PBPK) models represent the gold standard for mechanistic drug disposition modeling. These models transform anatomical knowledge into mathematical frameworks, where each organ becomes a kinetically-defined compartment characterized by tissue volume (Vt), blood flow (Qt), and partition coefficients (Kp). This bottom-up approach enables prediction of tissue-specific drug concentrations through differential equations governing mass balance principles.",
    },
    {
        title: "From ADME Parameters to Tissue Kinetics",
        description: "The simulation demonstrates how drug molecules traverse physiological barriers—from intestinal absorption governed by permeability and first-pass metabolism, through systemic distribution dictated by plasma protein binding and tissue affinity, to hepatic clearance mediated by enzyme kinetics (Vmax, Km) and renal elimination. These ADME processes are quantitatively captured through mechanistic parameters derived from in vitro experimentation.",
    },
    {
        title: "Beyond Standard Models: Specialized Physiological Systems",
        description: "Contemporary PBPK frameworks extend beyond conventional organ models to incorporate specialized physiological systems. Pregnancy PBPK models account for gestational changes in cardiac output, organ blood flows, and placental transfer kinetics. Pediatric models scale allometrically with body weight and maturation functions. Thyroid models incorporate iodine cycling and hormone synthesis pathways—each requiring domain-specific parameterization for accurate therapeutic area modeling.",
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">Foundation: Mechanistic PBPK Modeling</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Physiologically Based Pharmacokinetic modeling forms the mechanistic backbone of modern drug development. This section explores the theoretical foundations of PBPK as a systems pharmacology approach, demonstrating how anatomical knowledge translates into predictive mathematical frameworks for drug disposition and therapeutic optimization.</p>
                    <div className="mt-4 inline-block bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded text-sm">
                        Conceptual Overview • Mechanistic Principles
                    </div>
                </div>
                
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                    {/* Left Column: Scrolling Text */}
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
                                        <p className="text-foreground/80 text-lg leading-relaxed">{step.description}</p>
                                    </div>
                                </FadeIn>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Sticky Visual */}
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
