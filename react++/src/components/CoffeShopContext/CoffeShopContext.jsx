import React, { createContext } from "react";
import { useState } from "react";

import s from "./CoffeShopContext.module.css";

import Basket from "./components/Basket/Basket";
import Header from "./components/Header/Header";
import ListItem from "./components/ListItem/ListItem";
import Orders from "./components/Orders/Orders";
import { countItemsBasket } from "./features";

const data = [
  { id: 1, name: "Espresso", price: 130 },
  { id: 2, name: "Cappuccino", price: 160 },
  { id: 3, name: "Coffeetur", price: 200 },
];

export const ProductContext = createContext({});
export const BasketContext = createContext({});
export const OrdersContext = createContext({});
export const FeaturesContext = createContext({});

const CoffeShopContext = () => {
  const [dataCart, setDataCart] = useState([]);
  const [dataOrders, setDataOrders] = useState([]);

  const handlerClickAddCart = (elem) => {
    if (dataCart.find((el) => el.id === elem.id)) {
      setDataCart((prev) =>
        prev.map((el) =>
          el.id === elem.id ? { ...el, count: el.count + 1 } : el
        )
      );
    } else {
      setDataCart((prev) => [...prev, { ...elem, count: 1 }]);
    }
  };

  const handlerClickMinusCart = (id, count) => {
    if (count === 1) {
      setDataCart((prev) => prev.filter((el) => el.id !== id));
    } else {
      setDataCart((prev) =>
        prev.map((el) => (el.id === id ? { ...el, count: el.count - 1 } : el))
      );
    }
  };

  const handlerClickAddOrder = (order, ordersId) => {
    const newOrder = { orderId: dataOrders.length + 1, order };
    setDataOrders((prev) => [...prev, newOrder]);
    setDataCart((prev) => prev.filter((el) => !ordersId.includes(el.id)));
  };

  const countItemsCart = countItemsBasket(dataCart);

  return (
    <FeaturesContext.Provider
      value={{
        addOrder: handlerClickAddOrder,
        addBasket: handlerClickAddCart,
        deleteBasket: handlerClickMinusCart,
      }}
    >
      <ProductContext.Provider value={{ data }}>
        <BasketContext.Provider value={{ dataCart, setDataCart }}>
          <OrdersContext.Provider value={{ dataOrders, setDataOrders }}>
            <div className={s.coffe}>
              <Header countItems={countItemsCart} />
              <ListItem />
              {countItemsCart > 0 && <Basket countItems={countItemsCart} />}
              {dataOrders.length > 0 && <Orders />}
            </div>
          </OrdersContext.Provider>
        </BasketContext.Provider>
      </ProductContext.Provider>
    </FeaturesContext.Provider>
  );
};

export default CoffeShopContext;
