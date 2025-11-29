import React from "react";
import { CheckCircle, BookOpen } from "lucide-react";

export default function Attendance() {
  const subjects = [
    { name: "Mathematics", percentage: 96, attended: 23, total: 24 },
    { name: "Physics", percentage: 95, attended: 19, total: 20 },
    { name: "Chemistry", percentage: 95, attended: 21, total: 22 },
    { name: "English", percentage: 94, attended: 17, total: 18 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
      
      {/* --- LEFT: OVERALL RECORD --- */}
      {/* Darkened container from bg-green-50/50 to bg-green-100 */}
      <div className="bg-green-100 border border-green-200 rounded-2xl p-6 shadow-sm h-full">
        <h3 className="flex items-center gap-2 text-green-900 font-bold mb-8 text-lg">
          <CheckCircle size={20} className="text-green-700" /> Attendance Record
        </h3>

        {/* Circular Indicator Placeholder */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background circle slightly darker to match container */}
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-green-200/50"
              />
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={351.86}
                strokeDashoffset={351.86 * (1 - 0.94)}
                className="text-green-600"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-2xl font-bold text-gray-900">94%</span>
            </div>
          </div>
          <p className="text-green-800 font-medium mt-2">Overall Attendance</p>
        </div>

        {/* Stats List */}
        <div className="space-y-4">
          {/* Darkened cards to bg-green-50 and adjusted borders */}
          <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex justify-between items-center shadow-sm">
            <span className="text-gray-700 font-medium">Total Days</span>
            <span className="text-gray-900 font-bold">100</span>
          </div>
          <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex justify-between items-center shadow-sm">
            <span className="text-gray-700 font-medium">Present</span>
            <span className="text-green-700 font-bold">94</span>
          </div>
          <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex justify-between items-center shadow-sm">
            <span className="text-gray-700 font-medium">Absent</span>
            <span className="text-red-600 font-bold">6</span>
          </div>
        </div>
      </div>

      {/* --- RIGHT: SUBJECT-WISE --- */}
      {/* Darkened container from bg-blue-50/30 to bg-blue-100 */}
      <div className="bg-blue-100 border border-blue-200 rounded-2xl p-6 shadow-sm h-full">
        <h3 className="flex items-center gap-2 text-blue-900 font-bold mb-6 text-lg">
          <BookOpen size={20} className="text-blue-700" /> Subject-wise Attendance
        </h3>

        <div className="space-y-4">
          {subjects.map((sub, idx) => (
            // Darkened card to bg-blue-50 and adjusted borders
            <div key={idx} className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-900">{sub.name}</span>
                <span className="bg-white/60 text-blue-900 text-xs font-bold px-2 py-1 rounded border border-blue-100">
                  {sub.percentage}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-blue-200 rounded-full h-2.5 mb-2">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                  style={{ width: `${sub.percentage}%` }}
                ></div>
              </div>
              
              <p className="text-xs text-gray-600 font-medium">
                {sub.attended} out of {sub.total} classes
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}