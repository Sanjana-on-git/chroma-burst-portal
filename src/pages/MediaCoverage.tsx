
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Newspaper, ExternalLink, Calendar, Eye, ArrowUpRight, Award, Bookmark } from 'lucide-react';

const MediaCoverage = () => {
  const mediaItems = [
    {
      title: "Institution Wins National Excellence Award",
      publication: "Education Today Magazine",
      description: "Recognition for outstanding academic programs and innovative student achievement initiatives in technology education that have set new standards in the industry.",
      date: "Jan 10, 2024",
      type: "Award",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      featured: true,
      views: "2.5K"
    },
    {
      title: "Research Breakthrough in Renewable Energy",
      publication: "Science Daily",
      description: "Faculty research team develops new solar panel technology with 40% improved efficiency using advanced materials and innovative manufacturing processes.",
      date: "Jan 5, 2024",
      type: "Research",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop",
      featured: true,
      views: "4.1K"
    },
    {
      title: "Student Startup Featured in Tech Weekly",
      publication: "Tech Weekly",
      description: "Alumni-founded company raises $2M in Series A funding for AI-powered educational platform development that revolutionizes online learning.",
      date: "Dec 28, 2023",
      type: "Innovation",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=300&fit=crop",
      featured: false,
      views: "1.8K"
    },
    {
      title: "Campus Sustainability Initiative",
      publication: "Environmental Journal",
      description: "University's carbon-neutral goal achieves 60% reduction in emissions through innovative green technology and student-led conservation programs.",
      date: "Dec 20, 2023",
      type: "Environment",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
      featured: false,
      views: "3.2K"
    },
    {
      title: "AI Ethics Program Recognition",
      publication: "Computer Science Today",
      description: "Institution's pioneering AI ethics curriculum receives international recognition and becomes model for universities worldwide.",
      date: "Dec 15, 2023",
      type: "Technology",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      featured: true,
      views: "5.7K"
    },
    {
      title: "Medical Research Collaboration",
      publication: "Health Sciences Review",
      description: "Cross-institutional partnership leads to breakthrough in gene therapy research with potential applications in rare disease treatment.",
      date: "Dec 10, 2023",
      type: "Medical",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      featured: false,
      views: "2.9K"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Award': return 'from-yellow-400/80 to-orange-400/80';
      case 'Research': return 'from-blue-400/80 to-cyan-400/80';
      case 'Innovation': return 'from-purple-400/80 to-pink-400/80';
      case 'Environment': return 'from-green-400/80 to-emerald-400/80';
      case 'Technology': return 'from-indigo-400/80 to-blue-400/80';
      case 'Medical': return 'from-red-400/80 to-rose-400/80';
      default: return 'from-gray-400/80 to-slate-400/80';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-rose-50/20 to-orange-50/20">
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 transition-colors mb-4 text-sm font-medium group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Announcements
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <Newspaper className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
                Media Coverage
              </h1>
              <p className="text-gray-600 mt-1">External recognition and press coverage</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Featured articles section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Coverage</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mediaItems.filter(item => item.featured).slice(0, 2).map((item, index) => (
              <article 
                key={index} 
                className="group bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 hover:border-rose-300/60"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${getTypeColor(item.type)} text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm`}>
                    {item.type}
                  </div>

                  <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-400/90 to-orange-400/90 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                    Featured
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-rose-700 transition-colors mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-rose-600 mb-3">{item.publication}</p>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} className="text-rose-500" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye size={12} className="text-rose-500" />
                        <span>{item.views} views</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-orange-600 text-white py-3 px-4 rounded-2xl font-medium hover:from-rose-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 group/btn">
                    <span>Read Full Article</span>
                    <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All articles grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item, index) => (
              <article 
                key={index} 
                className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 hover:border-rose-300/60"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className={`absolute top-3 left-3 bg-gradient-to-r ${getTypeColor(item.type)} text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm`}>
                    {item.type}
                  </div>

                  {item.featured && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-rose-400/90 to-orange-400/90 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      <Award size={10} />
                    </div>
                  )}

                  {/* Bookmark hover */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Bookmark className="text-white" size={14} />
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-rose-700 transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-rose-600 mb-2">{item.publication}</p>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={10} className="text-rose-500" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={10} className="text-rose-500" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-orange-600 text-white py-2 px-4 rounded-xl font-medium hover:from-rose-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 group/btn opacity-0 group-hover:opacity-100">
                    <span>Read More</span>
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MediaCoverage;
