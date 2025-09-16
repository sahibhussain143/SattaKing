// src/Components/Loading.jsx
import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      <span className="ml-3 text-gray-600">Loading...</span>
    </div>
  );
};

export default Loading;