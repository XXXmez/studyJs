import React from "react";

import s from "./Header.module.css";

const Header = () => {
  return (
    <div className="cs3_header">
      <h1>Круги и квадраты 3.0</h1>
      <div className="cs4">
        <button>M</button>
        <div>
          <label>
            <input type={"checkbox"} />
            Круги
          </label>
        </div>
        <div>
          <label>
            <input type={"checkbox"} />
            Квадраты
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
