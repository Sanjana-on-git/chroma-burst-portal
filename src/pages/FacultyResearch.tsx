'use client';

import React, { useState } from 'react';
import {
  Microscope,
  Calendar,
  BookOpen,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Award
} from 'lucide-react';

const schools = {
  'School of Engineering': ['Computer Science', 'Engineering', 'Biomedical Engineering'],
  'School of Arts': ['Humanities']
};

const FacultyResearch = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [selectedSchool, setSelectedSchool] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const facultyResearch = [
    {
      faculty: 'Dr. Sarah Thompson',
      department: 'Computer Science',
      position: 'Professor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      totalPublications: 15,
      totalGrants: 3,
      researchProjects: [
        {
          title: 'AI-Powered Educational Assessment Platform',
          description: 'Machine learning for adaptive feedback systems in higher education.',
          detailedDescription:
            'Creating intelligent assessment tools that adapt to learning patterns for real-time feedback.',
          funding: '$150,000 NSF Grant',
          status: 'ongoing',
          publications: 3,
          duration: '2023-2025',
          tags: ['Grant', 'AI Research'],
          impact: '15 Universities Implementing'
        }
      ]
    },
    {
      faculty: 'Dr. Sarah Thompson',
      department: 'Computer Science',
      position: 'Professor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      totalPublications: 15,
      totalGrants: 3,
      researchProjects: [
        {
          title: 'AI-Powered Educational Assessment Platform',
          description: 'Machine learning for adaptive feedback systems in higher education.',
          detailedDescription:
            'Creating intelligent assessment tools that adapt to learning patterns for real-time feedback.',
          funding: '$150,000 NSF Grant',
          status: 'ongoing',
          publications: 3,
          duration: '2023-2025',
          tags: ['Grant', 'AI Research'],
          impact: '15 Universities Implementing'
        }
      ]
    },{
      faculty: 'Dr. Sarah Thompson',
      department: 'Computer Science',
      position: 'Professor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      totalPublications: 15,
      totalGrants: 3,
      researchProjects: [
        {
          title: 'AI-Powered Educational Assessment Platform',
          description: 'Machine learning for adaptive feedback systems in higher education.',
          detailedDescription:
            'Creating intelligent assessment tools that adapt to learning patterns for real-time feedback.',
          funding: '$150,000 NSF Grant',
          status: 'ongoing',
          publications: 3,
          duration: '2023-2025',
          tags: ['Grant', 'AI Research'],
          impact: '15 Universities Implementing'
        }
      ]
    },
    {
      faculty: 'Dr. Sarah Thompson',
      department: 'Computer Science',
      position: 'Professor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      totalPublications: 15,
      totalGrants: 3,
      researchProjects: [
        {
          title: 'AI-Powered Educational Assessment Platform',
          description: 'Machine learning for adaptive feedback systems in higher education.',
          detailedDescription:
            'Creating intelligent assessment tools that adapt to learning patterns for real-time feedback.',
          funding: '$150,000 NSF Grant',
          status: 'ongoing',
          publications: 3,
          duration: '2023-2025',
          tags: ['Grant', 'AI Research'],
          impact: '15 Universities Implementing'
        }
      ]
    },
    {
      faculty: 'Dr. John Smith',
      department: 'Engineering',
      position: 'Professor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      totalPublications: 15,
      totalGrants: 3,
      researchProjects: [
        {
          title: 'AI-Powered Educational Assessment Platform',
          description: 'Machine learning for adaptive feedback systems in higher education.',
          detailedDescription:
            'Creating intelligent assessment tools that adapt to learning patterns for real-time feedback.',
          funding: '$150,000 NSF Grant',
          status: 'ongoing',
          publications: 3,
          duration: '2023-2025',
          tags: ['Grant', 'AI Research'],
          impact: '15 Universities Implementing'
        }
      ]
    },
    {
      faculty: 'Dr. John Smith',
      department: 'Engineering',
      position: 'Professor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      totalPublications: 15,
      totalGrants: 3,
      researchProjects: [
        {
          title: 'AI-Powered Educational Assessment Platform',
          description: 'Machine learning for adaptive feedback systems in higher education.',
          detailedDescription:
            'Creating intelligent assessment tools that adapt to learning patterns for real-time feedback.',
          funding: '$150,000 NSF Grant',
          status: 'ongoing',
          publications: 3,
          duration: '2023-2025',
          tags: ['Grant', 'AI Research'],
          impact: '15 Universities Implementing'
        }
      ]
    },
    {
      faculty: 'Dr. Rachel Kim',
      department: 'Biomedical Engineering',
      position: 'Professor',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
      totalPublications: 18,
      totalGrants: 4,
      researchProjects: [
        {
          title: 'Biomedical Imaging Enhancement',
          description: 'AI-enhanced scanning for early disease detection.',
          detailedDescription:
            'Combining AI with imaging to detect diseases earlier and more accurately.',
          funding: '$180,000 NIH Grant',
          status: 'ongoing',
          publications: 4,
          duration: '2023-2026',
          tags: ['Grant', 'Medical Innovation'],
          impact: 'Clinical Trials Starting'
        }
      ]
    },
    {
      faculty: 'Dr. Rachel Kim',
      department: 'Biomedical Engineering',
      position: 'Professor',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
      totalPublications: 18,
      totalGrants: 4,
      researchProjects: [
        {
          title: 'Biomedical Imaging Enhancement',
          description: 'AI-enhanced scanning for early disease detection.',
          detailedDescription:
            'Combining AI with imaging to detect diseases earlier and more accurately.',
          funding: '$180,000 NIH Grant',
          status: 'ongoing',
          publications: 4,
          duration: '2023-2026',
          tags: ['Grant', 'Medical Innovation'],
          impact: 'Clinical Trials Starting'
        }
      ]
    },
    {
      faculty: 'Dr. Rachel Kim',
      department: 'Biomedical Engineering',
      position: 'Professor',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
      totalPublications: 18,
      totalGrants: 4,
      researchProjects: [
        {
          title: 'Biomedical Imaging Enhancement',
          description: 'AI-enhanced scanning for early disease detection.',
          detailedDescription:
            'Combining AI with imaging to detect diseases earlier and more accurately.',
          funding: '$180,000 NIH Grant',
          status: 'ongoing',
          publications: 4,
          duration: '2023-2026',
          tags: ['Grant', 'Medical Innovation'],
          impact: 'Clinical Trials Starting'
        }
      ]
    },
    {
      faculty: 'Dr. Rachel Kim',
      department: 'Humanities',
      position: 'Professor',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
      totalPublications: 18,
      totalGrants: 4,
      researchProjects: [
        {
          title: 'Biomedical Imaging Enhancement',
          description: 'AI-enhanced scanning for early disease detection.',
          detailedDescription:
            'Combining AI with imaging to detect diseases earlier and more accurately.',
          funding: '$180,000 NIH Grant',
          status: 'ongoing',
          publications: 4,
          duration: '2023-2026',
          tags: ['Grant', 'Medical Innovation'],
          impact: 'Clinical Trials Starting'
        }
      ]
    },
    {
      faculty: 'Dr. Ant Wilson',
      department: 'Humanities',
      position: 'Professor',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
      totalPublications: 18,
      totalGrants: 4,
      researchProjects: [
        {
          title: 'Biomedical Imaging Enhancement',
          description: 'AI-enhanced scanning for early disease detection.',
          detailedDescription:
            'Combining AI with imaging to detect diseases earlier and more accurately.',
          funding: '$180,000 NIH Grant',
          status: 'ongoing',
          publications: 4,
          duration: '2023-2026',
          tags: ['Grant', 'Medical Innovation'],
          impact: 'Clinical Trials Starting'
        }
      ]
    },
    {
      faculty: 'Dr. Ant Wilson',
      department: 'Engineering',
      position: 'Professor',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
      totalPublications: 18,
      totalGrants: 4,
      researchProjects: [
        {
          title: 'Biomedical Imaging Enhancement',
          description: 'AI-enhanced scanning for early disease detection.',
          detailedDescription:
            'Combining AI with imaging to detect diseases earlier and more accurately.',
          funding: '$180,000 NIH Grant',
          status: 'ongoing',
          publications: 4,
          duration: '2023-2026',
          tags: ['Grant', 'Medical Innovation'],
          impact: 'Clinical Trials Starting'
        }
      ]
    }
    
  ];

  const toggleExpansion = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Grant':
        return 'bg-green-200 text-green-800';
      case 'AI Research':
        return 'bg-blue-200 text-blue-800';
      case 'Medical Innovation':
        return 'bg-pink-200 text-pink-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  const filteredFaculty = facultyResearch.filter(faculty => faculty.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-white flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 flex items-center gap-3">
        <Microscope className="text-teal-500" /> Faculty Research
      </h1>

      {/* Selection Card */}
      {/* Selection Card */}
