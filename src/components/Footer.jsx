import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  
  // Helper function to scroll to top instantly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111827] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Column 1: Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
             <div className="w-8 h-8 rounded-full border-2 border-yellow-400 flex items-center justify-center text-yellow-400 font-bold">
               🎓
             </div>
             <span className="text-xl font-bold text-white">TutorConnect</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
            Connecting students with qualified tutors for personalized learning experiences.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            
            {/* HOME: Added onClick to scroll up */}
            <li>
                <Link 
                    to="/" 
                    onClick={scrollToTop}
                    className="hover:text-yellow-400 transition-colors"
                >
                    Home
                </Link>
            </li>
            
            {/* ABOUT: Points to the ID on the home page */}
            <li>
                <a href="/#about" className="hover:text-yellow-400 transition-colors cursor-pointer">
                    About
                </a>
            </li>
            
            {/* LOGIN: Added onClick to scroll up */}
            <li>
                <Link 
                    to="/login" 
                    onClick={scrollToTop}
                    className="hover:text-yellow-400 transition-colors"
                >
                    Login
                </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h3 className="text-white font-bold mb-4">Legal</h3>
           <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        © 2025 TutorConnect. All rights reserved.
      </div>
    </footer>
  );
}