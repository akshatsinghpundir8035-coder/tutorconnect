import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Search, Send, ArrowLeft, MoreVertical, Phone, Video, 
  Check, CheckCheck, Paperclip, Smile, AlertTriangle, 
  MessageSquare, X, ChevronLeft
} from "lucide-react";

// --- Initial Mock Data ---
const INITIAL_CONVERSATIONS = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Mathematics Teacher",
    subject: "Mathematics",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    status: "Online",
    unread: 2,
    lastMsg: "I can help you with quadratic equations tomorrow",
    lastTime: "10:30 AM",
    messages: [
      { id: 1, type: "received", text: "Hi! I need help with quadratic equations", time: "9:00 AM" },
      { id: 2, type: "sent", text: "Of course! I can help you with that. When would you like to schedule a session?", time: "9:15 AM", status: "read" },
      { id: 3, type: "received", text: "How about tomorrow at 10 AM?", time: "9:30 AM" },
      { id: 4, type: "sent", text: "I can help you with quadratic equations tomorrow", time: "10:30 AM", status: "sent" }
    ]
  },
  {
    id: 2,
    name: "Prof. Amit Patel",
    role: "Physics Teacher",
    subject: "Physics",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
    status: "Offline",
    unread: 0,
    lastMsg: "Your physics assignment was excellent!",
    lastTime: "Yesterday",
    messages: [
      { id: 1, type: "received", text: "Your physics assignment was excellent!", time: "Yesterday" }
    ]
  },
  {
    id: 3,
    name: "Mrs. Anjali Desai",
    role: "English Teacher",
    subject: "English",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
    status: "Online",
    unread: 1,
    lastMsg: "Next class on Friday at 4 PM",
    lastTime: "2 days ago",
    messages: [
      { id: 1, type: "received", text: "Don't forget to read Chapter 4.", time: "2 days ago" },
      { id: 2, type: "received", text: "Next class on Friday at 4 PM", time: "2 days ago" }
    ]
  }
];

