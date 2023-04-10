import React from "react";
import { useState } from "react";
import ListComent from "../ListComent/ListComent";

const ElemComent = ({ text, includes }) => {
  const [open, setOpen] = useState(false);

  const handlerOpenList = () => {
    setOpen((prev) => !prev);
  };

  return (
    <li>
      {includes &&
        (open ? (
          <button onClick={handlerOpenList}>ᐱ</button>
        ) : (
          <button onClick={handlerOpenList}>ᐯ</button>
        ))}
      {text}
      <div style={open ? { display: "block" } : { display: "none" }}>
        {includes && <ListComent list={includes} />}
      </div>
    </li>
  );
};

export default ElemComent;
