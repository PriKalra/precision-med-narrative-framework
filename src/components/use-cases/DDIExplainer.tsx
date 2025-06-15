import React, { useState } from 'react';

const DDIExplainer: React.FC = () => {
    const [drugA, setDrugA] = useState('');
    const [drugB, setDrugB] = useState('');
    const [result, setResult] = useState("Leverage the power of Large Language Models to quickly assess potential drug-drug interactions. Input two common drug names, and our AI will provide a concise explanation of how they might interact, highlighting relevant mechanisms and clinical considerations.");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleAnalyze = async () => {
        if (!drugA || !drugB) {
            setResult("Please enter names for both drugs.");
            setIsError(true);
            return;
        }

        setIsLoading(true);
        setIsError(false);
        setResult('');

        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        if (!apiKey) {
            setResult("API key is not configured. Please set the VITE_GEMINI_API_KEY environment variable.");
            setIsError(true);
            setIsLoading(false);
            return;
        }

        const prompt = `Explain the potential drug-drug interaction between ${drugA} and ${drugB}. Focus on pharmacokinetic (ADME) and pharmacodynamic mechanisms, and any common enzymes or transporters involved. If there's no known common interaction, state that. Keep the explanation concise and suitable for a scientific audience.`;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });
            const data = await response.json();

            if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
                setResult(data.candidates[0].content.parts[0].text);
            } else {
                setResult(data.error?.message || "Could not generate DDI explanation. The response from the AI was empty or invalid.");
                setIsError(true);
            }
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            setResult(`An error occurred: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-slate-50 p-4 sm:p-8 rounded-xl shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
                <input type="text" value={drugA} onChange={(e) => setDrugA(e.target.value)} placeholder="e.g., Warfarin" className="p-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 flex-grow max-w-sm"/>
                <input type="text" value={drugB} onChange={(e) => setDrugB(e.target.value)} placeholder="e.g., Amiodarone" className="p-3 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 flex-grow max-w-sm"/>
                <button onClick={handleAnalyze} disabled={isLoading} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition-colors transform hover:scale-105 active:scale-95 whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed">
                    {isLoading ? 'Analyzing...' : 'Analyze Potential DDI ✨'}
                </button>
            </div>
            <div className={`min-h-[100px] bg-white p-4 rounded-md shadow-inner flex items-center justify-center ${isError ? 'text-red-500' : 'text-gray-900'} ${!result && !isLoading ? 'italic text-gray-500' : ''}`}>
                {isLoading ? '' : result}
            </div>
             {isLoading && (
                <div className="text-center mt-4 text-blue-600 font-semibold">
                    Analyzing... please wait.
                </div>
            )}
        </div>
    );
};

export default DDIExplainer;
