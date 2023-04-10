import React from "react";
import ElemComent from "../ElemComent/ElemComent";

import s from "./ListComent.module.css";

const ListComent = ({ list }) => {
  console.log(list);
  return (
    <ul className={s.list}>
      {list.map((item) => (
        <ElemComent key={item.id} text={item.text} includes={item.includes} />
      ))}
    </ul>
  );
};

export default ListComent;
