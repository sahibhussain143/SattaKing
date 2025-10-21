import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation on mount
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "SATTA CHART", path: "/SattaChart" },
    { name: "TAJ SATTA KING", path: "/TajSattaKing" },
  ];

  const extraNavItems = [
    { name: "ABOUT", path: "/about" },
    { name: "UPDATES", path: "/updates" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-gradient-to-r from-purple-900 to-indigo-900 shadow-xl py-1"
            : "bg-gradient-to-r from-purple-800 to-indigo-900 shadow-lg py-2"
        } ${isMounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link
              to="/"
              className="hidden md:flex flex-shrink-0 items-center transform transition-transform duration-300 hover:scale-105"
            >
              <span className="text-white text-xl font-bold tracking-wider">
                SATTA <span className="text-amber-400 animate-pulse">KING</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-3">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-gray-900 bg-amber-500 shadow-lg"
                      : "text-white hover:bg-purple-700 hover:text-amber-200"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Extra Links only on desktop */}
              {extraNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-purple-700 hover:text-amber-200"
                >
                  {item.name}
                </Link>
              ))}

              {/* Login Icon */}
              <Link
                to="/login"
                className="p-2 rounded-full text-white hover:text-amber-400 hover:bg-purple-700 transition-colors duration-300"
                title="Login"
              >
                <FaUser size={20} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2 focus:outline-none"
              >
                {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-purple-800 to-indigo-900 shadow-lg">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-gray-900 bg-amber-500 shadow-lg"
                      : "text-white hover:bg-purple-700 hover:text-amber-200"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Login Icon in Mobile */}
              <Link
                to="/login"
                className="flex items-center px-3 py-2 rounded-md text-white hover:text-amber-400 hover:bg-purple-700 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaUser size={20} className="mr-2" /> Login
              </Link>
            </div>
          </div>
        )}

        {/* Marquee */}
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          className="w-full bg-black text-yellow-400 font-semibold py-2"
        >
          आज की leak game और single Jodi numbers तुरंत पाएँ! Contact now 9541015623 for confirmed results, live Gali & Desawar charts, daily SATTA updates, accurate tips, और exclusive Satta King predictions। नंबर सेव करें और तुरंत WhatsApp करें। Today’s lucky numbers, leak games, single Jodi tips, और latest Satta King results सिर्फ हमारे साथ। Miss mat करें, जल्दी action लें और जीतें!
        </marquee>
      </nav>
    </>
  );
};

export default Navbar;