<div className="w-full max-w-md mx-auto mb-16">
  <div className="p-[2px] rounded-xl bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 shadow-lg">
    <div className="bg-white rounded-xl p-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          <Microscope className="text-teal-600" size={20} />
          Filter Faculty Research
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Select a school and department to view related research details.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="school" className="block text-sm font-medium text-gray-700">
            School
          </label>
          <select
            id="school"
            value={selectedSchool}
            onChange={(e) => {
              const school = e.target.value;
              setSelectedSchool(school);
              setSelectedDepartment(school ? schools[school][0] : '');
            }}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="">-- Select School --</option>
            {Object.keys(schools).map((school, index) => (
              <option key={index} value={school}>
                {school}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="department" className="block text-sm font-medium text-gray-700">
            Department
          </label>
          <select
            id="department"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            disabled={!selectedSchool}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
          >
            <option value="">-- Select Department --</option>
            {selectedSchool &&
              schools[selectedSchool].map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  </div>
</div>
     {/* Faculty Cards */}
      {selectedSchool && selectedDepartment ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
          {filteredFaculty.map((faculty, index) => (
            <div
              key={index}
              className="bg-white border  rounded-3xl p-6  transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={faculty.image}
                  alt={faculty.faculty}
                  className="w-16 h-16 rounded-full object-cover border"
                />
                <div>
                  <h3 className="text-lg font-semibold">{faculty.faculty}</h3>
                  <p className="text-sm text-gray-500">{faculty.position}</p>
                </div>
              </div>
              {faculty.researchProjects.map((proj, i) => (
                <div key={i}>
                  <h4 className="text-md font-medium mb-2">{proj.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {proj.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{proj.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <DollarSign size={14} /> {proj.funding}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} /> {proj.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen size={14} /> {proj.publications} Pubs
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={14} /> {proj.impact}
                    </div>
                  </div>
                  {expandedCard === index ? (
                    <>
                      <p className="text-sm text-gray-700">{proj.detailedDescription}</p>
                      <button
                        className="text-sm text-blue-600 mt-2 flex items-center gap-1"
                        onClick={() => toggleExpansion(index)}
                      >
                        Show Less <ChevronUp size={14} />
                      </button>
                    </>
                  ) : (
                    <button
                      className="text-sm text-blue-600 mt-2 flex items-center gap-1"
                      onClick={() => toggleExpansion(index)}
                    >
                      View Research Details <ChevronDown size={14} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 mt-8 text-lg">Please select a school and department to continue.</div>
      )}
    </div>
  );
};

export default FacultyResearch;
