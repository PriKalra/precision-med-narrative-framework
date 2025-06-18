
import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'introduction', label: 'Introduction', href: '#introduction' },
    { id: 'the-challenge', label: 'Challenge', href: '#the-challenge' },
    { id: 'the-solution', label: 'Solution', href: '#the-solution' },
    { id: 'use-cases', label: 'Applications', href: '#use-cases' },
    { id: 'framework', label: 'Framework', href: '#framework' },
    { id: 'benefits', label: 'Benefits', href: '#benefits' },
    { id: 'future', label: 'Future', href: '#future' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AI</span>
            </div>
            <span className="font-semibold text-lg">Agentic AI-MIDD</span>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
