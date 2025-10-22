import React, { useEffect, useState } from "react";

function RecentlyAddedGame() {
  const [bennars, setBennars] = useState([]);
  const [mainTime, setMainTime] = useState(new Date());

  const titles = [
    "DELHI BAZAR",
    "SHREE GANESH",
    "FARIDABAD",
    "GAZIYABAD",
    "GALI",
    "DISAWAR",
  ];

  const titleTimes = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
  ];

  // Load active banners
  useEffect(() => {
    const loadBennars = () => {
      const stored = JSON.parse(localStorage.getItem("gameBennars")) || [];
      const active = stored.filter((b) => b.isActive);
      setBennars(active);
    };

    loadBennars();

    // Optional: auto-refresh every 5 seconds to reflect updates
    const interval = setInterval(loadBennars, 5000);

    // Live clock update
    const clockTimer = setInterval(() => setMainTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
      clearInterval(clockTimer);
    };
  }, []);

  const formattedMainTime = mainTime.toLocaleString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  if (bennars.length === 0)
    return (
      <p className="text-center mt-6 text-gray-500 text-xl">
        No banners added yet.
      </p>
    );

  // Always display the first active banner's new results
  const banner = bennars[0];

  return (
    <div className="w-full bg-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <div className="w-full bg-blue-600 py-6 text-center text-white">
        <h1 className="text-3xl font-bold tracking-wide uppercase">
          SATTA-KING Live Result
        </h1>
        <p className="text-sm mt-1">SATTA KING | SATTA RESULT | SATTA RECORD</p>
      </div>

      {/* Current Date & Time */}
      <div className="w-full text-center py-4">
        <h2 className="text-2xl font-bold text-pink-600">
          {formattedMainTime.toUpperCase()}
        </h2>
        <p className="text-lg font-semibold text-black mt-2">
          Satta King Live Result Today
        </p>
      </div>

      {/* Games List */}
      <div className="flex flex-col items-center w-full px-4 pb-10">
        <div className="w-full max-w-5xl text-center bg-white border-y-4 border-blue-600 py-8 shadow-md">
          {titles.map((title, i) => (
            <div key={i} className="mb-8">
              <h3 className="text-4xl font-bold text-red-600">{title}</h3>
              <p className="text-sm text-gray-500 mt-1">{titleTimes[i]}</p>
              <p className="text-3xl font-bold text-white mt-3 bg-black/70 px-6 py-3 rounded-lg inline-block">
                {banner[`para${i + 1}`] || "--"}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-blue-600 h-3" />
    </div>
  );
}

export default RecentlyAddedGame;
