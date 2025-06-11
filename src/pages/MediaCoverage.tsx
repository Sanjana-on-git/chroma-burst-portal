
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Newspaper, ExternalLink, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const MediaCoverage = () => {
  const mediaItems = [
    {
      title: "Institution Wins National Excellence Award",
      publication: "Education Today Magazine",
      description: "Recognition for outstanding academic programs and innovative student achievement initiatives in technology education.",
      date: "Jan 10, 2024",
      type: "Award",
      readTime: "3 min read"
    },
    {
      title: "Research Breakthrough in Renewable Energy",
      publication: "Science Daily",
      description: "Faculty research team develops new solar panel technology with 40% improved efficiency using advanced materials.",
      date: "Jan 5, 2024",
      type: "Research",
      readTime: "5 min read"
    },
    {
      title: "Student Startup Featured in Tech Weekly",
      publication: "Tech Weekly",
      description: "Alumni-founded company raises $2M in Series A funding for AI-powered educational platform development.",
      date: "Dec 28, 2023",
      type: "Innovation",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <header className="bg-white border-b border-gray-200/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={16} />
            Back to Announcements
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl">📰</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">Media Coverage</h1>
              <p className="text-gray-600">External recognition and press coverage</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {mediaItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-white/80 border border-gray-200/50 hover:shadow-md transition-all duration-200 backdrop-blur-sm group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Newspaper className="text-purple-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                        {item.title}
                      </h3>
                      <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
                        {item.type}
                      </span>
                    </div>
                    
                    <p className="text-sm font-medium text-purple-600 mb-2">{item.publication}</p>
                    <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} className="text-purple-500" />
                          <span>{item.date}</span>
                        </div>
                        <span>{item.readTime}</span>
                      </div>
                      <button className="flex items-center gap-1 text-purple-600 hover:text-purple-800 text-sm font-medium transition-colors">
                        <span>Read Article</span>
                        <ExternalLink size={14} />
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
