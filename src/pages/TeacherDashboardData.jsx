import React from 'react';
import { 
  Users, BookOpen, Calendar, Star, TrendingUp, CheckCircle, 
  Upload, FileText, Clock, Trophy
} from "lucide-react";

export const getStats = () => [
  { 
    label: "Students Assigned", 
    value: "24", 
    icon: <Users size={24} className="text-blue-600" />, 
    color: "bg-blue-50", 
    border: "border-blue-100",
    trend: <TrendingUp size={20} className="text-green-500" /> 
  },
  { 
    label: "Classes Completed", 
    value: "342", 
    badge: "+12", 
    badgeColor: "bg-green-500 text-white",
    icon: <BookOpen size={24} className="text-emerald-600" />, 
    color: "bg-emerald-50", 
    border: "border-emerald-100" 
  },
  { 
    label: "Upcoming Classes", 
    value: "8", 
    badge: "Today", 
    badgeColor: "bg-amber-500 text-white",
    icon: <Calendar size={24} className="text-amber-600" />, 
    color: "bg-amber-50", 
    border: "border-amber-100" 
  },
  { 
    label: "Total Earnings", 
    value: "₹45,230", 
    badge: "4.8★", 
    badgeColor: "bg-purple-500 text-white",
    icon: <Star size={24} className="text-purple-600 fill-purple-600" />, 
    color: "bg-purple-50", 
    border: "border-purple-100" 
  },
];

export const students = [
  { name: "Rahul Sharma", grade: "Grade 10 • Mathematics", seen: "2 days ago", progress: 85, img: "👨‍🎓" },
  { name: "Priya Patel", grade: "Grade 12 • Physics", seen: "1 day ago", progress: 92, img: "🧕" },
  { name: "Amit Kumar", grade: "Grade 9 • Chemistry", seen: "3 days ago", progress: 78, img: "🧑" },
  { name: "Sneha Reddy", grade: "Grade 11 • Mathematics", seen: "1 day ago", progress: 88, img: "👩‍🦰" },
];

export const schedule = [
  { time: "10:00 AM", name: "Rahul Sharma", subject: "Mathematics", duration: "1 hour" },
  { time: "2:00 PM", name: "Priya Patel", subject: "Physics", duration: "1.5 hours" },
  { time: "4:30 PM", name: "Amit Kumar", subject: "Chemistry", duration: "1 hour" },
];

export const scheduledTests = [
  { name: "Monthly Test - Mathematics", date: "Nov 10, 2025", students: 15 },
  { name: "Monthly Test - Physics", date: "Nov 15, 2025", students: 12 },
];

export const completedTests = [
  { name: "October Test - Mathematics", date: "Oct 10, 2025", students: 15, avgScore: 85 },
  { name: "September Test - Mathematics", date: "Sep 10, 2025", students: 14, avgScore: 82 },
];