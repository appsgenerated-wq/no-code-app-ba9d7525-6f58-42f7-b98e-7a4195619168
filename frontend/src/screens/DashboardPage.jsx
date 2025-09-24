import React from 'react';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Welcome, {user?.name}!</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-6">
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Your Saved Recipes</h2>
              <p className="text-gray-600">
                This is your personal dashboard. Your favorite recipes will appear here once you save them.
                This feature is under construction, but soon you'll be able to see all your green goodies in one place!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
