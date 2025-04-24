import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import Button from './Button';

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgGradient?: string;
  link: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  icon: Icon,
  iconColor = 'text-purple-600',
  bgGradient = 'from-purple-100 to-pink-100',
  link
}) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className={`p-6 flex flex-col h-full`}>
        <div className={`bg-gradient-to-br ${bgGradient} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} className={iconColor} />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        <Button 
          variant="secondary" 
          size="sm" 
          className="mt-auto"
          onClick={() => window.open(link, '_blank')}
        >
          Try for Free
        </Button>
      </div>
    </div>
  );
};

export default ToolCard;