import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, Upload, User, Mail, Phone, GraduationCap, 
  Clock, DollarSign, BookOpen, AlertCircle, Lightbulb, 
  Loader2, CheckCircle, Image as ImageIcon 
} from "lucide-react";

// --- Internal CSS for Animations ---
const animationStyles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;

// Reusing your TopNavbar pattern
const TopNavbar = ({ onBack, text }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-amber-100 px-4 md:px-8 py-3 z-50">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-bold hover:bg-slate-50 transition-colors text-sm shadow-sm"
        >
          <ArrowLeft size={18} />
          {text}
        </button>
      </div>
    </nav>
  );
};

export default function BecomeTutor() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
    hourlyRate: "",
    subjects: "",
    about: ""
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Image Upload & Preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Registration Successful! Please check your email.");
      navigate("/login"); // Redirect to login after success
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFFBEB] font-sans relative overflow-hidden">
      
      {/* Inject CSS for animations */}
      <style>{animationStyles}</style>

      {/* Background Watermark Icon (Top Right) - NOW ANIMATED */}
      <div className="absolute top-20 right-[-20px] opacity-10 pointer-events-none text-amber-500 animate-float">
        <Lightbulb size={200} />
      </div>

      <TopNavbar onBack={() => navigate('/login')} text="Back to Login" />

      <div className="pt-24 pb-12 px-4 max-w-3xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-200">
            <GraduationCap size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Become a Tutor</h1>
          <p className="text-slate-500">Share your knowledge and inspire students</p>
        </div>

        {/* Info Box 1: Registration Fund */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex items-start gap-3 shadow-sm animate-fade-in-up delay-75">
          <div className="p-2 bg-amber-100 rounded-full text-amber-600 mt-1">
            <DollarSign size={18} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm">Registration Fund:</h3>
            <p className="text-slate-600 text-sm font-medium">₹101 (Refundable)</p>
            <p className="text-xs text-slate-500 mt-1">
              This one-time refundable deposit will be returned when you complete your first 5 sessions.
            </p>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in-up delay-100">
          
          {/* Card Header */}
          <div className="bg-amber-50 py-4 border-b border-amber-100 text-center">
            <h2 className="text-amber-700 font-bold flex items-center justify-center gap-2">
              <Lightbulb size={18} />
              Teacher Registration
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            
            {/* Profile Picture Upload */}
            <div className="flex flex-col items-center justify-center mb-6">
              <label className="block text-xs font-bold text-slate-500 mb-3 self-start md:self-center">
                Profile Picture <span className="text-red-500">*</span>
              </label>
              <div className="relative group cursor-pointer">
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                  className="hidden" 
                  id="profile-upload" 
                />
                <label htmlFor="profile-upload" className="cursor-pointer">
                  <div className={`w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center transition-all duration-300 ${!profileImage ? 'bg-amber-400' : 'bg-gray-100'}`}>
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <User size={48} className="text-white opacity-80" />
                    )}
                  </div>
                  <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-gray-100 group-hover:scale-110 transition-transform text-amber-600">
                    <Upload size={16} />
                  </div>
                </label>
              </div>
              <p className="text-xs text-slate-400 mt-3">JPG, PNG or GIF (max 5MB)</p>
            </div>

            {/* Grid Layout for Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Full Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  <input 
                    required
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  <input 
                    required
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  <input 
                    required
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Qualification */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Highest Qualification <span className="text-red-500">*</span></label>
                <div className="relative">
                  <GraduationCap size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  <input 
                    required
                    type="text"
                    name="qualification"
                    placeholder="e.g., M.Sc. Mathematics"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Years of Experience <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Clock size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  <input 
                    required
                    type="number"
                    name="experience"
                    placeholder="e.g., 5"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Rate */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Hourly Rate (₹) <span className="text-red-500">*</span></label>
                <div className="relative">
                  <DollarSign size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  <input 
                    required
                    type="number"
                    name="hourlyRate"
                    placeholder="e.g., 500"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Subjects - Full Width */}
              <div className="col-span-1 md:col-span-2 space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Subjects You Can Teach <span className="text-red-500">*</span></label>
                <div className="relative">
                  <BookOpen size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  <input 
                    required
                    type="text"
                    name="subjects"
                    placeholder="e.g., Mathematics, Physics, Chemistry"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* About - Full Width */}
              <div className="col-span-1 md:col-span-2 space-y-1.5">
                <label className="text-sm font-bold text-slate-700">About You</label>
                <textarea 
                  rows="3"
                  name="about"
                  placeholder="Tell us about your teaching experience and approach..."
                  className="w-full p-4 rounded-lg bg-slate-50 border border-slate-200 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-200 outline-none transition-all resize-none"
                  onChange={handleChange}
                ></textarea>
              </div>

            </div>

            {/* Important Info Box */}
            <div className="bg-[#FFFBEB] border border-amber-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm text-slate-700">
                <p className="font-bold mb-1">Important Information:</p>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Complete your profile to attract more students</li>
                  <li>Set your own schedule and rates</li>
                  <li>Get paid securely through our platform</li>
                </ul>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-200 
                ${isLoading ? "bg-amber-300 cursor-not-allowed" : "bg-amber-500 hover:bg-amber-600 hover:shadow-amber-200 hover:-translate-y-1"}`
              }
            >
              {isLoading ? (
                <>
                  <Loader2 size={24} className="animate-spin mr-2" />
                  Registering...
                </>
              ) : (
                "Register as Tutor"
              )}
            </button>

            {/* Login Link */}
            <div className="text-center pt-2">
              <button 
                type="button"
                onClick={() => navigate('/login')}
                className="text-slate-500 text-sm hover:text-amber-600 transition-colors"
              >
                Already have an account? <span className="font-bold underline">Login here</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}