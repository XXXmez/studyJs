import React from "react";
import AppCofeShop from "./AppCofeShop";

import { Provider } from "react-redux";
import store from "./store/store";

const CoffeShopRTK = () => {
  return (
    <Provider store={store}>
      <AppCofeShop />
    </Provider>
  );
};

export default CoffeShopRTK;
