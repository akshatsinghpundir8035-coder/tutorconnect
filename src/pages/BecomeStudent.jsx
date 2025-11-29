import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, Upload, User, Mail, Phone, GraduationCap, 
  School, BookOpen, Target, CheckCircle, DollarSign,
  Loader2, Brain
} from "lucide-react";

// --- Internal CSS for Animations ---
// Note: In a real project, add these to your tailwind.css or global CSS file.
const headerStyles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .animate-float-delayed {
    animation: float 7s ease-in-out infinite 1s; /* Slightly different timing for natural feel */
  }
`;

// Reusable Top Navbar Component (Same as used elsewhere)
const TopNavbar = ({ onBack, text }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-blue-100 px-4 md:px-8 py-3 z-50">
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

export default function BecomeStudent() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    grade: "",
    schoolName: "",
    subjects: "",
    goals: ""
  });

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
      alert("Student Registration Successful!");
      navigate("/login"); 
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F0F9FF] font-sans relative overflow-hidden">
      {/* Inject CSS for animations */}
      <style>{headerStyles}</style>

      {/* --- Animated Background Icons --- */}
      {/* Left Brain Icon */}
      <div className="absolute top-40 left-[-50px] md:left-[5%] opacity-10 pointer-events-none text-blue-300 animate-float">
        <Brain size={250} />
      </div>
      {/* Right Book Icon */}
      <div className="absolute top-20 right-[-50px] md:right-[5%] opacity-10 pointer-events-none text-blue-400 animate-float-delayed">
        <BookOpen size={250} />
      </div>


      <TopNavbar onBack={() => navigate('/login')} text="Back to Home" />

      <div className="pt-24 pb-12 px-4 max-w-3xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
            <BookOpen size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Become a Student</h1>
          <p className="text-slate-500">Start your learning journey with expert tutors</p>
        </div>

        {/* Info Box: Registration Fund */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 flex items-start gap-3 shadow-sm animate-fade-in-up delay-75">
          <div className="p-2 bg-blue-100 rounded-full text-blue-600 mt-1">
            <DollarSign size={18} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 text-sm">$ Registration Fund:</h3>
            <p className="text-slate-600 text-sm font-medium">₹500 (Refundable)</p>
            <p className="text-xs text-slate-500 mt-1">
              This one-time refundable deposit will be returned when you complete your first learning milestone.
            </p>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in-up delay-100">
          
          {/* Card Header */}
          <div className="bg-blue-50 py-4 border-b border-blue-100 text-center">
            <h2 className="text-blue-700 font-bold flex items-center justify-center gap-2">
              <Brain size={20} />
              Student Registration
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            
            {/* Profile Picture Upload */}
            <div className="flex flex-col items-center justify-center mb-6">
              <label className="block text-xs font-bold text-slate-500 mb-3 self-start md:self-center">
                Profile Picture <span className="text-red-500">*</span>
              </label>
              <div className="relative group cursor-pointer">
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="student-profile-upload" />
                <label htmlFor="student-profile-upload" className="cursor-pointer">
                  <div className={`w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center transition-all duration-300 ${!profileImage ? 'bg-blue-400' : 'bg-gray-100'}`}>
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <User size={48} className="text-white opacity-80" />
                    )}
                  </div>
                  <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-gray-100 group-hover:scale-110 transition-transform text-blue-600">
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
                  <input required type="text" name="fullName" placeholder="Enter your full name" onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  <input required type="email" name="email" placeholder="your.email@example.com" onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  <input required type="tel" name="phone" placeholder="+91 XXXXX XXXXX" onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>
              </div>

              {/* Class/Grade */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Class/Grade <span className="text-red-500">*</span></label>
                <div className="relative">
                  <GraduationCap size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  <input required type="text" name="grade" placeholder="e.g., Grade 10" onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>
              </div>

              {/* School Name - Full Width */}
              <div className="col-span-1 md:col-span-2 space-y-1.5">
                <label className="text-sm font-bold text-slate-700">School Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <School size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  <input required type="text" name="schoolName" placeholder="Enter your school name" onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>
              </div>

               {/* Subjects - Full Width */}
               <div className="col-span-1 md:col-span-2 space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Subjects You Want to Learn <span className="text-red-500">*</span></label>
                <div className="relative">
                  <BookOpen size={18} className="absolute left-3 top-3.5 text-slate-400" />
                  <input required type="text" name="subjects" placeholder="e.g., Mathematics, Physics, Chemistry" onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>
              </div>

              {/* Learning Goals - Full Width */}
              <div className="col-span-1 md:col-span-2 space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Your Learning Goals</label>
                <div className="relative">
                  <Target size={18} className="absolute left-3 top-4 text-slate-400" />
                  <textarea rows="3" name="goals" placeholder="Tell us what you want to achieve..." onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"></textarea>
                 </div>
              </div>

            </div>

            {/* Info Box: What You Get */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-800 flex items-center gap-2 mb-3">
                <CheckCircle size={18} /> What You Get:
              </h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span> Access to qualified and verified tutors
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span> Flexible scheduling based on your availability
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span> Track your learning progress and achievements
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span> Safe and secure payment system
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-200 
                ${isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200 hover:-translate-y-1"}`
              }
            >
              {isLoading ? (<><Loader2 size={24} className="animate-spin mr-2" />Registering...</>) : ("Register as Student")}
            </button>

            {/* Login Link */}
            <div className="text-center pt-2">
              <button type="button" onClick={() => navigate('/login')} className="text-slate-500 text-sm hover:text-blue-600 transition-colors">
                Already have an account? <span className="font-bold underline">Login here</span>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}