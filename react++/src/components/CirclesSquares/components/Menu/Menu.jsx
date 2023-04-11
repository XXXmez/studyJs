import React from "react";
import CustomInput from "../UI/CustomInput/CustomInput";
import RadioInput from "../UI/RadioInput/RadioInput";

import s from "./Menu.module.css";

const Menu = ({
  column,
  setColumn,
  red,
  setRed,
  green,
  setGreen,
  blue,
  setBlue,
  yellow,
  setYellow,
  setMenuOpen,
  dark,
  setDark,
}) => {
  const hendlerClickRed = () => {
    setRed((prev) => !prev);
  };
  const hendlerClickGreen = () => {
    setGreen((prev) => !prev);
  };
  const hendlerClickBlue = () => {
    setBlue((prev) => !prev);
  };
  const hendlerClickYellow = () => {
    setYellow((prev) => !prev);
  };

  const hendlerEditColumn = (num) => {
    setColumn(num);
  };

  const handlerExitMenu = () => {
    setMenuOpen(false);
  };

  const handlerClickRadio = () => {
    console.log(event.target);
    setDark(event.target.value);
  };

  return (
    <div className={s.box}>
      <div className={s.menu}>
        <div className={s.btnExit}>
          <button onClick={handlerExitMenu}>✖</button>
        </div>
        <div className={s.colors}>
          <CustomInput
            text={"Красный"}
            color="red"
            initialValue={red}
            setValue={hendlerClickRed}
          />
          <CustomInput
            text={"Зеленый"}
            color="green"
            initialValue={green}
            setValue={hendlerClickGreen}
          />
          <CustomInput
            text={"Синий"}
            color="blue"
            initialValue={blue}
            setValue={hendlerClickBlue}
          />
          <CustomInput
            text={"Желтый"}
            color="yellow"
            initialValue={yellow}
            setValue={hendlerClickYellow}
          />
        </div>
        <div className={s.themes}>
          <RadioInput
            dark={dark}
            name="dark"
            value="all"
            text="Все"
            handlerClickRadio={handlerClickRadio}
          />
          <RadioInput
            dark={dark}
            name="dark"
            value="dark"
            text="Темные"
            handlerClickRadio={handlerClickRadio}
          />
          <RadioInput
            dark={dark}
            name="dark"
            value="nodark"
            text="Светлые"
            handlerClickRadio={handlerClickRadio}
          />
        </div>
        <div className={s.rows}>
          <span>Колонок</span>
          <input
            type={"number"}
            min={1}
            max={10}
            value={column}
            onChange={(e) => hendlerEditColumn(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
