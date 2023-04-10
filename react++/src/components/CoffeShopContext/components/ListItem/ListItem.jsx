import React, { useContext } from "react";
import { ProductContext, BasketContext } from "../../CoffeShopContext";
import CardProduct from "../CardProduct/CardProduct";

import s from "./ListItem.module.css";

const ListItem = () => {
  const contextProduct = useContext(ProductContext);
  const contextBasket = useContext(BasketContext);

  const data = contextProduct.data;
  const dataBasket = contextBasket.dataCart;

  return (
    <div className={s.list}>
      {data.map((el) => (
        <CardProduct
          key={el.id}
          item={el}
          availabilityCart={dataBasket.find((product) => product.id === el.id)}
        />
      ))}
    </div>
  );
};

export default ListItem;
