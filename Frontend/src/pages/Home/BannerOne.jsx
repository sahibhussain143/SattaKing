import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function BannerOne({
  title = "आज की लीक जोड़ी यहाँ मिलेगी",
  subtitle = "नंबर सेव करके मैसेज करो कन्फर्म गेम लेने के लिए जल्दी वाट्सऐप पे मैसेज कीजिए",
  name = "👑👑 RAJAN BHAI 👑👑",
  branch = "SATTA KING HEAD BRANCH MUMBAI",
  phone = "8813965623",
}) {
  const telLink = `tel:${phone}`;
  const whatsappLink = `https://wa.me/91${phone.replace(/\D/g, "")}`;

  return (
   <section className="w-full mt-16 bg-gradient-to-b from-[#04232b] via-[#07323a] to-[#0f3f41] text-center py-10 px-4">

      <div className="max-w-6xl mx-auto  ">
        {/* Title */}
        <h1 className="font-bold text-yellow-400  text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          {title}
        </h1>

        {/* Highlight */}
        <p className="text-white text-lg sm:text-xl mt-2">
          🎯 FARIDABAD · GAZIYABAD · GALI · DESAWAR 🎯
        </p>

        {/* Subtitle */}
        <p className="mt-4 text-yellow-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
          🎯 {subtitle}
        </p>

        {/* Name & Branch */}
        <div className="mt-6">
          <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
            {name}
          </p>
          <p className="text-yellow-300 text-base sm:text-lg md:text-xl mt-1">
            {branch}
          </p>
        </div>

        {/* Phone & Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold">
            {phone}
          </p>

          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href={telLink}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition"
            >
              <FaPhoneAlt /> Call Now
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-700 hover:bg-green-800 text-white font-semibold shadow-lg transition"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>

        {/* Note */}
        <p className="mt-4 text-yellow-200 text-xs sm:text-sm md:text-base max-w-3xl mx-auto">
          नंबर सेव करके मैसेज करें — सिंगल जोड़ी में काम होगा।
        </p>
      </div>
    </section>
  );
}
