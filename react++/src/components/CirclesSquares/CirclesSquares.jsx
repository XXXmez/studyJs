import React, { useState } from "react";

import s from "./CirclesSquares.module.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

const CirclesSquares = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [actineCircles, setActineCircles] = useState(false);
  const [activeSquares, setActiveSquares] = useState(false);

  const [red, setRed] = useState(false);
  const [green, setGreen] = useState(false);
  const [blue, setBlue] = useState(false);
  const [yellow, setYellow] = useState(false);

  const [column, setColumn] = useState(2);

  return (
    <div className={s.wrapper}>
      <div className={s.border}>
        <Header />
        <div className=""></div>
        <Menu
          setRed={setRed}
          setGreen={setGreen}
          setBlue={setBlue}
          setYellow={setYellow}
        />
      </div>
    </div>
  );
};

export default CirclesSquares;
