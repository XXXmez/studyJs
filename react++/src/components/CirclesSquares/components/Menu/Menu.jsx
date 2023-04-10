import React, { useRef, useState } from "react";

import s from "./Menu.module.css";

const Menu = ({ setRed, setGreen, setBlue, setYellow }) => {
  const [colorRed, serColorRed] = useState(false);
  const [colorGreen, serColorGreen] = useState(false);
  const [colorBlue, serColorBlue] = useState(false);
  const [colorYellow, serColorYellow] = useState(false);

  const hendlerClickRed = () => {
    serColorRed((prev) => !prev);
    setRed((prev) => !prev);
  };
  const hendlerClickGreen = () => {
    serColorGreen((prev) => !prev);
    setGreen((prev) => !prev);
  };
  const hendlerClickBlue = () => {
    serColorBlue((prev) => !prev);
    setBlue((prev) => !prev);
  };
  const hendlerClickYellow = () => {
    serColorYellow((prev) => !prev);
    setYellow((prev) => !prev);
  };

  const refka = useRef();
  console.log(colorRed);

  return (
    <div className={s.box}>
      <div className={s.menu}>
        <div className={s.btnExit}>
          <button onClick={() => console.log(refka)}>X</button>
        </div>
        <div className={s.colors}>
          <label>
            <input
              type={"checkbox"}
              value={colorRed}
              onClick={hendlerClickRed}
            />{" "}
            Красный
          </label>
          <label>
            <input
              type={"checkbox"}
              value={colorGreen}
              onClick={hendlerClickGreen}
            />{" "}
            Зеленый
          </label>
          <label>
            <input
              type={"checkbox"}
              value={colorBlue}
              onClick={hendlerClickBlue}
            />{" "}
            Синий
          </label>
          <label>
            <input
              type={"checkbox"}
              value={colorYellow}
              onClick={hendlerClickYellow}
            />{" "}
            Желтый
          </label>
        </div>
        <div className={s.themes}>
          <label>
            <input ref={refka} type={"radio"} name="dark" /> Все
          </label>
          <label>
            <input type={"radio"} name="dark" /> Темные
          </label>
          <label>
            <input type={"radio"} name="dark" /> Светлые
          </label>
        </div>
        <div className={s.rows}>
          <span>Колонок</span>
          <input type={"number"} min={1} max={10} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
