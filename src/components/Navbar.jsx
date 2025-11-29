import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 1. Logo - Wrapped in Link to go Home */}
        <Link to="/" className="flex items-center gap-4 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-[#22324B] flex items-center justify-center text-white">◎</div>
          <div className="text-2xl font-semibold text-[#22324B]">TutorConnect</div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#22324B]/90">
          
          {/* 2. Home - Uses React Link */}
          <Link className="text-[#4ca7fd] font-semibold hover:text-yellow-600 transition-colors" to="/">
            Home
          </Link>
          
          {/* 3. About Us - Uses standard <a> tag with /#about to scroll to the section */}
          <a className="hover:text-blue-600 transition-colors cursor-pointer" href="/#about">
            About Us
          </a>
          
          {/* 4. Login - Uses React Link to change pages */}
          <Link className="hover:text-blue-600 transition-colors font-medium" to="/login">
            Login
          </Link>
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="p-2 rounded-md border">☰</button>
        </div>
      </div>
    </nav>
  );
}