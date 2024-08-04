import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_LIST_URL } from "../constant";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    getMenuList();
  }, []);

  async function getMenuList() {
    const response = await fetch(MENU_LIST_URL);
    const jsonData = await response.json();
    console.log(jsonData);
    const list = jsonData.data.cards[2].card.card.info;
    const recomendList =
      jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards;
    setMenu(list, recomendList);
    // console.log(list);
  }
  return (
    <div className="">
      <h1 className=" font-extrabold">{menu.name}</h1>
      <h1>{menu.avgRating}</h1>
      <h1>({menu.totalRatingsString})</h1>
      <h1>{menu.costForTwoMessage}</h1>
      <h1>{menu.cuisines}</h1>

      <h1>{menu.areaName}</h1>

      <h5>Menu</h5>

      <ul></ul>
    </div>
  );
};

export default RestaurantMenu;
