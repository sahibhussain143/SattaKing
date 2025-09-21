import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
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

  const navItems = [
    { name: "Home", path: "/" },
    { name: "SATTA CHART", path: "/SattaChart" },
    { name: "TAJ SATTA KING", path: "/TajSattaKing" },
    { name: "ABOUT ", path: "/about" },
    { name: "UPDATES", path: "/updates" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-gradient-to-r from-purple-900 to-indigo-900 shadow-xl py-1"
          : "bg-gradient-to-r from-purple-800 to-indigo-900 shadow-lg py-2"
      } ${isMounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo (hidden on mobile, visible md+) */}
          <Link
            to="/"
            className="hidden md:flex flex-shrink-0 items-center transform transition-transform duration-300 hover:scale-105"
          >
            <span className="text-white text-xl font-bold tracking-wider">
              SATTA <span className="text-amber-400 animate-pulse">KING</span>
            </span>
          </Link>

          {/* Navigation Links (always visible) */}
          <div className="flex items-baseline space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
                  location.pathname === item.path
                    ? "text-gray-900 bg-amber-500 shadow-lg"
                    : "text-white hover:bg-purple-700 hover:text-amber-200"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
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
      </div>
         <marquee
        behavior="scroll"
        direction="left"
        scrollamount="5"
        className="w-full bg-black text-yellow-400 font-semibold py-2"
      >
आज की leak game और single Jodi numbers तुरंत पाएँ! Contact now 9541015623 for confirmed results, live Gali & Desawar charts, daily SATTA updates, accurate tips, और exclusive Satta King predictions। नंबर सेव करें और तुरंत WhatsApp करें। Today’s lucky numbers, leak games, single Jodi tips, और latest Satta King results सिर्फ हमारे साथ। Miss mat करें, जल्दी action लें और जीतें!

      </marquee>
    </nav>
  );
};

export default Navbar;
