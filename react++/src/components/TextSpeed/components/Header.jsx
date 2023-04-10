import React from "react";
import s from "../TextSpeed.module.css";

const Header = ({ endTest, startBeforeGame, beforeSeconds, afterSeconds }) => {
  return (
    <>
      {startBeforeGame && beforeSeconds > 0 && (
        <div className={s.timer}>
          <p>Внимание!!!</p>
          <p>
            Времени до старта: <b>{beforeSeconds} сек.</b>
          </p>
        </div>
      )}

      {startBeforeGame && beforeSeconds === 0 && (
        <div className={s.timer}>
          <p>Старт!!!</p>
          <p>
            Прошло времени: <b>{afterSeconds} сек.</b>
          </p>
        </div>
      )}

      {endTest && (
        <div className={s.timer}>
          <h3>Тест пройден</h3>
        </div>
      )}
    </>
  );
};

export default Header;