export default function Chat() {
  const navigate = useNavigate();
   
  // State
  const [conversations, setConversations] = useState(INITIAL_CONVERSATIONS);
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

  // Refs
  const messagesEndRef = useRef(null);

  // Derived State
  const activeChat = conversations.find(c => c.id === selectedChatId) || conversations[0];
   
  // Filter Logic for Search Bar
  const filteredConversations = conversations.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.lastMsg.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Auto-scroll to bottom when messages change or chat opens
  useEffect(() => {
    scrollToBottom();
  }, [activeChat.messages, selectedChatId, isMobileChatOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handlers
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now(),
      type: "sent",
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "sent"
    };

    setConversations(prev => prev.map(chat => {
      if (chat.id === selectedChatId) {
        return {
          ...chat,
          messages: [...chat.messages, newMessage],
          lastMsg: "You: " + inputValue,
          lastTime: "Just now"
        };
      }
      return chat;
    }));

    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  const handleChatSelect = (id) => {
    setSelectedChatId(id);
    setIsMobileChatOpen(true); // Open chat view on mobile
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#EFF4F9] flex flex-col font-sans overflow-hidden">
       
      {/* --- TOP HEADER --- */}
      {/* 1. UPDATED: Added max-w-7xl mx-auto to align width with cards below */}
      {/* 2. UPDATED: Changed padding to pt-5 pb-1 to pull it closer to the cards */}
      <header className="flex-shrink-0 w-full max-w-7xl mx-auto px-4 md:px-6 pt-5 pb-1 flex justify-between items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Messages</h1>
          <p className="text-sm text-gray-500 font-medium mt-1 ml-0.5">Chat with your teachers</p>
        </div>
         
        <button 
          onClick={() => navigate('/dashboard')} 
          className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl shadow-sm border border-gray-200/50 hover:shadow-md hover:border-gray-200 text-gray-700 font-semibold transition-all duration-200 text-sm md:text-base"
        >
          <ArrowLeft size={18} /> 
          <span className="hidden md:inline">Back to Dashboard</span> 
          <span className="md:hidden">Back</span>
        </button>
      </header>

      {/* --- MAIN CHAT LAYOUT --- */}
      <div className="flex-grow flex overflow-hidden max-w-7xl mx-auto w-full p-2 md:p-4 gap-4">
         
        {/* LEFT SIDEBAR (Conversation List) */}
        {/* Hidden on mobile if chat is open */}
        <div className={`w-full md:w-1/3 bg-white rounded-2xl shadow-sm border border-gray-200 flex flex-col ${isMobileChatOpen ? 'hidden md:flex' : 'flex'}`}>
           
          {/* Sidebar Header & Search */}
          <div className="p-4 border-b border-gray-100 flex-shrink-0">
            <h2 className="font-bold text-[#22324B] flex items-center gap-2 mb-4">
              <MessageSquare size={20} className="text-blue-600" /> Conversations
            </h2>
            <div className="relative group">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name or subject..."
                className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* List of Users */}
          <div className="flex-grow overflow-y-auto p-2 space-y-1 custom-scrollbar">
            {filteredConversations.length === 0 ? (
              <div className="text-center py-8 text-gray-400 text-sm">
                No conversations found.
              </div>
            ) : (
              filteredConversations.map((chat) => (
                <div 
                  key={chat.id}
                  onClick={() => handleChatSelect(chat.id)}
                  className={`p-3 rounded-xl cursor-pointer transition-all duration-200 flex items-start gap-3 border ${
                    selectedChatId === chat.id 
                      ? "bg-blue-50 border-blue-200 shadow-sm" 
                      : "bg-white border-transparent hover:bg-gray-50 hover:border-gray-100"
                  }`}
                >
                  <div className="relative shrink-0">
                    <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full border border-gray-200 object-cover" />
                    {chat.status === "Online" && (
                      <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                   
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start mb-0.5">
                      <h4 className={`font-bold text-sm truncate ${selectedChatId === chat.id ? "text-blue-900" : "text-gray-800"}`}>
                        {chat.name}
                      </h4>
                      <span className="text-[11px] text-gray-400 whitespace-nowrap ml-2">{chat.lastTime}</span>
                    </div>
                     
                    <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-medium rounded-md mb-1.5 border border-gray-200">
                      {chat.subject}
                    </span>
                     
                    <div className="flex justify-between items-center">
                      <p className={`text-xs truncate pr-2 ${chat.unread > 0 ? "text-gray-800 font-medium" : "text-gray-500"}`}>
                        {chat.lastMsg}
                      </p>
                      {chat.unread > 0 && (
                        <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center shadow-sm">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>


        {/* RIGHT MAIN CHAT AREA */}
        {/* Hidden on mobile unless chat is open */}
        <div className={`w-full md:w-2/3 bg-white rounded-2xl shadow-sm border border-gray-200 flex-col ${isMobileChatOpen ? 'flex' : 'hidden md:flex'}`}>
           
          {/* Chat Header */}
          <div className="p-3 md:p-4 border-b border-gray-100 flex justify-between items-center bg-white rounded-t-2xl z-10">
            <div className="flex items-center gap-3">
              {/* Mobile Back Button */}
              <button 
                onClick={() => setIsMobileChatOpen(false)}
                className="md:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>

              <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full border border-gray-200" />
              <div>
                <h3 className="font-bold text-[#22324B] leading-tight text-sm md:text-base">{activeChat.name}</h3>
                <p className="text-xs text-blue-600 font-medium">{activeChat.role}</p>
              </div>
            </div>
             
            <div className="flex items-center gap-1">
              <div className={`hidden sm:flex px-3 py-1 rounded-full text-xs font-medium border mr-2 ${
                activeChat.status === "Online" 
                  ? "bg-green-50 text-green-700 border-green-200" 
                  : "bg-gray-100 text-gray-600 border-gray-200"
              }`}>
                {activeChat.status}
              </div>
              <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-500 transition"><Phone size={20} /></button>
              <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-500 transition"><Video size={20} /></button>
              <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-500 transition"><MoreVertical size={20} /></button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 md:p-6 bg-[#FAFAFA] space-y-4 md:space-y-6 custom-scrollbar">
            {activeChat.messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex flex-col ${msg.type === "sent" ? "items-end" : "items-start"}`}
              >
                <div 
                  className={`max-w-[85%] md:max-w-[70%] px-5 py-3 rounded-2xl shadow-sm relative text-sm leading-relaxed ${
                    msg.type === "sent" 
                      ? "bg-blue-600 text-white rounded-br-none" 
                      : "bg-white text-gray-800 border border-gray-100 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
                <div className="flex items-center gap-1 mt-1 text-[11px] text-gray-400 px-1">
                  <span>{msg.time}</span>
                  {msg.type === "sent" && (
                    <span>
                      {msg.status === "read" ? <CheckCheck size={14} className="text-blue-500" /> : <Check size={14} />}
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Footer */}
          <div className="p-3 md:p-4 bg-white border-t border-gray-100 rounded-b-2xl">
             
            {/* Cost Warning Box */}
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg p-2 md:p-3 mb-3 text-xs text-amber-900">
              <AlertTriangle size={16} className="text-amber-600 shrink-0" />
              <p>Each message costs <span className="font-bold">₹50</span>. Balance: <span className="font-bold">₹2,500</span></p>
            </div>

            {/* Input Area */}
            <div className="flex items-end gap-2 md:gap-3">
              <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition hidden sm:block">
                <Paperclip size={20} />
              </button>
               
              <div className="flex-grow relative">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 rounded-2xl px-4 md:px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white focus:border-blue-200 border border-transparent transition"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 hidden sm:block">
                  <Smile size={20} />
                </button>
              </div>

              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className={`p-3 rounded-full shadow-md transition transform ${
                  inputValue.trim() 
                    ? "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105" 
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <Send size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #E5E7EB;
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #D1D5DB;
        }
      `}</style>
    </div>
  );
}