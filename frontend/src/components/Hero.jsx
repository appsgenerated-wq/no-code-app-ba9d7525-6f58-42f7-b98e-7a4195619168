import React from 'react';
import Button from './Button';

const Hero = ({ title, subtitle, primaryAction, secondaryAction }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl tracking-tight">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
            {subtitle}
          </p>
          <div className="mt-10 flex justify-center space-x-4">
            {primaryAction && <Button href={primaryAction.href} size="lg">{primaryAction.text}</Button>}
            {secondaryAction && <Button href={secondaryAction.href} variant="outline" size="lg">{secondaryAction.text}</Button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
