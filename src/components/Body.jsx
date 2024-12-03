import React, { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// Filter the restaurant data according input type
function filterData(searchText, resList) {
  const resFilterData = resList.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}

const Body = () => {
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getResList();
  }, []);

  // fetch data from API
  async function getResList() {
    try {
      const res = await fetch(SWIGGY_API_URL);
      const json = await res.json();
      const resData =
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (!resData) {
        console.error("Restaurant data not found:", json);
      }

      setResList(resData || []);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, resList);
      setResList(filteredData);
      if (filteredData?.length === 0) {
        alert("Sorry! Not found");
      }
      setSearchText("");
    } else {
      setResList(restaurants);
    }
  };

  return (
    <div className="p-4 container mx-auto">
      {/* Search Input and Button */}
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <input
          type="text"
          className="h-10 p-2 w-full sm:w-96 border rounded"
          placeholder="Search Here"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-green-500 w-full p-2 sm:w-auto h-10 rounded text-white"
          onClick={() => {
            searchData(searchText, setResList);
          }}
        >
          Search
        </button>
      </div>

      {/* Show Loader */}
      {resList?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {resList.map((res) => (
            <Link to={"/restaurant/" + res?.info?.id} key={res?.info?.id}>
              <RestaurantCard {...res?.info} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
