import React from "react";
import { 
  Users, Calendar, Star, Menu, CheckCircle,
  X, Wallet, MessageSquare, Bell, Home, Search, Send, Trash2, Camera, Lock,
  Clock, GraduationCap, Upload
} from "lucide-react";

// --- NAVBAR ---
export const Navbar = ({ onOpenMenu, onOpenMessages, onOpenNotifications }) => (
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

// --- SIDE MENU ---
export const SideMenu = ({ isOpen, onClose, onOpenMessages, onOpenNotifications }) => {
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
          <div 
            onClick={() => { onClose(); onOpenMessages(); }}
            className="flex items-center justify-between p-4 rounded-xl border border-blue-200 bg-white hover:bg-blue-50/30 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <MessageSquare size={20} className="text-blue-600" />
              <span className="font-bold text-slate-700 group-hover:text-blue-700">Messages</span>
            </div>
            <span className="bg-blue-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">3</span>
          </div>
          <div 
            onClick={() => { onClose(); onOpenNotifications(); }}
            className="flex items-center justify-between p-4 rounded-xl border border-amber-200 bg-white hover:bg-amber-50/30 transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <Bell size={20} className="text-amber-500" />
              <span className="font-bold text-slate-700 group-hover:text-amber-700">Notifications</span>
            </div>
            <span className="bg-amber-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full">5</span>
          </div>
          <div className="h-px bg-slate-100 my-4"></div>
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

// --- MESSAGES MENU ---
export const MessagesMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-slate-50 z-[80] overflow-hidden animate-fade-in flex flex-col">
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

// --- NOTIFICATIONS MENU ---
export const NotificationsMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const notifications = [
    { id: 1, type: "request", title: "New student request", desc: "Rahul Sharma wants to connect with you for Mathematics", time: "10 mins ago", icon: <Users size={20} className="text-blue-600" />, containerClass: "bg-blue-50 border-blue-200", iconBg: "bg-white", badge: "New" },
    { id: 2, type: "message", title: "New message from Priya Patel", desc: "Can we reschedule tomorrow's class?", time: "1 hour ago", icon: <MessageSquare size={20} className="text-blue-600" />, containerClass: "bg-blue-50 border-blue-200", iconBg: "bg-white", badge: "New" },
    { id: 3, type: "reminder", title: "Class reminder", desc: "Physics class with Amit Kumar in 1 hour", time: "2 hours ago", icon: <Calendar size={20} className="text-yellow-600" />, containerClass: "bg-white border-yellow-200", iconBg: "bg-yellow-50", badge: null },
    { id: 4, type: "rating", title: "New 5-star rating", desc: "Sneha Reddy rated you 5 stars!", time: "Yesterday", icon: <Star size={20} className="text-yellow-500 fill-yellow-500" />, containerClass: "bg-white border-yellow-200", iconBg: "bg-yellow-50", badge: null },
    { id: 5, type: "payment", title: "Payment received", desc: "You received ₹500 for last week's classes", time: "2 days ago", icon: <CheckCircle size={20} className="text-green-600" />, containerClass: "bg-white border-green-200", iconBg: "bg-green-50", badge: null }
  ];

  return (
    <div className="fixed inset-0 bg-white z-[80] overflow-hidden animate-fade-in flex flex-col font-sans">
      <div className="bg-white px-8 py-6 flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Notifications</h2>
          <p className="text-slate-500 text-base mt-1">You have 2 unread notifications</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-sm text-sm">
            <CheckCircle size={18} /> Mark all as read
          </button>
          <button onClick={onClose} className="px-6 py-2.5 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-sm text-sm">
            Back
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 md:px-8 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex p-1.5 bg-slate-100 rounded-full mb-8 w-full">
            <button className="flex-1 py-2.5 bg-white text-slate-900 shadow-sm rounded-full text-sm font-bold transition-all">All (5)</button>
            <button className="flex-1 py-2.5 text-slate-500 hover:text-slate-700 rounded-full text-sm font-medium transition-all">Unread (2)</button>
            <button className="flex-1 py-2.5 text-slate-500 hover:text-slate-700 rounded-full text-sm font-medium transition-all">Read (3)</button>
          </div>
          <div className="space-y-4">
            {notifications.map((notif) => (
              <div key={notif.id} className={`flex flex-col md:flex-row p-6 rounded-2xl border ${notif.containerClass} shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-md relative group items-start`}>
                 <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${notif.iconBg} mr-5`}>{notif.icon}</div>
                 <div className="flex-1 pr-10">
                   <div className="flex items-center justify-between mb-1">
                     <div className="flex items-center gap-3">
                        <h4 className="font-bold text-slate-900 text-lg">{notif.title}</h4>
                        {notif.badge && <span className="bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full">{notif.badge}</span>}
                     </div>
                   </div>
                   <p className="text-slate-600 text-[15px] mb-3 leading-relaxed">{notif.desc}</p>
                   <span className="flex items-center gap-1.5 text-sm text-slate-400 font-medium"><Clock size={16} /> {notif.time}</span>
                 </div>
                 <button className="absolute top-6 right-6 text-slate-300 hover:text-red-500 transition-colors"><Trash2 size={20} /></button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- EDIT PROFILE MODAL ---
export const EditProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition-opacity animate-fade-in" onClick={onClose} />
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-scale-up pointer-events-none">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col pointer-events-auto">
          <div className="flex justify-between items-center p-5 border-b border-slate-100 bg-white sticky top-0 z-10">
            <div>
              <h2 className="text-xl font-bold text-slate-800">Edit Profile</h2>
              <p className="text-xs text-slate-500 mt-0.5">Update your profile information. Fields marked with <Lock size={10} className="inline mb-0.5" /> are not editable.</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"><X size={20} /></button>
          </div>

          <div className="overflow-y-auto p-6 md:p-8">
            {/* Profile Picture Section */}
            <div className="mb-8 flex flex-col items-center">
              <label className="text-sm font-bold text-slate-700 mb-4 self-start">Profile Picture</label>
              <div className="relative group cursor-pointer">
                <div className="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center text-5xl border-4 border-amber-400 overflow-hidden shadow-md">
                   <span>👩‍🏫</span>
                </div>
                <button className="absolute -top-1 -right-1 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition shadow-sm border-2 border-white"><X size={12} /></button>
                <div className="absolute bottom-0 right-0 p-2 bg-amber-400 text-white rounded-full hover:bg-amber-500 transition shadow-md border-2 border-white"><Camera size={16} /></div>
              </div>
              <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-white border border-amber-200 text-slate-700 font-bold text-sm rounded-lg hover:bg-amber-50 transition-colors shadow-sm"><Upload size={14} /> Change Photo</button>
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
                  <input type="text" value="Dr. Sarah Johnson" readOnly className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-500 focus:outline-none cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">Email Address</label>
                  <input type="text" value="sarah.johnson@tutorconnect.com" readOnly className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-500 focus:outline-none cursor-not-allowed" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-slate-500 mb-1.5">Phone Number</label>
                  <input type="text" value="+91 98765 43210" readOnly className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-500 focus:outline-none cursor-not-allowed" />
                </div>
              </div>
            </div>

            {/* Editable Info */}
            <div>
              <h3 className="text-base font-bold text-slate-800 mb-5">Editable Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Highest Qualification <span className="text-red-500">*</span></label>
                  <input type="text" defaultValue="Ph.D. in Mathematics" className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all font-medium" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Years of Experience <span className="text-red-500">*</span></label>
                  <input type="number" defaultValue="8" className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all font-medium" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Location <span className="text-red-500">*</span></label>
                  <input type="text" defaultValue="South Delhi" className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all font-medium" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Specialization</label>
                  <input type="text" defaultValue="Algebra & Calculus" className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all font-medium" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Hourly Rate (₹)</label>
                  <input type="number" placeholder="e.g., 500" className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all font-medium" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Subjects (comma-separated)</label>
                  <input type="text" defaultValue="Mathematics, Physics, Chemistry" className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all font-medium" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Bio / About You</label>
                  <textarea rows={3} defaultValue="Passionate educator with 8 years of experience in teaching advanced mathematics and sciences." className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-400 transition-all font-medium resize-none"></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 border-t border-slate-100 bg-slate-50 flex justify-end gap-3 sticky bottom-0 z-10">
            <button onClick={onClose} className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-100 transition-colors shadow-sm text-sm">Cancel</button>
            <button onClick={onClose} className="px-5 py-2.5 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors shadow-md shadow-amber-200 text-sm active:scale-95 transform">Save Changes</button>
          </div>
        </div>
      </div>
    </>
  );
};