
import React from 'react';
import { Bell } from 'lucide-react';

const AnnouncementHeader: React.FC = () => {
  return (
    <header className="relative overflow-hidden">
      {/* Main gradient background */}
      <div className="bg-gradient-to-r from-red-400 via-green-400 to-blue-500 py-16 px-6">
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-float"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Content */}
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Bell className="text-white text-4xl animate-glow" size={40} />
            <h1 className="text-5xl md:text-6xl font-bold font-poppins text-white drop-shadow-lg">
              📢 Announcements
            </h1>
          </div>
          
          <div className="w-24 h-1 bg-white bg-opacity-50 mx-auto rounded-full mb-4"></div>
          
          <p className="text-xl text-white text-opacity-90 font-poppins font-light max-w-2xl mx-auto">
            Stay connected with the latest updates, events, and highlights from our institution
          </p>
        </div>
        
        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-r from-red-400 via-green-400 to-blue-500 transform skew-y-1"></div>
      </div>
    </header>
  );
};

export default AnnouncementHeader;
