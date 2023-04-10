import React from "react";

import s from "./Fieldtext.module.css";

const Fieldtext = ({
  startBeforeGame,
  loading,
  testText = "",
  fetchData,
  currentTextarea,
}) => {
  const wordCheck = (ind) => {
    if (currentTextarea.split(" ")[ind]?.length > 0) {
      return testText.split(" ")[ind].includes(currentTextarea.split(" ")[ind])
        ? s.green
        : s.red;
    }
    return "";
  };

  return (
    <div className={s.boxText} style={loading ? { opacity: "0.5" } : {}}>
      <span>Введите текст:</span>
      <p className={s.text}>
        {testText.split(" ").map((slovo, ind) => (
          <span className={wordCheck(ind)} key={ind}>
            {slovo}
          </span>
        ))}
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
