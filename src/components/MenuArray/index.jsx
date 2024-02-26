import React from "react";

const MenuArray = ({ menuObj }) => {
  return (
    <div className="menu-content bg-dark text-primary p-3 my-2">
      <h2 className="text-secondary">{menuObj.title}</h2>
      {menuObj.items.map((menu) => (
        <div key={menu.id} className="menu-items">
          <h4>{menu.item}</h4>
          <p>{menu.ingredients}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuArray;
