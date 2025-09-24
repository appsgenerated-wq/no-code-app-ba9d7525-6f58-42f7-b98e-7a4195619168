import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import { SparklesIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const { user, logout } = useAuth();

  const navLinkClasses = ({ isActive }) => 
    `text-base font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`;

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-900">
              <SparklesIcon className="h-7 w-7 text-blue-600" />
              <span>VerdePlate</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/recipes" className={navLinkClasses}>Recipes</NavLink>
          </nav>
          
          <div className="flex items-center space-x-2">
            {user ? (
              <>
                <Button href="/dashboard" variant="outline" size="sm">Dashboard</Button>
                <Button onClick={logout} variant="secondary" size="sm">Logout</Button>
              </>
            ) : (
              <>
                <Button href="/login" variant="secondary" size="sm">Sign In</Button>
                <Button href="/register" size="sm">Get Started</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
