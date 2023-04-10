import React from "react";

import s from "../TextSpeed.module.css";

const Fieldtext = ({
  startBeforeGame,
  loading,
  currentTextarea = "",
  testText = "",
  fetchData,
}) => {
  return (
    <div className={s.boxText} style={loading ? { opacity: "0.5" } : {}}>
      <span>Введите текст:</span>
      <p className={s.text}>
        <span>{currentTextarea}</span>
        <span>{testText.slice(currentTextarea.length)}</span>
      </p>
      {!startBeforeGame && (
        <button onClick={fetchData} className={s.btn}>
          Новый текст
        </button>
      )}
    </div>
  );
};

export default Fieldtext;
