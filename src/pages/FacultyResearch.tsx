
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Microscope, BookOpen, Users, ExternalLink, DollarSign, Award, Calendar } from 'lucide-react';

const FacultyResearch = () => {
  const research = [
    {
      title: "AI-Powered Educational Assessment Platform",
      faculty: "Dr. Sarah Thompson",
      description: "Development of machine learning algorithms for personalized student evaluation and adaptive feedback systems in higher education.",
      detailedDescription: "This groundbreaking research focuses on creating intelligent assessment tools that adapt to individual learning patterns, providing real-time feedback and customized learning paths for students across diverse academic disciplines.",
      funding: "$150,000 NSF Grant",
      status: "ongoing",
      publications: 3,
      duration: "2023-2025",
      department: "Computer Science",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      tags: ["Grant", "AI Research"],
      impact: "15 Universities Implementing"
    },
    {
      title: "Sustainable Energy Storage Solutions",
      faculty: "Prof. Michael Rodriguez",
      description: "Research into next-generation battery technology using environmentally friendly materials and advanced manufacturing processes.",
      detailedDescription: "Revolutionary work on developing eco-friendly battery technologies that could transform renewable energy storage, making solar and wind power more viable for large-scale applications.",
      funding: "$200,000 DOE Grant",
      status: "completed",
      publications: 5,
      duration: "2022-2024",
      department: "Engineering",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=300&h=200&fit=crop",
      tags: ["Award", "Sustainability"],
      impact: "2 Patents Filed"
    },
    {
      title: "Digital Humanities Archive Project",
      faculty: "Dr. Emily Carter",
      description: "Creating comprehensive digital archives of historical documents using advanced preservation techniques and machine learning classification.",
      detailedDescription: "Pioneering digital preservation project that combines traditional archival methods with cutting-edge technology to preserve and make accessible thousands of historical documents and artifacts.",
      funding: "$75,000 NEH Grant",
      status: "ongoing",
      publications: 2,
      duration: "2023-2024",
      department: "Humanities",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
      tags: ["Grant", "Digital Innovation"],
      impact: "50,000 Documents Digitized"
    },
    {
      title: "Biomedical Imaging Enhancement",
      faculty: "Dr. Rachel Kim",
      description: "Advanced imaging techniques for early disease detection using AI-enhanced medical scanning technologies.",
      detailedDescription: "Cutting-edge research combining artificial intelligence with medical imaging to detect diseases earlier and more accurately than current methods, potentially saving thousands of lives.",
      funding: "$180,000 NIH Grant",
      status: "ongoing",
      publications: 4,
      duration: "2023-2026",
      department: "Biomedical Engineering",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
      tags: ["Grant", "Medical Innovation"],
      impact: "Clinical Trials Starting"
    },
    {
      title: "Quantum Computing Applications",
      faculty: "Prof. James Liu",
      description: "Exploring practical applications of quantum computing in cryptography and complex problem solving.",
      detailedDescription: "Groundbreaking work on making quantum computing more accessible and practical for real-world applications, with focus on cybersecurity and optimization problems.",
      funding: "$220,000 Private Grant",
      status: "ongoing",
      publications: 6,
      duration: "2022-2025",
      department: "Physics",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
      tags: ["Award", "Quantum Tech"],
      impact: "3 Industry Partnerships"
    },
    {
      title: "Climate Change Modeling",
      faculty: "Dr. Angela Martinez",
      description: "Advanced climate modeling systems for predicting environmental changes and their impact on urban planning.",
      detailedDescription: "Comprehensive research on developing more accurate climate models that help cities and regions prepare for environmental changes and plan sustainable development.",
      funding: "$95,000 EPA Grant",
      status: "completed",
      publications: 3,
      duration: "2021-2023",
      department: "Environmental Science",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop",
      tags: ["Grant", "Climate Research"],
      impact: "Policy Recommendations Adopted"
    }
  ];

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Grant': return 'from-green-400 to-emerald-400';
      case 'Award': return 'from-yellow-400 to-orange-400';
      case 'AI Research': return 'from-blue-400 to-cyan-400';
      case 'Sustainability': return 'from-green-500 to-teal-500';
      case 'Digital Innovation': return 'from-purple-400 to-pink-400';
      case 'Medical Innovation': return 'from-red-400 to-rose-400';
      case 'Quantum Tech': return 'from-indigo-400 to-purple-400';
      case 'Climate Research': return 'from-emerald-400 to-green-500';
      default: return 'from-gray-400 to-slate-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-50/20">
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors mb-4 text-sm font-medium group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Announcements
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
              <Microscope className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Faculty & Research
              </h1>
              <p className="text-gray-600 mt-1">Research highlights and faculty achievements</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {research.map((item, index) => (
            <article 
              key={index} 
              className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
            >
              {/* Header with image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`bg-gradient-to-r ${getTagColor(tag)} text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Status badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                  item.status === 'ongoing' 
                    ? 'bg-green-500/80 text-white' 
                    : 'bg-blue-500/80 text-white'
                }`}>
                  {item.status === 'ongoing' ? 'In Progress' : 'Completed'}
                </div>
                
                {/* Faculty info overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <Users size={16} />
                    <span className="font-medium">{item.faculty}</span>
                    <span className="text-white/70">•</span>
                    <span className="text-sm text-white/80">{item.department}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-700 transition-colors mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                
                <p className="text-gray-600 text-xs leading-relaxed mb-4 opacity-80">
                  {item.detailedDescription}
                </p>
                
                {/* Research stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign size={14} className="text-teal-500" />
                    <span className="font-medium">{item.funding}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <BookOpen size={14} className="text-teal-500" />
                    <span>{item.publications} Publications</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={14} className="text-teal-500" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award size={14} className="text-teal-500" />
                    <span className="text-xs">{item.impact}</span>
                  </div>
                </div>
                
                {/* Action button */}
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 px-4 rounded-xl font-medium hover:from-teal-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 group/btn">
                  <span>View Research Details</span>
                  <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FacultyResearch;
