import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_ITEM_IMG, MENU_LIST_URL } from "../constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const { resId } = useParams();
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
      setMenu(restDetail);
      setMenuList(list);
      // console.log(list);
    } catch (error) {
      console.error(error);
    }
  }

  if (menuList.length === 0) return <MenuShimmer />;
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mt-10 mb-8 text-gray-800">
        {menu.name}
      </h1>
      <div className="border border-gray-200 rounded-lg p-6 mt-4 mx-auto max-w-3xl shadow-xl bg-white">
        <h1 className="text-2xl font-semibold text-left mb-4 text-gray-700">
          {menu.avgRating} {menu.totalRatingsString}
          {menu.costForTwoMessage}
        </h1>
        <h4 className="text-md text-orange-500 font-semibold text-left mb-4 underline">
          {menu.cuisines?.join(", ")}
        </h4>
        <div className="text-left text-gray-600">
          <h3 className="font-medium">
            {menu.city} {menu.areaName}
          </h3>
        </div>
      </div>

      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Menu</h2>
        <ul className="space-y-8">
          {menuList.map((item) => {
            const price = isNaN(item.card.info.price / 100)
              ? item.card.info.defaultPrice / 100
              : item.card.info.price / 100;
            return (
              <div
                key={item.card.info.id}
                className="bg-white shadow-lg rounded-xl p-6 w-3/5 m-auto flex items-center justify-between transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-left flex-1">
                  <h3 className="font-semibold text-xl text-gray-700">
                    {item?.card?.info?.name}
                  </h3>
                  <p className="text-md text-gray-600 mt-2">₹ {price}</p>
                  <p className="text-md mt-2 text-green-600 font-bold">
                    {item.card.info.ratings?.aggregatedRating?.rating} ★
                  </p>
                </div>

                <div className="flex items-center">
                  <img
                    src={MENU_ITEM_IMG + item?.card?.info?.imageId}
                    alt={item?.card?.info?.name}
                    className="h-28 w-28 rounded-lg object-cover mr-4"
                  />
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    onClick={() => handleFoodItem(item)}
                  >
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
