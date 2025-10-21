import React, { useEffect, useState } from "react";

function RecentlyAdded() {
  const [bennars, setBennars] = useState([]);

  // Define different colors for titles
  const titleColors = ["text-pink-600", "text-blue-600", "text-green-600", "text-purple-600"];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bennars")) || [];
    setBennars(stored.filter((b) => b.isActive));
  }, []);

  if (bennars.length === 0)
    return <p className="text-center mt-6 text-gray-500">No banners added yet.</p>;

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-8">
      {bennars.map((b, index) => (
        <div
          key={b.id}
          className="bg-white/60 backdrop-blur-md shadow-lg rounded-2xl p-6 w-full max-w-3xl flex flex-col items-center text-center mt-6"
        >
          <h3 className={`font-bold text-2xl mb-2 ${titleColors[0 % titleColors.length]}`}>
            {b.title1}
          </h3>
          <h4 className={`font-semibold text-xl mb-1 ${titleColors[1 % titleColors.length]}`}>
            {b.title2}
          </h4>
          <p className="mb-2">{b.para1}</p>
          <h4 className={`font-semibold text-xl mb-1 ${titleColors[2 % titleColors.length]}`}>
            {b.title3}
          </h4>
          <p className="mb-2">{b.para2}</p>
          <p className="font-medium mb-2">Mobile: {b.mobileNumber}</p>
          <div className="flex gap-4 mb-2 flex-wrap justify-center">
            <a
              href={`tel:${b.mobileNumber}`}
              className="bg-pink-600 px-4 py-2 rounded text-white hover:bg-pink-700 transition"
            >
              Call
            </a>
            <a
              href={`https://wa.me/${b.mobileNumber}`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 transition"
            >
              WhatsApp
            </a>
          </div>
          {b.para3 && <p className="mt-2">{b.para3}</p>}
        </div>
      ))}
    </div>
  );
}

export default RecentlyAdded;
