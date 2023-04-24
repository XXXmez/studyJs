import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item/Item";

import s from "./Items.module.css";

const Items = ({ setHistory }) => {
  const flags = useSelector((state) => state.flags.filterData);

  return (
    <div className={s.items}>
      {flags.map((item) => (
        <Item key={item.cca2} item={item} setHistory={setHistory} />
      ))}
      {flags.length === 0 && <h2>404</h2>}
    </div>
  );
};

export default Items;
