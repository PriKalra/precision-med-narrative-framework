
import React from 'react';
import { Watch, BrainCircuit, ArrowRight, HeartPulse } from 'lucide-react';

const VirtualTwinVisual: React.FC = () => {
  return (
    <div className="bg-card p-4 sm:p-8 rounded-xl shadow-lg flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full">
            {/* Wearable Data Source */}
            <div className="flex flex-col items-center text-center">
                <Watch className="w-16 h-16 text-primary mb-2" />
                <h4 className="font-semibold">Wearable Devices</h4>
                <p className="text-sm text-muted-foreground max-w-xs">Real-time data stream (Heart Rate, Activity, Sleep)</p>
            </div>

            <ArrowRight className="w-8 h-8 text-muted-foreground my-4 md:my-0 -rotate-90 md:rotate-0" />
            
            {/* PBPK Virtual Twin */}
            <div className="flex flex-col items-center text-center">
                <div className="relative">
                    <BrainCircuit className="w-20 h-20 text-indigo-500" />
                    <div className="absolute top-0 left-0 w-full h-full animate-pulse rounded-full bg-indigo-500/10 -z-10"></div>
                </div>
                <h4 className="font-semibold mt-2">PBPK Virtual Twin</h4>
                <p className="text-sm text-muted-foreground max-w-xs">Dynamic model adapts to physiological changes</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-muted-foreground my-4 md:my-0 -rotate-90 md:rotate-0" />

            {/* Personalized Outcome */}
            <div className="flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-green-900/50">
                    <HeartPulse className="w-12 h-12 text-green-500" />
                </div>
                <h4 className="font-semibold mt-2">Optimized Dosing</h4>
                <p className="text-sm text-muted-foreground max-w-xs">Personalized and adaptive drug therapy</p>
            </div>
        </div>
    </div>
  );
};

export default VirtualTwinVisual;
