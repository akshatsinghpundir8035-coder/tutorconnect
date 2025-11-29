import React from "react";
import { Award, Star, Zap, Target, TrendingUp } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: "Perfect Score",
      description: "Mathematics Quiz - 100%",
      time: "2 days ago",
      icon: <Star size={24} className="text-yellow-600" fill="currentColor" />,
      bg: "bg-yellow-50",
      border: "border-yellow-100",
      iconBg: "bg-yellow-100",
    },
    {
      id: 2,
      title: "Fast Learner",
      description: "Completed 5 lessons in a week",
      time: "1 week ago",
      icon: <Award size={24} className="text-yellow-600" />,
      bg: "bg-yellow-50", // Using yellow theme as per screenshot for consistency, or customize per type
      border: "border-yellow-100",
      iconBg: "bg-yellow-100",
    },
    {
      id: 3,
      title: "Goal Achieved",
      description: "Attendance above 90%",
      time: "2 weeks ago",
      icon: <Target size={24} className="text-yellow-600" />,
      bg: "bg-yellow-50",
      border: "border-yellow-100",
      iconBg: "bg-yellow-100",
    },
    {
      id: 4,
      title: "Score Improvement",
      description: "Improved Physics score by 5%",
      time: "3 weeks ago",
      icon: <TrendingUp size={24} className="text-yellow-600" />,
      bg: "bg-yellow-50",
      border: "border-yellow-100",
      iconBg: "bg-yellow-100",
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-8">
      
      <div className="bg-white border border-purple-100 rounded-2xl p-6 shadow-sm">
        
        {/* Header */}
        <h3 className="flex items-center gap-2 text-gray-800 font-bold mb-6 text-lg">
          <Award size={20} className="text-purple-600" /> Your Achievements
        </h3>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-purple-100 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              {/* Icon Container */}
              <div className={`shrink-0 w-12 h-12 ${item.iconBg} rounded-full flex items-center justify-center border ${item.border}`}>
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h4 className="text-gray-800 font-bold text-base">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-0.5">{item.description}</p>
                <p className="text-xs text-gray-400 mt-2">{item.time}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}