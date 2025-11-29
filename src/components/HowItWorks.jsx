import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description: "Sign up as a student or tutor and complete your profile with relevant information.",
    },
    {
      number: "02",
      title: "Browse & Connect",
      description: "Students can search for tutors by subject, while tutors can showcase their expertise.",
    },
    {
      number: "03",
      title: "Start Learning",
      description: "Schedule sessions, communicate directly, and begin your educational journey.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#22324B] mb-4">
          How TutorConnect Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          We've created a seamless platform that makes finding quality education as simple as a few clicks. Whether you're looking to learn or teach, we've got you covered.
        </p>

        {/* Steps Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* The Connecting Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-blue-100 -z-10"></div>

          {/* Mapping through steps */}
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              
              {/* Number Circle with Animation */}
              {/* Added: group-hover:scale-110, group-hover:rotate-3, transition-all */}
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold text-white mb-6 shadow-lg shadow-blue-200 ring-8 ring-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-700 group-hover:shadow-blue-400">
                {step.number}
              </div>
              
              {/* Text Content with Animation */}
              {/* Added: group-hover:text-blue-600 */}
              <h3 className="text-xl font-bold text-[#22324B] mb-3 transition-colors duration-300 group-hover:text-blue-600">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed max-w-xs transition-transform duration-300 group-hover:-translate-y-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}