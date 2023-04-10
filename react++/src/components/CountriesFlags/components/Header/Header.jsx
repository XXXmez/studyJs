import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  const [activeTheme, setActiveTheme] = useState("light");
  const body = document.body;

  useEffect(() => {
    body.dataset.theme = activeTheme;
  }, [activeTheme]);

  const handlerClickTheme = () => {
    if (activeTheme === "light") {
      setActiveTheme("dark");
    }
    if (activeTheme === "dark") {
      setActiveTheme("light");
    }
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Link to={"/"} className={s.title}>
          <h1>Countries</h1>
        </Link>

        <div className={s.themes}>
          {activeTheme === "light" && (
            <button onClick={handlerClickTheme}>Light mode</button>
          )}
          {activeTheme === "dark" && (
            <button onClick={handlerClickTheme}>Dark mode</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
