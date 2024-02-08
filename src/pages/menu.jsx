import React from "react";
import { menuList1, menuList2, menuList3 } from "../constants/data";

const Menu = () => {
  return (
    <div className="container">
      <div className="menu-content bg-primary p-3 my-2">
        {menuList1.map((menu) => (
          <>
            <h2 className="text-success">{menu.title}</h2>
            {menu.items.map((menuItem) => (
              <div>
                <h4>{menuItem.item}</h4>
                <p>{menuItem.ingredients}</p>
              </div>
            ))}
          </>
        ))}
      </div>

      <div className="menu-content bg-primary p-3 my-2">
        {menuList2.map((menu) => (
          <>
            <h2 className="text-success">{menu.title}</h2>
            {menu.items.map((menuItem) => (
              <div>
                <h4>{menuItem.item}</h4>
                <p>{menuItem.ingredients}</p>
              </div>
            ))}
          </>
        ))}
      </div>

      <div className="menu-content bg-primary p-3 my-2">
        {menuList3.map((menu) => (
          <>
            <h2 className="text-success">{menu.title}</h2>
            {menu.items.map((menuItem) => (
              <>
                <h4>{menuItem.item}</h4>
                <p>{menuItem.ingredients}</p>
                {/* {menuItem.platter.map((option) => (
                  <>
                    <ul>
                      <li>{option.ingredient}</li>
                    </ul>
                  </>
                ))} */}
              </>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};
export default Menu;
