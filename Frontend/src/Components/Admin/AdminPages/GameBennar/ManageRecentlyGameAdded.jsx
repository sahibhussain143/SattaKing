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

function ManageRecentlyGameAdded() {
  const [bennars, setBennars] = useState([]);
  const [editedBennars, setEditedBennars] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(null);

  const titles = [
    "DELHI BAZAR",
    "SHREE GANESH",
    "FARIDABAD",
    "GAZIYABAD",
    "GALI",
    "DISAWAR",
  ];

  // Load banners and initialize edited state
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("gameBennars")) || [];
    setBennars(stored);

    const edits = {};
    stored.forEach((b) => {
      edits[b.id] = { ...b };
    });
    setEditedBennars(edits);
  }, []);

  const handleEditField = (id, field, value) => {
    setEditedBennars((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  const handleUpdate = (id) => {
    const bannerToUpdate = editedBennars[id];
    const lastSavedBanner = bennars.find((b) => b.id === id) || {};
    const updatedBanner = { ...bannerToUpdate };

    // Set old result ONLY if user typed something previously, otherwise keep empty
    titles.forEach((_, index) => {
      const key = `para${index + 1}`;
      const oldKey = `oldPara${index + 1}`;

      if (updatedBanner[oldKey] === undefined) {
        updatedBanner[oldKey] = lastSavedBanner[oldKey] || "";
      }
    });

    const updatedBennarsList = bennars.map((b) =>
      b.id === id ? updatedBanner : b
    );

    localStorage.setItem("gameBennars", JSON.stringify(updatedBennarsList));
    setBennars(updatedBennarsList);
    setEditedBennars((prev) => ({ ...prev, [id]: updatedBanner }));

    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 2000);
  };

  const handleDelete = (id) => {
    const updated = bennars.filter((b) => b.id !== id);
    localStorage.setItem("gameBennars", JSON.stringify(updated));
    setBennars(updated);
    setShowDeletePopup(null);

    setEditedBennars((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  return (
    <div className="w-full px-4 py-8 space-y-6">
      <h2 className="text-3xl font-bold text-blue-600 text-center">
        Manage Recently Added Game Banner
      </h2>

      {bennars.map((b) => (
        <div
          key={b.id}
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-3 w-full"
        >
          {titles.map((title, index) => {
            const key = `para${index + 1}`;
            const oldKey = `oldPara${index + 1}`;
            const newValue = editedBennars[b.id]?.[key] || "";
            const oldValue = editedBennars[b.id]?.[oldKey] || "";

            return (
              <div key={index} className="flex flex-col gap-1">
                <h4 className="font-semibold text-lg text-blue-600">{title}</h4>
                <div className="flex gap-4 items-center">
                  {/* Old Result Input */}
                  <input
                    type="text"
                    value={oldValue}
                    onChange={(e) =>
                      handleEditField(b.id, oldKey, e.target.value)
                    }
                    className="w-24 border rounded-lg p-2 text-sm text-gray-600"
                    placeholder="Old"
                  />
                  {/* New Result Input */}
                  <input
                    type="text"
                    value={newValue}
                    onChange={(e) =>
                      handleEditField(b.id, key, e.target.value)
                    }
                    className="flex-grow border rounded-lg p-2 text-sm"
                    placeholder="New"
                  />
                </div>
              </div>
            );
          })}

          <div className="flex justify-end items-center mt-4 gap-2">
            <button
              onClick={() => setShowDeletePopup(b.id)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Delete
            </button>
            <button
              onClick={() => handleUpdate(b.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Update
            </button>
          </div>
        </div>
      ))}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Success!</h3>
            <p className="text-gray-600">Banner updated successfully.</p>
          </div>
        </div>
      )}

      {/* Delete Confirmation Popup */}
      {showDeletePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              ⚠ Confirm Delete
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this banner?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleDelete(showDeletePopup)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Yes
              </button>
              <button
                onClick={() => setShowDeletePopup(null)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
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
