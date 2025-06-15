
import React, { useState, useRef, useEffect } from 'react';
import FadeIn from '../ui/FadeIn';

const ClearancePrediction: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const { current } = domRef;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div ref={domRef} className="bg-card p-8 rounded-xl shadow-lg grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h4 className="font-semibold text-lg mb-2">The HLM:HH Disconnect</h4>
        <p className="text-sm text-muted-foreground mb-4">A key issue is the "microsome-hepatocyte disconnect," where lab tests using liver microsomes (HLM) often predict higher clearance than tests with whole hepatocytes (HH), the more physiologically relevant system. Our AI models help reconcile this discrepancy, directly impacting DDI predictions by providing a more reliable estimation of a drug's true intrinsic clearance.</p>
        <p className="text-sm text-muted-foreground">The visualization shows how unbound intrinsic clearance (CLint,u) in microsomes can be much higher than in hepatocytes. This can lead to inaccurate predictions of drug elimination. Choosing the correct value is critical for IVIVE (in vitro-in vivo extrapolation) and reliable DDI assessment.</p>
      </div>
      <div className="flex justify-around items-end h-48">
        <div className="text-center">
          <div className="w-16 h-24 bg-destructive/20 rounded-t-lg relative">
            <div className={`absolute bottom-0 w-full bg-destructive rounded-t-lg ${isVisible ? 'animate-fill' : ''}`} style={{ '--fill-height': '90%' } as React.CSSProperties} ></div>
          </div>
          <p className="font-semibold mt-2">Microsomes (HLM)</p>
          <p className="text-sm text-muted-foreground">High CLint,u</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-24 bg-secondary/20 rounded-t-lg relative">
            <div className={`absolute bottom-0 w-full bg-secondary rounded-t-lg ${isVisible ? 'animate-fill' : ''}`} style={{ '--fill-height': '40%' } as React.CSSProperties}></div>
          </div>
          <p className="font-semibold mt-2">Hepatocytes (HH)</p>
          <p className="text-sm text-muted-foreground">Lower CLint,u</p>
        </div>
      </div>
    </div>
  );
};

export default ClearancePrediction;
