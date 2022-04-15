import React, { useEffect, useState } from "react";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import NavBar from "./navBar";
useEffect = () => {
  document.title = "Restaurant";
};
const uniqueList = [
  ...new Set(
    Menu.map((curElement) => {
      return curElement.category;
    })
  ),
  "All",
];
console.log(uniqueList);

const Restaurants = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updateList = Menu.filter((curElement) => {
      return curElement.category === category;
    });
    setMenuData(updateList);
  };
  return (
    <>
      <NavBar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurants;
