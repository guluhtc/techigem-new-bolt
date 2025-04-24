import React from 'react';
import { Hexagon } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Hexagon 
        size={32} 
        className="text-purple-600 mr-2 fill-purple-100" 
        strokeWidth={1.5} 
      />
      <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
        Techigem
      </span>
    </div>
  );
};

export default Logo;