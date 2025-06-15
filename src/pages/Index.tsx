
import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import ChallengeSection from '@/components/sections/ChallengeSection';
import SolutionSection from '@/components/sections/SolutionSection';
import UseCasesSection from '@/components/sections/UseCasesSection';
import ContentStrategySection from '@/components/sections/ContentStrategySection';
import FutureSection from '@/components/sections/FutureSection';

const sectionIds = ['introduction', 'the-challenge', 'the-solution', 'use-cases', 'content-strategy', 'future'];

const Index = () => {
    const [activeSection, setActiveSection] = useState('');
    const sectionRefs = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        sectionRefs.current = sectionIds.map(id => document.getElementById(id));
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="bg-slate-50">
            <Header activeSection={activeSection} />
            <main>
                <HeroSection />
                <IntroductionSection id="introduction" />
                <ChallengeSection id="the-challenge" />
                <SolutionSection id="the-solution" />
                <UseCasesSection id="use-cases" />
                <ContentStrategySection id="content-strategy" />
                <FutureSection id="future" />
            </main>
            <Footer />
        </div>
    );
};

export default Index;
