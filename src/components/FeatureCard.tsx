import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  iconColor = 'text-purple-600'
}) => {
  return (
    <div className="flex items-start space-x-4 p-4">
      <div className="bg-purple-100 rounded-xl p-3 flex-shrink-0">
        <Icon size={24} className={iconColor} />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;