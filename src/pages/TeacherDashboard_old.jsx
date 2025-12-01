import React, { useState } from "react";
// import Navbar from "../components/Navbar"; 
// NOTE: I have commented out the external import and created a local Navbar below 
// to ensure this preview works without errors. Uncomment this in your actual project.

import { 
  Users, BookOpen, Calendar, DollarSign, Star, 
  MapPin, Edit, FileText, Upload, Clock, GraduationCap, 
  Lightbulb, ChevronRight, Trophy, Menu, TrendingUp, CheckCircle,
  X, Wallet, MessageSquare, Bell, Home, Search, Send, Trash2, Check, Camera, Lock
} from "lucide-react";

// --- LOCAL NAVBAR COMPONENT ---
const Navbar = ({ onOpenMenu, onOpenMessages, onOpenNotifications }) => (
  <nav className="fixed top-0 left-0 w-full bg-white/90 border-b border-amber-100 px-4 md:px-8 py-3 flex justify-between items-center z-50 shadow-sm backdrop-blur-md">
    <div className="flex items-center gap-2">
       <div className="bg-amber-50 p-2 rounded-lg border border-amber-100">
          <GraduationCap className="text-amber-500" size={24} />
       </div>
       <span className="text-xl font-bold text-slate-800 tracking-tight">TutorConnect</span>
    </div>
    <div className="flex items-center gap-4">
      <div className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Online
      </div>
      <button 
        onClick={onOpenMessages}
        className="p-2 hover:bg-amber-100 rounded-xl text-slate-600 transition-colors relative"
      >
        <MessageSquare size={24} />
        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
      
      {/* Notification Button in Navbar */}
      <button 
        onClick={onOpenNotifications}
        className="p-2 hover:bg-amber-100 rounded-xl text-slate-600 transition-colors relative hidden md:block"
      >
        <Bell size={24} />
        <span className="absolute top-1 right-2 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-white"></span>
      </button>

      <button 
        onClick={onOpenMenu}
        className="p-2 hover:bg-amber-100 rounded-xl text-slate-600 transition-colors"
      >
        <Menu size={24} />
      </button>
    </div>
  </nav>
);

// --- SIDE MENU COMPONENT ---
// --- SIDE MENU COMPONENT ---
const SideMenu = ({ isOpen, onClose, onOpenMessages, onOpenNotifications }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] transition-opacity" 
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-[70] p-6 animate-slide-in-right overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Menu</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl border border-green-200 bg-white hover:bg-green-50/30 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
              <Wallet size={20} className="text-green-600" />
              <span className="font-bold text-slate-700 group-hover:text-green-700">Wallet</span>
            </div>
            <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-lg">₹45,230</span>
          </div>
          
          {/* Messages Item */}
          <div 
            onClick={() => {
              onClose();
              onOpenMessages();
            }}
            className="flex items-center justify-between p-4 rounded-xl border border-blue-200 bg-white hover:bg-blue-50/30 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <MessageSquare size={20} className="text-blue-600" />
              <span className="font-bold text-slate-700 group-hover:text-blue-700">Messages</span>
            </div>
            <span className="bg-blue-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">3</span>
          </div>

          {/* Notifications Item */}
          <div 
            onClick={() => {
              onClose();
              onOpenNotifications();
            }}
            className="flex items-center justify-between p-4 rounded-xl border border-amber-200 bg-white hover:bg-amber-50/30 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <Bell size={20} className="text-amber-500" />
              <span className="font-bold text-slate-700 group-hover:text-amber-700">Notifications</span>
            </div>
            <span className="bg-amber-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">5</span>
          </div>
          
          <div className="h-px bg-slate-100 my-4"></div>
          
          {/* --- BACK TO HOME BUTTON --- */}
          {/* Added onClick to navigate to root URL "/" */}
          <div 
            onClick={() => window.location.href = "/"}
            className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer text-slate-700 hover:text-slate-900 font-bold"
          >
             <Home size={20} />
             <span>Back to Home</span>
          </div>
        </div>
      </div>
    </>
  );
};

