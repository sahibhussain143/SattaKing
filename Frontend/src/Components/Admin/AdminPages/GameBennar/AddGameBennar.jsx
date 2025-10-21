import React, { useState } from "react";

function AddGameBennar({ onAddEvent }) {
  const [form, setForm] = useState({
    para1: "",
    para2: "",
    para3: "",
    para4: "",
    para5: "",
    para6: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [showAlreadyPopup, setShowAlreadyPopup] = useState(false);

  const titles = [
    "DELHI BAZAR",
    "SHREE GANESH",
    "FARIDABAD",
    "GAZIYABAD",
    "GALI",
    "DISAWAR",
  ];

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const stored = JSON.parse(localStorage.getItem("bennars")) || [];

    if (stored.length > 0) {
      // Banner already exists
      setShowAlreadyPopup(true);
      return;
    }

    const newBennar = {
      id: Date.now(),
      ...form,
      date: new Date().toLocaleDateString(),
      isActive: true,
    };

    localStorage.setItem("bennars", JSON.stringify([newBennar]));
    if (onAddEvent) onAddEvent(newBennar);

    setForm({
      para1: "",
      para2: "",
      para3: "",
      para4: "",
      para5: "",
      para6: "",
    });

    setShowPopup(true);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Add New Game Banner
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {titles.map((title, index) => (
            <div key={index}>
              <label className="block mb-1 font-medium text-blue-700">
                {title}
              </label>
              <textarea
                value={form[`para${index + 1}`]}
                onChange={(e) =>
                  handleChange(`para${index + 1}`, e.target.value)
                }
                className="w-full p-3 border border-blue-400 rounded-xl focus:ring-2 focus:ring-blue-500 resize-none h-20 text-blue-700"
                placeholder={`Enter paragraph for ${title}`}
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all"
          >
            Add Game Banner
          </button>
        </form>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Success!
            </h3>
            <p className="text-gray-600 mb-6">Banner added successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Already Exists Warning Popup */}
      {showAlreadyPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl text-center">
            <h3 className="text-xl font-bold text-red-600 mb-4">
              ⚠ Warning!
            </h3>
            <p className="text-gray-600 mb-6">
              A banner is already added. Cannot add another.
            </p>
            <button
              onClick={() => setShowAlreadyPopup(false)}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddGameBennar;
