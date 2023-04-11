import React from "react";
import Item from "../Item/Item";

import s from "./Items.module.css";

const Items = ({ database, column }) => {
  return (
    <div
      className={s.items}
      style={{ gridTemplateColumns: `repeat(${column}, 1fr)` }}
    >
      {database.map((el) => (
        <Item key={el.id} form={el.form} color={el.color} />
      ))}
    </div>
  );
};

export default Items;
