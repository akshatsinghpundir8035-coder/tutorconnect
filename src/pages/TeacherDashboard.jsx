import React, { useState } from "react";
import { 
  Users, BookOpen, Calendar, Star, MapPin, Edit, FileText, Upload, Clock, GraduationCap, Lightbulb, Trophy, TrendingUp, CheckCircle
} from "lucide-react";

// Import your split files
import { Navbar, SideMenu, MessagesMenu, NotificationsMenu, EditProfileModal } from "./TeacherDashboardOverlays";
import { getStats, students, schedule, scheduledTests, completedTests } from "./TeacherDashboardData";

export default function TeacherDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  
  const stats = getStats(); // Get data

  // --- CUSTOM ANIMATION STYLES ---
  const floatAnimation = `
    @keyframes float { 0% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(2deg); } 100% { transform: translateY(0px) rotate(0deg); } }
    @keyframes float-gentle { 0% { transform: translateY(0px); } 50% { transform: translateY(-8px); } 100% { transform: translateY(0px); } }
    @keyframes float-reverse { 0% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(15px) rotate(-2deg); } 100% { transform: translateY(0px) rotate(0deg); } }
    @keyframes slide-in-right { from { transform: translateX(100%); } to { transform: translateX(0); } }
    @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
    @keyframes scale-up { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .animate-float { animation: float 8s ease-in-out infinite; }
    .animate-float-gentle { animation: float-gentle 3s ease-in-out infinite; }
    .animate-float-delayed { animation: float-reverse 9s ease-in-out 1s infinite; }
    .animate-pulse-slow { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    .animate-slide-in-right { animation: slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
    .animate-fade-in { animation: fade-in 0.2s ease-out; }
    .animate-scale-up { animation: scale-up 0.2s cubic-bezier(0.16, 1, 0.3, 1); }
  `;

  return (
    <div className="min-h-screen bg-[#FFFBEB] font-sans relative overflow-hidden">
      <style>{floatAnimation}</style>
      
      {/* --- OVERLAYS --- */}
      <EditProfileModal isOpen={isEditProfileOpen} onClose={() => setIsEditProfileOpen(false)} />
      <SideMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onOpenMessages={() => setIsMessagesOpen(true)}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
      />
      <MessagesMenu isOpen={isMessagesOpen} onClose={() => setIsMessagesOpen(false)} />
      <NotificationsMenu isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />

      {/* --- BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 text-amber-200/40 transform translate-x-1/4 -translate-y-1/4 animate-float"><Lightbulb size={600} strokeWidth={1} /></div>
        <div className="absolute bottom-0 left-0 text-amber-200/30 transform -translate-x-1/4 translate-y-1/4 animate-float-delayed"><GraduationCap size={500} strokeWidth={1} /></div>
        <div className="absolute top-1/2 left-20 text-amber-300/20 animate-pulse-slow"><Star size={80} fill="currentColor" /></div>
      </div>

      <Navbar 
        onOpenMenu={() => setIsMenuOpen(true)} 
        onOpenMessages={() => setIsMessagesOpen(true)} 
        onOpenNotifications={() => setIsNotificationsOpen(true)}
      /> 

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 pt-28 relative z-10">
        
        {/* PROFILE HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-2 pl-1">My Profile</h1>
          <p className="text-slate-500 mb-6 pl-1 font-medium">Welcome back, Dr. Sarah Johnson!</p>
          <div className="relative overflow-hidden bg-[#FFFEF0] rounded-[2rem] p-8 border border-amber-200 shadow-sm transition-all duration-300 hover:shadow-md group">
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-amber-400/20 animate-float-delayed pointer-events-none group-hover:scale-110 transition-transform duration-700">
               <Lightbulb size={180} strokeWidth={2} />
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start relative z-10">
              <div className="relative">
                <div className="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center text-5xl border-[4px] border-amber-300 shadow-sm relative overflow-hidden"><span className="z-10">👩‍🏫</span></div>
                <button onClick={() => setIsEditProfileOpen(true)} className="absolute bottom-0 right-0 p-2 bg-amber-400 text-white rounded-full hover:bg-amber-500 hover:scale-105 transition-all shadow-md border-2 border-white cursor-pointer z-20"><Edit size={14} /></button>
              </div>
              <div className="flex-1 space-y-3 text-center md:text-left">
                <div><h2 className="text-2xl font-bold text-slate-900">Dr. Sarah Johnson</h2><p className="text-slate-500 font-medium text-sm mt-0.5">Ph.D. in Mathematics</p></div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {["Mathematics", "Physics", "Chemistry"].map(tag => (
                    <span key={tag} className="bg-[#FFF8E1] text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-100/50">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-sm text-slate-600 pt-2">
                  <div className="flex items-center gap-1.5"><Star size={16} className="fill-amber-400 text-amber-400"/> <span className="font-bold text-slate-900">4.8</span> <span className="text-slate-500">(156 reviews)</span></div>
                  <div className="flex items-center gap-1.5"><Clock size={16} className="text-slate-400"/> <span className="font-medium">8 years experience</span></div>
                  <div className="flex items-center gap-1.5"><MapPin size={16} className="text-slate-400"/> <span className="font-medium">South Delhi</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className={`bg-white p-5 rounded-2xl border ${stat.border} shadow-sm relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl ${stat.color}`}>{stat.icon}</div>
                {stat.badge && <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${stat.badgeColor}`}>{stat.badge}</span>}
                {stat.trend && <div className="bg-green-50 p-1.5 rounded-full">{stat.trend}</div>}
              </div>
              <div><div className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</div><div className="text-sm text-slate-500 font-medium mt-1">{stat.label}</div></div>
            </div>
          ))}
        </div>

        {/* MAIN SPLIT */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* LEFT COLUMN */}
          <div className="xl:col-span-2 space-y-8">
            {/* My Students */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-center mb-6 relative z-10">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2"><Users size={20} className="text-blue-500"/> My Students</h3>
                <button className="text-blue-600 text-sm font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-4 relative z-10">
                {students.map((student, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer bg-white group">
                    <div className="flex items-center w-full sm:w-auto mb-3 sm:mb-0">
                      <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-2xl mr-4 shadow-sm group-hover:scale-105 transition-transform">{student.img}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900">{student.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1"><span>{student.grade}</span><span className="w-1 h-1 bg-slate-300 rounded-full"></span><span>Last: {student.seen}</span></div>
                      </div>
                    </div>
                    <div className="w-full sm:w-auto sm:ml-auto flex flex-col items-end pl-0 sm:pl-16">
                      <div className="flex items-center gap-2 text-xs mb-1.5 w-full justify-end">
                        <span className="text-slate-400 font-semibold">Progress</span>
                        <span className={`font-bold ${student.progress > 80 ? 'text-green-600' : 'text-amber-600'}`}>{student.progress}%</span>
                      </div>
                      <div className="w-full sm:w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full transition-all duration-1000 ${student.progress > 80 ? 'bg-green-500' : 'bg-amber-500'}`} style={{width: `${student.progress}%`}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-[#FFFEF0] rounded-[2rem] p-8 border border-amber-200 shadow-sm relative overflow-hidden">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2"><Trophy size={20} className="text-amber-500"/> Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-amber-200 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="flex justify-center mb-3"><Star size={32} className="text-amber-500 fill-white stroke-[2px]" /></div>
                  <h4 className="text-slate-900 font-bold text-base mb-1">Top Rated</h4><p className="text-slate-500 text-xs">Highest rated tutor this month</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-amber-200 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="flex justify-center mb-3"><div className="relative"><Trophy size={32} className="text-amber-500 stroke-[2px]" /></div></div>
                  <h4 className="text-slate-900 font-bold text-base mb-1">100 Classes</h4><p className="text-slate-500 text-xs">Completed 100+ classes</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-amber-200 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="flex justify-center mb-3"><Users size={32} className="text-amber-500 stroke-[2px]" /></div>
                  <h4 className="text-slate-900 font-bold text-base mb-1">Student Favorite</h4><p className="text-slate-500 text-xs">95% student retention</p>
                </div>
              </div>
            </div>

            {/* Test Management */}
            <div className="bg-white rounded-[2rem] p-8 border border-purple-100 shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2"><FileText size={20} className="text-purple-500"/> Test Management</h3>
                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">2 tests/month required</span>
              </div>
              <div className="space-y-8">
                {/* Scheduled */}
                <div>
                   <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2"><Calendar size={16} className="text-blue-500" /> Scheduled Tests</h4>
                   <div className="space-y-3">
                    {scheduledTests.map((test, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-blue-100 rounded-xl hover:shadow-sm transition gap-4 bg-white">
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">{test.name}</h4>
                          <div className="flex gap-4 text-xs font-medium mt-1 text-slate-500"><span className="flex items-center gap-1.5"><Calendar size={12}/> {test.date}</span><span className="flex items-center gap-1.5"><Users size={12}/> {test.students} students</span></div>
                        </div>
                        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition shadow-sm active:scale-95"><Upload size={14} /> <span>Upload Results</span></button>
                      </div>
                    ))}
                   </div>
                </div>
                {/* Completed */}
                <div>
                   <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Completed Tests</h4>
                   <div className="space-y-3">
                    {completedTests.map((test, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-green-100 rounded-xl hover:shadow-sm transition gap-4 bg-white">
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">{test.name}</h4>
                          <div className="flex gap-4 text-xs font-medium mt-1 text-slate-500 items-center">
                             <span className="flex items-center gap-1.5"><Calendar size={12}/> {test.date}</span>
                             <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">Avg Score: {test.avgScore}%</span>
                             <span className="flex items-center gap-1.5"><Users size={12}/> {test.students} students</span>
                          </div>
                        </div>
                        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-50 transition shadow-sm active:scale-95"><FileText size={14} /> <span>View Results</span></button>
                      </div>
                    ))}
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            <div className="bg-white rounded-[2rem] p-6 border border-blue-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none"><Clock size={150} className="text-blue-600" /></div>
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 relative z-10"><Calendar size={20} className="text-blue-500" /> Today's Schedule</h3>
              <div className="space-y-4 relative z-10">
                {schedule.map((slot, i) => (
                  <div key={i} className="p-4 rounded-xl border border-blue-100 bg-blue-50/30 hover:bg-blue-50 transition group">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-1.5 text-blue-700 font-bold text-sm"><Clock size={14} /> {slot.time}</div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase bg-white px-2 py-0.5 rounded border border-slate-100">{slot.duration}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{slot.name}</h4>
                      <p className="text-sm text-slate-500 mb-3">{slot.subject}</p>
                      <button className="w-full py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition shadow-sm flex items-center justify-center gap-1">Join Class</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Share Knowledge Card */}
            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 text-center relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute -right-4 -top-4 opacity-10 pointer-events-none rotate-12"><Lightbulb size={100} className="text-amber-600" /></div>
                <div className="flex justify-center mb-4 relative z-10"><div className="animate-float-gentle"><Lightbulb size={48} className="text-amber-500 stroke-[2px]" /></div></div>
                <h4 className="font-bold text-slate-900 text-sm relative z-10">Share Your Knowledge</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed relative z-10 font-medium px-2">You're making a difference in 24 students' lives. Keep inspiring!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}