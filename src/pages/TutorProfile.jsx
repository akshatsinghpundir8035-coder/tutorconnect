import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { tutors } from "../lib/mockData";

export default function TutorProfile(){
  const { id } = useParams();
  const tutor = tutors.find(t=> t.id === id) || tutors[0];
  return (
    <div>
      <Navbar />
      <div className="pt-28 max-w-4xl mx-auto px-4">
        <div className="bg-slate-900/30 rounded-2xl p-6">
          <div className="flex items-center gap-6">
            <div className="w-28 h-28 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">{tutor.name.split(" ").map(n=>n[0]).join("")}</div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white">{tutor.name}</h1>
              <p className="text-slate-300">{tutor.subject} • ₹{tutor.price}/hr • {tutor.rating}★</p>
              <p className="mt-3 text-slate-300">{tutor.bio}</p>
            </div>
            <div>
              <a href="/booking" className="px-4 py-2 bg-indigo-600 rounded text-white">Book</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
