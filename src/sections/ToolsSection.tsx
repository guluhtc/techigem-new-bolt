import React from 'react';
import ToolsHeader from '../components/tools/ToolsHeader';
import ToolsGrid from '../components/tools/ToolsGrid';
import ToolsCTA from '../components/tools/ToolsCTA';

const ToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <ToolsHeader />
        <ToolsGrid />
        <ToolsCTA />
      </div>
    </section>
  );
};

export default ToolsSection;