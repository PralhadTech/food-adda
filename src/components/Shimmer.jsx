import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mt-10">
      {Array(10)
        .fill(" ")
        .map((_, index) => (
          <div
            key={index}
            className="border p-2 rounded-lg shadow-md bg-white mt-5 animate-pulse"
          >
            <div className="bg-gray-300 w-full h-40 rounded-t-lg"></div>
            <div className="p-2">
              <div className="bg-gray-300 h-5 w-3/4 mb-2 rounded"></div>
              <div className="bg-gray-300 h-4 w-1/2 mb-2 rounded"></div>
              <div className="bg-gray-300 h-4 w-1/3 mb-4 rounded"></div>
              <div className="bg-gray-300 h-4 w-full mb-2 rounded"></div>
              <div className="bg-gray-300 h-4 w-full mb-2 rounded"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
