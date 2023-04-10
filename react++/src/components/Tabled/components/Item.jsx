import React from "react";

import s from "./Item.module.css";

const Item = ({ item = {} }) => {
  return (
    <div className={s.item}>
      <div className={s.item_id}>
        <p>{item.userId}</p>
      </div>
      <div className={s.item_title}>
        <p>{item.title}</p>
      </div>
      <div className={s.item_description}>
        <p>{item.body}</p>
      </div>
    </div>
  );
};

export default Item;
