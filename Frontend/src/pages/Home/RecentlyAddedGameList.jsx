import React, { useEffect, useState } from "react";

function RecentlyAddedGameList() {
  const [bennars, setBennars] = useState([]);

  const gameTitles = [
    { key: "DELHI BAZAR", time: "10:00 AM" },
    { key: "SHREE GANESH", time: "10:30 AM" },
    { key: "FARIDABAD", time: "11:00 AM" },
    { key: "GAZIYABAD", time: "11:30 AM" },
    { key: "GALI", time: "12:00 PM" },
    { key: "DISAWAR", time: "12:30 PM" },
  ];

  useEffect(() => {
    const loadBennars = () => {
      const stored = JSON.parse(localStorage.getItem("gameBennars")) || [];
      setBennars(stored.filter((b) => b.isActive));
    };

    loadBennars();
    window.addEventListener("storage", loadBennars);
    return () => window.removeEventListener("storage", loadBennars);
  }, []);

  if (!bennars.length)
    return (
      <p className="text-center mt-6 text-gray-500 text-xl">
        No banners added .
      </p>
    );

  const b = bennars[0]; // display first banner

  return (
    <div className="w-full p-4 md:p-8 bg-gray-100 min-h-screen font-sans">
      <div className="bg-amber-700 py-3 mb-4 rounded-t-lg shadow-md border-b-4 border-black">
        <h1 className="text-xl md:text-2xl font-extrabold text-yellow-300 text-center uppercase tracking-wider">
          SATTA KING LIVE RESULTS
        </h1>
      </div>

      <div className="grid grid-cols-2 border border-black bg-white shadow-xl">
        {gameTitles.map((game, index) => {
          const oldResult = b?.[`oldPara${index + 1}`] || "--";
          const newResult = b?.[`para${index + 1}`] || "--";

          const isTopRow = index < 2;

          return (
            <React.Fragment key={game.key}>
              {/* Game Cell */}
              <div className="flex flex-col items-center justify-center p-3 md:p-4 border-r border-b border-black text-center">
                <h3 className="text-lg md:text-xl font-extrabold text-blue-800 uppercase mb-1">
                  {game.key}
                </h3>
                <p className="text-xs md:text-sm font-semibold text-red-600 mb-2">
                  ({game.time})
                </p>

                <div className="flex gap-2 md:gap-4 justify-center items-center text-2xl md:text-3xl font-black">
                  {/* Old Result */}
                  <span className="text-gray-600 bg-gray-200 px-2 py-1 rounded-lg">
                    {"{" + (oldResult || "--") + "}"}
                  </span>

                  {/* Arrow */}
                  <span className="text-black text-2xl font-bold">→</span>

                  {/* New Result */}
                  <span className="text-green-600 bg-gray-100 px-2 py-1 rounded-lg relative">
                    {"[ " + (newResult || "--") + " ]"}
                    {oldResult !== newResult && newResult !== "--" && (
                      <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs px-1 rounded-full font-bold shadow-md animate-pulse">
                        NEW
                      </span>
                    )}
                  </span>
                </div>
              </div>

              {/* Separator Band */}
              <div
                className={`col-span-1 py-1 md:py-2 flex items-center justify-center border-b border-black ${
                  isTopRow ? "bg-blue-600" : "bg-black"
                }`}
              >
                <span className="text-sm md:text-base font-bold text-white uppercase tracking-wider">
                  {game.key} CHART
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default RecentlyAddedGameList;
