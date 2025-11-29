import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar"; 
// NOTE: Using a placeholder Navbar if you don't have the file locally for this preview.

import { 
  LogIn, Mail, Lock, Eye, EyeOff, Loader2, 
  GraduationCap, Phone, ArrowLeft 
} from "lucide-react"; 

// Reusable Top Navbar Component
const TopNavbar = ({ onBack, text }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-slate-100 px-4 md:px-8 py-3 z-50">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 font-bold hover:bg-slate-50 transition-colors text-sm"
        >
          <ArrowLeft size={18} />
          {text}
        </button>
      </div>
    </nav>
  );
};

export default function Login() {
  const [view, setView] = useState("login"); // 'login' or 'forgot-password'
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Fake delay then redirect
    setTimeout(() => {
      setIsLoading(false);
      // Logic to redirect based on selected role
      if (role === "teacher") {
        navigate("/teacher-dashboard");
      } else {
        navigate("/dashboard");
      }
    }, 2000);
  };

  const handleVerifyPhone = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("OTP sent to " + phone);
    }, 1500);
  };

  // --- FORGOT PASSWORD VIEW ---
  if (view === "forgot-password") {
    return (
      <div className="min-h-screen flex flex-col bg-[#FFFBEB] font-sans">
        {/* Updated Navbar: Redirects to Login View */}
        <TopNavbar onBack={() => setView("login")} text="Back to Login" />

        <div className="flex-grow flex items-center justify-center px-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mt-20 mb-10 text-center animate-fade-in">
            
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-200">
                <GraduationCap size={32} className="text-white" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-2">Forgot Password</h2>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed px-4">
              Enter your registered phone number to reset your password
            </p>

            <form onSubmit={handleVerifyPhone} className="text-left space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Phone size={18} />
                  </div>
                  <input
                    required
                    type="tel"
                    placeholder="Enter 10-digit phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  We'll verify this number is registered in our system
                </p>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 rounded-lg flex items-center justify-center text-white font-bold text-base shadow-md transition-all duration-200 mt-4
                  ${isLoading ? "bg-amber-300 cursor-not-allowed" : "bg-amber-500 hover:bg-amber-600 hover:shadow-lg hover:-translate-y-0.5"}`
                }
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin mr-2" />
                    Verifying...
                  </>
                ) : (
                  "Verify Phone Number"
                )}
              </button>
            </form>

            <div className="mt-8">
              <button 
                onClick={() => setView("login")}
                className="text-blue-600 font-bold text-sm hover:underline flex items-center justify-center gap-1 mx-auto"
              >
                Remember your password? Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- LOGIN VIEW ---
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Updated Navbar: Redirects to Home */}
      <TopNavbar onBack={() => navigate('/')} text="Back to Home" />

      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mt-20 mb-10 animate-fade-in">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 text-white shadow-lg shadow-yellow-200">
              <LogIn size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back!</h2>
            <p className="text-gray-500 text-sm">Login to your TutorConnect account</p>
          </div>

          {/* Role Switcher */}
          <div className="flex p-1 bg-gray-100 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => setRole("student")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                role === "student"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setRole("teacher")}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                role === "teacher"
                  ? "bg-yellow-500 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Teacher
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail size={20} />
                </div>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white focus:outline-none transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Lock size={20} />
                </div>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:bg-white focus:outline-none transition-all placeholder:text-gray-400"
                />
                
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-600 cursor-pointer select-none">
                <input type="checkbox" className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                Remember me
              </label>
              <button 
                type="button"
                onClick={() => setView("forgot-password")}
                className="text-blue-600 font-bold hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <button 
              disabled={isLoading}
              className={`w-full py-3 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-200 
                ${isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-gradient-to-r from-yellow-500 to-blue-600 hover:shadow-xl hover:-translate-y-0.5"}`
              }
            >
              {isLoading ? (
                <>
                  <Loader2 size={24} className="animate-spin mr-2" />
                  Signing in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Registration Options */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">Don't have an account?</p>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => navigate('/become-tutor')}
                className="py-2 px-4 rounded-lg border border-yellow-200 bg-yellow-50 text-yellow-700 font-medium hover:bg-yellow-100 transition-colors text-sm"
              >
                Become Tutor
              </button>
              <button
                onClick={() => navigate('/become-student')}  /* UPDATED: Correct Route */
                className="py-2 px-4 rounded-lg border border-blue-200 bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition-colors text-sm">
                Become Student
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}