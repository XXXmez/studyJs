import React from "react";
import s from "../TextSpeed.module.css";

const Footer = ({
  endTest,
  typingSpeed,
  startBeforeGame,
  handlerClickBreak,
  handlerClickАgain,
  handlerClickStart,
}) => {
  return (
    <div className={s.footer}>
      {endTest && (
        <div className="footer-speed">
          <p>Скорость</p>
          <p>
            <b>{typingSpeed}</b> зн./мин.
          </p>
        </div>
      )}

      <div className={s.buttons}>
        {startBeforeGame ? (
          <>
            <button
              onClick={handlerClickBreak}
              className={`${s.break} ${s.btn}`}
            >
              Break
            </button>
            <button onClick={handlerClickАgain} className={s.btn}>
              Аgain
            </button>
          </>
        ) : (
          <button onClick={handlerClickStart} className={s.btn}>
            Start
          </button>
        )}
      </div>
    </div>
  );
};

export default Footer;
