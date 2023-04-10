import React from "react";

import s from "./ListTrade.module.css";

const ListTrade = ({ dataTrade }) => {
  return (
    <div className={s.box}>
      <ul className={s.list}>
        <li className={s.item}>
          <p>Side</p>
          <p>Price</p>
          <p>Instrument</p>
          <p>Volume</p>
          <p>Timestamp</p>
        </li>
        {[...dataTrade].reverse().map((el) => (
          <li key={el.id} className={s.item}>
            <p className={el.type === "buy" ? s.green : s.red}>{el.type}</p>
            <p>{el.price}</p>
            <p>{el.instrument}</p>
            <p>{el.volume}</p>
            <p>{el.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTrade;
