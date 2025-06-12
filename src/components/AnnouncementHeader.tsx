import React from 'react';

const AnnouncementHeader: React.FC = () => {
  return (
    <header className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://worldarchitecture.org/cdnimgfiles/extuploadc/_dsf8951.jpg)'
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-indigo-800/60 to-transparent" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">Announcements</h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-md max-w-2xl">
        All campus-wide updates, events, and recognitions.
        </p>
      </div>
    </header>
  );
};

export default AnnouncementHeader;
