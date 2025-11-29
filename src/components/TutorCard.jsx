import React from "react";
import { Link } from "react-router-dom";

export default function TutorCard({tutor}){
  return (
    <div className="bg-slate-900/30 border border-slate-700/30 rounded-2xl p-6 hover:scale-[1.02] transition">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold">{tutor.name.split(" ").map(n=>n[0]).join("")}</div>
        <div className="flex-1">
          <Link to={`/tutor/${tutor.id}`} className="text-white font-semibold text-lg hover:underline">{tutor.name}</Link>
          <p className="text-slate-300 text-sm">{tutor.subject} • ₹{tutor.price}/hr</p>
        </div>
        <div className="text-right">
          <div className="text-yellow-300 font-semibold">{tutor.rating}★</div>
          <Link to={`/tutor/${tutor.id}`} className="mt-2 inline-block px-3 py-1 rounded bg-indigo-600 text-white text-sm">View</Link>
        </div>
      </div>
      <p className="mt-4 text-slate-300 text-sm">{tutor.bio}</p>
    </div>
  );
}
