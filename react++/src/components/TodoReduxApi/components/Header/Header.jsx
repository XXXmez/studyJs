import React from "react";

import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.box}>
      <h1 className={s.title}>Todolist on redux-toolkit async</h1>
    </div>
  );
};

export default Header;
