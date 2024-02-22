import React from "react";
import MenuArray from "../../components/MenuArray";
import drinksList from "../../data/menus/drinksList";
import startersList from "../../data/menus/startersList";
import mainMealsList from "../../data/menus/mainMealsList";
import dessertsList from "../../data/menus/dessertsList";
import sushiAddOnsList from "../../data/menus/sushiAddOnsList";
import sushiPlattersList from "../../data/menus/sushiPlattersList";
import NestedMenuArray from "../../components/NestedMenuArray";

const Menu = () => {
  return (
    <div className="container">
      <MenuArray menuObj={startersList} />
      <MenuArray menuObj={mainMealsList} />
      <MenuArray menuObj={dessertsList} />
      <MenuArray menuObj={drinksList} />
      <NestedMenuArray menuObj={sushiPlattersList} />
      <MenuArray menuObj={sushiAddOnsList} />
    </div>
  );
};
export default Menu;
