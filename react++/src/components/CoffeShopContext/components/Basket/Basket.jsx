import React, { useContext, useState } from "react";
import {
  ProductContext,
  BasketContext,
  FeaturesContext,
} from "../../CoffeShopContext";
import Btn from "../UI/Btn";

import s from "./Basket.module.css";

const Basket = ({ countItems }) => {
  const contextBasket = useContext(BasketContext);
  const contextFeatures = useContext(FeaturesContext);
  const dataBasket = contextBasket.dataCart;

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handlerClickAdd = (item) => {
    contextFeatures.addBasket(item);
  };
  const handlerClickMinus = (id, count) => {
    contextFeatures.deleteBasket(id, count);
  };

  const totalPrice = dataBasket.reduce((acc, curr) => {
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
    const order = dataBasket.filter((el) => selectedProducts.includes(el.id));
    const orderProductsId = selectedProducts;
    contextFeatures.addOrder(order, orderProductsId);

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
        {dataBasket.map((el) => (
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

export default Basket;
