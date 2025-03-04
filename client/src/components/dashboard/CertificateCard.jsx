
import React from 'react';
import { Calendar, Award, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const CertificateCard = ({ certificate, className }) => {
  const difficultyColor = {
    easy: 'bg-green-50 text-green-600',
    medium: 'bg-yellow-50 text-yellow-600',
    hard: 'bg-orange-50 text-orange-600',
    expert: 'bg-red-50 text-red-600',
  };

  const typeColor = {
    course: 'bg-blue-50 text-blue-600',
    event: 'bg-purple-50 text-purple-600',
    workshop: 'bg-indigo-50 text-indigo-600',
    coding: 'bg-cyan-50 text-cyan-600',
  };

  return (
    <div 
      className={cn(
        "bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md group",
        className
      )}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="flex space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${typeColor[certificate.type]}`}>
              {certificate.type.charAt(0).toUpperCase() + certificate.type.slice(1)}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColor[certificate.difficulty]}`}>
              {certificate.difficulty.charAt(0).toUpperCase() + certificate.difficulty.slice(1)}
            </span>
          </div>
          <div className="flex items-center bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-semibold">
            <Award size={14} className="mr-1" />
            {certificate.points} pts
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">
          {certificate.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3">
          Issued by {certificate.issuer}
        </p>
        
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar size={14} className="mr-1" />
          {certificate.date}
        </div>
      </div>
      
      <div className="border-t border-gray-100 px-5 py-3 bg-gray-50 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          View Certificate
        </span>
        <button className="text-blue-600 hover:text-blue-700 transition-colors">
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

export default CertificateCard;
