
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bell, AlertCircle, FileText, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const NewsNotifications = () => {
  const newsItems = [
    {
      title: "Academic Calendar Update",
      description: "Important changes to the upcoming semester schedule and examination dates.",
      type: "urgent",
      date: "2024-01-15",
      icon: Calendar
    },
    {
      title: "New Policy Guidelines",
      description: "Updated student conduct and academic integrity policies now in effect.",
      type: "policy",
      date: "2024-01-12",
      icon: FileText
    },
    {
      title: "Registration Deadline",
      description: "Final reminder: Course registration closes on January 20th at 11:59 PM.",
      type: "deadline",
      date: "2024-01-10",
      icon: AlertCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-poppins">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition-colors mb-6">
              <ArrowLeft size={20} />
              <span>Back to Announcements</span>
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <Bell className="text-white text-4xl animate-glow" size={40} />
              <h1 className="text-5xl md:text-6xl font-bold font-poppins text-white drop-shadow-lg">
                📬 News & Notifications
              </h1>
            </div>
            
            <p className="text-xl text-white text-opacity-90 font-poppins font-light max-w-2xl">
              Stay informed with official updates, notices, and important alerts from the institution
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          {newsItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500 text-white rounded-full">
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-blue-900">{item.title}</h3>
                        <span className="text-sm text-blue-600 bg-blue-200 px-2 py-1 rounded-full">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-blue-800 mb-2">{item.description}</p>
                      <p className="text-sm text-blue-600">{item.date}</p>
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

export default NewsNotifications;
