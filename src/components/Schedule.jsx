import React from "react";
import { Calendar, Clock, Video, FileText, BookOpen } from "lucide-react";

export default function Schedule() {
  const classes = [
    {
      id: 1,
      time: "10:00 AM",
      subject: "Mathematics",
      teacher: "Dr. Sarah Johnson",
      topic: "Quadratic Equations",
      duration: "1 hour",
      status: "Today",
    },
    {
      id: 2,
      time: "2:00 PM",
      subject: "Physics",
      teacher: "Prof. Amit Patel",
      topic: "Newton's Laws",
      duration: "1.5 hours",
      status: "Today",
    },
    {
      id: 3,
      time: "4:30 PM",
      subject: "Chemistry",
      teacher: "Dr. Priya Kumar",
      topic: "Organic Chemistry",
      duration: "1 hour",
      status: "Today",
    },
    {
      id: 4,
      time: "10:00 AM",
      subject: "English",
      teacher: "Mrs. Anjali Desai",
      topic: "Essay Writing",
      duration: "1 hour",
      status: "Tomorrow",
    },
  ];

  const tests = [
    {
      id: 1,
      subject: "Mathematics",
      date: "Nov 10, 2025 at 10:00 AM",
      topics: "Chapters 1-5",
      type: "Monthly Test",
    },
    {
      id: 2,
      subject: "Physics",
      date: "Nov 15, 2025 at 2:00 PM",
      topics: "Mechanics & Motion",
      type: "Monthly Test",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
      
      {/* --- COLUMN 1: SCHEDULED CLASSES --- */}
      {/* Darkened outer container from bg-green-50/30 to bg-green-100 */}
      <div className="bg-green-100 border border-green-200 rounded-2xl p-6 shadow-sm h-full">
        <h3 className="flex items-center gap-2 text-green-900 font-bold mb-6 text-lg">
          <Calendar size={20} className="text-green-700" /> Scheduled Classes
        </h3>

        <div className="space-y-4">
          {classes.map((cls) => (
            // Darkened card from bg-white to bg-green-50 and border to green-200
            <div key={cls.id} className="bg-green-50 border border-green-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2 text-green-800 font-semibold text-sm">
                  <Clock size={16} /> {cls.time}
                </div>
                {/* Made badge slightly darker for better contrast on the new background */}
                <span className="bg-white/80 border border-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                  {cls.status}
                </span>
              </div>
              
              <h4 className="text-lg font-bold text-gray-900">{cls.subject}</h4>
              <p className="text-sm text-gray-600 font-medium">{cls.teacher}</p>
              <p className="text-xs text-gray-500 mt-1">Topic: {cls.topic}</p>

              <div className="mt-4 flex justify-between items-center">
                <span className="bg-green-100/50 border border-green-200 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {cls.duration}
                </span>
                <button className="bg-[#00C853] hover:bg-green-600 text-white px-5 py-1.5 rounded-lg font-bold text-sm transition shadow-sm flex items-center gap-2">
                  <Video size={16} /> Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- COLUMN 2: SCHEDULED TESTS --- */}
      {/* Darkened outer container from bg-red-50/30 to bg-red-100 */}
      <div className="bg-red-100 border border-red-200 rounded-2xl p-6 shadow-sm h-full">
        <h3 className="flex items-center gap-2 text-red-900 font-bold mb-6 text-lg">
          <FileText size={20} className="text-red-700" /> Scheduled Tests
        </h3>

        <div className="space-y-4">
          {tests.map((test) => (
            // Darkened card from bg-white to bg-red-50 and border to red-200
            <div key={test.id} className="bg-red-50 border border-red-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all">
              <div className="mb-3">
                <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">
                  {test.type}
                </span>
              </div>
              
              <h4 className="text-lg font-bold text-gray-900 mb-2">{test.subject}</h4>
              
              <div className="space-y-1 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Calendar size={14} className="text-red-400" /> {test.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <BookOpen size={14} className="text-red-400" /> Topics: {test.topics}
                </div>
              </div>

              <button className="w-full bg-white border border-red-200 text-red-700 font-semibold py-2 rounded-lg hover:bg-red-100 transition text-sm">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}