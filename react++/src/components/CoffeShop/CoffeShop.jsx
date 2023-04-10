import React from "react";
import { useState } from "react";

import s from "./CoffeShop.module.css";
import CardProduct from "./components/CardProduct/CardProduct";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Orders from "./components/Orders/Orders";

const data = [
  { id: 1, name: "Espresso", price: 130 },
  { id: 2, name: "Cappuccino", price: 160 },
  { id: 3, name: "Coffeetur", price: 200 },
];

const CoffeShop = () => {
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

  const countItemsCart = dataCart.reduce((acc, curr) => {
    const { count } = curr;
    return acc + count;
  }, 0);

  const handlerClickAddOrder = (order, ordersId) => {
    const newOrder = { orderId: dataOrders.length + 1, order };
    setDataOrders((prev) => [...prev, newOrder]);
    setDataCart((prev) => prev.filter((el) => !ordersId.includes(el.id)));
  };

  return (
    <div className={s.coffe}>
      <Header countItems={countItemsCart} />
      <div className={s.list}>
        {data.map((el) => (
          <CardProduct
            key={el.id}
            item={el}
            add={handlerClickAddCart}
            minus={handlerClickMinusCart}
            availabilityCart={dataCart.find((product) => product.id === el.id)}
          />
        ))}
      </div>
      {countItemsCart > 0 && (
        <Cart
          countItems={countItemsCart}
          data={dataCart}
          setOrders={handlerClickAddOrder}
          add={handlerClickAddCart}
          minus={handlerClickMinusCart}
        />
      )}
      {dataOrders.length > 0 && <Orders data={dataOrders} />}
    </div>
  );
};

export default CoffeShop;
