
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, ChevronLeft, ChevronRight, Play, Image as ImageIcon } from 'lucide-react';

const PhotoGallery = () => {
  const [activeAlbum, setActiveAlbum] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const albums = [
    {
      title: "Convocation 2024",
      description: "Graduation ceremony highlights and memorable moments from the Class of 2024 celebration.",
      images: [
        { url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop", title: "Opening Ceremony", subtitle: "Distinguished guests and faculty gather" },
        { url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop", title: "Graduate Awards", subtitle: "Academic excellence recognition" },
        { url: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=1200&h=800&fit=crop", title: "Faculty Recognition", subtitle: "Honoring educational leadership" },
        { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&h=800&fit=crop", title: "Student Celebration", subtitle: "Joy and achievement captured" }
      ],
      coverImage: "🎓",
      category: "Academic",
      featured: true
    },
    {
      title: "Annual Tech Fest",
      description: "Innovation showcase featuring student projects, competitions, and technology demonstrations.",
      images: [
        { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop", title: "Tech Expo", subtitle: "Latest innovations on display" },
        { url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop", title: "Robot Competition", subtitle: "Engineering excellence" },
        { url: "https://images.unsplash.com/photo-1518486286344-c6c8b500e5e7?w=1200&h=800&fit=crop", title: "Innovation Lab", subtitle: "Future technologies" },
        { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop", title: "Coding Marathon", subtitle: "Programming challenges" }
      ],
      coverImage: "🤖",
      category: "Events",
      featured: false
    },
    {
      title: "Cultural Celebrations",
      description: "Festival celebrations, artistic performances, and multicultural events throughout the year.",
      images: [
        { url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&h=800&fit=crop", title: "Music Festival", subtitle: "Harmony and rhythm" },
        { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop", title: "Dance Performance", subtitle: "Cultural expression" },
        { url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&h=800&fit=crop", title: "Art Exhibition", subtitle: "Creative showcases" },
        { url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop", title: "Cultural Night", subtitle: "Diversity celebration" }
      ],
      coverImage: "🎭",
      category: "Cultural",
      featured: true
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === albums[activeAlbum].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? albums[activeAlbum].images.length - 1 : prev - 1
    );
  };

  const currentImage = albums[activeAlbum].images[currentImageIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/20 to-teal-50/20">
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors mb-4 text-sm font-medium group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Announcements
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <Camera className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Photo Gallery
              </h1>
              <p className="text-gray-600 mt-1">Visual documentation of institutional moments</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Elegant Album selector */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {albums.map((album, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveAlbum(index);
                setCurrentImageIndex(0);
              }}
              className={`px-8 py-4 rounded-2xl font-medium transition-all duration-500 ${
                activeAlbum === index
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg scale-105 shadow-emerald-200'
                  : 'bg-white/80 text-gray-700 hover:bg-white/95 hover:scale-105 border border-gray-200/50'
              }`}
            >
              <span className="text-2xl mr-3">{album.coverImage}</span>
              <span className="text-lg">{album.title}</span>
            </button>
          ))}
        </div>

        {/* Premium Carousel */}
        <div className="relative mb-12">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl bg-white/90">
            <img
              src={currentImage.url}
              alt={currentImage.title}
              className="w-full h-full object-cover transition-all duration-700"
            />
            
            {/* Premium overlay with title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-3xl font-bold mb-2">{currentImage.title}</h3>
                <p className="text-white/90 text-lg">{currentImage.subtitle}</p>
              </div>
            </div>

            {/* Premium Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 group"
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30 hover:scale-110 transition-transform duration-300">
                <Play className="text-white ml-1" size={32} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

        {/* Elegant thumbnail navigation */}
        <div className="flex gap-4 justify-center overflow-x-auto pb-4 mb-12">
          {albums[activeAlbum].images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-3 transition-all duration-300 hover:scale-110 ${
                index === currentImageIndex 
                  ? 'border-emerald-400 shadow-lg shadow-emerald-200' 
                  : 'border-transparent hover:border-emerald-300'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Premium Album info */}
        <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 shadow-xl">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
              {albums[activeAlbum].coverImage}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{albums[activeAlbum].title}</h2>
              <span className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-emerald-100/80 to-teal-100/80 text-emerald-700 rounded-full">
                {albums[activeAlbum].category}
              </span>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">{albums[activeAlbum].description}</p>
        </div>
      </main>
    </div>
  );
};

export default PhotoGallery;
