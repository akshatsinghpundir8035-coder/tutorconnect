import React, { useState } from "react";
import { X, Camera, Lock, Upload } from "lucide-react";

export default function EditProfileModal({ isOpen, onClose }) {
  // --- Form State ---
  const [formData, setFormData] = useState({
    grade: "Grade 10",
    section: "A",
    school: "Delhi Public School",
    location: "South Delhi",
    subjects: "Mathematics, Physics, Chemistry, English",
    goals: "Improve overall grades and prepare for competitive exams"
  });

  // Prevent rendering if not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 transition-all">
      {/* Modal Container */}
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* --- HEADER --- */}
        <div className="flex justify-between items-start p-6 pb-2 sticky top-0 bg-white z-10 border-b border-transparent">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>
            <p className="text-sm text-gray-500 mt-1">
              Update your profile information. Fields marked with <Lock size={12} className="inline mb-0.5" /> are not editable.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:bg-gray-100 rounded-full transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* --- CONTENT --- */}
        <div className="p-6 space-y-8">
          
          {/* 1. Profile Picture Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-[#22324B] self-start mb-4">Profile Picture</h3>
            
            <div className="relative group">
              {/* Avatar Ring */}
              <div className="w-28 h-28 rounded-full border-[4px] border-[#EAB308] p-1 bg-white relative">
                 <img 
                   src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" 
                   alt="Profile" 
                   className="w-full h-full rounded-full object-cover" 
                 />
              </div>

              {/* Red Remove Button (Top Right) */}
              <button className="absolute -top-1 -right-1 bg-red-500 text-white p-1.5 rounded-full border-2 border-white shadow-sm hover:bg-red-600 transition">
                <X size={14} strokeWidth={3} />
              </button>

              {/* Yellow Camera Button (Bottom Right) */}
              <button className="absolute bottom-1 right-1 bg-[#EAB308] text-white p-2 rounded-full border-2 border-white shadow-sm hover:bg-yellow-600 transition">
                <Camera size={16} />
              </button>
            </div>

            {/* Change Photo Button */}
            <div className="mt-4 flex flex-col items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border border-[#EAB308] text-[#EAB308] bg-yellow-50/50 hover:bg-yellow-50 font-semibold rounded-lg text-sm transition">
                <Upload size={16} /> Change Photo
              </button>
              <p className="text-xs text-gray-400">JPG, PNG or GIF (max 5MB)</p>
            </div>
          </div>

          {/* 2. Read-Only Information */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-[#22324B] font-semibold border-b border-gray-100 pb-2">
              <Lock size={16} className="text-gray-400"/> Account Information (Read-only)
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#22324B]">Full Name</label>
                <input 
                  type="text" 
                  value="Rahul Sharma" 
                  disabled 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-500 text-sm cursor-not-allowed select-none focus:outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#22324B]">Email Address</label>
                <input 
                  type="text" 
                  value="rahul.sharma@student.com" 
                  disabled 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-500 text-sm cursor-not-allowed select-none focus:outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#22324B]">Phone Number</label>
                <input 
                  type="text" 
                  value="+91 87654 32109" 
                  disabled 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-500 text-sm cursor-not-allowed select-none focus:outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#22324B]">Roll Number</label>
                <input 
                  type="text" 
                  value="DPS2024-156" 
                  disabled 
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-500 text-sm cursor-not-allowed select-none focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* 3. Editable Information */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-[#22324B] font-semibold border-b border-gray-100 pb-2">
              Editable Information
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#22324B]">Class/Grade <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  value={formData.grade}
                  onChange={(e) => setFormData({...formData, grade: e.target.value})}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#22324B]">Section <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  value={formData.section}
                  onChange={(e) => setFormData({...formData, section: e.target.value})}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition"
                />
              </div>
            </div>

            <div className="space-y-1.5 mb-6">
              <label className="text-sm font-medium text-[#22324B]">School Name <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                value={formData.school}
                onChange={(e) => setFormData({...formData, school: e.target.value})}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition"
              />
            </div>

            <div className="space-y-1.5 mb-6">
              <label className="text-sm font-medium text-[#22324B]">Location <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition"
              />
            </div>

            <div className="space-y-1.5 mb-6">
              <label className="text-sm font-medium text-[#22324B]">Subjects (comma-separated)</label>
              <input 
                type="text" 
                value={formData.subjects}
                onChange={(e) => setFormData({...formData, subjects: e.target.value})}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[#22324B]">Learning Goals</label>
              <textarea 
                rows="3"
                value={formData.goals}
                onChange={(e) => setFormData({...formData, goals: e.target.value})}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition resize-none"
              />
            </div>

          </div>

        </div>

        {/* --- FOOTER --- */}
        <div className="p-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50/50 rounded-b-2xl sticky bottom-0">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-300 rounded-xl text-gray-700 font-semibold text-sm hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-[#EAB308] border border-yellow-500 rounded-xl text-white font-bold text-sm hover:bg-yellow-600 transition shadow-sm"
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}