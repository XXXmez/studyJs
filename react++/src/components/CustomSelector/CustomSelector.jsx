import React, { useRef, useState } from "react";

import arrowUp from "./arrowUp.svg";
import arrowDown from "./arrowDown.svg";
import closeSvg from "./closeSvg.svg";

import s from "./CustomSelector.module.css";

// option - массив элементов для селекта
// state и setState - состояние выбранного селекта

const CustomSelector = ({
  options = ["первый", "второй"],
  bagColor = "#afafaf",
  state = "",
  setState = () => {},
}) => {
  const [openSelector, setOpenSelector] = useState(false);
  // const [state, setState] = useState("");

  const handlerClickSelector = () => {
    setOpenSelector((prev) => !prev);
  };

  const handlerClickOption = (item) => {
    setState(item);
    setOpenSelector(false);
  };

  const handlerClickClose = () => {
    setOpenSelector(true);

    setState("");
  };

  return (
    <div className={s.selector} style={{ backgroundColor: bagColor }}>
      <div onClick={handlerClickSelector} className={s.controller}>
        {!state && <span>Фильт по региону</span>}
        {state && <span>{state}</span>}
        <div className={s.imgs}>
          {state && (
            <div className={s.wrapperImg}>
              <img
                className={s.close}
                src={closeSvg}
                width={"20px"}
                onClick={handlerClickClose}
              />
            </div>
          )}
          <span className={s.imgsBorder}></span>
          <div className={s.wrapperImg}>
            <img
              className={s.imgsArrow}
              src={openSelector ? arrowUp : arrowDown}
              width={"20px"}
            />
          </div>
        </div>
      </div>
      {openSelector && (
        <div className={s.wrapper}>
          <div className={s.list} style={{ backgroundColor: bagColor }}>
            {options.map((item, ind) => (
              <span
                key={ind}
                onClick={() => handlerClickOption(item)}
                className={s.option}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelector;
