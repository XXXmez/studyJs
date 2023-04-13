import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { addBasket, deleteBasket } from "../../store/basketSlice";

import Btn from "../UI/Btn";

import s from "./CardProduct.module.css";

const CardProduct = ({ item, availabilityCart }) => {
  const dispatch = useDispatch();

  const handlerClickAdd = () => {
    dispatch(addBasket(item));
  };
  const handlerClickMinus = (id, count) => {
    dispatch(deleteBasket({ id, count }));
  };

  return (
    <div className={s.item}>
      <h3 className={s.name}>{item.name}</h3>
      <p className={s.price}>
        Price: <b>{item.price}</b>
      </p>
      <div className={s.btns}>
        {availabilityCart ? (
          <>
            <Btn onClick={() => handlerClickAdd(item)} children={"+"} />
            <Btn
              onClick={() =>
                handlerClickMinus(availabilityCart.id, availabilityCart.count)
              }
              children={"-"}
            />
          </>
        ) : (
          <Btn onClick={() => handlerClickAdd(item)} children={"Add to cart"} />
        )}
      </div>
    </div>
  );
};

export default CardProduct;
