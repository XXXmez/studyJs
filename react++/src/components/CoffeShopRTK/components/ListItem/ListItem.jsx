import React from "react";
import { useSelector } from "react-redux";

import CardProduct from "../CardProduct/CardProduct";

import s from "./ListItem.module.css";

const ListItem = () => {
  const { data, basket } = useSelector((state) => state);

  return (
    <div className={s.list}>
      {data.map((el) => (
        <CardProduct
          key={el.id}
          item={el}
          availabilityCart={basket.find((product) => product.id === el.id)}
        />
      ))}
    </div>
  );
};

export default ListItem;
