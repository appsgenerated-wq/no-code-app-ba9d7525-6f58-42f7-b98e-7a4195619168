import React from 'react';
import { Link } from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
              <SparklesIcon className="h-7 w-7 text-blue-500" />
              <span>VerdePlate</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-sm">Discover, save, and plan delicious plant-powered meals.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="text-base text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/recipes" className="text-base text-gray-300 hover:text-white">Recipes</Link></li>
              <li><Link to="/register" className="text-base text-gray-300 hover:text-white">Sign Up</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} VerdePlate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
