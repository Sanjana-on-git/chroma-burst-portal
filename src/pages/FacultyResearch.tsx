
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Microscope, BookOpen, Users, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FacultyResearch = () => {
  const research = [
    {
      title: "AI-Powered Educational Assessment Platform",
      faculty: "Dr. Sarah Thompson",
      description: "Development of machine learning algorithms for personalized student evaluation and feedback systems.",
      funding: "$150,000 NSF Grant",
      status: "ongoing",
      publications: 3,
      icon: Microscope
    },
    {
      title: "Sustainable Energy Storage Solutions",
      faculty: "Prof. Michael Rodriguez",
      description: "Research into next-generation battery technology using environmentally friendly materials.",
      funding: "$200,000 DOE Grant",
      status: "completed",
      publications: 5,
      icon: BookOpen
    },
    {
      title: "Digital Humanities Archive Project",
      faculty: "Dr. Emily Carter",
      description: "Creating comprehensive digital archives of historical documents using advanced preservation techniques.",
      funding: "$75,000 NEH Grant",
      status: "ongoing",
      publications: 2,
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-poppins">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-teal-100 transition-colors mb-6">
              <ArrowLeft size={20} />
              <span>Back to Announcements</span>
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <Microscope className="text-white text-4xl animate-glow" size={40} />
              <h1 className="text-5xl md:text-6xl font-bold font-poppins text-white drop-shadow-lg">
                🔬 Faculty & Research
              </h1>
            </div>
            
            <p className="text-xl text-white text-opacity-90 font-poppins font-light max-w-2xl">
              Spotlight on publications, grants, research breakthroughs, and faculty achievements
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {research.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-teal-50 to-cyan-100 border-0 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-500 text-white rounded-full">
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-teal-900">{item.title}</h3>
                        <span className={`text-sm px-2 py-1 rounded-full ${
                          item.status === 'ongoing' 
                            ? 'text-teal-600 bg-teal-200' 
                            : 'text-green-600 bg-green-200'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="text-teal-600" size={16} />
                        <p className="text-teal-800 font-medium">{item.faculty}</p>
                      </div>
                      <p className="text-teal-800 mb-3">{item.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex flex-col gap-1">
                          <span className="text-teal-700 font-medium">{item.funding}</span>
                          <span className="text-teal-600">{item.publications} Publications</span>
                        </div>
                        <button className="flex items-center gap-1 text-teal-600 hover:text-teal-800">
                          <ExternalLink size={16} />
                          <span>View Details</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default FacultyResearch;
