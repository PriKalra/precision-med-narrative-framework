
import React, { useState } from 'react';

const tabData = {
  cyp3a: {
    title: 'CYP3A Family',
    content: 'Found in the liver and intestine, CYP3A enzymes are responsible for metabolizing over 50% of prescription drugs. Their activity shows high variability between people due to genetics and can be a source of the HLM:HH disconnect. Predicting CYP3A-mediated interactions and understanding how varying expression levels impact them is a primary goal for DDI assessment, enabling more precise dosing.',
  },
  ugts: {
    title: 'UGTs (UDP-glucuronosyltransferases)',
    content: 'These are key Phase II metabolism enzymes that make compounds more water-soluble for excretion. Their expression and activity are highly tissue- and species-dependent, leading to significant variations in unbound intrinsic clearance. Integrating these specific expression profiles improves cross-species scaling and DDI predictions related to glucuronidation.',
  },
  mdr1: {
    title: 'MDR1 (P-glycoprotein)',
    content: "MDR1 is an efflux transporter that acts like a bouncer, pumping drugs out of cells. It's crucial in limiting drug absorption and preventing entry into the brain. Its function, substrate specificity, and expression levels can differ significantly across species. Accounting for these varied expression profiles is key to predicting transporter-mediated DDIs and tissue-specific drug concentrations.",
  }
};

const EnzymeTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof tabData>('cyp3a');

  return (
    <div className="bg-slate-50 p-4 sm:p-8 rounded-xl shadow-lg">
      <div className="flex flex-wrap justify-center border-b border-gray-200">
        <button onClick={() => setActiveTab('cyp3a')} className={`enzyme-tab px-4 py-2 -mb-px font-semibold rounded-t transition-colors ${activeTab === 'cyp3a' ? 'tab-active' : 'text-gray-800'}`}>CYP3A</button>
        <button onClick={() => setActiveTab('ugts')} className={`enzyme-tab px-4 py-2 -mb-px font-semibold rounded-t transition-colors ${activeTab === 'ugts' ? 'tab-active' : 'text-gray-800'}`}>UGTs</button>
        <button onClick={() => setActiveTab('mdr1')} className={`enzyme-tab px-4 py-2 -mb-px font-semibold rounded-t transition-colors ${activeTab === 'mdr1' ? 'tab-active' : 'text-gray-800'}`}>MDR1</button>
      </div>
      <div className="pt-4">
        <h4 className="font-bold text-lg mb-2">{tabData[activeTab].title}</h4>
        <p className="text-gray-700">{tabData[activeTab].content}</p>
      </div>
    </div>
  );
};

export default EnzymeTabs;
