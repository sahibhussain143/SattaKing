import React, { useMemo, useState } from "react";

export default function SattaChartSattaTable() {
  // Games
  const games = ["SHRI HARI", "RAJSHRI", "SUNDRAM", "DELHI DREAM", "NCR"];

  // Months
  const months = [
    "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
    "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
  ];

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); // current month index (0-11)

  // Start with current month
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // Sample data generator
  const sampleData = useMemo(() => {
    const daysInMonth = new Date(selectedYear, selectedMonthIndex + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, () =>
      games.map(() => Math.floor(Math.random() * 100).toString().padStart(2, "0"))
    );
  }, [games, selectedMonthIndex, selectedYear]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* Paragraph above table */}
      <p className="mb-2 text-gray-800 text-center text-sm md:text-base">
        FARIDABAD, GAZIYABAD, GALI, DISAWAR MAI GAME MILEGA SINGLE JODI 1001% GUARANTEE SE PASS HOGI HUMARE SATH KAAM KARNE WALE BHAIYO KA HAR MAHINE LAKHO KA PROFIT HOTA HAI. AGAR AAP BHI LAKHO KAMANA CAHATE HAI TO ABHI WHATSAPP KRE YA CALL SE SAMPARK KRE.
      </p>

      {/* Styled Headings */}
      <h1 className="text-3xl  md:text-3xl font-bold text-red-600 text-center mb-2">
        ✅ FESS GAME PASS KE BAAD ✅
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold text-blue-600 text-center mb-2">
        SATTA LEAK
      </h2>
      <h3 className="text-xl md:text-2xl font-semibold text-green-600 text-center mb-4">
        ADD
      </h3>

      {/* Table */}
      <div className="overflow-auto rounded-lg shadow-lg">
        <table className="w-full table-fixed">
          {/* Header row */}
          <thead>
            <tr>
              <th className="p-2 bg-gray-400 sticky top-0 z-10 text-center">Date</th>
              {games.map((g) => (
                <th key={g} className="p-2 bg-blue-200 sticky top-0 z-10 text-center">{g}</th>
              ))}
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {sampleData.map((row, dayIdx) => (
              <tr key={dayIdx} className="bg-white/70">
                <td className="p-2 font-medium bg-gray-300 text-center">
                  {dayIdx + 1} {months[selectedMonthIndex]}
                </td>
                {row.map((val, gi) => (
                  <td key={gi} className="p-2 font-mono text-center">{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
