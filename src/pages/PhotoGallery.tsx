
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const PhotoGallery = () => {
  const [activeAlbum, setActiveAlbum] = useState(0);

  const albums = [
    {
      title: "Convocation 2024",
      description: "Graduation ceremony highlights and memorable moments from the Class of 2024 celebration.",
      images: [
        { url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop", title: "Opening Ceremony" },
        { url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop", title: "Graduate Awards" },
        { url: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=800&h=600&fit=crop", title: "Faculty Recognition" },
        { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop", title: "Student Celebration" }
      ],
      coverImage: "🎓",
      category: "Academic",
      featured: true
    },
    {
      title: "Annual Tech Fest",
      description: "Innovation showcase featuring student projects, competitions, and technology demonstrations.",
      images: [
        { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop", title: "Tech Expo" },
        { url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop", title: "Robot Competition" },
        { url: "https://images.unsplash.com/photo-1518486286344-c6c8b500e5e7?w=800&h=600&fit=crop", title: "Innovation Lab" },
        { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop", title: "Coding Marathon" }
      ],
      coverImage: "🤖",
      category: "Events",
      featured: false
    },
    {
      title: "Cultural Celebrations",
      description: "Festival celebrations, artistic performances, and multicultural events throughout the year.",
      images: [
        { url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop", title: "Music Festival" },
        { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop", title: "Dance Performance" },
        { url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=600&fit=crop", title: "Art Exhibition" },
        { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop", title: "Cultural Night" }
      ],
      coverImage: "🎭",
      category: "Cultural",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-teal-50/20">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors mb-4 text-sm font-medium group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Announcements
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <Camera className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Photo Gallery
              </h1>
              <p className="text-gray-600 mt-1">Visual documentation of institutional moments</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Album selector */}
        <div className="flex flex-wrap gap-4 mb-8">
          {albums.map((album, index) => (
            <button
              key={index}
              onClick={() => setActiveAlbum(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeAlbum === index
                  ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg scale-105'
                  : 'bg-white/70 text-gray-700 hover:bg-white/90 hover:scale-105'
              }`}
            >
              <span className="mr-2">{album.coverImage}</span>
              {album.title}
            </button>
          ))}
        </div>

        {/* Main carousel */}
        <div className="relative mb-8">
          <Carousel className="w-full">
            <CarouselContent>
              {albums[activeAlbum].images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative group">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay with title */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
                          <p className="text-white/80 text-sm">{albums[activeAlbum].description}</p>
                        </div>
                      </div>
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Play className="text-white ml-1" size={24} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom navigation with RGB glow */}
            <CarouselPrevious className="left-4 bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-300" />
            <CarouselNext className="right-4 bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-300" />
          </Carousel>
        </div>

        {/* Thumbnail navigation */}
        <div className="flex gap-4 justify-center overflow-x-auto pb-4">
          {albums[activeAlbum].images.map((image, index) => (
            <button
              key={index}
              className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 border-transparent hover:border-green-400 transition-all duration-300 hover:scale-110"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Album info */}
        <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl">{albums[activeAlbum].coverImage}</span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{albums[activeAlbum].title}</h2>
              <span className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-green-100 to-teal-100 text-green-700 rounded-full">
                {albums[activeAlbum].category}
              </span>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">{albums[activeAlbum].description}</p>
        </div>
      </main>
    </div>
  );
};

export default PhotoGallery;
