import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 

// Global Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TutorList from "./pages/TutorList";
import TutorProfile from "./pages/TutorProfile";
import Dashboard from "./pages/Dashboard"; 
import TeacherDashboard from "./pages/TeacherDashboard"; 
import Booking from "./pages/Booking";
import Chat from "./pages/Chat";
import Payment from "./pages/Payment";
import Notifications from './pages/Notifications';
import BecomeTutor from "./pages/BecomeTutor"; 
import BecomeStudent from "./pages/BecomeStudent";
import TermsConditions from "./pages/TermsConditions"; // 1. IMPORT ADDED

export default function App() {
  const location = useLocation(); 

  // 2. UPDATED: Added "/terms" to the hide list so it uses its own custom header.
  const hideLayoutRoutes = [
    "/dashboard", 
    "/teacher-dashboard", 
    "/login", 
    "/signup", 
    "/chat", 
    "/notifications",
    "/become-tutor",
    "/become-student",
    "/terms" // Added here
  ];

  // Check if the current path is in the hide list
  const showLayout = !hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* 🔹 Render Global Navbar ONLY if we are not on specific pages */}
      {showLayout && <Navbar />}

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Registration Pages */}
        <Route path="/become-tutor" element={<BecomeTutor />} />
        <Route path="/become-student" element={<BecomeStudent />} />
        
        {/* Legal Pages */}
        <Route path="/terms" element={<TermsConditions />} /> {/* 3. ROUTE ADDED */}

        {/* Tutor System */}
        <Route path="/tutors" element={<TutorList />} />
        <Route path="/tutor/:id" element={<TutorProfile />} />

        {/* Dashboards */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />

        {/* App Features */}
        <Route path="/chat" element={<Chat />} />
        <Route path="/notifications" element={<Notifications />} />

        {/* Others */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      {/* 🔹 Render Global Footer ONLY if we are not on specific pages */}
      {showLayout && <Footer />}
    </div>
  );
}