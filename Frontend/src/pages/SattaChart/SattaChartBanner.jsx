// src/components/SattaChart.js
import React from "react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

const sattaData = [
  {
    title: "CHARMINAR SATTA CHART",
    items: [
      { name: "DELHIWAR", number: "(24) (47) [70]" },
      { name: "RAJDHANI", number: "(49) (71) [10]" },
      { name: "N C R", number: "(59) (91) [0]" },
      { name: "SHRI HARI", number: "(08) (21) [64]" },
      { name: "SUDARSHAN", number: "(63) (28) [16]" },
      { name: "DELHI DELUXE", number: "(33) (08) [13]" },
    ],
  },
  {
    title: "GALI-DESAWAR MIX CHART",
    items: [
      { name: "CONVERT", number: "(10) (8) [81]" },
      { name: "DELHI SUPER", number: "(45) (66) [27]" },
      { name: "KING STAR", number: "(72) (05) [83]" },
    ],
  },
  {
    title: "DELHI BAZAR CHART (DL)",
    items: [
      { name: "CONVERT", number: "(71) (28) [64]" },
      { name: "LUCKY KING", number: "(34) (59) [96]" },
    ],
  },
  {
    title: "SHRI GANESH CHART",
    items: [
      { name: "CONVERT", number: "(76) (03) [33]" },
      { name: "SHREE KALI", number: "(41) (82) [55]" },
    ],
  },
  {
    title: "PARIS BAZAR CHART",
    items: [
      { name: "CONVERT", number: "(83) (03) [47]" },
      { name: "ROYAL STAR", number: "(19) (66) [85]" },
    ],
  },
  {
    title: "GALI CHART",
    items: [
      { name: "CONVERT", number: "(52) (71) [7]" },
      { name: "BLACK KING", number: "(09) (44) [62]" },
    ],
  },
  {
    title: "DESAWAR CHART",
    items: [
      { name: "CONVERT", number: "(18) (34) [59]" },
      { name: "SUPER STAR", number: "(63) (20) [41]" },
    ],
  },
  {
    title: "GAZIYABAD CHART",
    items: [
      { name: "CONVERT", number: "(44) (27) [71]" },
      { name: "SUPER KING", number: "(88) (12) [35]" },
    ],
  },
  {
    title: "FARIDABAD CHART",
    items: [
      { name: "CONVERT", number: "(29) (54) [87]" },
      { name: "LUCKY STAR", number: "(63) (40) [91]" },
    ],
  },
];

