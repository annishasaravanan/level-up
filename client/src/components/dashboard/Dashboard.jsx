
import React, { useState } from 'react';
import { Plus, Filter, Search } from 'lucide-react';
import ActivitySummary from './ActivitySummary';
import CertificateCard from './CertificateCard';
import GradientButton from '../ui/GradientButton';

// Sample data
const userStats = {
  totalCertificates: 12,
  totalPoints: 1450,
  recentActivities: 3,
  rank: 7,
};

const certificates = [
  {
    id: '1',
    title: 'Advanced Machine Learning',
    issuer: 'Stanford University',
    date: 'June 10, 2023',
    type: 'course',
    points: 250,
    difficulty: 'expert',
  },
  {
    id: '2',
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'March 15, 2023',
    type: 'course',
    points: 150,
    difficulty: 'medium',
  },
  {
    id: '3',
    title: 'Google Cloud Summit',
    issuer: 'Google',
    date: 'April 22, 2023',
    type: 'event',
    points: 100,
    difficulty: 'easy',
  },
  {
    id: '4',
    title: 'Data Science Workshop',
    issuer: 'Microsoft',
    date: 'May 5, 2023',
    type: 'workshop',
    points: 120,
    difficulty: 'medium',
  },
  {
    id: '5',
    title: 'LeetCode 75 Challenges',
    issuer: 'LeetCode',
    date: 'July 1, 2023',
    type: 'coding',
    points: 180,
    difficulty: 'hard',
  },
  {
    id: '6',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Feb 28, 2023',
    type: 'course',
    points: 200,
    difficulty: 'medium',
  },
];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState(null);

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType ? cert.type === filterType : true;
    
    return matchesSearch && matchesFilter;
  });

  const filterOptions = [
    { value: null, label: 'All Types' },
    { value: 'course', label: 'Courses' },
    { value: 'event', label: 'Events' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'coding', label: 'Coding' },
  ];

  return (
    <div className="w-full space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Your Certification Dashboard</h1>
          <p className="text-gray-600">Track and manage your certifications and achievements</p>
        </div>
        <GradientButton>
          <Plus size={16} className="mr-1" />
          Add Certificate
        </GradientButton>
      </div>
      
      <ActivitySummary stats={userStats} />
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter size={18} className="text-gray-500" />
            <select
              value={filterType || ''}
              onChange={(e) => setFilterType(e.target.value === '' ? null : e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {filterOptions.map((option) => (
                <option key={option.value || 'all'} value={option.value || ''}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.length > 0 ? (
            filteredCertificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No certificates found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
