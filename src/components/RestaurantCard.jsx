import React from "react";
import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md bg-white mt-5 transform transition duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 truncate">{name}</h3>
        <h5 className="text-gray-600 text-sm mt-2 truncate">
          {cuisines.join(", ")}
        </h5>
        <h5 className="text-gray-500 text-sm mt-1">{areaName}</h5>

        <div className="flex items-center space-x-2 mt-4">
          <h4
            className={`text-white text-sm font-semibold px-2 py-1 rounded ${
              avgRatingString < 4 && avgRatingString !== "--"
                ? "bg-red-500"
                : avgRatingString === "--"
                ? "bg-gray-200 text-gray-600 border border-gray-300"
                : "bg-green-500"
            }`}
          >
            {avgRatingString}
          </h4>
          <span className="text-gray-500">•</span>
          <h4 className="text-gray-700 text-sm">
            {sla?.lastMileTravelString ?? "2.0 km"}
          </h4>
          <span className="text-gray-500">•</span>
          <h4 className="text-gray-700 text-sm">
            {costForTwo ?? "₹200 for two"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
