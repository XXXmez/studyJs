import React from "react";
import { BsBasket } from "react-icons/bs";

import s from "./Header.module.css";

const Header = ({ countItems }) => {
  return (
    <div className={s.header}>
      <h1 className={s.title}>Coffe Shop</h1>
      <div className={s.icon}>
        <BsBasket size={32} />
        {countItems > 0 && <span className={s.countItems}>{countItems}</span>}
      </div>
    </div>
  );
};

export default Header;
