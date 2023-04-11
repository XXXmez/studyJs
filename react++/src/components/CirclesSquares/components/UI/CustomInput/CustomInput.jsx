import React from "react";

import s from "./CustomInput.module.css";

const CustomInput = ({ text, initialValue, color, setValue }) => {
  const hendlerClick = () => {
    setValue();
  };

  return (
    <div className={s.colorInput} onClick={hendlerClick}>
      <div className={s.bgColor} style={{ backgroundColor: color }}>
        {initialValue && "✔"}
      </div>
      <span>{text}</span>
    </div>
  );
};

export default CustomInput;
