import React from "react";

import s from "./Item.module.css";

const Item = ({ form, color }) => {
  const style = {};
  if (form !== "square") style.borderRadius = "50%";
  style.backgroundColor = color;

  return <div className={s.card} style={style}></div>;
};

export default Item;
