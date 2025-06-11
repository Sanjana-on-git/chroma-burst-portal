
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Microscope, BookOpen, Users, ExternalLink, DollarSign, Award, Calendar, ChevronDown, ChevronUp, User, Building } from 'lucide-react';

const FacultyResearch = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const facultyResearch = [
    {
      faculty: "Dr. Sarah Thompson",
      department: "Computer Science",
      position: "Professor",
      researchProjects: [
        {
          title: "AI-Powered Educational Assessment Platform",
          description: "Development of machine learning algorithms for personalized student evaluation and adaptive feedback systems in higher education.",
          detailedDescription: "This groundbreaking research focuses on creating intelligent assessment tools that adapt to individual learning patterns, providing real-time feedback and customized learning paths for students across diverse academic disciplines.",
          funding: "$150,000 NSF Grant",
          status: "ongoing",
          publications: 3,
          duration: "2023-2025",
          tags: ["Grant", "AI Research"],
          impact: "15 Universities Implementing"
        }
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      totalPublications: 15,
      totalGrants: 3
    },
    {
      faculty: "Prof. Michael Rodriguez",
      department: "Engineering",
      position: "Associate Professor",
      researchProjects: [
        {
          title: "Sustainable Energy Storage Solutions",
          description: "Research into next-generation battery technology using environmentally friendly materials and advanced manufacturing processes.",
          detailedDescription: "Revolutionary work on developing eco-friendly battery technologies that could transform renewable energy storage, making solar and wind power more viable for large-scale applications.",
          funding: "$200,000 DOE Grant",
          status: "completed",
          publications: 5,
          duration: "2022-2024",
          tags: ["Award", "Sustainability"],
          impact: "2 Patents Filed"
        }
      ],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      totalPublications: 22,
      totalGrants: 5
    },
    {
      faculty: "Dr. Emily Carter",
      department: "Humanities",
      position: "Senior Researcher",
      researchProjects: [
        {
          title: "Digital Humanities Archive Project",
          description: "Creating comprehensive digital archives of historical documents using advanced preservation techniques and machine learning classification.",
          detailedDescription: "Pioneering digital preservation project that combines traditional archival methods with cutting-edge technology to preserve and make accessible thousands of historical documents and artifacts.",
          funding: "$75,000 NEH Grant",
          status: "ongoing",
          publications: 2,
          duration: "2023-2024",
          tags: ["Grant", "Digital Innovation"],
          impact: "50,000 Documents Digitized"
        }
      ],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=200&h=200&fit=crop&crop=face",
      totalPublications: 8,
      totalGrants: 2
    },
    {
      faculty: "Dr. Rachel Kim",
      department: "Biomedical Engineering",
      position: "Professor",
      researchProjects: [
        {
          title: "Biomedical Imaging Enhancement",
          description: "Advanced imaging techniques for early disease detection using AI-enhanced medical scanning technologies.",
          detailedDescription: "Cutting-edge research combining artificial intelligence with medical imaging to detect diseases earlier and more accurately than current methods, potentially saving thousands of lives.",
          funding: "$180,000 NIH Grant",
          status: "ongoing",
          publications: 4,
          duration: "2023-2026",
          tags: ["Grant", "Medical Innovation"],
          impact: "Clinical Trials Starting"
        }
      ],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
      totalPublications: 18,
      totalGrants: 4
    }
  ];

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Grant': return 'from-green-400/80 to-emerald-400/80';
      case 'Award': return 'from-yellow-400/80 to-orange-400/80';
      case 'AI Research': return 'from-blue-400/80 to-cyan-400/80';
      case 'Sustainability': return 'from-green-500/80 to-teal-500/80';
      case 'Digital Innovation': return 'from-purple-400/80 to-pink-400/80';
      case 'Medical Innovation': return 'from-red-400/80 to-rose-400/80';
      default: return 'from-gray-400/80 to-slate-400/80';
    }
  };

  const toggleExpansion = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/20 to-cyan-50/20">
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
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
          {facultyResearch.map((faculty, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 hover:border-teal-300/60"
            >
              {/* Faculty Header */}
              <div className="p-6 border-b border-gray-200/50">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={faculty.image} 
                      alt={faculty.faculty}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-teal-200/50"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
                      <User className="text-white" size={12} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                      {faculty.faculty}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                      <Building size={14} className="text-teal-500" />
                      <span>{faculty.department}</span>
                      <span className="text-gray-400">•</span>
                      <span className="font-medium">{faculty.position}</span>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <BookOpen size={12} className="text-teal-500" />
                        <span>{faculty.totalPublications} Publications</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award size={12} className="text-teal-500" />
                        <span>{faculty.totalGrants} Grants</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Projects */}
              <div className="p-6">
                {faculty.researchProjects.map((project, projectIndex) => (
                  <div key={projectIndex}>
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors mb-2">
                          {project.title}
                        </h4>
                        <div className="flex gap-2 mb-3">
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className={`bg-gradient-to-r ${getTagColor(tag)} text-white px-3 py-1 rounded-full text-xs font-medium`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'ongoing' 
                          ? 'bg-green-100/80 text-green-700' 
                          : 'bg-blue-100/80 text-blue-700'
                      }`}>
                        {project.status === 'ongoing' ? 'In Progress' : 'Completed'}
                      </div>
                    </div>

                    {/* Project Description */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Research Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <DollarSign size={14} className="text-teal-500" />
                        <span className="font-medium">{project.funding}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar size={14} className="text-teal-500" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <BookOpen size={14} className="text-teal-500" />
                        <span>{project.publications} Publications</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Award size={14} className="text-teal-500" />
                        <span className="text-xs">{project.impact}</span>
                      </div>
                    </div>

                    {/* Expandable detailed info */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      expandedCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-gray-200/50">
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {project.detailedDescription}
                        </p>
                      </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleExpansion(index)}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 px-4 rounded-2xl font-medium hover:from-teal-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 group/btn"
                    >
                      <span>{expandedCard === index ? 'Show Less' : 'View Research Details'}</span>
                      {expandedCard === index ? (
                        <ChevronUp size={16} className="group-hover/btn:-translate-y-1 transition-transform" />
                      ) : (
                        <ChevronDown size={16} className="group-hover/btn:translate-y-1 transition-transform" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FacultyResearch;
