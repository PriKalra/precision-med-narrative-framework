import React from 'react';
import { Bot, BrainCircuit, Database, FlaskConical, TestTube, FileText, UserCheck, Repeat, Workflow, Users, Milestone, Library } from 'lucide-react';

const GNNVisual = () => (
    <div className="p-4 bg-card rounded-xl shadow-lg w-full max-w-lg">
        <div className="flex items-center justify-center h-48 space-x-4">
            <span className="text-sm font-mono text-center text-muted-foreground">Molecule<br/>(SMILES)</span>
            <span className="text-2xl text-gray-400">&rarr;</span>
            <div className="text-center">
                <div className="relative w-24 h-24 animate-pulse">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full"></div>
                    <div className="absolute top-2 left-2 w-4 h-4 bg-primary/70 rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-primary/70 rounded-full"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 bg-primary/70 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-primary/70 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold mt-2 block">GNN Model</span>
            </div>
            <span className="text-2xl text-gray-400">&rarr;</span>
            <div className="text-left text-sm font-mono text-muted-foreground">
                <p>Vss: 1.5 L/kg</p>
                <p>CL: 20 mL/min</p>
                <p>Papp: 10e-6</p>
                <span className="text-xs font-semibold mt-2 block text-foreground">(Predicted ADME)</span>
            </div>
        </div>
    </div>
);

const FlowchartNode = ({ icon, title, description, isActive, isDimmed, className = '' }) => (
    <div className={`p-3 border rounded-lg transition-all duration-500 transform ${isActive ? 'bg-card shadow-lg scale-105 border-primary' : 'bg-card/60 shadow'} ${isDimmed ? 'opacity-40' : 'opacity-100'} ${className}`}>
        <div className="flex items-center space-x-3">
            {React.cloneElement(icon, { className: `w-7 h-7 shrink-0 ${isActive ? 'text-primary' : 'text-muted-foreground'}` })}
            <div>
                <h4 className={`font-semibold text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>{title}</h4>
                {description && <p className="text-xs text-muted-foreground">{description}</p>}
            </div>
        </div>
    </div>
);

const Arrow = ({ isActive }) => (
    <div className={`flex justify-center items-center h-8 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
        <Milestone className="w-6 h-6 text-muted-foreground/50 rotate-90" />
    </div>
);

const AIFlowchart = ({ activeStep }) => {
    const isVisible = (step) => activeStep >= step;
    const isCurrent = (step) => activeStep === step;

    return (
        <div className="w-full max-w-md mx-auto p-4 space-y-2 font-sans text-xs flex flex-col items-center">
            <FlowchartNode 
                icon={<Users />} 
                title="Human Expert Input" 
                description="Pharmacologist defines problem"
                isActive={isCurrent(2) || isVisible(3)}
                isDimmed={activeStep > 2 && isVisible(2)}
            />
            <Arrow isActive={isVisible(2)} />
            <FlowchartNode 
                icon={<Bot />} 
                title="Conversational Agent" 
                description="Processes natural language query"
                isActive={isCurrent(2) || isVisible(3)}
                isDimmed={activeStep > 2 && isVisible(2)}
            />
            <Arrow isActive={isVisible(2)} />
            <FlowchartNode 
                icon={<Workflow />} 
                title="Planning Agent" 
                description="Orchestrates workflow"
                isActive={isCurrent(2) || isVisible(3)}
                isDimmed={activeStep > 2 && isVisible(2)}
            />
            <Arrow isActive={isVisible(3)} />

            <div className={`grid grid-cols-2 gap-4 w-full transition-opacity duration-500 ${isVisible(3) ? 'opacity-100' : 'opacity-20'}`}>
                <FlowchartNode icon={<Database />} title="Data Retrieval" description="" isActive={isCurrent(3) || isVisible(4)} isDimmed={activeStep > 3 && isVisible(3)} />
                <FlowchartNode icon={<Library />} title="Knowledge Extraction" description="" isActive={isCurrent(3) || isVisible(4)} isDimmed={activeStep > 3 && isVisible(3)} />
                <FlowchartNode icon={<FlaskConical />} title="Hypothesis Generation" description="" isActive={isCurrent(3) || isVisible(4)} isDimmed={activeStep > 3 && isVisible(3)} />
                <FlowchartNode icon={<BrainCircuit />} title="ML Parameter Prediction" description="" isActive={isCurrent(3) || isVisible(4)} isDimmed={activeStep > 3 && isVisible(3)} />
            </div>

            <Arrow isActive={isVisible(4)} />

            <FlowchartNode 
                icon={<TestTube />} 
                title="Simulation Agent" 
                description="PBPK/PK/PD/QSP Models"
                isActive={isCurrent(4) || isVisible(5)}
                isDimmed={activeStep > 4 && isVisible(4)}
            />

            <Arrow isActive={isVisible(5)} />

            <div className="relative w-full flex justify-center">
                <FlowchartNode 
                    icon={<Repeat />} 
                    title="Evaluation & Refinement Loop" 
                    description="Iterative optimization"
                    isActive={isCurrent(5) || isVisible(6)}
                    isDimmed={activeStep > 5 && isVisible(5)}
                    className="w-3/4"
                />
            </div>
            
            <Arrow isActive={isVisible(6)} />

            <div className={`grid grid-cols-2 gap-4 w-full transition-opacity duration-500 ${isVisible(6) ? 'opacity-100' : 'opacity-20'}`}>
                <FlowchartNode 
                    icon={<UserCheck />} 
                    title="Human Oversight" 
                    description="Expert review & approval"
                    isActive={isCurrent(6) || isVisible(7)}
                    isDimmed={activeStep > 6 && isVisible(6)}
                />
                <FlowchartNode 
                    icon={<FileText />} 
                    title="Regulatory & Reporting" 
                    description="Automated documentation"
                    isActive={isCurrent(6) || isVisible(7)}
                    isDimmed={activeStep > 6 && isVisible(6)}
                />
            </div>
        </div>
    );
};


const AgenticAIFlowchart: React.FC<{ activeStep: number }> = ({ activeStep }) => {
    return (
        <div className="w-full flex justify-center items-center">
             <div className="relative w-full max-w-lg h-[70vh]">
                <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeStep === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                   <div className="flex items-center justify-center h-full">
                     <GNNVisual />
                   </div>
                </div>
                <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeStep > 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                   <div className="flex items-center justify-center h-full">
                     <AIFlowchart activeStep={activeStep} />
                   </div>
                </div>
            </div>
        </div>
    );
};

export default AgenticAIFlowchart;