// --- MESSAGES MENU COMPONENT ---
const MessagesMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-50 z-[80] overflow-hidden animate-fade-in flex flex-col">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-slate-200 flex justify-between items-center shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Messages</h2>
          <p className="text-slate-500 text-sm">Reply to messages from your students</p>
        </div>
        <button 
          onClick={onClose}
          className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
        >
          Back
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden max-w-7xl mx-auto w-full p-4 md:p-6 gap-6">
        {/* Sidebar: Conversation List */}
        <div className="w-full md:w-1/3 bg-white rounded-2xl border border-slate-200 flex flex-col overflow-hidden shadow-sm">
          <div className="p-4 border-b border-slate-100">
            <div className="flex items-center gap-2 text-blue-600 font-bold mb-3">
              <MessageSquare size={18} /> Conversations
            </div>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search messages..." 
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 border-b border-slate-50 bg-blue-50/40 cursor-pointer border-l-4 border-l-blue-500 transition-colors hover:bg-blue-50/60">
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-xl">👨‍🎓</div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Rahul Sharma</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 text-slate-500 font-medium">Grade 10</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] text-slate-400 font-medium">10:30 AM</span>
                  <span className="bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">1</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 line-clamp-1 pl-[52px]">Thank you for the help with equations!</p>
            </div>

            <div className="p-4 border-b border-slate-50 cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-xl">🧕</div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-300 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Priya Patel</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 text-slate-500 font-medium">Grade 12</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] text-slate-400 font-medium">Yesterday</span>
                  <span className="bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">2</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 line-clamp-1 pl-[52px]">Can we reschedule tomorrow's class?</p>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="hidden md:flex flex-1 bg-white rounded-2xl border border-slate-200 flex-col shadow-sm overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-xl">👨‍🎓</div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Rahul Sharma</h3>
                <p className="text-xs text-slate-500">Grade 10 • Mathematics</p>
              </div>
            </div>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">Online</span>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-50/30">
            <div className="flex flex-col items-start gap-1 max-w-[80%]">
              <div className="bg-slate-100 text-slate-800 p-4 rounded-2xl rounded-tl-none text-sm font-medium">
                Hi! I need help with quadratic equations
              </div>
              <span className="text-[10px] text-slate-400 pl-1">9:00 AM</span>
            </div>

            <div className="flex flex-col items-end gap-1 max-w-[80%] self-end">
              <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-none text-sm font-medium shadow-sm shadow-blue-200">
                Of course! I can help you with that. When would you like to schedule a session?
              </div>
              <span className="text-[10px] text-slate-400 pr-1 flex items-center gap-1">9:15 AM <CheckCircle size={10} className="text-blue-500" /></span>
            </div>

            <div className="flex flex-col items-start gap-1 max-w-[80%]">
              <div className="bg-slate-100 text-slate-800 p-4 rounded-2xl rounded-tl-none text-sm font-medium">
                How about tomorrow at 10 AM?
              </div>
              <span className="text-[10px] text-slate-400 pl-1">9:30 AM</span>
            </div>

            <div className="flex flex-col items-end gap-1 max-w-[80%] self-end">
              <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-none text-sm font-medium shadow-sm shadow-blue-200">
                I can help you with quadratic equations tomorrow
              </div>
              <span className="text-[10px] text-slate-400 pr-1 flex items-center gap-1">10:30 AM <CheckCircle size={10} className="text-blue-500" /></span>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="bg-blue-50/50 p-3 rounded-xl mb-3 flex items-start gap-2 border border-blue-100">
               <MessageSquare size={14} className="text-blue-400 mt-0.5" />
               <p className="text-xs text-slate-500 leading-relaxed">
                 You can reply to student messages. Students initiate conversations by messaging you.
               </p>
            </div>
            <div className="flex gap-3 items-end bg-slate-50 p-2 rounded-xl border border-slate-200 focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-50 transition-all">
              <textarea 
                placeholder="Reply to student..." 
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm p-2 text-slate-700 placeholder:text-slate-400 resize-none h-10 max-h-32"
              ></textarea>
              <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm mb-0.5">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- UPDATED NOTIFICATIONS MENU COMPONENT ---
const NotificationsMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      type: "request",
      title: "New student request",
      desc: "Rahul Sharma wants to connect with you for Mathematics",
      time: "10 mins ago",
      icon: <Users size={20} className="text-blue-600" />,
      // Matches the first card in your image: Blue Background + Blue Border
      containerClass: "bg-blue-50 border-blue-200", 
      iconBg: "bg-white", // White circle for icon inside blue card
      badge: "New"
    },
    {
      id: 2,
      type: "message",
      title: "New message from Priya Patel",
      desc: "Can we reschedule tomorrow's class?",
      time: "1 hour ago",
      icon: <MessageSquare size={20} className="text-blue-600" />,
      // Matches the second card: Blue Background + Blue Border
      containerClass: "bg-blue-50 border-blue-200",
      iconBg: "bg-white",
      badge: "New"
    },
    {
      id: 3,
      type: "reminder",
      title: "Class reminder",
      desc: "Physics class with Amit Kumar in 1 hour",
      time: "2 hours ago",
      icon: <Calendar size={20} className="text-yellow-600" />,
      // Matches the yellow cards: White Background + Yellow Border
      containerClass: "bg-white border-yellow-200",
      iconBg: "bg-yellow-50",
      badge: null
    },
    {
      id: 4,
      type: "rating",
      title: "New 5-star rating",
      desc: "Sneha Reddy rated you 5 stars!",
      time: "Yesterday",
      icon: <Star size={20} className="text-yellow-500 fill-yellow-500" />,
      // Matches the yellow cards: White Background + Yellow Border
      containerClass: "bg-white border-yellow-200",
      iconBg: "bg-yellow-50",
      badge: null
    },
    {
      id: 5,
      type: "payment",
      title: "Payment received",
      desc: "You received ₹500 for last week's classes",
      time: "2 days ago",
      icon: <CheckCircle size={20} className="text-green-600" />,
      // Matches the green card: White Background + Green Border
      containerClass: "bg-white border-green-200",
      iconBg: "bg-green-50",
      badge: null
    }
  ];

  return (
    <div className="fixed inset-0 bg-white z-[80] overflow-hidden animate-fade-in flex flex-col font-sans">
      {/* Header */}
      <div className="bg-white px-8 py-6 flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Notifications</h2>
          <p className="text-slate-500 text-base mt-1">You have 2 unread notifications</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-sm text-sm">
            <CheckCircle size={18} /> Mark all as read
          </button>
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-sm text-sm"
          >
            Back
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 md:px-8 pb-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Tabs - Exactly like screenshot (Gray pill container, white active pill) */}
          <div className="flex p-1.5 bg-slate-100 rounded-full mb-8 w-full">
            <button className="flex-1 py-2.5 bg-white text-slate-900 shadow-sm rounded-full text-sm font-bold transition-all">
              All (5)
            </button>
            <button className="flex-1 py-2.5 text-slate-500 hover:text-slate-700 rounded-full text-sm font-medium transition-all">
              Unread (2)
            </button>
            <button className="flex-1 py-2.5 text-slate-500 hover:text-slate-700 rounded-full text-sm font-medium transition-all">
              Read (3)
            </button>
          </div>

          {/* List */}
          <div className="space-y-4">
            {notifications.map((notif) => (
              <div 
                key={notif.id} 
                className={`flex flex-col md:flex-row p-6 rounded-2xl border ${notif.containerClass} shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-md relative group items-start`}
              >
                {/* Icon Circle */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${notif.iconBg} mr-5`}>
                  {notif.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 pr-10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                        <h4 className="font-bold text-slate-900 text-lg">{notif.title}</h4>
                        {/* New Badge */}
                        {notif.badge && (
                        <span className="bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                            {notif.badge}
                        </span>
                        )}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-[15px] mb-3 leading-relaxed">{notif.desc}</p>
                  
                  <span className="flex items-center gap-1.5 text-sm text-slate-400 font-medium">
                    <Clock size={16} /> {notif.time}
                  </span>
                </div>

                {/* Trash Button - Top Right */}
                <button className="absolute top-6 right-6 text-slate-300 hover:text-red-500 transition-colors">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

// --- EDIT PROFILE MODAL ---
const EditProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition-opacity animate-fade-in" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-scale-up pointer-events-none">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto">
          
          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b border-slate-100 bg-white sticky top-0 z-10">
            <div>
              <h2 className="text-xl font-bold text-slate-800">Edit Profile</h2>
              <p className="text-xs text-slate-500 mt-0.5">Update your profile information. Fields marked with <Lock size={10} className="inline mb-0.5" /> are not editable.</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto p-6 md:p-8">
            
            {/* Profile Picture Section */}
            <div className="mb-8 flex flex-col items-center">
              <label className="text-sm font-bold text-slate-700 mb-4 self-start">Profile Picture</label>
              <div className="relative group cursor-pointer">
                <div className="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center text-5xl border-4 border-amber-400 overflow-hidden shadow-md">
                   <span>👩‍🏫</span>
                </div>
                
                {/* Remove Button */}
                <button className="absolute -top-1 -right-1 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition shadow-sm border-2 border-white">
                  <X size={12} />
                </button>

                {/* Camera Icon */}
                <div className="absolute bottom-0 right-0 p-2 bg-amber-400 text-white rounded-full hover:bg-amber-500 transition shadow-md border-2 border-white">
                  <Camera size={16} />
                </div>
              </div>
              <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-white border border-amber-200 text-slate-700 font-bold text-sm rounded-lg hover:bg-amber-50 transition-colors shadow-sm">
                <Upload size={14} /> Change Photo
              </button>
              <p className="text-xs text-slate-400 mt-2">JPG, PNG or GIF (max 5MB)</p>
            </div>

            {/* Read-Only Account Info */}
            <div className="mb-8 p-5 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2 mb-4 text-slate-500 font-bold text-xs uppercase tracking-wider">
                <Lock size={12} /> Account Information (Read-only)
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    value="Dr. Sarah Johnson" 
                    readOnly 
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-500 focus:outline-none cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">Email Address</label>
                  <input 
                    type="text" 
                    value="sarah.johnson@tutorconnect.com" 
                    readOnly 
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-500 focus:outline-none cursor-not-allowed"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">Phone Number</label>
                  <input 
                    type="text" 
                    value="+91 98765 43210" 
                    readOnly 
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-500 focus:outline-none cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Editable Info */}
            <div>
              <h3 className="text-base font-bold text-slate-800 mb-5">Editable Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Highest Qualification <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    defaultValue="Ph.D. in Mathematics" 
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Years of Experience <span className="text-red-500">*</span></label>
                  <input 
                    type="number" 
                    defaultValue="8" 
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Location <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    defaultValue="South Delhi" 
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Specialization</label>
                  <input 
                    type="text" 
                    defaultValue="Algebra & Calculus" 
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all font-medium"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Hourly Rate (₹)</label>
                  <input 
                    type="number" 
                    placeholder="e.g., 500" 
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all font-medium"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Subjects (comma-separated)</label>
                  <input 
                    type="text" 
                    defaultValue="Mathematics, Physics, Chemistry" 
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all font-medium"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Bio / About You</label>
                  <textarea 
                    rows={3}
                    defaultValue="Passionate educator with 8 years of experience in teaching advanced mathematics and sciences."
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all font-medium resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="p-5 border-t border-slate-100 bg-slate-50 flex justify-end gap-3 sticky bottom-0 z-10">
            <button 
              onClick={onClose}
              className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-100 transition-colors shadow-sm text-sm"
            >
              Cancel
            </button>
            <button 
              onClick={onClose}
              className="px-5 py-2.5 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors shadow-md shadow-amber-200 text-sm active:scale-95 transform"
            >
              Save Changes
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default function TeacherDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false); // New State
  
  // --- CUSTOM ANIMATION STYLES ---
  const floatAnimation = `
    @keyframes float {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(2deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    @keyframes float-gentle {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0px); }
    }
    @keyframes float-reverse {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(15px) rotate(-2deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    @keyframes slide-in-right {
      from { transform: translateX(100%); }
      to { transform: translateX(0); }
    }
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes scale-up {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .animate-float {
      animation: float 8s ease-in-out infinite;
    }
    .animate-float-gentle {
      animation: float-gentle 3s ease-in-out infinite;
    }
    .animate-float-delayed {
      animation: float-reverse 9s ease-in-out 1s infinite;
    }
    .animate-pulse-slow {
      animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    .animate-slide-in-right {
      animation: slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .animate-fade-in {
      animation: fade-in 0.2s ease-out;
    }
    .animate-scale-up {
      animation: scale-up 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
  `;

  // --- MOCK DATA ---
  const stats = [
    { 
      label: "Students Assigned", 
      value: "24", 
      icon: <Users size={24} className="text-blue-600" />, 
      color: "bg-blue-50", 
      border: "border-blue-100",
      trend: <TrendingUp size={20} className="text-green-500" /> 
    },
    { 
      label: "Classes Completed", 
      value: "342", 
      badge: "+12", 
      badgeColor: "bg-green-500 text-white",
      icon: <BookOpen size={24} className="text-emerald-600" />, 
      color: "bg-emerald-50", 
      border: "border-emerald-100" 
    },
    { 
      label: "Upcoming Classes", 
      value: "8", 
      badge: "Today", 
      badgeColor: "bg-amber-500 text-white",
      icon: <Calendar size={24} className="text-amber-600" />, 
      color: "bg-amber-50", 
      border: "border-amber-100" 
    },
    { 
      label: "Total Earnings", 
      value: "₹45,230", 
      badge: "4.8★", 
      badgeColor: "bg-purple-500 text-white",
      icon: <Star size={24} className="text-purple-600 fill-purple-600" />, 
      color: "bg-purple-50", 
      border: "border-purple-100" 
    },
  ];

  const students = [
    { name: "Rahul Sharma", grade: "Grade 10 • Mathematics", seen: "2 days ago", progress: 85, img: "👨‍🎓" },
    { name: "Priya Patel", grade: "Grade 12 • Physics", seen: "1 day ago", progress: 92, img: "🧕" },
    { name: "Amit Kumar", grade: "Grade 9 • Chemistry", seen: "3 days ago", progress: 78, img: "🧑" },
    { name: "Sneha Reddy", grade: "Grade 11 • Mathematics", seen: "1 day ago", progress: 88, img: "👩‍🦰" },
  ];

  const schedule = [
    { time: "10:00 AM", name: "Rahul Sharma", subject: "Mathematics", duration: "1 hour" },
    { time: "2:00 PM", name: "Priya Patel", subject: "Physics", duration: "1.5 hours" },
    { time: "4:30 PM", name: "Amit Kumar", subject: "Chemistry", duration: "1 hour" },
  ];

  const scheduledTests = [
    { name: "Monthly Test - Mathematics", date: "Nov 10, 2025", students: 15 },
    { name: "Monthly Test - Physics", date: "Nov 15, 2025", students: 12 },
  ];

  const completedTests = [
    { name: "October Test - Mathematics", date: "Oct 10, 2025", students: 15, avgScore: 85 },
    { name: "September Test - Mathematics", date: "Sep 10, 2025", students: 14, avgScore: 82 },
  ];

  return (
    <div className="min-h-screen bg-[#FFFBEB] font-sans relative overflow-hidden">
      <style>{floatAnimation}</style>
      
      {/* Edit Profile Modal */}
      <EditProfileModal isOpen={isEditProfileOpen} onClose={() => setIsEditProfileOpen(false)} />

      {/* Side Menu Overlay */}
      <SideMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onOpenMessages={() => setIsMessagesOpen(true)}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
      />
      
      {/* Messages Menu Overlay */}
      <MessagesMenu isOpen={isMessagesOpen} onClose={() => setIsMessagesOpen(false)} />

      {/* Notifications Menu Overlay */}
      <NotificationsMenu isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />

      {/* --- GLOBAL BACKGROUND ICONS (Watermarks) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 text-amber-200/40 transform translate-x-1/4 -translate-y-1/4 animate-float">
           <Lightbulb size={600} strokeWidth={1} />
        </div>
        <div className="absolute bottom-0 left-0 text-amber-200/30 transform -translate-x-1/4 translate-y-1/4 animate-float-delayed">
           <GraduationCap size={500} strokeWidth={1} />
        </div>
        <div className="absolute top-1/2 left-20 text-amber-300/20 animate-pulse-slow">
           <Star size={80} fill="currentColor" />
        </div>
      </div>

      <Navbar 
        onOpenMenu={() => setIsMenuOpen(true)} 
        onOpenMessages={() => setIsMessagesOpen(true)} 
        onOpenNotifications={() => setIsNotificationsOpen(true)}
      /> 

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 pt-28 relative z-10">
        
        {/* --- PROFILE HEADER --- */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-2 pl-1">My Profile</h1>
          <p className="text-slate-500 mb-6 pl-1 font-medium">Welcome back, Dr. Sarah Johnson!</p>
          
          {/* Yellow Profile Card */}
          <div className="relative overflow-hidden bg-[#FFFEF0] rounded-[2rem] p-8 border border-amber-200 shadow-sm transition-all duration-300 hover:shadow-md group">
            
            {/* Right-side Lightbulb Watermark */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-amber-400/20 animate-float-delayed pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <Lightbulb size={180} strokeWidth={2} />
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start relative z-10">
              
              {/* Avatar */}
              <div className="relative">
                <div className="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center text-5xl border-[4px] border-amber-300 shadow-sm relative overflow-hidden">
                   <span className="z-10">👩‍🏫</span>
                </div>
                
                {/* EDIT BUTTON ON PROFILE PIC */}
                <button 
                  onClick={() => setIsEditProfileOpen(true)}
                  className="absolute bottom-0 right-0 p-2 bg-amber-400 text-white rounded-full hover:bg-amber-500 hover:scale-105 transition-all shadow-md border-2 border-white cursor-pointer z-20"
                >
                  <Edit size={14} />
                </button>
              </div>

              {/* Info */}
              <div className="flex-1 space-y-3 text-center md:text-left">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Dr. Sarah Johnson</h2>
                  <p className="text-slate-500 font-medium text-sm mt-0.5">Ph.D. in Mathematics</p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {["Mathematics", "Physics", "Chemistry"].map(tag => (
                    <span key={tag} className="bg-[#FFF8E1] text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-100/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-sm text-slate-600 pt-2">
                  <div className="flex items-center gap-1.5">
                    <Star size={16} className="fill-amber-400 text-amber-400"/> 
                    <span className="font-bold text-slate-900">4.8</span> 
                    <span className="text-slate-500">(156 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={16} className="text-slate-400"/> 
                    <span className="font-medium">8 years experience</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-slate-400"/> 
                    <span className="font-medium">South Delhi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className={`bg-white p-5 rounded-2xl border ${stat.border} shadow-sm relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  {stat.icon}
                </div>
                {stat.badge && (
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${stat.badgeColor}`}>
                    {stat.badge}
                  </span>
                )}
                {stat.trend && (
                  <div className="bg-green-50 p-1.5 rounded-full">
                    {stat.trend}
                  </div>
                )}
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* --- MAIN CONTENT SPLIT --- */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN (Students & Tests) */}
          <div className="xl:col-span-2 space-y-8">
            
            {/* My Students */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-center mb-6 relative z-10">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <Users size={20} className="text-blue-500"/> My Students
                </h3>
                <button className="text-blue-600 text-sm font-bold hover:underline">
                  View All
                </button>
              </div>
              
              <div className="space-y-4 relative z-10">
                {students.map((student, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer bg-white group">
                    <div className="flex items-center w-full sm:w-auto mb-3 sm:mb-0">
                      <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-2xl mr-4 shadow-sm group-hover:scale-105 transition-transform">
                        {student.img}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900">{student.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                          <span>{student.grade}</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <span>Last: {student.seen}</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-auto sm:ml-auto flex flex-col items-end pl-0 sm:pl-16">
                      <div className="flex items-center gap-2 text-xs mb-1.5 w-full justify-end">
                        <span className="text-slate-400 font-semibold">Progress</span>
                        <span className={`font-bold ${student.progress > 80 ? 'text-green-600' : 'text-amber-600'}`}>
                          {student.progress}%
                        </span>
                      </div>
                      <div className="w-full sm:w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ${student.progress > 80 ? 'bg-green-500' : 'bg-amber-500'}`} 
                          style={{width: `${student.progress}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- ACHIEVEMENTS SECTION --- */}
            <div className="bg-[#FFFEF0] rounded-[2rem] p-8 border border-amber-200 shadow-sm relative overflow-hidden">
              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Trophy size={20} className="text-amber-500"/> Achievements
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-amber-200 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="flex justify-center mb-3">
                    <Star size={32} className="text-amber-500 fill-white stroke-[2px]" />
                  </div>
                  <h4 className="text-slate-900 font-bold text-base mb-1">Top Rated</h4>
                  <p className="text-slate-500 text-xs">Highest rated tutor this month</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-amber-200 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="flex justify-center mb-3">
                    <div className="relative">
                       <Trophy size={32} className="text-amber-500 stroke-[2px]" />
                    </div>
                  </div>
                  <h4 className="text-slate-900 font-bold text-base mb-1">100 Classes</h4>
                  <p className="text-slate-500 text-xs">Completed 100+ classes</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-amber-200 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="flex justify-center mb-3">
                    <Users size={32} className="text-amber-500 stroke-[2px]" />
                  </div>
                  <h4 className="text-slate-900 font-bold text-base mb-1">Student Favorite</h4>
                  <p className="text-slate-500 text-xs">95% student retention</p>
                </div>
              </div>
            </div>

            {/* Test Management */}
            <div className="bg-white rounded-[2rem] p-8 border border-purple-100 shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <FileText size={20} className="text-purple-500"/> Test Management
                </h3>
                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  2 tests/month required
                </span>
              </div>

              <div className="space-y-8">
                {/* Scheduled Tests */}
                <div>
                   <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                     <Calendar size={16} className="text-blue-500" /> Scheduled Tests
                   </h4>
                   <div className="space-y-3">
                    {scheduledTests.map((test, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-blue-100 rounded-xl hover:shadow-sm transition gap-4 bg-white">
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">{test.name}</h4>
                          <div className="flex gap-4 text-xs font-medium mt-1 text-slate-500">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={12}/> {test.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Users size={12}/> {test.students} students
                            </span>
                          </div>
                        </div>
                        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition shadow-sm active:scale-95">
                          <Upload size={14} /> 
                          <span>Upload Results</span>
                        </button>
                      </div>
                    ))}
                   </div>
                </div>

                {/* Completed Tests */}
                <div>
                   <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                     <CheckCircle size={16} className="text-green-500" /> Completed Tests
                   </h4>
                   <div className="space-y-3">
                    {completedTests.map((test, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-green-100 rounded-xl hover:shadow-sm transition gap-4 bg-white">
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">{test.name}</h4>
                          <div className="flex gap-4 text-xs font-medium mt-1 text-slate-500 items-center">
                             <span className="flex items-center gap-1.5">
                              <Calendar size={12}/> {test.date}
                            </span>
                            <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">
                               Avg Score: {test.avgScore}%
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Users size={12}/> {test.students} students
                            </span>
                          </div>
                        </div>
                        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-50 transition shadow-sm active:scale-95">
                          <FileText size={14} /> 
                          <span>View Results</span>
                        </button>
                      </div>
                    ))}
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Schedule & Sidebar) */}
          <div className="space-y-8">
            
            {/* Schedule */}
            <div className="bg-white rounded-[2rem] p-6 border border-blue-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                 <Clock size={150} className="text-blue-600" />
              </div>

              <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 relative z-10">
                 <Calendar size={20} className="text-blue-500" /> Today's Schedule
              </h3>
              
              <div className="space-y-4 relative z-10">
                {schedule.map((slot, i) => (
                  <div key={i} className="p-4 rounded-xl border border-blue-100 bg-blue-50/30 hover:bg-blue-50 transition group">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-1.5 text-blue-700 font-bold text-sm">
                        <Clock size={14} /> {slot.time}
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase bg-white px-2 py-0.5 rounded border border-slate-100">
                        {slot.duration}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{slot.name}</h4>
                      <p className="text-sm text-slate-500 mb-3">{slot.subject}</p>
                      <button className="w-full py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition shadow-sm flex items-center justify-center gap-1">
                        Join Class
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Share Knowledge Card - UPDATED */}
            <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 text-center relative overflow-hidden group hover:shadow-md transition-all">
                {/* Background Decoration */}
                <div className="absolute -right-4 -top-4 opacity-10 pointer-events-none rotate-12">
                   <Lightbulb size={100} className="text-amber-600" />
                </div>
                
                {/* Main Icon - Standalone, Animated */}
                <div className="flex justify-center mb-4 relative z-10">
                   <div className="animate-float-gentle">
                      <Lightbulb size={48} className="text-amber-500 stroke-[2px]" />
                   </div>
                </div>
                
                <h4 className="font-bold text-slate-900 text-sm relative z-10">Share Your Knowledge</h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed relative z-10 font-medium px-2">
                  You're making a difference in 24 students' lives. Keep inspiring!
                </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}