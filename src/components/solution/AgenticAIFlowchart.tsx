
import React from 'react';
import { Bot, BrainCircuit, Database, FlaskConical, TestTube, FileText, UserCheck, Repeat, Workflow, Users, Milestone, Library, Sparkles } from 'lucide-react';

const GNNVisual = () => (
    <div className="p-4 bg-gradient-to-br from-card to-card/80 rounded-xl shadow-lg w-full max-w-lg border">
        <div className="flex items-center justify-center h-48 space-x-4">
            <div className="text-center">
                <span className="text-sm font-mono text-center text-muted-foreground block mb-2">SMILES Input</span>
                <div className="bg-background p-2 rounded font-mono text-xs">
                    CC(C)NCC(O)COc1cccc2ccccc12
                </div>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-2xl text-primary">&rarr;</span>
                <Sparkles className="w-4 h-4 text-primary/60 animate-pulse" />
            </div>
            <div className="text-center">
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full animate-ping"></div>
                    <div className="absolute top-2 left-2 w-4 h-4 bg-primary/70 rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 bg-primary/70 rounded-full"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 bg-secondary/70 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-secondary/70 rounded-full"></div>
                </div>
                <span className="text-sm font-semibold mt-2 block">Graph Neural Network</span>
                <span className="text-xs text-muted-foreground">Molecular Representation</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-2xl text-secondary">&rarr;</span>
                <BrainCircuit className="w-4 h-4 text-secondary/60" />
            </div>
            <div className="text-left text-sm font-mono bg-background p-3 rounded">
                <p className="text-green-600 dark:text-green-400">Vss: 1.5 ± 0.3 L/kg</p>
                <p className="text-blue-600 dark:text-blue-400">CLh: 20 ± 5 mL/min</p>
                <p className="text-purple-600 dark:text-purple-400">Papp: 1.2e-6 cm/s</p>
                <p className="text-orange-600 dark:text-orange-400">fu: 0.15 ± 0.05</p>
                <span className="text-xs font-semibold mt-2 block text-foreground">ADME Predictions + Uncertainty</span>
            </div>
        </div>
    </div>
);

const FlowchartNode = ({ icon, title, description, isActive, isDimmed, className = '' }) => (
    <div className={`p-3 border rounded-lg transition-all duration-500 transform ${isActive ? 'bg-gradient-to-r from-card to-card/80 shadow-lg scale-105 border-primary ring-2 ring-primary/20' : 'bg-card/60 shadow'} ${isDimmed ? 'opacity-40' : 'opacity-100'} ${className}`}>
        <div className="flex items-center space-x-3">
            {React.cloneElement(icon, { className: `w-7 h-7 shrink-0 ${isActive ? 'text-primary animate-pulse' : 'text-muted-foreground'}` })}
            <div>
                <h4 className={`font-semibold text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>{title}</h4>
                {description && <p className="text-xs text-muted-foreground">{description}</p>}
            </div>
        </div>
    </div>
);

const Arrow = ({ isActive }) => (
    <div className={`flex justify-center items-center h-8 transition-all duration-500 ${isActive ? 'opacity-100 scale-110' : 'opacity-20'}`}>
        <Milestone className={`w-6 h-6 text-muted-foreground/50 rotate-90 ${isActive ? 'animate-pulse' : ''}`} />
    </div>
);

const AIFlowchart = ({ activeStep }) => {
    const isVisible = (step) => activeStep >= step;
    const isCurrent = (step) => activeStep === step;

    return (
        <div className="w-full max-w-md mx-auto p-4 space-y-2 font-sans text-xs flex flex-col items-center">
            <div className="text-center mb-4">
                <h4 className="font-semibold text-sm text-primary mb-1">Conceptual Agentic AI Workflow</h4>
                <p className="text-xs text-muted-foreground">Theoretical Framework for MIDD Integration</p>
            </div>
            
            <FlowchartNode 
                icon={<Users />} 
                title="Domain Expert Interface" 
                description="Natural language query interpretation"
                isActive={isCurrent(2) || isVisible(3)}
                isDimmed={activeStep > 2 && isVisible(2)}
            />
            <Arrow isActive={isVisible(2)} />
            <FlowchartNode 
                icon={<Bot />} 
                title="Conversational Agent" 
                description="LLM-powered understanding"
                isActive={isCurrent(2) || isVisible(3)}
                isDimmed={activeStep > 2 && isVisible(2)}
            />
            <Arrow isActive={isVisible(2)} />
            <FlowchartNode 
                icon={<Workflow />} 
                title="Orchestration Agent" 
                description="Multi-agent coordination"
                isActive={isCurrent(2) || isVisible(3)}
                isDimmed={activeStep > 2 && isVisible(2)}
            />
            <Arrow isActive={isVisible(3)} />

            <div className={`grid grid-cols-2 gap-3 w-full transition-opacity duration-500 ${isVisible(3) ? 'opacity-100' : 'opacity-20'}`}>
                <FlowchartNode icon={<Database />} title="Data Mining" description="Literature & databases" isActive={isCurrent(3) || isVisible(4)} isDimmed={activeStep > 3 && isVisible(3)} />
                <FlowchartNode icon={<Library />} title="Knowledge Graph" description="Ontology reasoning" isActive={isCurrent(3) || isVisible(4)} isDimmed={activeStep > 3 && isVisible(3)} />
                <FlowchartNode icon={<FlaskConical />} title="Hypothesis Agent" description="Mechanism generation" isActive={isCurrent(3) || isVisible(4)} isDimmed={activeStep > 3 && isVisible(3)} />
                <FlowchartNode icon={<BrainCircuit />} title="ML Parameter Agent" description="QSAR/QSPR prediction" isActive={isCurrent(3) || isVisible(4)} isDimmed={activeStep > 3 && isVisible(3)} />
            </div>

            <Arrow isActive={isVisible(4)} />

            <FlowchartNode 
                icon={<TestTube />} 
                title="Simulation Engine" 
                description="PBPK/QSP model execution"
                isActive={isCurrent(4) || isVisible(5)}
                isDimmed={activeStep > 4 && isVisible(4)}
            />

            <Arrow isActive={isVisible(5)} />

            <div className="relative w-full flex justify-center">
                <FlowchartNode 
                    icon={<Repeat />} 
                    title="Adaptive Learning Loop" 
                    description="Bayesian model updating"
                    isActive={isCurrent(5) || isVisible(6)}
                    isDimmed={activeStep > 5 && isVisible(5)}
                    className="w-3/4"
                />
            </div>
            
            <Arrow isActive={isVisible(6)} />

            <div className={`grid grid-cols-2 gap-3 w-full transition-opacity duration-500 ${isVisible(6) ? 'opacity-100' : 'opacity-20'}`}>
                <FlowchartNode 
                    icon={<UserCheck />} 
                    title="Expert Validation" 
                    description="Human-in-the-loop oversight"
                    isActive={isCurrent(6) || isVisible(7)}
                    isDimmed={activeStep > 6 && isVisible(6)}
                />
                <FlowchartNode 
                    icon={<FileText />} 
                    title="Documentation Agent" 
                    description="Automated reporting"
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
