import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, MENU_LIST_URL } from "../constant";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    getMenuList();
  }, []);

  async function getMenuList() {
    const response = await fetch(MENU_LIST_URL + resId);
    const jsonData = await response.json();
    console.log(jsonData.data);
    const detail = jsonData.data.cards[2].card.card.info;
    const list = jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    console.log(list);
    setMenu(detail);
    setMenuList(list);
  }
  return (
    <>
      <div className="border-2  justify-center flex flex-col p-2 mt-2">
        <h1 className=" font-bold">
          {menu.name} {menu.avgRating} {menu.totalRatingsString}{" "}
          {menu.costForTwoMessage}
        </h1>
        <h1>
          {menu.city} {menu.areaName}
        </h1>
        <h1>{menu.cuisines}</h1>
        {/* <span>
          {menu.sla.lastMileTravelString} {menu.sla.minDeliveryTime} -{" "}
          {menu.sla.maxDeliveryTime} mins
        </span> */}
      </div>

      <div className="text-center font-serif">
        MENU:
        {/* <ul>
          {menuList.map((item) => {
            <li>wel</li>;
          })}
        </ul> */}
      </div>
    </>
  );
};

export default RestaurantMenu;
