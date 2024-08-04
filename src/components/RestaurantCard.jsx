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
    <div className="border p-2 rounded-lg shadow-md bg-white mt-5">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-2">
        <h3 className="font-semibold text-lg">{name}</h3>
        <h5 className="text-gray-600">{cuisines.join(", ")}</h5>
        <h5 className="text-gray-600">{areaName}</h5>
        <div className="flex items-center space-x-2 mt-2">
          <h4
            className="text-white px-2 py-1 rounded"
            style={
              avgRatingString < 4
                ? { backgroundColor: "var(--light-red)" }
                : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { backgroundColor: "green" }
            }
          >
            <i className="fa-solid fa-star"></i> {avgRatingString}
          </h4>
          <h4>•</h4>
          <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
          <h4>•</h4>
          <h4>{costForTwo ?? "₹200 for two"}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
