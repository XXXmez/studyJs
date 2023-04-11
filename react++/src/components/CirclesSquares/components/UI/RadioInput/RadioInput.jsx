import React from "react";

import s from "./RadioInput.module.css";

const RadioInput = ({ dark, name, value, text, handlerClickRadio }) => {
  return (
    <label>
      <input
        type={"radio"}
        name={name}
        value={value}
        checked={dark === value ? true : false}
        onChange={handlerClickRadio}
      />
      {text}
    </label>
  );
};

export default RadioInput;
