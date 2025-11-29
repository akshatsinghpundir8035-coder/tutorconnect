import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, CheckCircle, Trash2, MessageSquare, 
  Calendar, Award, BookOpen, Clock 
} from "lucide-react";

// --- Mock Data based on your screenshots ---
const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    type: "message",
    title: "New message from Dr. Sarah Johnson",
    desc: "I can help you with quadratic equations tomorrow",
    time: "5 mins ago",
    isRead: false,
  },
  {
    id: 2,
    type: "reminder",
    title: "Class reminder",
    desc: "Mathematics class starts in 30 minutes",
    time: "25 mins ago",
    isRead: false,
  },
  {
    id: 3,
    type: "achievement",
    title: "New achievement unlocked",
    desc: "Perfect score in Mathematics quiz!",
    time: "2 hours ago",
    isRead: true,
  },
  {
    id: 4,
    type: "message",
    title: "Message from Prof. Amit Patel",
    desc: "Your physics assignment was excellent!",
    time: "Yesterday",
    isRead: true,
  },
  {
    id: 5,
    type: "material",
    title: "New study material uploaded",
    desc: "Chemistry notes for Chapter 5 are now available",
    time: "2 days ago",
    isRead: true,
  },
];

export default function Notifications() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [filter, setFilter] = useState("all"); // 'all', 'unread', 'read'

  // --- Logic ---
  
  // delete a notification
  const handleDelete = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // mark all as read
  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  // Filter logic
  const filteredNotifications = notifications.filter(n => {
    if (filter === "unread") return !n.isRead;
    if (filter === "read") return n.isRead;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  // --- Helper: Get Styles based on Type ---
  const getNotificationStyle = (type) => {
    switch (type) {
      case "message":
        return {
          wrapper: "bg-blue-50 border-blue-200",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-600",
          icon: <MessageSquare size={20} />
        };
      case "reminder":
        return {
          wrapper: "bg-yellow-50 border-yellow-200",
          iconBg: "bg-yellow-100",
          iconColor: "text-yellow-600",
          icon: <Calendar size={20} />
        };
      case "achievement":
        return {
          wrapper: "bg-purple-50 border-purple-200",
          iconBg: "bg-purple-100",
          iconColor: "text-purple-600",
          icon: <Award size={20} />
        };
      case "material":
        return {
          wrapper: "bg-green-50 border-green-200",
          iconBg: "bg-green-100",
          iconColor: "text-green-600",
          icon: <BookOpen size={20} />
        };
      default:
        return {
          wrapper: "bg-gray-50 border-gray-200",
          iconBg: "bg-gray-100",
          iconColor: "text-gray-600",
          icon: <Clock size={20} />
        };
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-500 mt-1">
              You have <span className="font-semibold text-blue-600">{unreadCount} unread notifications</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handleMarkAllRead}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-50 hover:text-blue-600 transition shadow-sm"
            >
              <CheckCircle size={18} /> Mark all as read
            </button>
            <button 
              onClick={() => navigate(-1)} // Go back to previous page
              className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition shadow-sm"
            >
              Back
            </button>
          </div>
        </div>

        {/* --- TABS --- */}
        <div className="bg-gray-200/80 p-1.5 rounded-full flex mb-8">
          {["all", "unread", "read"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`flex-1 py-2.5 rounded-full text-sm font-bold capitalize transition-all duration-200 ${
                filter === tab 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab} ({
                tab === "all" ? notifications.length 
                : tab === "unread" ? unreadCount 
                : notifications.length - unreadCount
              })
            </button>
          ))}
        </div>

        {/* --- NOTIFICATION LIST --- */}
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <Clock size={32} />
              </div>
              <h3 className="text-gray-900 font-bold text-lg">All caught up!</h3>
              <p className="text-gray-500">You have no notifications in this tab.</p>
            </div>
          ) : (
            filteredNotifications.map((notif) => {
              const style = getNotificationStyle(notif.type);
              
              return (
                <div 
                  key={notif.id}
                  className={`relative flex items-start p-5 rounded-2xl border transition-all duration-200 hover:shadow-md ${style.wrapper} ${notif.isRead ? 'opacity-90' : 'opacity-100 ring-1 ring-offset-1 ring-blue-100'}`}
                >
                  {/* Icon */}
                  <div className={`p-3 rounded-xl shrink-0 mr-4 ${style.iconBg} ${style.iconColor}`}>
                    {style.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-0.5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-gray-900 text-base mb-1 pr-8">
                        {notif.title}
                      </h3>
                      
                      {/* "New" Badge */}
                      {!notif.isRead && (
                        <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide shrink-0">
                          New
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                      {notif.desc}
                    </p>
                    
                    <div className="flex items-center text-xs text-gray-400 font-medium">
                      <Clock size={12} className="mr-1" />
                      {notif.time}
                    </div>
                  </div>

                  {/* Delete Button */}
                  <button 
                    onClick={() => handleDelete(notif.id)}
                    className="absolute bottom-4 right-4 p-2 text-gray-400 hover:text-red-500 hover:bg-white/50 rounded-lg transition"
                    title="Delete notification"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}