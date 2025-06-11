
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Microscope, BookOpen, Users, ExternalLink, DollarSign } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FacultyResearch = () => {
  const research = [
    {
      title: "AI-Powered Educational Assessment Platform",
      faculty: "Dr. Sarah Thompson",
      description: "Development of machine learning algorithms for personalized student evaluation and adaptive feedback systems in higher education.",
      funding: "$150,000 NSF Grant",
      status: "ongoing",
      publications: 3,
      duration: "2023-2025",
      department: "Computer Science"
    },
    {
      title: "Sustainable Energy Storage Solutions",
      faculty: "Prof. Michael Rodriguez",
      description: "Research into next-generation battery technology using environmentally friendly materials and advanced manufacturing processes.",
      funding: "$200,000 DOE Grant",
      status: "completed",
      publications: 5,
      duration: "2022-2024",
      department: "Engineering"
    },
    {
      title: "Digital Humanities Archive Project",
      faculty: "Dr. Emily Carter",
      description: "Creating comprehensive digital archives of historical documents using advanced preservation techniques and machine learning classification.",
      funding: "$75,000 NEH Grant",
      status: "ongoing",
      publications: 2,
      duration: "2023-2024",
      department: "Humanities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50/30">
      <header className="bg-white border-b border-gray-200/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={16} />
            Back to Announcements
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl">🔬</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">Faculty & Research</h1>
              <p className="text-gray-600">Research highlights and faculty achievements</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {research.map((item, index) => (
            <Card 
              key={index} 
              className="bg-white/80 border border-gray-200/50 hover:shadow-md transition-all duration-200 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Microscope className="text-teal-600" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        item.status === 'ongoing' 
                          ? 'bg-teal-100 text-teal-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="text-teal-600" size={16} />
                      <span className="font-medium text-gray-900">{item.faculty}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-sm text-gray-600">{item.department}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign size={14} className="text-teal-500" />
                        <span className="font-medium">{item.funding}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <BookOpen size={14} className="text-teal-500" />
                        <span>{item.publications} Publications</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-teal-500">Duration:</span>
                        <span>{item.duration}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button className="flex items-center gap-1 text-teal-600 hover:text-teal-800 text-sm font-medium transition-colors">
                        <span>View Research Details</span>
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

export default FacultyResearch;
