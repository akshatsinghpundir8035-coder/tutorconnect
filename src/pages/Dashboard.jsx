import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { 
  Menu, MapPin, Edit, BarChart3, Clock, FileText, Calendar, Award,
  MessageCircle, Share2, Wallet, MessageSquare, Users, TrendingUp, 
  CheckCircle, GraduationCap, X, Bell 
} from "lucide-react";

// Import Components
import EditProfileModal from "./EditProfileModal";
import Overview from "../components/Overview";
import Performance from "../components/Performance";
import Notifications from "../pages/Notifications"; // Make sure path is correct (components vs pages)
import Attendance from "../components/Attendance";
import Assignments from "../components/Assignments"; 
import Schedule from "../components/Schedule";
import Achievements from "../components/Achievements"; // <--- Import Achievements

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("teachers"); 
  
  const navigate = useNavigate();

  // Mock Data
  const teachers = [
    {
      name: "Sakshi Kumari",
      location: "Gardanibagh Patna",
      qualification: "M. Com",
      experience: "10 yrs",
      subjects: ["Commerce", "Accountancy"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sakshi"
    },
    {
      name: "Samaya Kumari",
      location: "Gola Road Patna",
      qualification: "B.Com",
      experience: "12 yrs",
      subjects: ["Economics", "Business Studies"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Samaya"
    },
    {
      name: "Shashank Suman",
      location: "Patna, Bihar",
      qualification: "B.Tech",
      experience: "6 yrs",
      subjects: ["Mathematics", "Computer Science"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shashank"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans relative">
      
      {/* --- EDIT PROFILE MODAL --- */}
      <EditProfileModal 
        isOpen={isEditProfileOpen} 
        onClose={() => setIsEditProfileOpen(false)} 
      />

      {/* --- SIDEBAR MENU OVERLAY --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Black Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu Content */}
          <div className="relative w-full max-w-sm bg-white h-full shadow-2xl p-6 animate-in slide-in-from-right duration-300 flex flex-col">
            
            {/* Menu Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-[#22324B] font-bold text-xl">
                 <GraduationCap size={28} className="text-blue-600" /> Menu
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="p-1 hover:bg-gray-100 rounded-full transition"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Menu Items List */}
            <div className="space-y-4 flex-grow">
              
              {/* Messages Item */}
              <div 
                onClick={() => navigate('/chat')}
                className="flex items-center justify-between p-4 border border-blue-200 rounded-xl bg-white hover:bg-blue-50 transition cursor-pointer shadow-sm group"
              >
                <div className="flex items-center gap-3 text-gray-700 font-medium group-hover:text-blue-700">
                  <MessageSquare size={20} className="text-blue-600"/> Messages
                </div>
                <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">3</span>
              </div>

              {/* Wallet Item */}
              <div className="flex items-center justify-between p-4 border border-yellow-300 rounded-xl bg-white hover:bg-yellow-50 transition cursor-pointer shadow-sm group">
                <div className="flex items-center gap-3 text-gray-700 font-medium group-hover:text-yellow-800">
                  <Wallet size={20} className="text-[#EAB308]"/> Wallet Recharge
                </div>
                <span className="bg-[#EAB308] text-[#22324B] text-xs font-bold px-2.5 py-1 rounded-md">₹2500</span>
              </div>

              {/* Notifications Item */}
              <div 
                onClick={() => { setActiveTab('notifications'); setIsMenuOpen(false); }} 
                className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition cursor-pointer shadow-sm group"
              >
                <div className="flex items-center gap-3 text-gray-700 font-medium group-hover:text-gray-900">
                  <Bell size={20} className="text-gray-500"/> Notifications
                </div>
                <span className="bg-slate-600 text-white text-xs font-bold px-2.5 py-1 rounded-md">5</span>
              </div>

            </div>

            {/* Bottom Section */}
            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={() => navigate('/')}
                className="w-full py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition text-gray-800 font-bold text-center"
              >
                 Back to Home
              </button>
            </div>

          </div>
        </div>
      )}
      
      {/* --- TOP SECTION: Gradient Header --- */}
      <div className="w-full bg-gradient-to-r from-[#FACC15] via-blue-500 to-blue-600 pb-12 pt-6 px-6 shadow-xl">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex justify-between items-center mb-10 text-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-md">
                <GraduationCap size={28} strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold text-xl leading-tight tracking-wide">TutorConnect</h1>
                <span className="text-sm font-medium opacity-90">Student Dashboard</span>
              </div>
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition backdrop-blur-md cursor-pointer"
            >
              <Menu size={24} color="white" />
            </button>
          </div>

          <div className="text-white mb-8 pl-1">
            <h2 className="text-2xl font-semibold opacity-95">Welcome back, Rahul Sharma!</h2>
            <p className="text-sm font-medium opacity-80 mt-1">Grade 10 • Delhi Public School</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-md rounded-xl py-6 px-4 text-center border border-white/10 shadow-lg text-white hover:bg-white/25 transition-all duration-300">
              <div className="text-3xl font-bold tracking-tight">87%</div>
              <div className="text-xs font-medium opacity-90 mt-1 uppercase tracking-wide">Overall Score</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl py-6 px-4 text-center border border-white/10 shadow-lg text-white hover:bg-white/25 transition-all duration-300">
              <div className="text-3xl font-bold tracking-tight">94%</div>
              <div className="text-xs font-medium opacity-90 mt-1 uppercase tracking-wide">Attendance</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl py-6 px-4 text-center border border-white/10 shadow-lg text-white hover:bg-white/25 transition-all duration-300">
              <div className="text-3xl font-bold tracking-tight">45/50</div>
              <div className="text-xs font-medium opacity-90 mt-1 uppercase tracking-wide">Assignments</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-6 mt-6 pb-20 relative z-10">
        
        {/* --- PROFILE CARD --- */}
        <div className="bg-[#F0F7FF] rounded-2xl border border-blue-200 p-6 flex flex-col md:flex-row items-center md:items-center gap-6 mb-10 shadow-sm">
          
          {/* Avatar Section */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 rounded-full border-[3px] border-[#3B82F6] p-0.5 bg-white overflow-hidden">
               <img 
                 src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" 
                 alt="Rahul" 
                 className="w-full h-full object-cover" 
                 referrerPolicy="no-referrer"
               />
            </div>
            
            {/* Edit Button on Avatar */}
            <button 
              onClick={() => setIsEditProfileOpen(true)}
              className="absolute bottom-0 right-0 bg-[#3B82F6] text-white p-2 rounded-full border-[3px] border-white shadow-sm hover:bg-blue-700 transition flex items-center justify-center z-10"
            >
               <Edit size={14} strokeWidth={2.5} />
            </button>
          </div>

          {/* Details Section */}
          <div className="flex-grow text-center md:text-left w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
              
              <div>
                <h3 className="text-2xl font-bold text-[#1e293b]">Rahul Sharma</h3>
                <p className="text-[#64748b] text-sm font-medium mt-0.5">Grade 10 • Delhi Public School</p>
                
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-3">
                  <span className="bg-[#DBEAFE] text-[#1D4ED8] px-3 py-1 rounded-md text-xs font-bold tracking-wide">
                    Roll No: DPS2024-156
                  </span>
                  <span className="bg-[#F1F5F9] text-[#475569] px-3 py-1 rounded-md text-xs font-bold tracking-wide border border-gray-200">
                    Section A
                  </span>
                </div>

                <div className="flex justify-center md:justify-start items-center gap-4 mt-4 text-sm text-[#64748b] font-medium">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-[#94a3b8]" /> South Delhi
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GraduationCap size={16} className="text-[#94a3b8]" /> Delhi Public School
                  </div>
                </div>
              </div>

              {/* Edit Profile Button */}
              <div className="w-full md:w-auto mt-6 md:mt-0 flex justify-center md:justify-end">
                <button 
                  onClick={() => setIsEditProfileOpen(true)}
                  className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-gray-50 transition shadow-sm"
                >
                   <Edit size={16} /> Edit Profile
                </button>
              </div>

            </div>
          </div>
          
        </div>

        {/* --- NAVIGATION TABS --- */}
        <div className="bg-white rounded-full p-2 shadow-sm border border-gray-100 flex justify-between items-center overflow-x-auto mb-8 no-scrollbar">
          <button 
            onClick={() => setActiveTab("teachers")}
            className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold shadow-sm whitespace-nowrap transition-all duration-300 transform ${
              activeTab === "teachers" 
                ? "bg-[#FACC15] text-[#22324B] scale-105 shadow-md" 
                : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
            }`}
          >
             <Users size={20} /> Teachers
          </button>
          
          <button 
            onClick={() => setActiveTab("overview")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all duration-300 transform ${
              activeTab === "overview" 
                ? "bg-blue-600 text-white scale-105 shadow-md" 
                : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
            }`}
          >
            <BarChart3 size={20} /> Overview
          </button>

          <button 
            onClick={() => setActiveTab("performance")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all duration-300 transform ${
              activeTab === "performance" 
                ? "bg-blue-600 text-white scale-105 shadow-md" 
                : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
            }`}
          >
            <TrendingUp size={20} /> Performance
          </button>

          <button 
            onClick={() => setActiveTab("attendance")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all duration-300 transform ${
              activeTab === "attendance" 
                ? "bg-blue-600 text-white scale-105 shadow-md" 
                : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
            }`}
          >
            <CheckCircle size={20} /> Attendance
          </button>

          <button 
            onClick={() => setActiveTab("assignments")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all duration-300 transform ${
              activeTab === "assignments" 
                ? "bg-blue-600 text-white scale-105 shadow-md" 
                : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
            }`}
          >
            <FileText size={20} /> Assignments
          </button>

          <button 
            onClick={() => setActiveTab("schedule")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all duration-300 transform ${
              activeTab === "schedule" 
                ? "bg-blue-600 text-white scale-105 shadow-md" 
                : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
            }`}
          >
            <Calendar size={20} /> Schedule
          </button>

          {/* Achievements Tab - NOW ACTIVE */}
          <button 
            onClick={() => setActiveTab("achievements")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all duration-300 transform ${
              activeTab === "achievements" 
                ? "bg-blue-600 text-white scale-105 shadow-md" 
                : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
            }`}
          >
            <Award size={20} /> Achievements
          </button>
        </div>

        {/* --- DYNAMIC CONTENT AREA --- */}
        
        {/* VIEW 1: TEACHERS LIST */}
        {activeTab === "teachers" && (
          <div className="border border-yellow-200 rounded-2xl p-6 bg-yellow-50 mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-[#22324B] font-bold mb-6 flex items-center gap-3 text-lg">
              <Users size={24} className="text-[#EAB308]" strokeWidth={2} />
              Your Assigned Teachers
            </h3>
            <div className="space-y-4">
              {teachers.map((teacher, index) => (
                <div key={index} className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-blue-100 transition-all flex flex-col md:flex-row justify-between items-start gap-4 bg-white group duration-300">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <img src={teacher.avatar} alt={teacher.name} className="w-full h-full" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#22324B] text-lg group-hover:text-blue-600 transition-colors">{teacher.name}</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1 font-medium">
                        <MapPin size={12} /> {teacher.location}
                      </div>
                      <div className="mt-2 text-sm text-gray-600 space-y-1">
                        <p>Qualification: <span className="font-semibold text-gray-800">{teacher.qualification}</span></p>
                        <p>Experience: <span className="font-semibold text-gray-800">{teacher.experience}</span></p>
                      </div>
                      <div className="flex gap-2 mt-3">
                        {teacher.subjects.map((subject, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full border border-blue-100">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 self-start md:self-center">
                    <button className="p-2.5 text-blue-600 border border-blue-100 rounded-xl hover:bg-blue-600 hover:text-white transition shadow-sm">
                      <MessageCircle size={20} />
                    </button>
                    <button className="p-2.5 text-gray-400 border border-gray-200 rounded-xl hover:bg-gray-100 hover:text-gray-600 transition shadow-sm">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: OVERVIEW STATS */}
        {activeTab === "overview" && (
          <div className="mb-8">
            <Overview />
          </div>
        )}

        {/* VIEW 3: PERFORMANCE STATS */}
        {activeTab === "performance" && (
          <div className="mb-8">
            <Performance />
          </div>
        )}

        {/* VIEW 4: ATTENDANCE */}
        {activeTab === "attendance" && (
          <div className="mb-8">
            <Attendance />
          </div>
        )}

        {/* VIEW 5: ASSIGNMENTS */}
        {activeTab === "assignments" && (
          <div className="mb-8">
            <Assignments />
          </div>
        )}

        {/* VIEW 6: SCHEDULE */}
        {activeTab === "schedule" && (
          <div className="mb-8">
            <Schedule />
          </div>
        )}

        {/* VIEW 7: ACHIEVEMENTS */}
        {activeTab === "achievements" && (
          <div className="mb-8">
            <Achievements />
          </div>
        )}

        {/* VIEW 8: NOTIFICATIONS TAB */}
        {activeTab === "notifications" && (
          <div className="mb-8">
            <Notifications />
          </div>
        )}

        {/* Bottom Grid - ONLY SHOW IN TEACHERS TAB */}
        {activeTab === "teachers" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition duration-300">
              <h3 className="font-bold text-[#22324B] flex items-center gap-2 mb-4 text-lg">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><Wallet size={20} /></div>
                Wallet & Payments
              </h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Upload Report Card on Teacher dashboard. Student Dashboard includes marks and analysis. 
                We will have the scores of Tests and exams test results.
              </p>
              <button className="w-full py-3.5 bg-[#FACC15] text-[#22324B] font-bold rounded-xl hover:bg-yellow-400 transition shadow-sm flex items-center justify-center gap-2 active:scale-95">
                <Wallet size={18} /> Recharge Wallet (₹2500)
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition duration-300">
              <h3 className="font-bold text-[#22324B] flex items-center gap-2 mb-4 text-lg">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600"><MessageSquare size={20} /></div>
                Communication
              </h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Message your teachers directly through the wallet-based payment system. 
                Teachers can reply to your messages instantly.
              </p>
              <button 
                onClick={() => navigate('/chat')}
                className="w-full py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition shadow-sm flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquare size={18} /> Open Messages
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}