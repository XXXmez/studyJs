import React from "react";

import s from "./BorderCountryBtn.module.css";
import { useHref, useNavigate } from "react-router-dom";

const BorderCountryBtn = ({ data, item, setHistory }) => {
  const navigate = useNavigate();
  const href = useHref();

  const handler = (c) => {
    setHistory((prev) => [...prev, href]);
    navigate(`/country/${c}`);
  };

  const currItem = data.find((el) => el.cca3 == item);

  return (
    <div
      className={s.bordersBtn}
      key={item}
      onClick={() => handler(currItem.name.common)}
    >
      {currItem?.name?.common}
    </div>
  );
};

export default BorderCountryBtn;
