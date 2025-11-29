import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { LogIn, Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react"; 

export default function Login() {
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // 1. Added State for inputs (Fixes typing issues)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Fake delay then redirect
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard"); 
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mt-20 mb-10">
          
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 text-white shadow-lg">
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
                  name="email" // <--- Enables browser suggestions
                  autoComplete="email" // <--- Enables autofill
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // Added 'text-gray-900' below to force text to be dark
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
                  // Added 'text-gray-900' here too
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
              <a href="#" className="text-blue-600 font-medium hover:underline">
                Forgot Password?
              </a>
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

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">Don't have an account?</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="py-2 px-4 rounded-lg border border-yellow-200 bg-yellow-50 text-yellow-700 font-medium hover:bg-yellow-100 transition-colors">
                Become Tutor
              </button>
              <button className="py-2 px-4 rounded-lg border border-blue-200 bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition-colors">
                Become Student
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}