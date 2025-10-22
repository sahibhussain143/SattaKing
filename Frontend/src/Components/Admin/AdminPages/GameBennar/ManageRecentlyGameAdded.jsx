// import React, { useEffect, useState } from "react";

// function ManageRecentlyGameAdded() {
//   const [bennars, setBennars] = useState([]);
//   const [editedBennars, setEditedBennars] = useState({});
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);
//   const [showDeletePopup, setShowDeletePopup] = useState(null);

//   const titles = [
//     "DELHI BAZAR",
//     "SHREE GANESH",
//     "FARIDABAD",
//     "GAZIYABAD",
//     "GALI",
//     "DISAWAR",
//   ];

//   // Load banners from specific key
//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("gameBennars")) || [];
//     setBennars(stored);

//     const edits = {};
//     stored.forEach((b) => {
//       edits[b.id] = { ...b };
//     });
//     setEditedBennars(edits);
//   }, []);

//   const handleEditField = (id, field, value) => {
//     setEditedBennars((prev) => ({
//       ...prev,
//       [id]: { ...prev[id], [field]: value },
//     }));
//   };

//   const handleUpdate = (id) => {
//     const updated = bennars.map((b) => (b.id === id ? editedBennars[id] : b));
//     localStorage.setItem("gameBennars", JSON.stringify(updated));
//     setBennars(updated);

//     setShowSuccessPopup(true);
//     setTimeout(() => setShowSuccessPopup(false), 2000);
//   };

//   const handleDelete = (id) => {
//     const updated = bennars.filter((b) => b.id !== id);
//     localStorage.setItem("gameBennars", JSON.stringify(updated));
//     setBennars(updated);
//     setShowDeletePopup(null);

//     setEditedBennars((prev) => {
//       const copy = { ...prev };
//       delete copy[id];
//       return copy;
//     });
//   };

//   return (
//     <div className="w-full px-4 py-8 space-y-6">
//       <h2 className="text-3xl font-bold text-blue-600 text-center">
//         Manage Recently Added Game Banner
//       </h2>

//       {bennars.map((b) => (
//         <div
//           key={b.id}
//           className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3 w-full"
//         >
//           {titles.map((title, index) => (
//             <div key={index}>
//               <h4 className="font-semibold text-lg text-blue-600">{title}</h4>
//               <textarea
//                 value={editedBennars[b.id]?.[`para${index + 1}`] || ""}
//                 onChange={(e) =>
//                   handleEditField(b.id, `para${index + 1}`, e.target.value)
//                 }
//                 className="w-full border rounded-lg p-2 text-sm resize-none"
//               />
//             </div>
//           ))}

//           <div className="flex justify-end items-center mt-4 gap-2">
//             <button
//               onClick={() => setShowDeletePopup(b.id)}
//               className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
//             >
//               Delete
//             </button>
//             <button
//               onClick={() => handleUpdate(b.id)}
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//             >
//               Update
//             </button>
//           </div>
//         </div>
//       ))}

//       {/* Success Popup */}
//       {showSuccessPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//           <div className="bg-white rounded-lg p-6 shadow-lg text-center">
//             <h3 className="text-xl font-semibold mb-2">Success!</h3>
//             <p className="text-gray-600">Banner updated successfully.</p>
//           </div>
//         </div>
//       )}

//       {/* Delete Confirmation Popup */}
//       {showDeletePopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//           <div className="bg-white rounded-lg p-6 shadow-lg text-center">
//             <h3 className="text-xl font-semibold text-red-600 mb-4">
//               ⚠ Confirm Delete
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Are you sure you want to delete this banner?
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => handleDelete(showDeletePopup)}
//                 className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={() => setShowDeletePopup(null)}
//                 className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ManageRecentlyGameAdded;




import React, { useEffect, useState } from "react";

