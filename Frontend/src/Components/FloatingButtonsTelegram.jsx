import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const FloatingButtonsTelegram = () => {
  const openTelegram = () => {
    const phoneNumber = "919541015623"; // with country code
    const url = `https://t.me/+${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={openTelegram}
        className="bg-blue-500 hover:bg-blue-700 text-white p-4 mb-24  rounded-full shadow-xl transition transform hover:scale-125 hover:rotate-[360deg] animate-floating"
        title="Chat on Telegram"
        aria-label="Chat on Telegram"
      >
        <FaTelegramPlane size={24} className="animate-pulse-icon" />
      </button>
    </div>
  );
};

export default FloatingButtonsTelegram;
