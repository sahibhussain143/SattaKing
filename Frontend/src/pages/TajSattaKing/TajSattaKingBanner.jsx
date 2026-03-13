import React from "react";

const TajSattaKingBanner = () => {
  const openWhatsApp = () => {
    const phoneNumber = "918875156232"; // country code + number (no '+')
    const message = "Hello Rajan Bhai I’m interested in your service.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="border-4 mt-12 border-blue-600 rounded-lg p-6 text-center relative bg-white">
        {/* Yellow Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 rounded-t-lg"></div>

        {/* Heading */}
        <h2 className="font-bold text-lg md:text-xl mb-4">
          🎯 FARIDABAD , GAZIABAD, GALI, DESAWAR 🎯
        </h2>

        {/* Paragraph */}
        <p className="font-semibold text-md leading-relaxed mb-4">
          MAI GAME MILEGA SINGLE JODI 1001% PASS💥 ✅✅✅✅JISKA BHI LOSS HO KARJA HO SARA COVER KR LO MAHINE KA LAKHO PROFIT KRO 🥇🥇🥇JIS BHAI KO DIRECT COMPANY KE SATH MIL KAR KAAM KRNA HAI 🥇🥇🥇 ABHI WHATSAPP KAREN 🥇🎯✅💥
        </p>

        <p className="text-black font-medium mb-2">
          नंबर सेव करके जल्दी वॉट्सऐप पे मैसेज कीजिए गारंटी के साथ काम होगा
        </p>

        {/* Name Highlight */}
        <h3 className="text-red-600 font-bold text-xl mb-2">
          👑👑 SATTA KING 👑👑
        </h3>

        {/* Number */}
        <p className="text-green-600 font-bold text-2xl mb-4">8875156232</p>

        {/* WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-full shadow-lg transition transform hover:scale-110"
        >
          DELHI SATTA BAZAR
        </button>
      </div>

      <div className="border-4 border-blue-600 rounded-lg p-6 text-center relative bg-white mt-8">
        {/* Yellow Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 rounded-t-lg"></div>

        {/* Heading */}
        <h2 className="font-bold text-lg md:text-xl mb-4">
          FARIDABAD | GAZIYABAD | GALI | DS
        </h2>
        <h3 className="font-bold text-lg md:text-xl mb-4">
          🔥DIRECT COMPANY SE LEAK JODI🔥
        </h3>

        {/* Paragraph */}
        <p className="font-semibold text-md leading-relaxed mb-4">
          JO BHAI APNA LOSS COVER KARNA CHAHTE HO ,GAME SINGAL JODI MAI HE MILEGA ,GAME KISI KA BAAP NAHI KAAT SAKTA ,APNI BOOKING KARANE K LIYE ABHI WHATSAPP YA CALL KARE
        </p>

        {/* Name Highlight */}
        <h3 className="text-red-600 font-bold text-xl mb-2">
          👑👑 SATTA KING 👑👑
        </h3>

        {/* Number */}
        <p className="text-green-600 font-bold text-2xl mb-4">8875156232</p>

        {/* WhatsApp Button */}
        <button
          onClick={openWhatsApp}
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-xl shadow-lg transition transform hover:scale-110"
        >
          DELHI SATTA BAZAR
        </button>
      </div>
    </>
  );
};

export default TajSattaKingBanner;
