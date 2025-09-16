import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation on component mount
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'History', path: '/history' },
    { name: 'Statistics', path: '/statistics' },
    { name: 'About', path: '/about' },
    { name: 'Updates', path: '/updates' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-gradient-to-r from-purple-900 to-indigo-900 shadow-xl py-1' 
          : 'bg-gradient-to-r from-purple-800 to-indigo-900 shadow-lg py-2'
      } ${isMounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo with animation */}
          <Link 
            to="/" 
            className="flex-shrink-0 flex items-center transform transition-transform duration-300 hover:scale-105"
          >
            <span className="text-white text-xl font-bold tracking-wider">
              SATTA <span className="text-amber-400 animate-pulse">KING</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
                    location.pathname === item.path
                      ? 'text-gray-900 bg-amber-500 shadow-lg'
                      : 'text-white hover:bg-purple-700 hover:text-amber-200'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full animate-bounce"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button with animation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-current transition duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block absolute h-0.5 w-6 bg-current transform transition duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with smooth animation */}
      <div 
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-5'
        }`}
        style={{ transitionProperty: 'max-height, opacity, transform' }}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-indigo-900 shadow-xl border-t border-purple-700">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-300 transform ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-5'
              } ${
                location.pathname === item.path
                  ? 'bg-amber-500 text-gray-900 shadow-inner'
                  : 'text-white hover:bg-purple-700 hover:text-amber-200'
              }`}
              style={{
                transitionDelay: `${isMenuOpen ? index * 100 : 0}ms`
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center">
                {item.name}
                {location.pathname === item.path && (
                  <span className="ml-2 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                )}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;