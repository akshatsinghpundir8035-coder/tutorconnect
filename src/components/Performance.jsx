import React from "react";
import { BookOpen, TrendingUp, TrendingDown } from "lucide-react";

export default function Performance() {
  const subjects = [
    { 
      name: "Mathematics", 
      score: 92, 
      trend: "+4%", 
      isPositive: true,
      teacher: "Dr. Sarah Johnson",
      details: { test1: "90%", test2: "94%", attendance: "23/24", attendancePerc: "96%" }
    },
    { 
      name: "Physics", 
      score: 85, 
      trend: "+3%", 
      isPositive: true,
      teacher: "Prof. Amit Patel",
      details: { test1: "83%", test2: "87%", attendance: "19/20", attendancePerc: "95%" }
    },
    { 
      name: "Chemistry", 
      score: 88, 
      trend: "-2%", 
      isPositive: false,
      teacher: "Dr. Priya Kumar",
      details: { test1: "89%", test2: "87%", attendance: "21/22", attendancePerc: "95%" }
    },
    { 
      name: "English", 
      score: 82, 
      trend: "+2%", 
      isPositive: true,
      teacher: "Mrs. Anjali Desai",
      details: { test1: "80%", test2: "84%", attendance: "17/18", attendancePerc: "94%" }
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
      
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h3 className="flex items-center gap-2 text-gray-800 font-bold mb-6 text-lg">
          <BookOpen size={20} className="text-blue-500" /> Detailed Performance Analysis
        </h3>
        
        <div className="space-y-8">
          {subjects.map((sub, idx) => (
            <div key={idx} className="bg-gray-50/50 rounded-xl p-6 border border-gray-100 hover:border-blue-100 transition-colors">
              
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                <h4 className="text-lg font-bold text-gray-800">{sub.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md">{sub.score}%</span>
                  <span className={`text-xs font-bold flex items-center gap-1 ${sub.isPositive ? 'text-green-600' : 'text-red-500'}`}>
                    {sub.isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {sub.trend}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4">Teacher: {sub.teacher}</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                <div className="bg-gray-900 h-3 rounded-full" style={{ width: `${sub.score}%` }}></div>
              </div>

              {/* Detail Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500 mb-1">Test 1</p>
                  <p className="text-lg font-bold text-gray-800">{sub.details.test1}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500 mb-1">Test 2</p>
                  <p className="text-lg font-bold text-gray-800">{sub.details.test2}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500 mb-1">Attendance</p>
                  <p className="text-lg font-bold text-gray-800">{sub.details.attendance}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500 mb-1">Attendance %</p>
                  <p className="text-lg font-bold text-gray-800">{sub.details.attendancePerc}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}