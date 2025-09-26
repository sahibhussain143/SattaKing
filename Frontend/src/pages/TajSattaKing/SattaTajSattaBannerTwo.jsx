
import React from "react";

const InfoBlock = ({ title, contentLines, actions }) => {
  return (
    <div className="w-full p-4 mb-6 text-center text-sm md:text-base bg-gray-100 rounded-md shadow">
      {title && <h2 className="font-bold mb-2 text-gray-900 text-lg">{title}</h2>}

      {contentLines.map((line, idx) => (
        <p key={idx} className="mb-1 text-gray-800 leading-relaxed">{line}</p>
      ))}

      <div className="mt-4 flex flex-col gap-3 items-center w-full">
        {actions.map((action, idx) => {
          if (action.type === "button") {
            const buttonColor =
              action.label === "WHATSAPP"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-red-600 hover:bg-red-700";

            return (
              <a
                key={idx}
                href={`https://wa.me/918813965623?text=${encodeURIComponent(
                  action.message || "Hello, I'm interested."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full max-w-xs px-4 py-2 rounded text-white font-bold text-center ${buttonColor}`}
              >
                {action.label}
              </a>
            );
          } else {
            const headingColor =
              action.color === "red"
                ? "text-red-600"
                : action.color === "blue"
                ? "text-blue-600"
                : action.color === "green"
                ? "text-green-600"
                : "text-gray-700";

            return (
              <p
                key={idx}
                className={`text-lg font-bold ${headingColor}`}
              >
                {action.label}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
};

const SattaTajSattaBannerTwo = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-10 px-2 md:px-6">
      {/* HEADER */}
      <div className="text-center mb-8 text-sm md:text-base text-gray-900">
        <p className="text-lg font-bold text-red-700">📯 LEAK REPORT HEAD BRANCH 📯</p>
        <p className="text-blue-700 font-semibold">🕵️‍♂️ SATTA-KING 🕵️‍♂️</p>
        <p className="text-sm">❌ FARIDABAD ❌ GAZIABAD ❌ GALI ❌ DISHAWAR ❌</p>
        <p className="text-red-600 font-bold mt-2 text-xl">TAJ SATTA KING</p>
        <p className="text-green-600 font-bold text-lg">ADD</p>
      </div>

      {/* BLOCKS */}
      <InfoBlock
        contentLines={[
          "📯 JIS BHAI KO MOTA PAISA KAMANA HAI AUR JO BHAI ABHI LOSS ME HAI WO HUMSE JUDE... GAME SINGLE JODI ME MILEGA COMPANI SE DIRECT LEAK",
          "REPORT HMARA GAME KISI KA BAAP BHI NAHI KAAT SAKTA... SINGLE NUMBER LENE KE LIYE ABHI WHATSAPP MESSAGE YA CALL KRE 📱",
        ]}
        actions={[
          { type: "heading", label: "ADD", color: "green" },
          { type: "button", label: "WHATSAPP" },
        ]}
      />

      <InfoBlock
        title="1001% LEAK REPORT HEAD BRANCH"
        contentLines={[
          "FARIDABAD GAZIABAD GALI DESAWER IN SABHI LOCATION ME LEAK JODI HUM DENGE JISE LEKAR APP LAKHON RUPAY 💰💰 MAHINA KAMA SAKTE HO TO LEAK GAME 🎯 LENE K LIYE ABHI WHATSAPP PR MSG YA CALL KRE 📱📱",
        ]}
        actions={[
          { type: "heading", label: "FEES AFTER PASS", color: "red" },
          { type: "heading", label: "SATTA RESULT", color: "green" },
          { type: "button", label: "UP GAME KING" },
        ]}
      />

      <InfoBlock
        title="💥 HOLI DHAMAKA 💥"
        contentLines={[
          "FARIDABAD GAZIABAD GALI DESAWER IN SABHI LOCATION ME LEAK JODI HUM DENGE JISE LEKAR APP LAKHON RUPAY 💸💸 MAHINA KAMA SAKTE HO TO LEAK GAME 🎯 LENE K LIYE ABHI WHATSAPP PR MSG YA CALL KRE 📱📱",
        ]}
        actions={[
          { type: "heading", label: "FEES AFTER PASS", color: "red" },
          { type: "heading", label: "SATTA KING RESULT", color: "blue" },
          { type: "heading", label: "ADD", color: "green" },
          { type: "heading", label: "SATTA KING", color: "red" },
        ]}
      />

      <InfoBlock
        title="1001% LEAK REPORT HEAD BRANCH"
        contentLines={[
          "FARIDABAD GAZIABAD GALI DESAWER IN SABHI LOCATION ME LEAK JODI HUM DENGE JISE LEKAR APP LAKHON RUPAY 💸💸 MAHINA KAMA SAKTE HO TO LEAK GAME 🎯 LENE K LIYE ABHI WHATSAPP PR MSG YA CALL KRE 📱📱",
        ]}
        actions={[
          { type: "heading", label: "FEES AFTER PASS", color: "red" },
          { type: "heading", label: "ADD", color: "green" },
          { type: "heading", label: "SATTA KING", color: "red" },
          { type: "button", label: "LEAK DEPARTMENT" },
        ]}
      />

      <InfoBlock
        contentLines={[
          "MAI GAME MILEGA SINGLE JODI 1001% PASS ❌ ✅ ✅ ✅ ✅ JISKA BHI LOSS HO KARJA HO SARA COVER KR LO MAHINE KA LAKHO PROFIT KRO 🏅🏅🏅🏅 JIS BHAI KO DIRECT COMPANY KE SATH MIL KAR KAAM KRNA HAI 🏅🎯✅✅❌",
        ]}
        actions={[
          { type: "heading", label: "FEES AFTER PASS", color: "red" },
          { type: "heading", label: "SATTAKING", color: "blue" },
          { type: "heading", label: "ADD", color: "green" },
          { type: "heading", label: "SATTA KING", color: "red" },
        ]}
      />
    </div>
  );
};

export default SattaTajSattaBannerTwo;
 
