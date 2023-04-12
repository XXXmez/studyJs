import React, { createContext } from "react";
import { useState } from "react";

import s from "./CoffeShopRTK.module.css";

import Basket from "./components/Basket/Basket";
import Header from "./components/Header/Header";
import ListItem from "./components/ListItem/ListItem";
import Orders from "./components/Orders/Orders";

const AppCofeShop = () => {
  const [dataCart, setDataCart] = useState([]);
  const [dataOrders, setDataOrders] = useState([]);

  //   const handlerClickAddCart = (elem) => {
  //     if (dataCart.find((el) => el.id === elem.id)) {
  //       setDataCart((prev) =>
  //         prev.map((el) =>
  //           el.id === elem.id ? { ...el, count: el.count + 1 } : el
  //         )
  //       );
  //     } else {
  //       setDataCart((prev) => [...prev, { ...elem, count: 1 }]);
  //     }
  //   };

  //   const handlerClickMinusCart = (id, count) => {
  //     if (count === 1) {
  //       setDataCart((prev) => prev.filter((el) => el.id !== id));
  //     } else {
  //       setDataCart((prev) =>
  //         prev.map((el) => (el.id === id ? { ...el, count: el.count - 1 } : el))
  //       );
  //     }
  //   };

  //   const handlerClickAddOrder = (order, ordersId) => {
  //     const newOrder = { orderId: dataOrders.length + 1, order };
  //     setDataOrders((prev) => [...prev, newOrder]);
  //     setDataCart((prev) => prev.filter((el) => !ordersId.includes(el.id)));
  //   };

  //   const countItemsCart = countItemsBasket(dataCart);

  return (
    <div className={s.coffe}>
      <Header />
      <ListItem />
      <Basket />
      {dataOrders.length > 0 && <Orders />}
    </div>
  );
};

export default AppCofeShop;
