import React from 'react';
import { Instagram } from 'lucide-react';

const ToolsHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md mb-4">
        <Instagram size={16} className="text-purple-600" />
        <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Free Instagram Tools
        </span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
        <span className="inline-flex flex-wrap items-baseline justify-center gap-x-2">
          <span>Supercharge Your Instagram With</span>
          <span className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Powerful Tools
            <div className="absolute bottom-1 left-0 w-full h-2 bg-purple-200 transform -skew-x-12"></div>
          </span>
        </span>
      </h2>
      
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Access our comprehensive suite of free Instagram tools designed to help you create, download, and analyze content.
      </p>
    </div>
  );
};

export default ToolsHeader;