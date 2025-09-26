
import React, { useMemo, useState } from 'react'
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

// CalendarDashboard (Demo)
// Generic monthly results calendar using Tailwind CSS.
// IMPORTANT: Only uses placeholder demo data.

export default function SattaChartSattaCalendar() {
    const phoneNumber = "918813965623";

  const games = useMemo(
    () => ["CHAR MINAR	", "DISAWER", "FARIDABAD", "GHAZIYABAD", ""],
    []
  )

  const months = useMemo(
    () => [
      'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.e',
      'Jul.', 'August', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
    ],
    []
  )

  const years = [2021, 2022, 2023, 2024, 2025]
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()

  const [selectedYear, setSelectedYear] = useState(currentYear)
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(currentMonth)

  // Generate placeholder data: sampleData[year][monthIndex][day][gameIndex]
  const sampleData = useMemo(() => {
    return years.reduce((acc, year) => {
      acc[year] = months.map((m, mi) => {
        const daysInMonth = new Date(year, mi + 1, 0).getDate()
        const days = Array.from({ length: daysInMonth }, () => {
          return games.map(() =>
            Math.floor(Math.random() * 100).toString().padStart(2, '0')
          )
        })
        return days
      })
      return acc
    }, {})
  }, [months, games, years])

  // Navigate months with next/prev buttons
  function goPrevMonth() {
    if (selectedMonthIndex === 0) {
      if (selectedYear > years[0]) {
        setSelectedYear((y) => y - 1)
        setSelectedMonthIndex(11)
      }
    } else {
      setSelectedMonthIndex((m) => m - 1)
    }
  }

  function goNextMonth() {
    if (selectedMonthIndex === 11) {
      if (selectedYear < currentYear) {
        setSelectedYear((y) => y + 1)
        setSelectedMonthIndex(0)
      } else if (selectedYear === currentYear && selectedMonthIndex < currentMonth) {
        setSelectedMonthIndex(0)
        setSelectedYear((y) => y + 1)
      }
    } else {
      if (selectedYear === currentYear && selectedMonthIndex >= currentMonth) return
      setSelectedMonthIndex((m) => m + 1)
    }
  }

  // CSV export
  function exportCSV() {
    const header = ['Date', ...games].join(',')
    const rows = sampleData[selectedYear][selectedMonthIndex].map((row, dayIdx) => {
      const dateLabel = `${months[selectedMonthIndex]} ${dayIdx + 1}, ${selectedYear}`
      return [dateLabel, ...row].join(',')
    })
    const csv = [header, ...rows].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${months[selectedMonthIndex]}-${selectedYear}-results.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <>
    <div className="min-h-screen max-w-full mx-auto bg-gradient-to-br from-green-700 via-green-800 to-black text-white p-4 md:p-8">
      <div className="max-w-full mx-auto rounded-2xl p-4 md:p-6 shadow-xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold">
            Satta King Record Chart  {months[selectedMonthIndex]} {selectedYear} 
            </h1>
           
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={goPrevMonth}
              className="px-3 py-1 rounded-md border border-green-400 hover:bg-green-600"
            >
              Prev
            </button>

            <select
              className=" text-black outline-none border border-green-400 px-3 py-1 rounded-md text-sm"
              value={selectedYear}
              onChange={(e) => setSelectedYear(Number(e.target.value))}
            >
              {years.map((y) => (

                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>

            <button
              onClick={goNextMonth}
              className="px-3 py-1 rounded-md border border-green-400 hover:bg-green-600"
            >
              Next
            </button>

            <button
              onClick={exportCSV}
              className="px-3 py-1 text-sm rounded-md border border-green-400 hover:bg-green-600"
            >
              Export CSV
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-auto rounded-lg border border-green-700">
          <table className="min-w-full table-fixed text-sm text-left">
            <thead className="bg-green-900 sticky top-0">
              <tr>
                <th className="w-32 p-2">Date</th>
                {games.map((g) => (
                  <th key={g} className="p-2">{g}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {sampleData[selectedYear][selectedMonthIndex].map((row, dayIdx) => (
                <tr
                  key={dayIdx}
                  className={dayIdx % 2 === 0 ? 'bg-white/5' : 'bg-white/10'}
                >
                  <td className="p-2 font-medium">
                    {months[selectedMonthIndex]} {dayIdx + 1}
                  </td>
                  {row.map((val, gi) => (
                    <td key={gi} className="p-2 font-mono">{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
      </div>
    </div>
   <div className="w-full bg-white text-center p-8 md:p-16 flex flex-col items-center gap-4">
      {/* Top paragraph */}
      <p className="text-sm md:text-base text-gray-700 font-bold">
        DATE FIX DIRECT SATTA BRANCH SE LEAK GAME PASS HONE KI FULL GUARANTEE HAI 💯% SINGLE LEAK JODI FARIDABAD, GHAZIABAAD, GALI, DISAWAR IMANDARI EK MEHNGA SHAUK HAI JO HAR KISI KE BAS KI BAAT NAHI HOTI
      </p>

      {/* Headings */}
      <h1 className="text-3xl md:text-5xl font-bold text-red-600">FEES GAME KE BAAD</h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-blue-600">⁕RAJAN BHAI⁕</h2>
      <h3 className="text-xl md:text-2xl text-gray-800 font-bold">{phoneNumber}</h3>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-lg font-semibold transition"
        >
          <FaPhoneAlt /> Call Now
        </a>

        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello, I want the leak fixed jodi details.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
        >
          <FaWhatsapp /> WhatsApp
        </a>
      </div>
    </div>
    </>
  )
}