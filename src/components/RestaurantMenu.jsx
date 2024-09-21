import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_ITEM_IMG, MENU_LIST_URL } from "../constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const { resId } = useParams();
  // reducers from redux
  const dispatch = useDispatch();
  const handleFoodItem = (item) => {
    dispatch(addItems(item));
  };

  useEffect(() => {
    getMenuList();
  }, []);

  async function getMenuList() {
    try {
      const response = await fetch(MENU_LIST_URL + resId);
      const jsonData = await response.json();
      const restDetail = jsonData.data.cards[2].card.card.info;
      const list =
        jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card
          .card.itemCards;
      console.log(list);
      setMenu(restDetail);
      setMenuList(list);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-6 mb-4 ">{menu.name}</h1>
      <div className="border border-gray-300 rounded-lg p-4 mt-4 mx-auto max-w-2xl shadow-lg">
        <h1 className="text-xl text-left font-bold mb-2">
          {menu.avgRating} {menu.totalRatingsString} {menu.costForTwoMessage}
        </h1>
        <h4 className="text-md text-orange-600 font-bold text-left mb-2 underline">
          {menu.cuisines?.join(", ")}
        </h4>
        <div className="text-left text-gray-800">
          <h3 className="font-medium">
            {menu.city}, {menu.areaName}
          </h3>
        </div>
      </div>

      <div className="text-center font-serif mt-8">
        <h2 className="text-2xl font-semibold mb-6">MENU</h2>
        <ul className="space-y-6">
          {menuList.map((item) => {
            const price = isNaN(item.card.info.price / 100)
              ? item.card.info.defaultPrice / 100
              : item.card.info.price / 100;
            return (
              <div
                key={item.card.info.id}
                className="bg-white shadow-lg rounded-lg p-4 w-2/4 m-auto flex items-center justify-between"
              >
                <div className="text-left">
                  <h3 className="font-semibold text-lg text-gray-500">
                    {item?.card?.info?.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">₹ {price}</p>
                  <p className="text-md  mt-1 text-green-700 font-bold">
                    {item.card.info.ratings?.aggregatedRating?.rating} *
                  </p>
                </div>
                <img
                  src={MENU_ITEM_IMG + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name}
                  className="h-24 w-24 rounded-lg object-cover ml-4"
                />
                <button
                  className="p-2 m-2 bg-green-400 text-white rounded"
                  onClick={() => handleFoodItem(item?.card?.info?.name)}
                >
                  Add
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
