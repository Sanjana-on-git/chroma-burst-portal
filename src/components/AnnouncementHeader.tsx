
import React from 'react';
import { Bell } from 'lucide-react';

const AnnouncementHeader: React.FC = () => {
  return (
    <header className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-red-600/10 to-green-600/10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
            <Bell className="text-white" size={28} />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
            Announcements
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stay connected with the latest updates, events, and highlights from our institution
          </p>
        </div>
      </div>
    </header>
  );
};

export default AnnouncementHeader;
