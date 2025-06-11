
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Newspaper, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MediaCoverage = () => {
  const mediaItems = [
    {
      title: "Institution Wins National Excellence Award",
      publication: "Education Today Magazine",
      description: "Recognition for outstanding academic programs and student achievements in technology innovation.",
      date: "2024-01-10",
      type: "award",
      link: "#"
    },
    {
      title: "Research Breakthrough in Renewable Energy",
      publication: "Science Daily",
      description: "Faculty research team develops new solar panel technology with 40% improved efficiency.",
      date: "2024-01-05",
      type: "research",
      link: "#"
    },
    {
      title: "Student Startup Featured in Tech Weekly",
      publication: "Tech Weekly",
      description: "Alumni-founded company raises $2M in Series A funding for AI-powered education platform.",
      date: "2023-12-28",
      type: "startup",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-poppins">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-600 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-purple-100 transition-colors mb-6">
              <ArrowLeft size={20} />
              <span>Back to Announcements</span>
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <Newspaper className="text-white text-4xl animate-glow" size={40} />
              <h1 className="text-5xl md:text-6xl font-bold font-poppins text-white drop-shadow-lg">
                📰 Media Coverage
              </h1>
            </div>
            
            <p className="text-xl text-white text-opacity-90 font-poppins font-light max-w-2xl">
              Articles, press releases, and external mentions showcasing our institutional presence
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {mediaItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-purple-50 to-indigo-100 border-0 hover:scale-105 transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500 text-white rounded-full">
                    <Newspaper size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-purple-900">{item.title}</h3>
                      <span className="text-sm text-purple-600 bg-purple-200 px-2 py-1 rounded-full">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-sm text-purple-700 font-medium mb-2">{item.publication}</p>
                    <p className="text-purple-800 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-purple-700">
                        <Calendar size={16} />
                        <span>{item.date}</span>
                      </div>
                      <button className="flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm">
                        <ExternalLink size={16} />
                        <span>Read Article</span>
                      </button>
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

export default MediaCoverage;
