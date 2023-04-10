import React, { useState } from "react";

import s from "./Modal.module.css";

const Modal = ({
  handlerOpenModal,
  activeApplication,
  data,
  handlerAddTrade,
}) => {
  const [volume, setVolume] = useState("");

  const handlerClickClose = () => {
    handlerOpenModal({ type: "close" });
  };

  const obj = data.find((el) => el.id === activeApplication.idСouple);

  const handlerClickOk = () => {
    if (volume.trim() === "") {
      return;
    }

    const trade = {
      type: activeApplication.type,
      price:
        obj[
          `price${
            activeApplication.type[0].toUpperCase() +
            activeApplication.type.slice(1)
          }`
        ].toFixed(4),
      instrument: obj.name,
      volume,
      date: new Date().toLocaleString(),
    };
    console.log(trade);
    handlerAddTrade(trade);
    handlerClickClose();
  };

  return (
    <div className={s.box}>
      <div className={s.modal}>
        <div className={s.header}>
          <h3>Make order</h3>
          <button onClick={handlerClickClose}>x</button>
        </div>
        <div className={s.content}>
          <div className={s.text}>
            <span
              className={activeApplication.type === "buy" ? s.green : s.red}
            >
              {activeApplication.type === "buy" ? "BUY" : "SELL"}
            </span>
            {activeApplication.type === "buy" && (
              <span className="price">{obj.priceBuy.toFixed(4)}</span>
            )}
            {activeApplication.type === "sell" && (
              <span className="price">{obj.priceSell.toFixed(4)}</span>
            )}

            <span className="trade">{obj.name}</span>
          </div>
          <div className={s.input}>
            <label htmlFor="volume">Volume</label>
            <input
              id="volume"
              value={volume}
              type={"number"}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
          <div className={s.btns}>
            <button
              className={`${s.btn} ${s.btn_c}`}
              onClick={handlerClickClose}
            >
              Cancel
            </button>
            <button className={`${s.btn} ${s.btn_o}`} onClick={handlerClickOk}>
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
