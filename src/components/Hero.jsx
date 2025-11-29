import React from "react";
import { Link } from "react-router-dom";
// 1. Import new icons for the stats
import { Users, BookOpen, Sparkles } from "lucide-react"; 

export default function Hero() {
  return (
    <div className="relative w-full min-h-[90vh] bg-blue-50 overflow-hidden flex items-center">
      
      {/* --- BACKGROUND ANIMATION --- */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-bounce duration-[3000ms]"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text */}
        <div className="text-center lg:text-left">
          <div className="inline-block px-4 py-2 bg-white rounded-full text-blue-600 font-semibold text-sm mb-6 shadow-sm border border-blue-100">
             🎓 The #1 Trusted Tutoring Platform
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#22324B] leading-tight mb-6">
            Connect with <br/> <span className="text-blue-600">Expert Tutors</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            Bridge the gap between students seeking knowledge and passionate educators. Find your perfect tutor or share your expertise with eager learners.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/signup" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
              Get Started
            </Link>
            <a href="/#about" className="px-8 py-4 bg-white text-[#22324B] border border-gray-200 rounded-xl font-bold shadow-sm hover:bg-gray-50 transition-all cursor-pointer">
              Learn More
            </a>
          </div>

          {/* --- NEW STATS SECTION ADDED HERE --- */}
          <div className="mt-12 flex flex-row items-center justify-center lg:justify-start gap-8 sm:gap-12">
            
            {/* Stat 1: Tutors */}
            <div className="flex flex-col items-center">
               <div className="w-14 h-14 bg-yellow-200/50 rounded-full flex items-center justify-center text-[#22324B] mb-3">
                 <Users size={28} strokeWidth={1.5} />
               </div>
               <div className="text-2xl font-bold text-[#22324B]">500+</div>
               <div className="text-sm text-gray-500">Tutors Available</div>
            </div>

            {/* Decorative Sparkle in the middle (Like your image) */}
            <div className="hidden sm:block text-yellow-400 animate-pulse">
               <Sparkles size={24} />
            </div>

            {/* Stat 2: Subjects */}
            <div className="flex flex-col items-center">
               <div className="w-14 h-14 bg-yellow-200/50 rounded-full flex items-center justify-center text-[#22324B] mb-3">
                 <BookOpen size={28} strokeWidth={1.5} />
               </div>
               <div className="text-2xl font-bold text-[#22324B]">50+</div>
               <div className="text-sm text-gray-500">Subjects Covered</div>
            </div>

          </div>
          {/* --- END STATS SECTION --- */}

        </div>

        {/* Right Side: Image */}
        <div className="relative hidden lg:block">
           <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-lg transform rotate-6"></div>
           <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Student Learning" 
            className="relative rounded-2xl shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500"
           />
        </div>

      </div>
    </div>
  );
}