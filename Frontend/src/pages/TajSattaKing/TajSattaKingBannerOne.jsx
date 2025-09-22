// import React from 'react';

// const TajSattaKingBannerOne = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-6 flex flex-col items-center justify-center">
      
//       {/* Card Container */}
//       <div className="w-full max-w-md md:max-w-lg rounded-2xl shadow-2xl overflow-hidden bg-black/60 backdrop-blur-md">
        
//         {/* Header Section */}
//         <div className="p-4 text-center bg-gradient-to-r from-yellow-600 to-yellow-500">
//           <h1 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-wider animate-pulse">
//             🔥FEES GAME PASS KE BAD🔥
//           </h1>
//         </div>

//         {/* Main Content */}
//         <div className="p-5 md:p-6">

//           {/* Location Info */}
//           <div className="text-center mb-6">
//             <h2 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-2">
//               🎯 FARIDABAD GAZIYABAD GALI DS 🎯
//             </h2>
//             <p className="text-lg md:text-xl text-gray-300 font-medium">
//               💯 LEAK SINGLE JODI GAME 💯
//             </p>
//           </div>

//           {/* Divider */}
//           <div className="flex items-center my-6">
//             <div className="flex-grow border-t border-gray-600"></div>
//             <span className="mx-4 text-yellow-500 text-2xl">¢</span>
//             <div className="flex-grow border-t border-gray-600"></div>
//           </div>

//           {/* Leak Info */}
//           <div className="text-center mb-6">
//             <p className="text-lg md:text-xl text-gray-300">
//               🧨🔥 फीस गेम पासिंग के बाद 🔥🧨
//             </p>
//             <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mt-4 uppercase">
//               SATTA KING LEAK
//             </h3>
//           </div>

//           {/* Buttons Section */}
//           <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
//             <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl uppercase tracking-wide shadow-lg transform transition hover:scale-105">
//               ADD
//             </button>
//             <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition transform hover:scale-105">
// SATTA KING
//             </button>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default TajSattaKingBannerOne;




