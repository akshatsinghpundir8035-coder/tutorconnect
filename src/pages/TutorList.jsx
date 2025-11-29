import React from "react";
import Navbar from "../components/Navbar";
import TutorCard from "../components/TutorCard";
import Footer from "../components/Footer";
import { tutors } from "../lib/mockData";

export default function TutorList(){
  return (
    <div>
      <Navbar />
      <div className="pt-28 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl text-white font-bold">Available Tutors</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {tutors.map(t=> <TutorCard key={t.id} tutor={t} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}
