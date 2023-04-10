import React from "react";

import s from "./Select.module.css";

const Select = ({ data, active, setActive }) => {
  return (
    <div className={s.select}>
      <select
        value={active}
        onChange={(e) => setActive(Number(e.target.value))}
      >
        {data.map((el) => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
