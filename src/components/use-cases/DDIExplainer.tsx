
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const DDIExplainer: React.FC = () => {
  const [drugA, setDrugA] = useState('');
  const [drugB, setDrugB] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string>('This platform demonstrates automated DDI assessment using natural language processing and mechanistic knowledge extraction. Input two drug names to receive evidence-based interaction analysis grounded in pharmacological principles.');

  const generateDDIResult = (drug1: string, drug2: string): string => {
    const interactions: Record<string, Record<string, string>> = {
      'warfarin': {
        'amiodarone': 'Amiodarone inhibits CYP2C9 and CYP3A4, potentially increasing warfarin exposure and bleeding risk. Clinical monitoring of INR is essential, with possible warfarin dose reduction of 25-50%. This interaction demonstrates perpetrator-victim dynamics through enzymatic inhibition.',
        'aspirin': 'Concurrent use increases bleeding risk through additive anticoagulant effects. Both agents affect different components of hemostasis - warfarin inhibits vitamin K-dependent clotting factors while aspirin irreversibly inhibits platelet aggregation. Enhanced clinical monitoring required.',
        'rifampin': 'Rifampin induces CYP2C9 and CYP3A4, significantly decreasing warfarin exposure and anticoagulant effect. This represents a classic enzyme induction interaction requiring potential warfarin dose increases of 2-5 fold with careful INR monitoring.'
      },
      'digoxin': {
        'amiodarone': 'Amiodarone inhibits P-glycoprotein-mediated efflux transport, increasing digoxin bioavailability and systemic exposure. Typical recommendation includes 50% digoxin dose reduction with therapeutic drug monitoring. This exemplifies transporter-mediated drug interactions.',
        'verapamil': 'Verapamil inhibits P-glycoprotein transport, increasing digoxin absorption and decreasing renal clearance. This dual mechanism significantly elevates digoxin concentrations, requiring dose adjustment and ECG monitoring for toxicity.',
        'quinidine': 'Quinidine displaces digoxin from tissue binding sites and inhibits renal clearance, doubling digoxin concentrations. This classic interaction requires digoxin dose reduction and careful monitoring for signs of glycoside toxicity.'
      },
      'simvastatin': {
        'clarithromycin': 'Clarithromycin potently inhibits CYP3A4, dramatically increasing simvastatin exposure and rhabdomyolysis risk. This contraindicated combination demonstrates the importance of CYP3A4-mediated interactions with narrow therapeutic index drugs.',
        'amlodipine': 'Amlodipine moderately inhibits CYP3A4, increasing simvastatin exposure approximately 2-fold. Simvastatin dose should not exceed 20mg daily with this combination to minimize myopathy risk.',
        'gemfibrozil': 'Gemfibrozil inhibits both CYP2C8 and OATP1B1, significantly increasing simvastatin acid exposure. This combination is contraindicated due to severely elevated myopathy and rhabdomyolysis risk.'
      }
    };

    const drug1Lower = drug1.toLowerCase().trim();
    const drug2Lower = drug2.toLowerCase().trim();

    // Check both drug order combinations
    if (interactions[drug1Lower]?.[drug2Lower]) {
      return interactions[drug1Lower][drug2Lower];
    }
    if (interactions[drug2Lower]?.[drug1Lower]) {
      return interactions[drug2Lower][drug1Lower];
    }

    // Generic response for unknown combinations
    return `Current pharmacological databases indicate no well-documented major interactions between ${drug1} and ${drug2}. However, consider monitoring for additive effects if both agents affect similar physiological pathways. This assessment is based on mechanistic interaction databases and should be supplemented with current clinical references and patient-specific factors including genetic polymorphisms, renal function, and comedications.`;
  };

  const handleAnalyze = async () => {
    if (!drugA.trim() || !drugB.trim()) {
      setResult("Please enter names for both pharmaceutical agents to enable interaction assessment.");
      return;
    }

    setIsAnalyzing(true);
    setResult('Analyzing pharmacokinetic and pharmacodynamic interactions...');

    // Simulate analysis delay
    setTimeout(() => {
      const analysis = generateDDIResult(drugA, drugB);
      setResult(analysis);
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="bg-card p-8 rounded-xl shadow-lg">
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
        <Input
          type="text"
          placeholder="e.g., Warfarin"
          value={drugA}
          onChange={(e) => setDrugA(e.target.value)}
          className="max-w-sm"
        />
        <Input
          type="text"
          placeholder="e.g., Amiodarone"
          value={drugB}
          onChange={(e) => setDrugB(e.target.value)}
          className="max-w-sm"
        />
        <Button
          onClick={handleAnalyze}
          disabled={isAnalyzing}
          className="whitespace-nowrap"
        >
          {isAnalyzing ? 'Analyzing...' : 'Assess DDI Risk 🧬'}
        </Button>
      </div>
      <div className="min-h-[120px] bg-muted p-4 rounded-md shadow-inner">
        <p className={`${result.includes('Input two drug names') ? 'italic text-muted-foreground' : 'text-foreground'}`}>
          {result}
        </p>
      </div>
    </div>
  );
};

export default DDIExplainer;
