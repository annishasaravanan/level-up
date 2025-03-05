
import React from 'react';
import { User, Mail, Briefcase, MapPin, Calendar, Award, Edit, Upload, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../ui/GlassCard';
import GradientButton from '../ui/GradientButton';

// Sample data
const profileData = {
  name: 'Alex Johnson',
  email: 'alex.johnson@university.edu',
  department: 'Computer Science',
  location: 'San Francisco, CA',
  joinedDate: 'September 2022',
  totalPoints: 1450,
  rank: 7,
  bio: 'Computer Science student with a passion for machine learning and web development. Looking to expand my knowledge in cloud computing and data science.',
  interests: ['Machine Learning', 'Web Development', 'Cloud Computing', 'Data Science'],
  recentCertificates: [
    { id: '1', name: 'Advanced Machine Learning', issuer: 'Stanford University', date: 'June 2023' },
    { id: '2', name: 'Web Development Bootcamp', issuer: 'Udemy', date: 'March 2023' },
    { id: '3', name: 'Google Cloud Summit', issuer: 'Google', date: 'April 2023' },
  ],
};

const Profile = () => {
  return (
    <div className="w-full space-y-8 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Your Profile</h1>
          <p className="text-gray-600">Manage your profile and achievements</p>
        </div>
        <GradientButton variant="outline">
          <Edit size={16} className="mr-1" />
          Edit Profile
        </GradientButton>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <GlassCard className="text-center py-8">
            <div className="relative mx-auto w-24 h-24 rounded-full bg-gray-100 mb-4 flex items-center justify-center">
              <User size={40} className="text-gray-400" />
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                <Upload size={14} />
              </button>
            </div>
            <h2 className="text-xl font-semibold">{profileData.name}</h2>
            <p className="text-gray-600">{profileData.department}</p>
            
            <div className="mt-6 flex justify-center items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mx-auto w-max">
              <Award size={16} className="mr-2" />
              {profileData.totalPoints} Points • Rank #{profileData.rank}
            </div>
          </GlassCard>
          
          <GlassCard>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <Mail size={16} className="mr-3 text-gray-400" />
                <span>{profileData.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Briefcase size={16} className="mr-3 text-gray-400" />
                <span>{profileData.department}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin size={16} className="mr-3 text-gray-400" />
                <span>{profileData.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar size={16} className="mr-3 text-gray-400" />
                <span>Joined {profileData.joinedDate}</span>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard>
            <h3 className="text-lg font-semibold mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.interests.map((interest, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
        
        <div className="lg:col-span-2 space-y-6">
          <GlassCard>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-gray-600">{profileData.bio}</p>
          </GlassCard>
          
          <GlassCard>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent Certifications</h3>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700">View All</a>
            </div>
            
            <div className="space-y-4">
              {profileData.recentCertificates.map((cert) => (
                <div key={cert.id} className="border border-gray-100 rounded-lg p-4 hover:border-gray-200 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium">{cert.name}</h4>
                      <p className="text-sm text-gray-500">{cert.issuer}</p>
                    </div>
                    <div className="text-sm text-gray-500">{cert.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
          
          <GlassCard>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">AI Recommendations</h3>
              <Link 
                to="/ai-recommendations" 
                className="text-sm text-blue-600 hover:text-blue-700 flex items-center"
              >
                View Full Page <ExternalLink size={14} className="ml-1" />
              </Link>
            </div>
            
            <div className="space-y-3">
              <div className="p-4 border border-green-100 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-800">Suggested Next Step</h4>
                <p className="text-sm text-green-700 mt-1">Based on your interests in Machine Learning, we recommend taking the "Advanced Deep Learning" certification from DeepLearning.ai.</p>
              </div>
              
              <div className="p-4 border border-blue-100 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Career Path Insight</h4>
                <p className="text-sm text-blue-700 mt-1">Your certification pattern indicates strong potential for a Data Scientist role. Consider adding cloud deployment skills to enhance your profile.</p>
              </div>
              
              <div className="p-4 border border-purple-100 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-800">Skill Gap Alert</h4>
                <p className="text-sm text-purple-700 mt-1">We noticed your portfolio lacks certifications in database technologies. This could be valuable for your web development pursuits.</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Profile;