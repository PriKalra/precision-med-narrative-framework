import React, { useState, useRef, useEffect, ReactNode } from 'react';
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}
const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  className = ''
}) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    const {
      current
    } = domRef;
    if (current) {
      observer.observe(current);
    }
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);
  return <div ref={domRef} style={{
    transitionDelay: `${delay}ms`
  }} className="">
      {children}
    </div>;
};
export default FadeIn;