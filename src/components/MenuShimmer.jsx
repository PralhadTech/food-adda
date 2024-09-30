import React from "react";

const Shimmer = () => {
  return (
    <div className="p-6">
      {/* Shimmer for restaurant details */}
      <div className="border border-gray-200 rounded-lg p-6 mx-auto max-w-3xl shadow-xl bg-white animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4 w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded mb-4 w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded mb-4 w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded mb-4 w-1/5"></div>
      </div>

      {/* Shimmer for menu list */}
      <div className="text-center mt-10">
        <div className="h-10 bg-gray-200 rounded-lg mb-6 w-48 mx-auto"></div>
        <ul className="space-y-8">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 w-3/5 m-auto flex items-center justify-between animate-pulse"
              >
                <div className="flex-1">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
                <div className="flex items-center">
                  <div className="h-28 w-28 bg-gray-200 rounded-lg mr-4"></div>
                  <div className="h-10 w-20 bg-green-200 rounded"></div>
                </div>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Shimmer;
