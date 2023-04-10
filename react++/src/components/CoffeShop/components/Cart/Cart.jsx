import React, { useEffect, useState } from "react";
import Btn from "../UI/Btn";

import s from "./Cart.module.css";

const Cart = ({ countItems, data = [], add, minus, setOrders }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handlerClickAdd = (item) => {
    add(item);
  };
  const handlerClickMinus = (id, count) => {
    minus(id, count);
  };

  const totalPrice = data.reduce((acc, curr) => {
    const { count, price, id } = curr;
    if (selectedProducts.includes(id)) {
      return acc + count * price;
    }
    return acc;
  }, 0);

  const handlerClickSelectProduct = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? [...prev].filter((el) => el !== id) : [...prev, id]
    );
  };

  const handlerClickMake = () => {
    const order = data.filter((el) => selectedProducts.includes(el.id));
    const orderProductsId = selectedProducts;
    setOrders(order, orderProductsId);
    setSelectedProducts([]);
  };

  return (
    <div className={s.cart}>
      <h2>Shopping cart</h2>
      <p>You have {countItems} products</p>
      <div className={s.cart_list}>
        <div className={`${s.cart_item} ${s.cart_item_head}`}>
          <p>Product</p>
          <p>Quantity</p>
          <p>Price</p>
        </div>
        {data.map((el) => (
          <div key={el.id} className={s.cart_item}>
            <p>
              <input
                checked={selectedProducts.includes(el.id)}
                type={"checkbox"}
                onChange={() => handlerClickSelectProduct(el.id)}
              />{" "}
              {el.name}
            </p>
            <div className={s.count}>
              <p>{el.count}</p>
              <div className={s.btns}>
                <Btn onClick={() => handlerClickAdd(el)} children={"+"} />
                <Btn
                  onClick={() => handlerClickMinus(el.id, el.count)}
                  children={"-"}
                />
              </div>
            </div>
            <p>{el.count * el.price}</p>
          </div>
        ))}
        <div className={s.total}>
          <p className={s.tp}>
            Total price: <b>{totalPrice}</b>
          </p>
        </div>
        <div className={s.decor}>
          <Btn
            disabled={selectedProducts.length === 0}
            onClick={handlerClickMake}
            children={"Make"}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
