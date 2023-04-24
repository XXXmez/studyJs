import React from "react";

import s from "./BorderCountryBtn.module.css";
import { useHref, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addLink } from "../../../redux/slice/historySlice";

const BorderCountryBtn = ({ item }) => {
  const dispatch = useDispatch();
  const flags = useSelector((state) => state.flags.data);

  const navigate = useNavigate();
  const href = useHref();

  const handler = (c) => {
    // setHistory((prev) => [...prev, href]);
    dispatch(addLink(href));
    navigate(`/country/${c}`);
  };

  const currItem = flags.find((el) => el.cca3 == item);

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
