import React from "react";
import { FileText, Clock, CheckCircle, Star } from "lucide-react";

export default function Assignments() {
  const assignments = [
    {
      id: 1,
      title: "Algebra Assignment",
      subject: "Mathematics",
      dueDate: "Nov 8, 2025",
      status: "pending",
      score: null,
    },
    {
      id: 2,
      title: "Newton's Laws Problems",
      subject: "Physics",
      dueDate: "Nov 6, 2025",
      status: "completed",
      score: "95%",
    },
    {
      id: 3,
      title: "Organic Chemistry Lab Report",
      subject: "Chemistry",
      dueDate: "Nov 9, 2025",
      status: "pending",
      score: null,
    },
    {
      id: 4,
      title: "Essay on Environmental Issues",
      subject: "English",
      dueDate: "Nov 5, 2025",
      status: "completed",
      score: "88%",
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
      
      {/* Darkened main container from bg-white to bg-blue-100 */}
      <div className="bg-blue-100 border border-blue-200 rounded-2xl p-6 shadow-sm">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="flex items-center gap-2 text-blue-900 font-bold text-lg">
            <FileText size={20} className="text-blue-700" /> Assignments
          </h3>
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
            45/50 Completed
          </span>
        </div>

        {/* Assignments List */}
        <div className="space-y-4">
          {assignments.map((assignment) => (
            <div 
              key={assignment.id} 
              className={`rounded-xl p-5 border transition-all hover:shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
                assignment.status === 'pending' 
                  ? 'bg-yellow-100 border-yellow-300' // Darkened from bg-[#FFFBEB]
                  : 'bg-green-100 border-green-300'   // Darkened from bg-[#F0FDF4]
              }`}
            >
              
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="text-gray-900 font-bold text-base">{assignment.title}</h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${
                    assignment.status === 'pending' 
                      ? 'bg-yellow-600 text-white' 
                      : 'bg-green-700 text-white'
                  }`}>
                    {assignment.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700 font-medium mb-2">Subject: {assignment.subject}</p>
                <div className="flex items-center gap-4 text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> Due: {assignment.dueDate}
                  </span>
                  {assignment.status === 'completed' && (
                    <span className="flex items-center gap-1 text-green-800 font-bold">
                      <Star size={14} fill="currentColor" /> Score: {assignment.score}
                    </span>
                  )}
                </div>
              </div>

              {/* Right Action Button */}
              <div>
                {assignment.status === 'pending' ? (
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold text-sm transition shadow-sm">
                    Submit
                  </button>
                ) : (
                  <div className="h-10"></div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}