const SattaChartBanner = () => {
  const whatsappNumber = "9541015623";
  const telegramLink = "https://t.me/+kbqlUMGnqXJmMTM1";

  const openWhatsApp = (item) => {
    window.open(
      `https://wa.me/91${whatsappNumber}?text=Hello,%20please%20send%20details%20about%20${item.name}%20${item.number}`,
      "_blank"
    );
  };

  const openTelegram = () => {
    window.open(telegramLink, "_blank");
  };

  return (
    <>
    <div className="min-h-screen bg-[#c15924] p-4 md:p-8">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-white mb-6">
        SATTA GAME CHART
      </h1>

      {sattaData.map((section, index) => (
        <div
          key={index}
          className="mb-8 rounded-md overflow-hidden shadow border border-black bg-white"
        >
          {/* Section Title */}
          <h2 className="bg-black text-yellow-300 text-center font-bold py-3 text-lg md:text-xl tracking-wide">
            {section.title}
          </h2>

          {/* Table */}
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-gray-200 text-blue-900">
                <th className="py-2 px-3 border border-black">Name</th>
                <th className="py-2 px-3 border border-black">Number</th>
                <th className="py-2 px-3 border border-black">Social</th>
              </tr>
            </thead>
            <tbody>
              {section.items.map((item, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-white" : "bg-gray-100"
                  } text-blue-900`}
                >
                  <td className="py-2 px-3 border border-black font-semibold uppercase">
                    {item.name}
                  </td>
                  <td className="py-2 px-3 border border-black">
                    {item.number}
                  </td>
                  <td className="py-2 px-3 border border-black flex justify-center gap-3">
                    <FaWhatsapp
                      onClick={() => openWhatsApp(item)}
                      className="text-green-600 cursor-pointer text-xl hover:scale-110 transition"
                    />
                    <FaTelegramPlane
                      onClick={openTelegram}
                      className="text-blue-500 cursor-pointer text-xl hover:scale-110 transition"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}


      
      
    </div>
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white font-sans">
      {/* Banner Section */}
      <div className="text-center p-6 md:p-12 space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
          👑 RAAJA - BHAI 👑
        </h1>
        <p className="text-2xl md:text-3xl text-yellow-300 italic drop-shadow-md">
          🙏 विश्वस का दूसरा नाम 🤝🙏
        </p>
        <p className="text-xl md:text-2xl text-yellow-200 italic">
          10 साल से आपकी सेवा में, सबसे Fast Payment 🙏
        </p>
        <p className="text-lg md:text-xl text-yellow-100">
          🌴 राजकोट, दिल्ली दरबार और अन्य गेम की एंट्री हमारे पास होती है 🌴
        </p>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow-md">
            🕒 Time Table 🕒
          </h2>
          <div className="space-y-1 md:space-y-2 text-yellow-200 text-lg md:text-xl">
            <p>💯 RAJSHRI.....👉🏻 01:25PM ⏰</p>
            <p>💯 MAHALAKSHMI.....👉🏻 01:45PM ⏰</p>
            <p>💯 SUNDARAM.....👉🏻 02:15PM ⏰</p>
            <p>💯 DILLI BAZAR.....👉🏻 02:50PM ⏰</p>
            <p>💯 TAJ.....👉🏻 03:00PM ⏰</p>
            <p>💯 PESHAWAR.....👉🏻 03:00PM ⏰</p>
            <p>💯 SRI-GANESH.....👉🏻 04:30PM ⏰</p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow-md">
            🕔 Evening Last Time 🕔
          </h2>
          <div className="space-y-1 md:space-y-2 text-yellow-200 text-lg md:text-xl">
            <p>💯 FARIDABAD.....👉🏻 5:59PM ⏰</p>
            <p>💯 SALIMAR.....👉🏻 7:20PM ⏰</p>
            <p>💯 GAZIYABAD.....👉🏻 9:00PM ⏰</p>
            <p>💯 DILLI DARBAR.....👉🏻 9:45PM ⏰</p>
            <p>💯 LUCKY-7.....👉🏻 10:20PM ⏰</p>
            <p>💯 GALI.....👉🏻 11:30PM ⏰</p>
            <p>💯 DISHAWAR.....👉🏻 4:50AM ⏰</p>
          </div>
        </div>
<div className="mt-6">
  <p className="text-2xl md:text-3xl font-semibold text-yellow-300 drop-shadow-md mb-3">
    🌟 जनता का विश्वास ही खाईवाल की पहचान है 🌟
  </p>
  <h1>🪀9541015623🪀</h1>

  {/* Smaller WhatsApp Button */}
  <a
    href={`https://wa.me/91${whatsappNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 bg-green-500 text-white text-lg px-4 py-1.5 rounded-full font-semibold shadow hover:bg-green-600 transition transform hover:scale-105"
  >
    <FaWhatsapp className="text-base" /> WhatsApp
  </a>

  {/* Smaller Telegram Button */}
  <button
    onClick={openTelegram}
    className="ml-3 inline-flex items-center justify-center gap-2 bg-blue-500 text-white text-lg px-4 py-1.5 rounded-full font-semibold shadow hover:bg-blue-600 transition transform hover:scale-105"
  >
    <FaTelegramPlane className="text-base" /> Telegram
  </button>
</div>

    
    
      </div>
    </div>
    </>
  );
};

export default SattaChartBanner;

 
 
 
 
 
