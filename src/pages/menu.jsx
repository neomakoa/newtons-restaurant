import React from "react";
import { menuList1, menuList2, menuList3 } from "../constants/data";

const Menu = () => {
  return (
    <div className="container">
      <div className="menu-content bg-dark text-primary p-3 my-2">
        {menuList1.map((menu) => (
          <>
            <h2 className="text-success">{menu.title}</h2>
            {menu.items.map((menuItem) => (
              <div className="menu-items">
                <h4>{menuItem.item}</h4>
                <p>{menuItem.ingredients}</p>
              </div>
            ))}
          </>
        ))}
      </div>

      <div className="menu-content bg-dark text-primary p-3 my-2">
        {menuList2.map((menu) => (
          <>
            <h2 className="text-success">{menu.title}</h2>
            {menu.items.map((menuItem) => (
              <div className="menu-items">
                <h4>{menuItem.item}</h4>
                <p>{menuItem.ingredients}</p>
              </div>
            ))}
          </>
        ))}
      </div>

      <div className="menu-content bg-dark text-primary p-3 my-2">
        {menuList3.map((menu) => (
          <>
            <h2 className="text-success">{menu.title}</h2>
            {menu.items.map((menuItem) => (
              <div className="menu-items">
                <h4>{menuItem.item}</h4>
                <p>{menuItem.ingredients}</p>
                {menuItem.platter &&
                  menuItem.platter.map((option) => <li>{option}</li>)}
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};
export default Menu;
