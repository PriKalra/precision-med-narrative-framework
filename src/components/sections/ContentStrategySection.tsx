
import React from 'react';
import FadeIn from '../ui/FadeIn';

const contentPoints = [
  {
    title: 'Story Structure Frameworks',
    description: 'Employing established narrative structures to guide users through complex information in a clear, compelling, and memorable way.',
  },
  {
    title: 'Visual Storytelling Principles',
    description: 'Leveraging design principles, data visualization, and interactive elements to make abstract concepts tangible and engaging.',
  },
  {
    title: 'Asset Optimization Requirement',
    description: 'Ensuring all media assets are optimized for fast loading and crisp display on all devices, maintaining a high-quality user experience.',
  },
];

const ContentStrategySection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-20 min-h-screen snap-start flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">UI Content Strategy</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">The narrative and design of this experience are intentionally crafted to make complex topics accessible and engaging.</p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {contentPoints.map((point, index) => (
            <FadeIn key={point.title} delay={index * 200}>
              <div className="p-6 bg-white rounded-xl shadow-md h-full">
                <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                <p className="text-gray-700">{point.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentStrategySection;
