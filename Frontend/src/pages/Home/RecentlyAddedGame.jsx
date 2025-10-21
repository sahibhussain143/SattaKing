// import React, { useEffect, useState } from "react";

// function RecentlyAddedGame() {
//   const [bennars, setBennars] = useState([]);

//   // Define different colors for titles
//   const titleColors = ["text-pink-600", "text-blue-600", "text-green-600", "text-purple-600"];

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("bennars")) || [];
//     setBennars(stored.filter((b) => b.isActive));
//   }, []);

//   if (bennars.length === 0)
//     return <p className="text-center mt-6 text-gray-500">No banners added yet.</p>;

//   return (
//     <div className="flex flex-col items-center justify-center w-full px-4 py-8">
//       {bennars.map((b, index) => (
//         <div
//           key={b.id}
//           className="bg-white/60 backdrop-blur-md shadow-lg rounded-2xl p-6 w-full max-w-3xl flex flex-col items-center text-center mt-6"
//         >
//           <h3 className={`font-bold text-2xl mb-2 ${titleColors[0 % titleColors.length]}`}>
//             {b.title1}
//           </h3>
//           <h4 className={`font-semibold text-xl mb-1 ${titleColors[1 % titleColors.length]}`}>
//             {b.title2}
//           </h4>
//           <p className="mb-2">{b.para1}</p>
//           <h4 className={`font-semibold text-xl mb-1 ${titleColors[2 % titleColors.length]}`}>
//             {b.title3}
//           </h4>
//           <p className="mb-2">{b.para2}</p>
//           <p className="font-medium mb-2">Mobile: {b.mobileNumber}</p>
//           <div className="flex gap-4 mb-2 flex-wrap justify-center">
//             <a
//               href={`tel:${b.mobileNumber}`}
//               className="bg-pink-600 px-4 py-2 rounded text-white hover:bg-pink-700 transition"
//             >
//               Call
//             </a>
//             <a
//               href={`https://wa.me/${b.mobileNumber}`}
//               target="_blank"
//               rel="noreferrer"
//               className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 transition"
//             >
//               WhatsApp
//             </a>
//           </div>
//           {b.para3 && <p className="mt-2">{b.para3}</p>}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default RecentlyAddedGame;











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

  // Specific times for each title
  const titleTimes = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
  ];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bennars")) || [];
    setBennars(stored.filter((b) => b.isActive));

    const timer = setInterval(() => setMainTime(new Date()), 1000);
    return () => clearInterval(timer);
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

  return (
    <div className="w-full bg-white min-h-screen flex flex-col items-center">
      {/* Top Blue Header */}
      <div className="w-full bg-blue-600 py-6 text-center text-white">
        <h1 className="text-3xl font-bold tracking-wide uppercase">
          SATTA-KING-FIXED-NO.IN
        </h1>
        <p className="text-sm mt-1">
          SATTA KING | SATTA RESULT | SATTA RECORD
        </p>
      </div>

      {/* Live Date/Time Section */}
      <div className="w-full text-center py-4">
        <h2 className="text-2xl font-bold text-pink-600">
          {formattedMainTime.toUpperCase()}
        </h2>
        <p className="text-lg font-semibold text-black mt-2">
          Satta King Live Result Today
        </p>
      </div>

      {/* Game Result Section */}
      <div className="flex flex-col items-center w-full px-4 pb-10">
        {bennars.map((b) => (
          <div
            key={b.id}
            className="w-full max-w-5xl text-center bg-white border-y-4 border-blue-600 py-8 mt-4 shadow-md"
          >
            {titles.map((title, i) => (
              <div key={i} className="mb-8">
                {/* Game Title */}
                <h3 className="text-4xl font-bold text-red-600">{title}</h3>
                {/* Specific Time */}
                <p className="text-sm text-gray-500 mt-1">{titleTimes[i]}</p>

                {/* Game Result */}
                {b[`para${i + 1}`] && (
                  <p className="text-3xl font-bold text-white mt-3 bg-black/70 px-6 py-3 rounded-lg inline-block">
                    {b[`para${i + 1}`]}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Blue Line */}
      <div className="w-full bg-blue-600 h-3" />
    </div>
  );
}

export default RecentlyAddedGame;

