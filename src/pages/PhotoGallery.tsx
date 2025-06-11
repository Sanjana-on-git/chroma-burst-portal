
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Image, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PhotoGallery = () => {
  const albums = [
    {
      title: "Convocation 2024",
      description: "Graduation ceremony highlights and memorable moments from the Class of 2024 celebration.",
      photoCount: 156,
      coverImage: "🎓",
      category: "Academic",
      featured: true
    },
    {
      title: "Annual Tech Fest",
      description: "Innovation showcase featuring student projects, competitions, and technology demonstrations.",
      photoCount: 89,
      coverImage: "🤖",
      category: "Events",
      featured: false
    },
    {
      title: "Workshop Series",
      description: "Professional development sessions and hands-on learning experiences across departments.",
      photoCount: 67,
      coverImage: "🛠️",
      category: "Academic",
      featured: false
    },
    {
      title: "Cultural Celebrations",
      description: "Festival celebrations, artistic performances, and multicultural events throughout the year.",
      photoCount: 134,
      coverImage: "🎭",
      category: "Cultural",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <header className="bg-white border-b border-gray-200/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={16} />
            Back to Announcements
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl">📷</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">Photo Gallery</h1>
              <p className="text-gray-600">Visual documentation of institutional moments</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {albums.map((album, index) => (
            <Card 
              key={index} 
              className="bg-white/80 border border-gray-200/50 hover:shadow-md transition-all duration-200 cursor-pointer backdrop-blur-sm group"
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{album.coverImage}</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{album.title}</h3>
                    {album.featured && (
                      <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full mb-3">
                    {album.category}
                  </span>
                  
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{album.description}</p>
                  
                  <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Image size={14} className="text-green-500" />
                      <span>{album.photoCount} photos</span>
                    </div>
                    <div className="flex items-center gap-1 group-hover:text-green-600 transition-colors">
                      <Eye size={14} />
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
