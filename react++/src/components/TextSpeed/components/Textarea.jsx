import React from "react";

import s from "../TextSpeed.module.css";

const Textarea = ({
  textareaRef,
  startBeforeGame,
  stringValidation = () => {},
  currentTextarea,
  handlerClickTextarea,
}) => {
  return (
    <textarea
      className={s.textarea}
      ref={textareaRef}
      disabled={!startBeforeGame}
      style={
        stringValidation()
          ? { border: "7px solid green" }
          : { border: "7px solid red" }
      }
      cols={70}
      rows={20}
      value={currentTextarea}
      onChange={(e) => handlerClickTextarea(e)}
    ></textarea>
  );
};

export default Textarea;
