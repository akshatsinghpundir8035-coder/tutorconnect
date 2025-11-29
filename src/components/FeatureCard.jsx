import React from "react";

// Note: We renamed the prop 'icon' to 'Icon' (capital I) so React knows it's a component
export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      {/* Icon Container with hover effect */}
      <div className="w-16 h-16 mb-6 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        <Icon size={32} strokeWidth={2} />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}