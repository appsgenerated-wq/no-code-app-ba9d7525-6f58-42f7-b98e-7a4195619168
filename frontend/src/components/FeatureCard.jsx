import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