import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export default function TajSattaKingBannerOne() {
  const phone = "9541015623";

  const sideBoxItems = [
    { label: "RAAJA BHAI", message: "Hello Raaja Bhai!" },
    { label: "ONLINE", message: "I want today's online result." },
    { label: "KHAIWAL", message: "Please send leak jodi." },
    { label: "जोड़ी रेट", message: "Send rate details." },
    { label: "10 के 950", message: "Confirm single jodi 10 ke 950." },
  ];

  const generateWhatsappLink = (msg) =>
    `https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`;

  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-black via-[#0a3c45] to-[#001f26] text-white">

      {/* Top Section */}
      <div className="py-12 px-4 md:px-6 bg-black/70 backdrop-blur-md rounded-b-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4 animate-pulse drop-shadow-lg">
          🔥 LEAK JODI DHAMAKA 🔥
        </h1>
        <p className="text-lg md:text-xl mb-2">🎯 FARIDABAD GAZIYABAD GALI DS 🎯</p>
        <p className="font-semibold mb-6">NO ADVANCE NO ADVANCE</p>

        <h2 className="text-3xl md:text-5xl font-bold text-red-500 mb-2 animate-pulse">RAAJA BHAI</h2>
        <p className="text-xl md:text-2xl mb-6">{phone}</p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href={`tel:${phone}`}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl shadow-lg transition transform hover:-translate-y-1"
          >
            CALL NOW
          </a>
          <a
            href={generateWhatsappLink("Hello Raaja Bhai, I want the single Jodi of today's Satta game.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl shadow-lg transition transform hover:-translate-y-1 inline-flex items-center gap-2"
          >
            <FaWhatsapp /> WHATSAPP
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-12 px-4 md:px-6 bg-yellow-400 mt-6 rounded-t-3xl text-center">
        <h2 className="text-red-600 text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-md">
          PLAY ONLINE GAME
        </h2>
        <p className="text-black text-lg md:text-xl font-semibold mb-6">
          Online game khelne ke liye niche diye hue number par message karein
        </p>
        <a
          href={generateWhatsappLink("Hello Raaja Bhai, I want the single Jodi of today's Satta game.")}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg md:text-xl shadow-lg transition transform hover:-translate-y-1 inline-flex items-center gap-2"
        >
          <FaWhatsapp /> WHATSAPP
        </a>
      </div>

      {/* Middle Left Sidebar */}
      {sidebarVisible && (
        <div className="fixed left-0 -bottom-24 transform -translate-y-1/2 bg-[#004b66] text-white p-4 rounded-r-lg shadow-lg flex flex-col gap-2 w-44 z-50">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-sm">CHATE NOW 🤙</span>
            <button
              onClick={() => setSidebarVisible(false)}
              className="text-white hover:text-red-500"
            >
              <FaTimes />
            </button>
          </div>
          {sideBoxItems.map((item, index) => (
            <a
              key={index}
              href={generateWhatsappLink(item.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors flex items-center gap-2 text-sm"
            >
              <FaWhatsapp className="text-green-400" /> {item.label}
            </a>
          ))}
        </div>
      )}



 <div className="text-center px-4 py-10 bg-white">
      {/* Section 1 */}
      <div className="border-y-4 border-blue-700 py-8">
        <h2 className="text-yellow-700 text-2xl md:text-3xl font-bold mb-4">
          👉🏻 AFTER PASS 👈🏻
        </h2>
        <p className="text-black text-lg font-semibold mb-2">
          GAZIYABAD GALI DISAWAR KI LEAK SINGLE JODI 100% PASS LEAK GAME LENE KE LIYE ABHI CALL YA MSG KARE
          SIRF IMANDAR LOG HI MESSG KARE <br />
          MOTI GAME LAGANE WALE....
        </p>

        <p className="text-yellow-600 text-2xl font-bold mt-4">SATTA KING</p>
        <p className="text-green-700 text-2xl font-bold">ADD</p>

         <a
          href={generateWhatsappLink("Hello Raaja Bhai, I want the single Jodi of today's Satta game.")}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-8 mt-6 rounded-full text-lg md:text-xl shadow-lg transition transform hover:-translate-y-1 inline-flex items-center gap-2"
        >
           GAZIYABAD LEAK
        </a>
      </div>

      {/* Section 2 */}
      <div className="border-y-4 border-blue-700 py-8 mt-6">
        <p className="text-black text-lg font-semibold mb-2">
         <h1 className="text-blue-700 text-2xl md:text-3xl font-bold mb-4" >  🙏🏻 HEAD BRANCH 🙏🏻</h1> <br />
          JO JEETNA AUR KAMANA CHAHTA HAI HUMARE SATH AAJ HI JUDE KYUKI GAME HUM PAAS KARATE HAI OR GAME LAGANA KA DAM RAKHTE HAI <br />
          THO HE MSG YA CALL KARE 🙏🏻
        </p>

        <p className="text-black text-xl font-bold mt-2">
          💥 SINGLE JODI BLAST 💥
        </p>

        <p className="text-red-600 text-lg font-bold mt-2">
          FEES GAME PASS KE BAAD DENI HAI
        </p>

        <p className="text-blue-700 text-2xl font-bold mt-4">SATTA KING</p>
        <p className="text-green-700 text-2xl font-bold">ADD</p>

         <a
          href={generateWhatsappLink("Hello Raaja Bhai, I want the single Jodi of today's Satta game.")}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 mt-8 px-8 rounded-xl text-lg md:text-xl shadow-lg transition transform hover:-translate-y-1 inline-flex items-center gap-2"
        >
       GALI LEAK 
        </a>
      </div> 
    </div>


        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 space-y-6">

      <h1 className="text-2xl font-bold flex items-center space-x-2 text-yellow-400">
        <span>😊</span>
        <span className="text-green-400">भरोसा आपका</span>
        <span>ईमानदारी हमारी</span>
        <span>🤩</span>
      </h1>

      <h2 className="text-xl font-semibold flex items-center space-x-2 text-orange-400">
        <span className="text-red-500">🔥</span>
        <span>ऑनलाइन खाईवाल</span>
        <span className="text-red-500">❤️🔥</span>
      </h2>

      <p className="text-lg font-medium text-gray-300">RAAJA BHAI</p>

      <h3 className="text-lg font-medium flex items-center space-x-2 text-blue-400">
        <span className="text-green-500">🌍</span>
        <span>घर बैठे ऑनलाइन गेम प्ले करें</span>
      </h3>

      <div className="text-pink-400 font-semibold text-lg flex items-center space-x-2">
        <span>⏰</span>
        <span>Game Time</span>
        <span>⏰</span>
      </div>

      <div className="w-full max-w-md text-gray-200 text-sm md:text-base grid grid-cols-2 gap-2">
        <p>Faridabad...........</p>
        <p className="text-right">5:55 pm</p>
        <p>Gazyabad...........</p>
        <p className="text-right">9:45 pm</p>
        <p>GALL...................</p>
        <p className="text-right">11:30 pm</p>
        <p>DISAWER............</p>
        <p className="text-right">2:20 am</p>
        <p>RAJSHRI.............</p>
        <p className="text-right">1:30 pm</p>
        <p>SUNDRAM...........</p>
        <p className="text-right">2:30 pm</p>
        <p>DELHI BAZAR......</p>
        <p className="text-right">3:00 pm</p>
        <p>TAJ.......................</p>
        <p className="text-right">3:15 pm</p>
        <p>PESHAWAR.........</p>
        <p className="text-right">3:15 pm</p>
        <p>SHRI GANESH....</p>
        <p className="text-right">4:30 pm</p>
        <p>SHALIMAR...........</p>
        <p className="text-right">7:30 pm</p>
        <p>LUCKY-7.............</p>
        <p className="text-right">10:30 pm</p>
      </div>

      {/* WhatsApp Button */}
      <a
          href={generateWhatsappLink("Hello Raaja Bhai, I want the single Jodi of today's Satta game.")}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 mt-8 px-8 rounded-full text-lg md:text-xl shadow-lg transition transform hover:-translate-y-1 inline-flex items-center gap-2"
        >
          <FaWhatsapp /> WHATSAPP
        </a>
    </div>

    </div>
  );
}
