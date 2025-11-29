import React from "react";
import { BookOpen, FileText } from "lucide-react";

export default function Overview() {
  const subjects = [
    { name: "Mathematics", score: 92, teacher: "Dr. Sarah Johnson" },
    { name: "Physics", score: 85, teacher: "Prof. Amit Patel" },
    { name: "Chemistry", score: 88, teacher: "Dr. Priya Kumar" },
    { name: "English", score: 82, teacher: "Mrs. Anjali Desai" },
  ];

  const monthlyScores = [
    { month: "September", score: 84 },
    { month: "October", score: 87 },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
      
      {/* --- TOP STATS ROW --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Overall Score - Darkened from bg-blue-50 to bg-blue-100 */}
        <div className="bg-blue-100 border border-blue-200 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-blue-900 font-medium">Overall Score</h3>
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">87%</span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-2.5 mb-2">
            <div className="bg-blue-900 h-2.5 rounded-full" style={{ width: '87%' }}></div>
          </div>
          <p className="text-xs text-blue-800">87 out of 100</p>
        </div>

        {/* Attendance - Darkened from bg-green-50 to bg-green-100 */}
        <div className="bg-green-100 border border-green-200 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-green-900 font-medium">Attendance</h3>
            <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">94%</span>
          </div>
          <div className="w-full bg-green-200 rounded-full h-2.5 mb-2">
            <div className="bg-green-900 h-2.5 rounded-full" style={{ width: '94%' }}></div>
          </div>
          <p className="text-xs text-green-800">94 out of 100 days</p>
        </div>

        {/* Assignments - Darkened from bg-purple-50 to bg-purple-100 */}
        <div className="bg-purple-100 border border-purple-200 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-purple-900 font-medium">Assignments</h3>
            <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">90%</span>
          </div>
          <div className="w-full bg-purple-200 rounded-full h-2.5 mb-2">
            <div className="bg-purple-900 h-2.5 rounded-full" style={{ width: '90%' }}></div>
          </div>
          <p className="text-xs text-purple-800">45/50 completed</p>
        </div>
      </div>

      {/* --- SUBJECT-WISE PERFORMANCE --- */}
      {/* Darkened container from bg-white to bg-blue-100 */}
      <div className="bg-blue-100 border border-blue-200 rounded-2xl p-6 shadow-sm">
        <h3 className="flex items-center gap-2 text-blue-900 font-bold mb-6">
          <BookOpen size={20} className="text-blue-700" /> Subject-wise Performance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map((sub, idx) => (
            // Darkened inner card from bg-gray-50/50 to bg-blue-50
            <div key={idx} className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-900">{sub.name}</span>
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">{sub.score}%</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
                <div className="bg-blue-900 h-2 rounded-full" style={{ width: `${sub.score}%` }}></div>
              </div>
              <p className="text-xs text-gray-600">Teacher: {sub.teacher}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- MONTHLY TEST SCORES --- */}
      {/* Darkened container from bg-[#FFFBEB] to bg-yellow-100 */}
      <div className="bg-yellow-100 border border-yellow-200 rounded-2xl p-6">
         <h3 className="flex items-center gap-2 text-yellow-900 font-bold mb-6">
          <FileText size={20} className="text-yellow-700" /> Monthly Test Scores
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {monthlyScores.map((item, idx) => (
            // Darkened inner card from bg-white to bg-yellow-50
            <div key={idx} className="bg-yellow-50 rounded-xl p-5 border border-yellow-200 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-900">{item.month}</span>
                <span className="bg-[#FACC15] text-black text-xs font-bold px-2 py-1 rounded border border-yellow-300">{item.score}/100</span>
              </div>
              <div className="w-full bg-yellow-200 rounded-full h-2">
                <div className="bg-yellow-900 h-2 rounded-full" style={{ width: `${item.score}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}