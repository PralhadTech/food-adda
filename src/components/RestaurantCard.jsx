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
    <div className="border p-2 rounded-lg shadow-lg bg-white mt-5">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-2">
        <h3 className="font-semibold text-sm">{name}</h3>
        <h5 className="text-gray-600 text-xs mt-1">{cuisines.join(", ")}</h5>
        <h5 className="text-gray-600 text-xs mt-1">{areaName}</h5>
        <div className="flex items-center space-x-2 mt-2">
          <h4
            className={`text-white px-2 py-1 rounded ${
              avgRatingString < 4
                ? "bg-red-400"
                : avgRatingString === "--"
                ? "bg-white text-black border border-gray-400"
                : "bg-green-500"
            }`}
          >
            {avgRatingString}
          </h4>
          <h4 className="text-gray-500">•</h4>
          <h4 className="text-gray-600 text-sm">
            {sla?.lastMileTravelString ?? "2.0 km"}
          </h4>
          <h4 className="text-gray-500">•</h4>
          <h4 className="text-gray-600 text-sm">
            {costForTwo ?? "₹200 for two"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
