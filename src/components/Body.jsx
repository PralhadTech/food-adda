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
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setResList(resData);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }
  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, resList);
      setResList(filteredData);
      if (filteredData?.length === 0) {
        alert("soory! Not found");
      }
      setSearchText("");
    } else {
      setResList(restaurants);
    }
  };

  if (resList.length === 0) return <Shimmer />;
  return (
    <div className="p-4">
      <input
        type="text"
        className="h-8 p-2 border rounded"
        placeholder="Serach Here"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="bg-green-500 w-16 h-8 rounded text-white m-2"
        onClick={() => {
          searchData(searchText, setResList);
        }}
      >
        Search
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {resList.map((res) => (
          <Link to={"/restaurant/" + res?.info?.id} key={res.info.id}>
            <RestaurantCard {...res?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
