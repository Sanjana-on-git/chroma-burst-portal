
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Image, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PhotoGallery = () => {
  const albums = [
    {
      title: "Convocation 2024",
      description: "Graduation ceremony highlights and memorable moments",
      photoCount: 156,
      coverImage: "🎓",
      category: "academic"
    },
    {
      title: "Annual Tech Fest",
      description: "Innovation showcase, competitions, and tech demonstrations",
      photoCount: 89,
      coverImage: "🤖",
      category: "events"
    },
    {
      title: "Workshop Series",
      description: "Skill development sessions and hands-on learning experiences",
      photoCount: 67,
      coverImage: "🛠️",
      category: "academic"
    },
    {
      title: "Cultural Celebrations",
      description: "Festival celebrations, performances, and cultural events",
      photoCount: 134,
      coverImage: "🎭",
      category: "cultural"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-poppins">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-green-100 transition-colors mb-6">
              <ArrowLeft size={20} />
              <span>Back to Announcements</span>
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <Camera className="text-white text-4xl animate-glow" size={40} />
              <h1 className="text-5xl md:text-6xl font-bold font-poppins text-white drop-shadow-lg">
                📷 Photo Gallery
              </h1>
            </div>
            
            <p className="text-xl text-white text-opacity-90 font-poppins font-light max-w-2xl">
              Categorized albums featuring memorable institutional moments and events
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-green-50 to-green-100 border-0 hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3 group-hover:animate-float">
                    {album.coverImage}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-green-900">{album.title}</h3>
                    <span className="text-sm text-green-600 bg-green-200 px-2 py-1 rounded-full">
                      {album.category}
                    </span>
                  </div>
                  <p className="text-green-800 text-sm mb-3">{album.description}</p>
                  <div className="flex items-center justify-center gap-4 text-sm text-green-700">
                    <div className="flex items-center gap-1">
                      <Image size={16} />
                      <span>{album.photoCount} photos</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={16} />
                      <span>View Album</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PhotoGallery;
