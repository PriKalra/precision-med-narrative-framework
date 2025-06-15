
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card text-foreground py-6 snap-start">
      <div className="container mx-auto px-6 text-center text-sm">
        <p>&copy; 2025 GNN-PBPK Framework Initiative. All rights reserved.</p>
        <p className="text-muted-foreground mt-1">This interactive report is a conceptual representation based on the "Advancing Precision Medicine" framework.</p>
      </div>
    </footer>
  );
};

export default Footer;
