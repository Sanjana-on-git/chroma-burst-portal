
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, FileText, AlertCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const NewsNotifications = () => {
  const newsItems = [
    {
      title: "Academic Calendar Update",
      description: "Important changes to the upcoming semester schedule and examination dates have been finalized.",
      type: "Academic",
      date: "Jan 15, 2024",
      priority: "high"
    },
    {
      title: "New Policy Guidelines",
      description: "Updated student conduct and academic integrity policies are now in effect across all departments.",
      type: "Policy",
      date: "Jan 12, 2024",
      priority: "medium"
    },
    {
      title: "Registration Deadline",
      description: "Final reminder: Course registration for the spring semester closes on January 20th at 11:59 PM.",
      type: "Deadline",
      date: "Jan 10, 2024",
      priority: "high"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <header className="bg-white border-b border-gray-200/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={16} />
            Back to Announcements
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-2xl">📬</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">News & Notifications</h1>
              <p className="text-gray-600">Official updates and institutional communications</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {newsItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-white/80 border border-gray-200/50 hover:shadow-md transition-all duration-200 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.priority === 'high' ? (
                      <AlertCircle className="text-blue-600" size={20} />
                    ) : (
                      <FileText className="text-blue-600" size={20} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                        {item.type}
                      </span>
                      {item.priority === 'high' && (
                        <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded-full">
                          Urgent
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 mb-3 leading-relaxed">{item.description}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar size={14} />
                      <span>{item.date}</span>
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

export default NewsNotifications;
