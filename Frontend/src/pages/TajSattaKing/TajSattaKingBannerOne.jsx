import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export default function TajSattaKingBannerOne() {
  const gamePhone = "8813965623";       // Game number
  const khaiwalPhone = "9728379960";    // Khaiwal number

  // Items for sidebar with label, message, and which number to use
  const sideBoxItems = [
    { label: "RAAJA BHAI", message: "Hello Raaja Bhai!", phone: gamePhone },
    { label: "ONLINE", message: "I want today's online result.", phone: gamePhone },
    { label: "KHAIWAL", message: "Please send leak jodi.", phone: khaiwalPhone },
    { label: "जोड़ी रेट", message: "Send rate details.", phone: gamePhone },
    { label: "10 के 950", message: "Confirm single jodi 10 ke 950.", phone: gamePhone },
  ];

  // Generate WhatsApp link for given message and phone (default to gamePhone)
  const generateWhatsappLink = (msg, phone = gamePhone) =>
    `https://wa.me/91${phone}?text=${encodeURIComponent(msg)}`;

  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-black via-[#0a3c45] to-[#001f26] text-white">
      {/* Top Section */}
      <div className="py-12 px-4 md:px-6 bg-black/70 backdrop-blur-md rounded-b-3xl text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-400 mb-4 animate-pulse drop-shadow-lg">
          🔥 LEAK JODI DHAMAKA 🔥
        </h1>
        <p className="text-lg md:text-xl mb-2">🎯 FARIDABAD GAZIYABAD GALI DS 🎯</p>
        <p className="font-semibold mb-6">NO ADVANCE NO ADVANCE</p>

        <h2 className="text-2xl md:text-4xl font-bold text-red-500 mb-2 animate-pulse">
          RAAJAN BHAI
        </h2>
        <p className="text-xl md:text-2xl mb-6">{gamePhone}</p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href={`tel:${gamePhone}`}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition transform hover:-translate-y-1 text-center"
          >
            CALL NOW
          </a>
          <a
            href={generateWhatsappLink("Hello Raaja Bhai, I want the single Jodi of today's Satta game.", gamePhone)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
          >
            <FaWhatsapp /> WHATSAPP
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-12 px-4 md:px-6 bg-yellow-400 mt-6 rounded-t-3xl text-center">
        <h2 className="text-red-600 text-2xl md:text-4xl font-extrabold mb-4 drop-shadow-md">
          PLAY ONLINE GAME
        </h2>
        <p className="text-black text-lg md:text-xl font-semibold mb-6">
          Online game khelne ke liye niche diye hue number par message karein
        </p>
        <a
          href={generateWhatsappLink("Hello Raaja Bhai, I want the single Jodi of today's Satta game.", khaiwalPhone)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
        >
          <FaWhatsapp /> WHATSAPP
        </a>
      </div>

      {/* Sidebar */}
      {sidebarVisible && (
        <div className="fixed bottom-4 left-4 bg-[#004b66] text-white p-4 rounded-lg shadow-lg flex flex-col gap-2 w-48 z-50">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-sm">CHAT NOW 🤙</span>
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
              href={generateWhatsappLink(item.message, item.phone)}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors flex items-center gap-2 text-sm"
            >
              <FaWhatsapp className="text-green-400" /> {item.label}
            </a>
          ))}
        </div>
      )}

      {/* After Pass Section */}
      <div className="text-center px-4 py-10 bg-white text-black">
        <div className="border-y-4 border-blue-700 py-8">
          <h2 className="text-yellow-700 text-2xl md:text-3xl font-bold mb-4">
            👉🏻 AFTER PASS 👈🏻
          </h2>
          <p className="text-lg font-semibold mb-4">
            GAZIYABAD GALI DISAWAR KI LEAK SINGLE JODI 100% PASS LEAK GAME LENE
            KE LIYE ABHI CALL YA MSG KARE <br />
            SIRF IMANDAR LOG HI MESSAGE KARE <br /> MOTI GAME LAGANE WALE....
          </p>
          <p className="text-yellow-600 text-2xl font-bold">SATTA KING</p>
          <p className="text-green-700 text-2xl font-bold mb-6">{gamePhone}</p>
          <a
            href={generateWhatsappLink("Hello Raaja Bhai, I want the single Jodi of today's Satta game.", gamePhone)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-8 rounded-full text-lg shadow-lg transition transform hover:-translate-y-1"
          >
            GAZIYABAD LEAK
          </a>
        </div>

        {/* Head Branch Section */}
        <div className="border-y-4 border-blue-700 py-8 mt-6">
          <h2 className="text-blue-700 text-2xl md:text-3xl font-bold mb-4">
            🙏🏻 HEAD BRANCH 🙏🏻
          </h2>
          <p className="text-lg font-semibold mb-4">
            JO JEETNA AUR KAMANA CHAHTA HAI HUMARE SATH AAJ HI JUDE KYUKI GAME HUM
            PAAS KARATE HAI OR GAME LAGANA KA DAM RAKHTE HAI <br />
            TOH HI MSG YA CALL KARE 🙏🏻
          </p>
          <p className="text-xl font-bold mb-2">💥 SINGLE JODI BLAST 💥</p>
          <p className="text-red-600 text-lg font-bold mb-2">
            FEES GAME PASS KE BAAD DENI HAI
          </p>
          <p className="text-blue-700 text-2xl font-bold">SATTA KING</p>
          <p className="text-green-700 text-2xl font-bold mb-6">{gamePhone}</p>
          <a
            href={generateWhatsappLink("Hello Raaja Bhai, I want the single Jodi of today's Satta game.", gamePhone)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-xl text-lg shadow-lg transition transform hover:-translate-y-1"
          >
            GALI LEAK
          </a>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 space-y-6 text-center">
        <h1 className="text-2xl font-bold text-yellow-400">
          😊 <span className="text-green-400">भरोसा आपका</span> ईमानदारी हमारी 🤩
        </h1>
        <h2 className="text-xl font-semibold text-orange-400">
          🔥 ऑनलाइन खाईवाल ❤️🔥
        </h2>
        <p className="text-lg font-medium">RAAJA BHAI</p>
        <h3 className="text-lg font-medium text-blue-400">
          🌍 घर बैठे ऑनलाइन गेम प्ले करें
        </h3>
        <div className="text-pink-400 font-semibold text-lg">⏰ Game Time ⏰</div>

        <div className="w-full max-w-md text-gray-200 text-sm md:text-base grid grid-cols-2 gap-2">
          <p>Faridabad</p><p>5:55 pm</p>
          <p>Gaziabad</p><p>9:45 pm</p>
          <p>Gali</p><p>11:30 pm</p>
          <p>Disawar</p><p>2:20 am</p>
          <p>Rajshri</p><p>1:30 pm</p>
          <p>Sundram</p><p>2:30 pm</p>
          <p>Delhi Bazar</p><p>3:00 pm</p>
          <p>Taj</p><p>3:15 pm</p>
          <p>Peshawar</p><p>3:15 pm</p>
          <p>Shri Ganesh</p><p>4:30 pm</p>
          <p>Shalimar</p><p>7:30 pm</p>
          <p>Lucky-7</p><p>10:30 pm</p>
          <p>WhatsApp</p><p>{gamePhone}</p>
          <p>Rate</p><p>Jodi 10 ke 950</p>
          <p></p><p>Harf 100 ke 950</p>
        </div>

        <a
          href={generateWhatsappLink("Hello Raaja Bhai, I want the single Jodi of today's Satta game.", khaiwalPhone)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full text-lg shadow-lg transition transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
        >
          <FaWhatsapp /> WHATSAPP
        </a>
      </div>
    </div>
  );
}
