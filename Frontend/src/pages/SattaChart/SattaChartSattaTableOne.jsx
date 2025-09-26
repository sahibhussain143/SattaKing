import React, { useMemo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

// Reusable table component without titles
const GameTable = ({ games }) => {
  const months = [
    "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
    "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
  ];

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const [selectedMonthIndex] = useState(currentMonth);
  const [selectedYear] = useState(currentYear);

  // Generate dummy data
  const sampleData = useMemo(() => {
    const daysInMonth = new Date(selectedYear, selectedMonthIndex + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, () =>
      games.map(() => Math.floor(Math.random() * 100).toString().padStart(2, "0"))
    );
  }, [games, selectedMonthIndex, selectedYear]);

  return (
    <div className="border-t-black border-b-black border-2 ">
      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-[700px] table-fixed shadow-xl">
          <thead>
            <tr>
              <th className="p-2 bg-gray-400 sticky top-0 w-24 z-10 text-center text-sm">Date</th>
              {games.map((g) => (
                <th key={g} className="p-2 bg-yellow-200 sticky top-0 z-10 text-center text-sm">{g}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sampleData.map((row, dayIdx) => (
              <tr key={dayIdx} className="bg-white/70">
                <td className="p-2 font-medium bg-gray-300 text-center text-sm">
                  {dayIdx + 1} {months[selectedMonthIndex]}
                </td>
                {row.map((val, gi) => (
                  <td key={gi} className="p-2 font-mono text-center text-sm">{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const SattaChartSattaTableOne = () => {
  const message = "Hello, I would like to know more about the game rates and offers.";

  return (
    <>
      <div className="bg-gradient-to-b from-black to-blue-500 text-white text-center py-16">
        <h1 className="text-3xl font-bold mb-2">🙏RAAJA BHAI ONLINE</h1>
        <p className="text-lg mb-2">RAAJA BHAI</p>
        <p className="text-lg font-semibold mb-4">
          सभी भाई गेम प्ले करके न ड़ेशन होकर
        </p>

        <div className="mt-6 space-x-2">
          <span className="text-blue-300">जोड़ी रेट 10..970</span>
          <span className="text-blue-300">हरुफ़ रेट 100..970</span>
        </div>

        <div className="mt-6 flex justify-center space-x-2 text-xl">
          {Array(8).fill("✔").map((check, index) => (
            <span key={index}>{check}</span>
          ))}
        </div>

        <div className="mt-8 text-lg space-y-1">
          <p>DELHI BAZAR...3:05 PM</p>
          <p>SHREE GANESH...4:35 PM</p>
          <p>KURUKSHETRA BAZAR 07:45</p>
          <p>FARIDABAD...06:00 PM</p>
          <p>GAZIABAD...09:40 PM</p>
          <p>GALL.. CHOR 11:40 PM</p>
          <p>DESAWER...04:50 AM</p>
        </div>

        <div className="mt-6 text-lg">
          <p className="font-bold">payment</p>
          <p>सबसे फास्ट पेमेंट की सुविधा</p>
          <p>**गेम खेलने के लिए नीली बटन पर क्लिक करें</p>
        </div>

        <div className="mt-8">
          <p className="text-xl">📞 9728379960</p>
        </div>

        <div className="mt-6 w-[200px] mx-auto">
          <a
            href={`https://wa.me/9728379960?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-full text-lg"
          >
            <FaWhatsapp className="mr-2 text-2xl" />
            WHATSAPP
          </a>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 md:p-8">
        {/* Fully responsive tables with full width */}
        <GameTable
          games={["GALI-DISAWER MIX", "JAI MAHALAXMI", "TAJ", "HINDUSTAN", "DELHI BAZAR(DL)"]}
        />
        <GameTable
          games={["AHMEDABAD", "DELHI 2PM", "SHRI GANESH", "MAHARAJ"]}
        />
        <GameTable
          games={["RAJKOT", "SHALIMAR", "PARIS BAZAR", "DEEPMALA", "LUCKY 7","DELHI AJMER"]}
        />
      </div>
    </>
  );
};

export default SattaChartSattaTableOne;
