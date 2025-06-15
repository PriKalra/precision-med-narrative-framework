
import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';

const IntroductionSection = lazy(() => import('@/components/sections/IntroductionSection'));
const ChallengeSection = lazy(() => import('@/components/sections/ChallengeSection'));
const SolutionSection = lazy(() => import('@/components/sections/SolutionSection'));
const UseCasesSection = lazy(() => import('@/components/sections/UseCasesSection'));
const FutureSection = lazy(() => import('@/components/sections/FutureSection'));
const Footer = lazy(() => import('@/components/layout/Footer'));

const sectionIds = ['introduction', 'the-challenge', 'the-solution', 'use-cases', 'future'];

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
        <div className="">
            <Header activeSection={activeSection} />
            <main>
                <HeroSection />
                <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-primary">Loading...</div>}>
                    <IntroductionSection id="introduction" />
                    <ChallengeSection id="the-challenge" />
                    <SolutionSection id="the-solution" />
                    <UseCasesSection id="use-cases" />
                    <FutureSection id="future" />
                </Suspense>
            </main>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default Index;
