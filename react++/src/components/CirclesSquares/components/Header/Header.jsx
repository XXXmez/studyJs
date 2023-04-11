import React from "react";

import s from "./Header.module.css";

const Header = ({
  activeCircles,
  activeSquares,
  setMenuOpen,
  setActiveCircles,
  setActiveSquares,
}) => {
  const handlerClickCircles = () => {
    setActiveCircles((prev) => !prev);
  };
  const handlerClickSquares = () => {
    setActiveSquares((prev) => !prev);
  };

  const HandlerOpenMenu = () => {
    setMenuOpen(true);
  };

  return (
    <header className={s.header}>
      <h1 className={s.title}>Круги и квадраты 3.0</h1>
      <div className={s.box}>
        <button onClick={HandlerOpenMenu}>☰</button>
        <div className={s.figures}>
          <label>
            <input
              type={"checkbox"}
              className={s.figure}
              checked={activeCircles}
              onChange={handlerClickCircles}
            />
            Круги
          </label>
          <label>
            <input
              type={"checkbox"}
              className={s.figure}
              checked={activeSquares}
              onChange={handlerClickSquares}
            />
            Квадраты
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
