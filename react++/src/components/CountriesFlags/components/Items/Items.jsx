import React from "react";

import s from "./Items.module.css";

import Item from "./Item/Item";

const Items = ({ data = [], history, setHistory }) => {
  return (
    <div className={s.items}>
      {data.map((item) => (
        <Item key={item.cca2} item={item} setHistory={setHistory} />
      ))}
      {data.length === 0 && <h2>404</h2>}
    </div>
  );
};

export default Items;
