import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function BannerOne({
  title = "आज की लीक जोड़ी यहाँ मिलेगी",
  subtitle = "नंबर सेव करके मैसेज करो कन्फर्म गेम लेने के लिए जल्दी वाट्सऐप पे मैसेज कीजिए",
  name = "RAAJA BHAI",
  branch = "SATTA KING HEAD BRANCH MUMBAI",
  phone = "9541015623",
}) {
  const telLink = `tel:${phone}`;
  const whatsappLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}`;

  return (
    <section className="w-full bg-gradient-to-b from-[#04232b] via-[#07323a] to-[#0f3f41] text-center py-8 md:py-12 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Headline */}
        <h1 className="font-bold text-yellow-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          {title}
        </h1>

        {/* Custom highlight line */}
        <p className="text-xl sm:text-2xl text-white mt-2">
          🎯 FARIDABAD GAZIYABAD GALI DS 🎯
        </p>

        {/* Subtitle */}
        <p className="mt-4 text-yellow-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4 sm:px-0">
          <span className="inline-block align-middle mr-2">🎯</span>
          <span className="sm:inline">{subtitle}</span>
        </p>

        {/* Name + Branch */}
        <div className="mt-6 md:mt-8">
          <p className="text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold tracking-wide">
            {name}
          </p>
          <p className="text-yellow-300 text-base sm:text-lg md:text-xl mt-1">
            {branch}
          </p>
        </div>

        {/* Phone and buttons */}
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

          {/* Phone number (hidden on small screens) */}
          <div className="hidden sm:block">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider">
              {phone}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href={telLink}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg transition-transform transform hover:-translate-y-0.5"
              aria-label={`Call ${phone}`}
            >
              <FaPhoneAlt />
              <span className="uppercase">Call Now</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-700 hover:bg-green-800 text-white font-semibold shadow-lg transition-transform transform hover:-translate-y-0.5"
              aria-label={`WhatsApp ${phone}`}
            >
              <FaWhatsapp />
              <span className="uppercase">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Small note */}
        <p className="mt-4 text-yellow-200 text-xs sm:text-sm md:text-base max-w-3xl mx-auto px-4 sm:px-0">
          <span className="hidden sm:inline">
            नंबर सेव करके मैसेज करें — सिंगल जोड़ी में काम होगा।
          </span>
          <span className="sm:hidden">नंबर सेव करे और मैसेज करे।</span>
        </p>

      </div>
    </section>
  );
}
