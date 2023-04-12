import React from "react";
import { BsBasket } from "react-icons/bs";
import { useSelector } from "react-redux";

import s from "./Header.module.css";

const Header = () => {
  const { basket } = useSelector((state) => state);
  console.log(basket);
  const countItemsBasket = 0;

  return (
    <div className={s.header}>
      <h1 className={s.title}>Coffe Shop Redux Toolkit</h1>
      <div className={s.icon}>
        <BsBasket size={32} />
        {countItemsBasket > 0 && (
          <span className={s.countItems}>{countItemsBasket}</span>
        )}
      </div>
    </div>
  );
};

export default Header;
