



// import React, { useState } from "react";

// function AddBennar({ onAddEvent }) {
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("jaipur");
//   const [location, setLocation] = useState("");
//   const [locationUrl, setLocationUrl] = useState("");
//   const [imagePreview, setImagePreview] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

//   // Option selection: "file" or "url"
//   const [imageOption, setImageOption] = useState("file");
//   const [imageUrlInput, setImageUrlInput] = useState("");

//   // Handle file upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setImagePreview(reader.result);
//       reader.readAsDataURL(file);
//     } else {
//       setImagePreview(null);
//     }
//   };

//   // Handle online URL input
//   const handleUrlChange = (e) => {
//     const url = e.target.value;
//     setImageUrlInput(url);
//     setImagePreview(url);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title || !price || !description || !category || !location) return;

//     const newEvent = {
//       id: Date.now(),
//       title,
//       price,
//       description,
//       category,
//       location,
//       locationUrl,
//       image: imagePreview ? [imagePreview] : [],
//       date: new Date().toLocaleDateString(),
//       organizer: "User Added",
//     };

//     const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
//     localStorage.setItem("events", JSON.stringify([newEvent, ...storedEvents]));

//     if (onAddEvent) onAddEvent(newEvent);

//     setTitle("");
//     setPrice("");
//     setDescription("");
//     setCategory("jaipur");
//     setLocation("");
//     setLocationUrl("");
//     setImagePreview(null);
//     setImageUrlInput("");
//     setImageOption("file");

//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 2000);
//   };

//   return (
//     <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
//       <div className="w-full max-w-3xl bg-white p-8 rounded-3xl shadow-2xl">
//         <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
//           Add New Event
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Title */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Event Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500"
//               placeholder="Enter event title"
//               required
//             />
//           </div>

//           {/* Price */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Price</label>
//             <input
//               type="text"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500"
//               placeholder="Enter price"
//               required
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Category</label>
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500"
//               required
//             >
//               <option value="jaipur">Jaipur</option>
//               <option value="jhodhapur">Jodhpur</option>
//               <option value="mandawa">Mandawa</option>
//               <option value="udaipur">Udaipur</option>
//             </select>
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Location</label>
//             <input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500"
//               placeholder="Enter location"
//               required
//             />
//           </div>

//           {/* Location URL */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Location URL</label>
//             <input
//               type="text"
//               value={locationUrl}
//               onChange={(e) => setLocationUrl(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500"
//               placeholder="Enter location URL"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Description</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 resize-none h-32"
//               placeholder="Enter description"
//               required
//             />
//           </div>

//           {/* Image Option */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">Event Image</label>
//             <div className="flex gap-4 mb-2">
//               <label className="flex items-center gap-1">
//                 <input
//                   type="radio"
//                   value="file"
//                   checked={imageOption === "file"}
//                   onChange={() => {
//                     setImageOption("file");
//                     setImagePreview(null);
//                     setImageUrlInput("");
//                   }}
//                 />
//                 Upload File
//               </label>
//               <label className="flex items-center gap-1">
//                 <input
//                   type="radio"
//                   value="url"
//                   checked={imageOption === "url"}
//                   onChange={() => {
//                     setImageOption("url");
//                     setImagePreview("");
//                   }}
//                 />
//                 Online URL
//               </label>
//             </div>

//             {imageOption === "file" && (
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-pink-700 hover:file:bg-blue-100 cursor-pointer"
//               />
//             )}

//             {imageOption === "url" && (
//               <input
//                 type="text"
//                 value={imageUrlInput}
//                 onChange={handleUrlChange}
//                 placeholder="Enter image URL"
//                 className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500"
//               />
//             )}

//             {imagePreview && (
//               <img
//                 src={imagePreview}
//                 alt="Preview"
//                 className="mt-4 rounded-2xl shadow-md max-w-full h-auto object-cover"
//               />
//             )}
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full py-3 px-4 bg-pink-600 text-white font-bold rounded-full hover:bg-pink-700 transition-all"
//           >
//             Add Event
//           </button>
//         </form>
//       </div>

//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
//           <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl text-center">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Success!</h3>
//             <p className="text-gray-600 mb-6">Event added successfully.</p>
//             <button
//               onClick={() => setShowPopup(false)}
//               className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddBennar;












import React, { useState } from "react";

function AddBennar({ onAddEvent }) {
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [para1, setPara1] = useState("");
  const [title3, setTitle3] = useState("");
  const [para2, setPara2] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [para3, setPara3] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title1 || !title2 || !para1 || !title3 || !para2 || !mobileNumber) return;

    const newBennar = {
      id: Date.now(),
      title1,
      title2,
      para1,
      title3,
      para2,
      mobileNumber,
      para3,
      date: new Date().toLocaleDateString(),
      isActive: true,
    };

    const storedBennars = JSON.parse(localStorage.getItem("bennars")) || [];
    localStorage.setItem("bennars", JSON.stringify([newBennar, ...storedBennars]));

    if (onAddEvent) onAddEvent(newBennar);

    // Reset form
    setTitle1("");
    setTitle2("");
    setPara1("");
    setTitle3("");
    setPara2("");
    setMobileNumber("");
    setPara3("");

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">Add New Banner</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Title 1</label>
            <input
              type="text"
              value={title1}
              onChange={(e) => setTitle1(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-500"
              placeholder="Enter first title"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Title 2</label>
            <input
              type="text"
              value={title2}
              onChange={(e) => setTitle2(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-500"
              placeholder="Enter second title"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Paragraph 1</label>
            <textarea
              value={para1}
              onChange={(e) => setPara1(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-500 resize-none h-24"
              placeholder="Enter paragraph"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Title 3</label>
            <input
              type="text"
              value={title3}
              onChange={(e) => setTitle3(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-500"
              placeholder="Enter another title"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Paragraph 2</label>
            <textarea
              value={para2}
              onChange={(e) => setPara2(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-500 resize-none h-24"
              placeholder="Enter paragraph"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Mobile Number</label>
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-500"
              placeholder="Enter mobile number"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Paragraph 3</label>
            <textarea
              value={para3}
              onChange={(e) => setPara3(e.target.value)}
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-500 resize-none h-24"
              placeholder="Enter paragraph"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-pink-600 text-white font-bold rounded-full hover:bg-pink-700 transition-all"
          >
            Add Banner
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Success!</h3>
            <p className="text-gray-600 mb-6">Banner added successfully.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddBennar;
