import React, { useState } from "react";

import { TfiClose, TfiAngleUp, TfiAngleDown } from "react-icons/tfi";

import s from "./CustomSelector.module.css";

// option - массив элементов для селекта
// state и setState - состояние выбранного селекта

const CustomSelector = ({
  options = ["первый", "второй"],
  state = "",
  setState = () => {},
  placeholder = "Selector",
}) => {
  const [openSelector, setOpenSelector] = useState(false);

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
    <div className={s.selector}>
      <div onClick={handlerClickSelector} className={s.controller}>
        {!state && <span>{placeholder}</span>}
        {state && <span>{state}</span>}
        <div className={s.imgs}>
          {state && (
            <div
              className={`${s.wrapperImg} ${s.wrapperImg_close}`}
              onClick={handlerClickClose}
            >
              <TfiClose />
            </div>
          )}
          <span className={s.imgsBorder}></span>
          <div className={`${s.wrapperImg} ${s.wrapperImg_arrow}`}>
            {openSelector ? <TfiAngleUp /> : <TfiAngleDown />}
          </div>
        </div>
      </div>
      {openSelector && (
        <div className={s.wrapper}>
          <div className={s.list}>
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
