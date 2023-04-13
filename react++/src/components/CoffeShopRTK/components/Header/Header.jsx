import React from "react";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";
import { countItemsBasket } from "../../features";

import s from "./Header.module.css";

const Header = () => {
  const { basket } = useSelector((state) => state);

  const countItems = countItemsBasket(basket);

  return (
    <div className={s.header}>
      <h1 className={s.title}>Coffe Shop Redux Toolkit</h1>
      <div className={s.icon}>
        <BsBasket size={32} />
        {countItems > 0 && <span className={s.countItems}>{countItems}</span>}
      </div>
    </div>
  );
};

export default Header;
