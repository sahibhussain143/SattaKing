import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButtons = () => {
  const openWhatsApp = () => {
    const phoneNumber = '9541015623'; // Replace with actual phone number
    const message = "Hello Raja Bhai! I'm interested in knowing more about Satta King !";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className=" animate-pulse-icon bg-green-500 hover:bg-green-700 hover:scale-125 duration-700 hover:rotate-[360deg]  text-white p-4 rounded-full shadow-xl transition"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={20} />
      </button>
    </div>
  );
};

export default FloatingButtons;