import React, { useEffect, useState } from "react";

import s from "./CirclesSquares.module.css";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Menu from "./components/Menu/Menu";

import { database } from "./data";

const CirclesSquares = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [db, setdb] = useState([]);

  const [activeCircles, setActiveCircles] = useState(false);
  const [activeSquares, setActiveSquares] = useState(false);

  const [red, setRed] = useState(false);
  const [green, setGreen] = useState(false);
  const [blue, setBlue] = useState(false);
  const [yellow, setYellow] = useState(false);

  const [dark, setDark] = useState("all");

  const [column, setColumn] = useState(2);

  useEffect(() => {
    setdb(database);

    let newDB = [...database];

    const arrColors = [];
    if (red) arrColors.push("red");
    if (green) arrColors.push("green");
    if (blue) arrColors.push("blue");
    if (yellow) arrColors.push("yellow");
    if (arrColors.length)
      newDB = newDB.filter((el) => arrColors.includes(el.color));

    const arrForm = [];
    if (activeCircles) arrForm.push("circle");
    if (activeSquares) arrForm.push("square");
    if (arrForm.length) newDB = newDB.filter((el) => arrForm.includes(el.form));

    if (dark === "dark") newDB = newDB.filter((el) => el.dark);
    if (dark === "nodark") newDB = newDB.filter((el) => !el.dark);

    setdb(newDB);
  }, [activeCircles, activeSquares, red, green, blue, yellow, dark]);

  return (
    <div className={s.wrapper}>
      <div className={s.border}>
        <Header
          activeCircles={activeCircles}
          activeSquares={activeSquares}
          setActiveCircles={setActiveCircles}
          setActiveSquares={setActiveSquares}
          setMenuOpen={setMenuOpen}
        />
        <Items column={column} database={db} />
        {menuOpen && (
          <Menu
            red={red}
            setRed={setRed}
            green={green}
            setGreen={setGreen}
            blue={blue}
            setBlue={setBlue}
            yellow={yellow}
            setYellow={setYellow}
            column={column}
            setColumn={setColumn}
            setMenuOpen={setMenuOpen}
            dark={dark}
            setDark={setDark}
          />
        )}
      </div>
    </div>
  );
};

export default CirclesSquares;
