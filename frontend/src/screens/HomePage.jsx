import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { ChartPieIcon, BookmarkIcon, SparklesIcon } from '@heroicons/react/24/outline';
import FeatureCard from '../components/FeatureCard';

const HomePage = () => {
  const features = [
    {
      icon: <SparklesIcon className="h-8 w-8 text-blue-600" />,
      title: 'Discover Delicious Recipes',
      description: 'Explore a curated collection of healthy, vibrant, and easy-to-make green food recipes for every occasion.'
    },
    {
      icon: <BookmarkIcon className="h-8 w-8 text-blue-600" />,
      title: 'Save Your Favorites',
      description: 'Create your personal cookbook. Save the recipes you love with a single click and access them anytime.'
    },
    {
      icon: <ChartPieIcon className="h-8 w-8 text-blue-600" />,
      title: 'Plan Your Meals',
      description: 'Effortlessly plan your weekly meals to stay healthy, save time, and reduce food waste.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero
          title="Eat Green, Feel Great."
          subtitle="Discover, save, and plan delicious plant-powered meals with VerdePlate. Your journey to a healthier lifestyle starts here."
          primaryAction={{ text: 'Explore Recipes', href: '/recipes' }}
          secondaryAction={{ text: 'Sign Up Free', href: '/register' }}
        />

        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Everything You Need for Healthy Eating
              </p>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                VerdePlate is designed to make healthy eating simple, enjoyable, and accessible for everyone.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-600">
          <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to dive in?</span>
              <span className="block">Start exploring healthy recipes today.</span>
            </h2>
            <div className="mt-8 flex justify-center space-x-4">
                <a href="/register" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-600 bg-white hover:bg-blue-50 transition-colors">
                  Get started
                </a>
                <a href="/recipes" className="inline-flex items-center justify-center px-6 py-3 border border-blue-200 rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-400 transition-colors">
                  Browse Recipes
                </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
