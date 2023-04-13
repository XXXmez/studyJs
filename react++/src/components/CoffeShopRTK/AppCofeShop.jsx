import React from "react";

import s from "./CoffeShopRTK.module.css";

import Basket from "./components/Basket/Basket";
import Header from "./components/Header/Header";
import ListItem from "./components/ListItem/ListItem";
import Orders from "./components/Orders/Orders";

const AppCofeShop = () => {
  return (
    <div className={s.coffe}>
      <Header />
      <ListItem />
      <Basket />
      <Orders />
    </div>
  );
};

export default AppCofeShop;
