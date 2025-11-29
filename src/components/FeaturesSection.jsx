import React from "react";
import FeatureCard from "./FeatureCard";
// Import the 6 icons needed for the new sections
import { Search, UserCheck, Calendar, MessageSquare, Shield, Star } from "lucide-react"; 

export default function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Find Your Perfect Tutor",
      description: "Browse through our extensive database of qualified tutors across various subjects and skill levels.",
    },
    {
      icon: UserCheck,
      title: "Verified Educators",
      description: "All tutors go through a comprehensive verification process to ensure quality education delivery.",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your schedule with our easy-to-use calendar integration.",
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Connect directly with tutors to discuss learning goals and session requirements.",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Your data and transactions are protected with industry-standard security measures.",
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Rate and review tutors to help maintain high-quality educational experiences.",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 lg:px-0 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Why Choose TutorConnect?
        </h2>
        <p className="text-gray-600 mt-3 text-base lg:text-lg">
          Everything you need to excel in your learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}