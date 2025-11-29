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
import Booking from "./pages/Booking";
import Chat from "./pages/Chat";
import Payment from "./pages/Payment";
import Notifications from './pages/Notifications';

export default function App() {
  const location = useLocation(); 

  // 1. UPDATED: Added "/chat" and "/notifications" to the hide list.
  // These pages are app-like and have their own headers, so we hide the global website Navbar/Footer.
  const hideLayoutRoutes = ["/dashboard", "/login", "/signup", "/chat", "/notifications"];

  // Check if the current path is in the hide list
  const showLayout = !hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* 🔹 Render Global Navbar ONLY if we are not on Dashboard/Login/Chat/Notifications */}
      {showLayout && <Navbar />}

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Tutor System */}
        <Route path="/tutors" element={<TutorList />} />
        <Route path="/tutor/:id" element={<TutorProfile />} />

        {/* User Dashboard & App Features */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        {/* 2. ADDED: Notification Route */}
        <Route path="/notifications" element={<Notifications />} />

        {/* Others */}
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      {/* 🔹 Render Global Footer ONLY if we are not on Dashboard/Login/Chat/Notifications */}
      {showLayout && <Footer />}
    </div>
  );
}

