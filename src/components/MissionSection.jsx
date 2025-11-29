import React from "react";

export default function MissionSection() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto bg-slate-50 rounded-3xl p-10 md:p-16 text-center shadow-sm border border-slate-100">
        <h2 className="text-3xl font-bold text-[#22324B] mb-6">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-lg">
          At TutorConnect, we believe that quality education should be accessible to everyone. 
          Our platform bridges the gap between passionate educators and eager learners, 
          creating meaningful connections that foster growth, knowledge, and success. 
          Whether you're a student seeking to excel or an educator ready to make an impact, 
          we're here to connect you with the right opportunities.
        </p>
      </div>
    </section>
  );
}