import React from "react";

const BannerTwo = () => {
  const openWhatsApp = () => {
    const phoneNumber = "9541015623"; // replace with your number
    const message = "Hello Raaj Bhai Khaiwal  I’m interested in your service.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="border-4 border-blue-600 rounded-lg p-6 text-center relative bg-white">
      {/* Yellow Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 rounded-t-lg"></div>

      {/* Heading */}
      <h2 className="font-bold text-lg md:text-xl mb-4">
        🎯 FARIDABAD , GAZIABAD, GALI, DESAWAR 🎯
      </h2>

      {/* Paragraph */}
      <p className="font-semibold text-md leading-relaxed mb-4">
        MAI GAME MILEGA SINGLE JODI 1001% PASS 💥 ✅✅✅  
        JISKA BHI LOSS HO KARJA HO SARA COVER KR LO MAHINE KA LAKHO PROFIT KRO 🏅🏅🏅  
        JIS BHAI KO DIRECT COMPANY KE SATH MIL KAR KAAM KARNA HAI 🏅🏅🏅  
        ABHI WHATSAPP KAREN 🎯✅💥
      </p>

      <p className="text-black font-medium mb-2">
        नंबर सेव करके जल्दी व्हाट्सएप पे मैसेज कीजिए गारंटी के साथ काम होगा
      </p>

      {/* Name Highlight */}
      <h3 className="text-red-600 font-bold text-xl mb-2">
        👑👑 LEAK JODI👑👑
      </h3>

      {/* Number */}
      <p className="text-green-600 font-bold text-2xl mb-4">9541015623</p>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-full shadow-lg transition transform hover:scale-110"
      >
        WHATSAPP
      </button>
    </div>
  );
};

export default BannerTwo;

