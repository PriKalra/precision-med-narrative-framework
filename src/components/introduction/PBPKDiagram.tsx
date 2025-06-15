
import React, { useState, useEffect } from 'react';

const organs = [
    { name: 'Liver', color: 'blue', group: 'metabolic' }, { name: 'Kidney', color: 'blue', group: 'metabolic' },
    { name: 'Brain', color: 'blue', group: 'standard' }, { name: 'Lung', color: 'blue', group: 'standard' },
    { name: 'Heart', color: 'blue', group: 'standard' }, { name: 'Gut', color: 'blue', group: 'standard' },
    { name: 'Spleen', color: 'blue', group: 'standard' }, { name: 'Muscle', color: 'blue', group: 'standard' },
    { name: 'Thyroid', color: 'red', group: 'specialized' }, { name: 'Testes', color: 'green', group: 'specialized' },
    { name: 'Prostate', color: 'green', group: 'specialized' }, { name: 'Ovaries', color: 'pink', group: 'specialized' },
    { name: 'Uterus', color: 'pink', group: 'specialized' }, { name: 'Adipose', color: 'gray', group: 'other' },
    { name: 'Skin', color: 'gray', group: 'other' }, { name: 'Blood', color: 'gray', group: 'other' },
];

const organColorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    red: 'bg-red-100 text-red-800',
    green: 'bg-green-100 text-green-800',
    pink: 'bg-pink-100 text-pink-800',
    gray: 'bg-gray-200 text-gray-800',
};

interface PBPKDiagramProps {
    activeStep: number;
}

const PBPKDiagram: React.FC<PBPKDiagramProps> = ({ activeStep }) => {
    const [highlightedOrganIndex, setHighlightedOrganIndex] = useState(-1);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        
        if (activeStep === 1) {
            // Start cycling animation for the second step
            setHighlightedOrganIndex(0); // Start immediately
            interval = setInterval(() => {
                setHighlightedOrganIndex(prev => (prev + 1) % organs.length);
            }, 1000);
        } else {
            setHighlightedOrganIndex(-1); // Reset on other steps
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [activeStep]);
    
    const getOrganHighlightClass = (organ: typeof organs[0], index: number) => {
        // Step 1: Cycling highlight
        if (activeStep === 1) {
            return highlightedOrganIndex === index ? 'scale-110 -translate-y-1 shadow-blue-300' : '';
        }
        
        // Step 2: Highlight specialized organs
        if (activeStep === 2) {
            return organ.group === 'specialized' ? 'scale-110 -translate-y-1 shadow-blue-300' : 'opacity-30';
        }
        
        // Default (Step 0) or any other case
        return '';
    };

    return (
        <div id="pbpk-diagram" className="p-4 bg-white rounded-xl shadow-lg">
            <div className="relative text-center font-semibold">
                <div className="text-xl mb-4 text-blue-600">16-Organ PBPK System</div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
                    {organs.map((organ, index) => (
                        <div 
                            key={organ.name} 
                            className={`organ p-2 rounded-lg shadow transition-all duration-500 ease-in-out ${organColorClasses[organ.color as keyof typeof organColorClasses]} ${getOrganHighlightClass(organ, index)}`}
                        >
                            {organ.name}
                        </div>
                    ))}
                </div>
                <div className="mt-4 text-sm text-gray-500 transition-opacity duration-500 h-10 flex items-center justify-center text-center">
                    {activeStep === 2 
                        ? "Our model includes specialized reproductive and thyroid organs for enhanced precision."
                        : activeStep === 1 
                        ? "Simulating drug distribution across organs."
                        : "A mechanistic PBPK model links all major physiological systems."
                    }
                </div>
            </div>
        </div>
    );
};

export default PBPKDiagram;
