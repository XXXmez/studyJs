import React from "react";

import s from "./Textarea.module.css";

const Textarea = ({
  textareaRef,
  startBeforeGame,
  currentTextarea,
  handlerClickTextarea,
}) => {
  return (
    <textarea
      className={s.textarea}
      ref={textareaRef}
      disabled={!startBeforeGame}
      cols={70}
      rows={20}
      value={currentTextarea}
      onChange={(e) => handlerClickTextarea(e)}
    ></textarea>
  );
};

export default Textarea;