const gameTitles = [
  { key: "DELHI BAZAR", time: "10:00 AM" },
  { key: "SHREE GANESH", time: "10:30 AM" },
  { key: "FARIDABAD", time: "11:00 AM" },
  { key: "GAZIYABAD", time: "11:30 AM" },
  { key: "GALI", time: "12:00 PM" },
  { key: "DISAWAR", time: "12:30 PM" },
];

function ManageRecentlyGameAdded() {
  const [banners, setBanners] = useState([]);
  const [editedBanners, setEditedBanners] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(null);

  // Load banners from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("gameBennars")) || [];
    setBanners(stored);

    const edits = {};
    stored.forEach((b) => {
      edits[b.id] = { ...b };
    });
    setEditedBanners(edits);
  }, []);

  const handleEditField = (id, field, value) => {
    setEditedBanners((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  const handleUpdate = (id) => {
    const bannerToUpdate = editedBanners[id];
    const lastSavedBanner = banners.find((b) => b.id === id) || {};

    const updatedBanner = {
      ...bannerToUpdate,
      isActive: true, // Always active
    };

    gameTitles.forEach((_, index) => {
      const key = `para${index + 1}`;
      const oldKey = `oldPara${index + 1}`;
      updatedBanner[oldKey] =
        lastSavedBanner[key] !== undefined ? lastSavedBanner[key] : "";
    });

    const updatedBannersList = banners.map((b) =>
      b.id === id ? updatedBanner : b
    );

    localStorage.setItem("gameBennars", JSON.stringify(updatedBannersList));
    setBanners(updatedBannersList);
    setEditedBanners((prev) => ({ ...prev, [id]: updatedBanner }));

    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 2000);
  };

  const handleDelete = (id) => {
    const updated = banners.filter((b) => b.id !== id);
    localStorage.setItem("gameBennars", JSON.stringify(updated));
    setBanners(updated);
    setShowDeletePopup(null);

    setEditedBanners((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  return (
    <div className="w-full px-4 py-8 space-y-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
        Manage Recently Added Game Banner
      </h2>

      {banners.map((b) => (
        <div
          key={b.id}
          className="bg-white rounded-3xl shadow-lg p-6 flex flex-col gap-4 w-full max-w-4xl mx-auto"
        >
          {gameTitles.map((game, index) => {
            const key = `para${index + 1}`;
            const oldKey = `oldPara${index + 1}`;
            const newValue = editedBanners[b.id]?.[key] || "";
            let oldValue = editedBanners[b.id]?.[oldKey];
            if (!oldValue) oldValue = "";

            return (
              <div key={index} className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                <div className="w-full md:w-32 text-blue-600 font-semibold">{game.key}</div>

                <input
                  type="text"
                  value={oldValue}
                  placeholder="Enter old result..."
                  onChange={(e) => handleEditField(b.id, oldKey, e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 text-gray-700 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <span className="text-xl font-bold text-gray-500">→</span>

                <input
                  type="text"
                  value={newValue}
                  placeholder="Enter new result..."
                  onChange={(e) => handleEditField(b.id, key, e.target.value)}
                  className="flex-1 border border-green-500 rounded-lg px-3 py-2 bg-black/70 text-green-400 font-bold text-center focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            );
          })}

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={() => setShowDeletePopup(b.id)}
              className="bg-red-600 text-white px-5 py-2 rounded-xl hover:bg-red-700 transition"
            >
              Delete
            </button>
            <button
              onClick={() => handleUpdate(b.id)}
              className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Update
            </button>
          </div>
        </div>
      ))}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Success!</h3>
            <p className="text-gray-600">Banner updated successfully.</p>
          </div>
        </div>
      )}

      {/* Delete Confirmation Popup */}
      {showDeletePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-lg text-center">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              ⚠ Confirm Delete
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this banner?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleDelete(showDeletePopup)}
                className="bg-red-600 text-white px-5 py-2 rounded-xl hover:bg-red-700 transition"
              >
                Yes
              </button>
              <button
                onClick={() => setShowDeletePopup(null)}
                className="bg-gray-300 px-5 py-2 rounded-xl hover:bg-gray-400 transition"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageRecentlyGameAdded;
