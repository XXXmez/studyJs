import React, { useEffect, useState } from "react";

import s from "./Btns.module.css";

const Btns = ({ data = [], activeSelect = 0, handlerOpenModal }) => {
  const { priceBuy, priceSell } = data[activeSelect - 1];

  const handlerClickButtonBuy = () => {
    handlerOpenModal({ type: "buy", idСouple: activeSelect });
  };
  const handlerClickButtonSell = () => {
    handlerOpenModal({ type: "sell", idСouple: activeSelect });
  };

  return (
    <div className={s.items}>
      <div className={`${s.item} ${s.item_buy}`}>
        <button onClick={handlerClickButtonBuy} className={s.btn}>
          <span>BUY</span>
          <span className={s.price}>{priceBuy.toFixed(4)}</span>
        </button>
      </div>
      <div className={`${s.item} ${s.item_sell}`}>
        <button onClick={handlerClickButtonSell} className={s.btn}>
          <span>SELL</span>
          <span className={s.price}>{priceSell.toFixed(4)}</span>
        </button>
      </div>
    </div>
  );
};

export default Btns;
