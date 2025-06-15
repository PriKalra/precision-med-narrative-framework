
import React, { useState, useEffect, useRef } from 'react';
import FadeIn from '../ui/FadeIn';

const organs = [
    { name: 'Liver', color: 'blue' }, { name: 'Kidney', color: 'blue' },
    { name: 'Brain', color: 'blue' }, { name: 'Lung', color: 'blue' },
    { name: 'Heart', color: 'blue' }, { name: 'Gut', color: 'blue' },
    { name: 'Spleen', color: 'blue' }, { name: 'Muscle', color: 'blue' },
    { name: 'Thyroid', color: 'red' }, { name: 'Testes', color: 'green' },
    { name: 'Prostate', color: 'green' }, { name: 'Ovaries', color: 'pink' },
    { name: 'Uterus', color: 'pink' }, { name: 'Adipose', color: 'gray' },
    { name: 'Skin', color: 'gray' }, { name: 'Blood', color: 'gray' },
];

const organColorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    red: 'bg-red-100 text-red-800',
    green: 'bg-green-100 text-green-800',
    pink: 'bg-pink-100 text-pink-800',
    gray: 'bg-gray-200 text-gray-800',
};

const IntroductionSection: React.FC<{ id: string }> = ({ id }) => {
    const [highlightedOrgan, setHighlightedOrgan] = useState(-1);
    const diagramRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const interval = setInterval(() => {
                        setHighlightedOrgan(prev => (prev + 1) % organs.length);
                    }, 1500);
                    return () => clearInterval(interval);
                } else {
                    setHighlightedOrgan(-1);
                }
            }, { threshold: 0.5 }
        );

        if (diagramRef.current) observer.observe(diagramRef.current);
        return () => {
            if (diagramRef.current) observer.unobserve(diagramRef.current);
        };
    }, []);

    return (
        <section id={id} className="py-20 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">The Foundation: Physiologically Based Pharmacokinetics (PBPK)</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">This section introduces the core concept of PBPK modeling. PBPK models are mechanistic frameworks that simulate how a drug moves through the body. They represent the body as a series of interconnected organ compartments, each with specific physiological properties. This allows scientists to predict drug concentrations in various tissues over time, providing a powerful tool for drug development.</p>
                </div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <FadeIn>
                        <h3 className="text-2xl font-semibold mb-4">A Mechanistic View of the Body</h3>
                        <p className="text-gray-700 mb-4">Traditional PBPK models create a virtual representation of an organism by linking major organs like the liver, kidney, and brain through the circulatory system. Each organ is a compartment defined by its real-world volume, blood flow, and how it partitions a drug between tissue and plasma.</p>
                        <p className="text-gray-700">This detailed, bottom-up approach allows for the prediction of drug Absorption, Distribution, Metabolism, and Elimination (ADME) before a drug ever enters human trials, supporting critical decisions in early development.</p>
                    </FadeIn>
                    <FadeIn>
                        <div ref={diagramRef} id="pbpk-diagram" className="mt-10 lg:mt-0 p-4 bg-white rounded-xl shadow-lg">
                            <div className="relative text-center font-semibold">
                                <div className="text-xl mb-4 text-blue-600">16-Organ PBPK System</div>
                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
                                    {organs.map((organ, index) => (
                                        <div key={organ.name} className={`organ p-2 rounded-lg shadow transition-all duration-300 ease-in-out ${organColorClasses[organ.color as keyof typeof organColorClasses]} ${highlightedOrgan === index ? 'scale-110 -translate-y-1 shadow-blue-300' : ''}`}>
                                            {organ.name}
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 text-sm text-gray-500">Our model includes specialized reproductive (green/pink) and thyroid (red) organs for enhanced precision.</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;
