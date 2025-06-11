
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface AnnouncementCardProps {
  title: string;
  description: string;
  emoji: string;
  bgClass: string;
  textColorClass?: string;
  delay?: number;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  title,
  description,
  emoji,
  bgClass,
  textColorClass = "text-gray-800",
  delay = 0
}) => {
  return (
    <Card 
      className={`${bgClass} transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer animate-slide-in border-0 overflow-hidden relative`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 right-0 w-20 h-20 opacity-10 transform rotate-12 translate-x-6 -translate-y-6">
        <div className="text-6xl">{emoji}</div>
      </div>
      
      <CardContent className="p-6 relative z-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="text-3xl group-hover:animate-float">
            {emoji}
          </div>
          <h3 className={`text-xl font-semibold font-poppins ${textColorClass} group-hover:text-opacity-90`}>
            {title}
          </h3>
        </div>
        
        <p className={`${textColorClass} font-poppins text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity`}>
          {description}
        </p>
        
        <div className="mt-4 flex justify-end">
          <div className="w-8 h-1 bg-white bg-opacity-30 rounded-full group-hover:w-12 transition-all duration-300"></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;
