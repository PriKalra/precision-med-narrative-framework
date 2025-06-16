
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface EnzymeData {
  title: string;
  content: string;
}

const enzymeData: Record<string, EnzymeData> = {
  cyp3a: {
    title: 'CYP3A4/5 Enzyme Family',
    content: 'The CYP3A subfamily represents the most abundant cytochrome P450 enzymes in human liver and intestine, metabolizing approximately 50% of clinically used drugs. CYP3A4 exhibits substantial inter-individual variability (10-100 fold) due to genetic polymorphisms, induction/inhibition by comedications, and environmental factors. This variability significantly impacts drug clearance predictions and contributes to the microsome-hepatocyte disconnect in in vitro-in vivo extrapolation studies.'
  },
  ugts: {
    title: 'UDP-Glucuronosyltransferases (UGTs)',
    content: 'UGT enzymes catalyze Phase II glucuronidation reactions, enhancing drug hydrophilicity for renal and biliary elimination. UGT expression demonstrates significant tissue-, species-, and genetic-dependent variation, particularly affecting drugs like acetaminophen, morphine, and SN-38. Population-specific UGT expression profiles are critical for accurate cross-species scaling and prediction of glucuronidation-mediated drug interactions in diverse patient populations.'
  },
  mdr1: {
    title: 'MDR1 (P-glycoprotein)',
    content: 'MDR1 is an ATP-dependent efflux transporter that limits drug absorption and facilitates elimination across biological barriers including intestine, liver, kidney, and blood-brain barrier. Substrate specificity and expression levels vary significantly across species and individuals due to genetic polymorphisms and regulatory mechanisms. Accurate MDR1 activity prediction is essential for modeling tissue drug concentrations and transporter-mediated drug interactions, particularly for CNS-active compounds.'
  }
};

const EnzymeTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cyp3a');

  return (
    <div className="bg-card p-8 rounded-xl shadow-lg">
      <div className="flex flex-wrap justify-center border-b border-border mb-6">
        {Object.entries(enzymeData).map(([key, data]) => (
          <Button
            key={key}
            variant={activeTab === key ? "default" : "ghost"}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-t-lg border-b-2 transition-colors ${
              activeTab === key 
                ? 'border-primary bg-primary/10' 
                : 'border-transparent hover:bg-muted'
            }`}
          >
            {key === 'cyp3a' && 'CYP3A'}
            {key === 'ugts' && 'UGTs'}
            {key === 'mdr1' && 'MDR1'}
          </Button>
        ))}
      </div>
      <div className="pt-4">
        <h4 className="font-bold text-lg mb-3 text-foreground">{enzymeData[activeTab].title}</h4>
        <p className="text-muted-foreground leading-relaxed">{enzymeData[activeTab].content}</p>
      </div>
    </div>
  );
};

export default EnzymeTabs;
