import React from "react";
import { useHref, useNavigate } from "react-router-dom";
import s from "./Item.module.css";

const Item = ({ item, setHistory }) => {
  const navigate = useNavigate();
  const href = useHref();

  const handlerClickItem = () => {
    setHistory((prev) => [...prev, href]);
    navigate(`/country/${item.name.common}`);
  };

  return (
    <div onClick={handlerClickItem} className={s.item}>
      {/* to={`/country/${item.name.common}`} */}
      <div className={s.itemWrapper}>
        <img
          className={s.img}
          width={"100%"}
          height={"150px"}
          src={item.flags.png}
        />
        <div className={s.text}>
          <p className={s.name}>
            <b>{item.name.common}</b>
          </p>
          <p>
            <b>Native name:</b>
            {typeof item.name.nativeName === "object"
              ? Object.values(item.name.nativeName)[0].official
              : ""}
          </p>
          <p>
            <b>Continents:</b> {item.continents}
          </p>
          <p>
            <b>Population:</b> {item.population.toLocaleString()}
          </p>
          <p>
            <b>Capital:</b> {item.capital || "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
