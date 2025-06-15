
import React from 'react';
import { TestTube2, Atom, GitMerge } from 'lucide-react';
import FadeIn from '../ui/FadeIn';

const complexities = [
  {
    title: 'Formulation Impact',
    icon: <TestTube2 className="w-12 h-12 text-primary mb-4" />,
    description: "Current PBPK models often simplify the impact of complex drug formulations. Integrating the precise characteristics of novel formulations (e.g., sustained-release systems, nanoparticles) is crucial and requires deep expertise to parameterize how a drug's physical form dictates its initial disposition."
  },
  {
    title: 'Nanomedicine & Complex Devices',
    icon: <Atom className="w-12 h-12 text-primary mb-4" />,
    description: "Modeling nanomedicines and drugs from medical devices (e.g., drug-eluting stents) is uniquely challenging. The virtual twin must evolve to incorporate intricate biophysical interactions and device-specific release kinetics that go beyond traditional PBPK compartments."
  },
  {
    title: 'Seamless Translational Continuum',
    icon: <GitMerge className="w-12 h-12 text-primary mb-4" />,
    description: "The vision is a continuous predictive thread from preclinical data to individual patient management. This requires robust methods for scaling models across species and patient populations, using standardized data (like SEND/ADAM) to build a seamless translational bridge."
  }
];

const VirtualTwinComplexities: React.FC = () => {
  return (
    <div className="mt-12">
        <h4 className="text-xl font-semibold mb-6 text-center text-foreground">Addressing Complexities in Virtual Twin Integration</h4>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {complexities.map((item, index) => (
                <FadeIn key={item.title} delay={index * 200}>
                    <div className="p-6 bg-card rounded-xl shadow-lg h-full flex flex-col items-center text-center">
                        {item.icon}
                        <h5 className="font-semibold text-lg mb-3">{item.title}</h5>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                </FadeIn>
            ))}
        </div>
    </div>
  );
};

export default VirtualTwinComplexities;
