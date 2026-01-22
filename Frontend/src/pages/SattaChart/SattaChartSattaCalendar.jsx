import React, { useMemo, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function SattaChartSattaCalendar() {
  const phoneNumber = "918813965623";

  const games = useMemo(
    () => ["CHAR MINAR", "DISAWER", "FARIDABAD", "GHAZIYABAD"],
    []
  );

  const months = useMemo(
    () => [
      "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.",
      "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
    ],
    []
  );

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  // ✅ Dynamic years (NO future crash)
  const years = useMemo(
    () =>
      Array.from(
        { length: currentYear - 2021 + 1 },
        (_, i) => 2021 + i
      ),
    [currentYear]
  );

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(currentMonth);

  // ✅ Safe demo data generation
  const sampleData = useMemo(() => {
    const data = {};
    years.forEach((year) => {
      data[year] = months.map((_, monthIndex) => {
        const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
        return Array.from({ length: daysInMonth }, () =>
          games.map(() =>
            Math.floor(Math.random() * 100).toString().padStart(2, "0")
          )
        );
      });
    });
    return data;
  }, [years, months, games]);

  // ✅ Guards (NO undefined access)
  if (!sampleData[selectedYear]) return null;

  function goPrevMonth() {
    if (selectedMonthIndex === 0) {
      if (selectedYear > years[0]) {
        setSelectedYear((y) => y - 1);
        setSelectedMonthIndex(11);
      }
    } else {
      setSelectedMonthIndex((m) => m - 1);
    }
  }

  function goNextMonth() {
    if (selectedMonthIndex === 11) {
      if (selectedYear < currentYear) {
        setSelectedYear((y) => y + 1);
        setSelectedMonthIndex(0);
      }
    } else {
      if (selectedYear === currentYear && selectedMonthIndex >= currentMonth)
        return;
      setSelectedMonthIndex((m) => m + 1);
    }
  }

  function exportCSV() {
    const header = ["Date", ...games].join(",");
    const rows = sampleData[selectedYear][selectedMonthIndex].map(
      (row, dayIdx) => {
        const date = `${months[selectedMonthIndex]} ${dayIdx + 1}, ${selectedYear}`;
        return [date, ...row].join(",");
      }
    );

    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${months[selectedMonthIndex]}-${selectedYear}.csv`;
    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-700 via-green-800 to-black text-white p-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Satta King Record Chart {months[selectedMonthIndex]} {selectedYear}
        </h1>

        <div className="flex justify-center gap-2 mb-4">
          <button onClick={goPrevMonth} className="border px-3 py-1">Prev</button>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="text-black px-2"
          >
            {years.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>

          <button onClick={goNextMonth} className="border px-3 py-1">Next</button>

          <button onClick={exportCSV} className="border px-3 py-1">
            Export CSV
          </button>
        </div>

        <div className="overflow-auto border">
          <table className="min-w-full text-sm">
            <thead className="bg-green-900">
              <tr>
                <th className="p-2">Date</th>
                {games.map((g) => (
                  <th key={g} className="p-2">{g}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sampleData[selectedYear][selectedMonthIndex].map((row, i) => (
                <tr key={i} className={i % 2 ? "bg-white/10" : "bg-white/5"}>
                  <td className="p-2">
                    {months[selectedMonthIndex]} {i + 1}
                  </td>
                  {row.map((v, j) => (
                    <td key={j} className="p-2 font-mono">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-white text-center p-10">
        <h2 className="text-4xl font-bold text-red-600">FEES GAME KE BAAD</h2>
        <h3 className="text-3xl text-blue-600 font-semibold">⁕RAJAN BHAI⁕</h3>
        <p className="text-xl font-bold">{phoneNumber}</p>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href={`tel:${phoneNumber}`}
            className="bg-red-600 text-white px-6 py-3 rounded-lg flex gap-2 items-center"
          >
            <FaPhoneAlt /> Call Now
          </a>

          <a
            href={`https://wa.me/${phoneNumber}`}
            className="bg-green-500 text-white px-6 py-3 rounded-lg flex gap-2 items-center"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
