
import React from 'react';

interface HeaderProps {
  activeSection: string;
}

const navLinks = [
  { href: '#introduction', label: 'Introduction' },
  { href: '#the-challenge', label: 'The Challenge' },
  { href: '#the-solution', label: 'The Solution' },
  { href: '#use-cases', label: 'Use Cases' },
  { href: '#future', label: 'Future' },
];

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  return (
    <header id="main-header" className="bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-md border-b border-border">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-lg font-bold text-primary">GNN-PBPK Framework</div>
        <div className="hidden md:flex space-x-6 text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hover:text-primary transition-colors nav-link ${activeSection === link.href.substring(1) ? 'section-active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
