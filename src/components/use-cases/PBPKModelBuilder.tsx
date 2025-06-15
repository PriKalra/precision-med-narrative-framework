
import React, { useState } from 'react';
import * as OCL from 'openchemlib';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { physiologicalData } from '@/data/physiologicalData';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

interface PhyschemProps {
  mw: number;
  logP: number;
  tpsa: number;
  formula: string;
}

const PBPKModelBuilder: React.FC = () => {
  const [smiles, setSmiles] = useState('CC(=O)OC1=CC=CC=C1C(=O)O'); // Aspirin
  const [physchem, setPhyschem] = useState<PhyschemProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    setLoading(true);
    setError(null);
    setPhyschem(null);

    // Simulate async operation
    setTimeout(() => {
      try {
        // Use a type assertion to bypass incomplete/incorrect typings in openchemlib
        const OCLany: any = OCL;

        const mol = OCLany.Molecule.fromSmiles(smiles);
        const formulaData = mol.getMolecularFormula();
        const molProps = new OCLany.MoleculeProperties(mol);

        const properties: PhyschemProps = {
          mw: formulaData.getRelativeMass(),
          logP: molProps.getLogP(),
          tpsa: molProps.getPolarSurfaceArea(),
          formula: formulaData.getFormula(),
        };
        setPhyschem(properties);
      } catch (e) {
        setError('Invalid SMILES string. Please check the input.');
        console.error(e);
      } finally {
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="bg-slate-50 p-4 sm:p-8 rounded-xl shadow-lg">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Input
          type="text"
          placeholder="Enter SMILES string (e.g., for Aspirin)"
          value={smiles}
          onChange={(e) => setSmiles(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={handleAnalyze} disabled={loading} className="whitespace-nowrap">
          {loading ? 'Calculating...' : 'Calculate Parameters'}
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Drug Parameters (from SMILES)</CardTitle>
            <CardDescription>Parameters calculated from SMILES via openchemlib.js</CardDescription>
          </CardHeader>
          <CardContent>
            {physchem ? (
              <ul className="space-y-2 text-sm">
                <li><strong>Formula:</strong> {physchem.formula}</li>
                <li><strong>Molecular Weight:</strong> {physchem.mw.toFixed(2)} g/mol</li>
                <li><strong>logP (Octanol-water):</strong> {physchem.logP.toFixed(2)}</li>
                <li><strong>Topological Polar Surface Area:</strong> {physchem.tpsa.toFixed(2)} Å²</li>
              </ul>
            ) : (
              <p className="text-sm text-gray-500 italic">Enter a SMILES string and click calculate.</p>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Parameters (Human)</CardTitle>
            <CardDescription>Simulated NHANES Data</CardDescription>
          </CardHeader>
          <CardContent className="h-48 overflow-y-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Organ</th>
                  <th className="px-4 py-2">Volume (L)</th>
                  <th className="px-4 py-2">Blood Flow (L/hr)</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(physiologicalData).map(([organ, data]) => (
                  <tr key={organ} className="bg-white border-b">
                    <td className="px-4 py-2 font-medium">{organ}</td>
                    <td className="px-4 py-2">{data.volumeL.toFixed(2)}</td>
                    <td className="px-4 py-2">{data.bloodFlowLhr.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PBPKModelBuilder;
