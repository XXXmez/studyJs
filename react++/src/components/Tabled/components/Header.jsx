import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import s from "./Header.module.css";

const Header = ({ sortType = "", handlerClickSort }) => {
  return (
    <div className={s.header}>
      <div className={s.id}>
        {sortType === "userId" && (
          <button
            style={{ textDecoration: "underline" }}
            onClick={() => handlerClickSort("-userId")}
          >
            Id <MdKeyboardArrowDown />
          </button>
        )}
        {sortType === "-userId" && (
          <button
            style={{ textDecoration: "underline" }}
            onClick={() => handlerClickSort("userId")}
          >
            Id <MdKeyboardArrowUp />
          </button>
        )}
        {!sortType.includes("userId") && (
          <button onClick={() => handlerClickSort("userId")}>Id</button>
        )}
      </div>
      <div className={s.title}>
        {sortType === "title" && (
          <button
            style={{ textDecoration: "underline" }}
            onClick={() => handlerClickSort("-title")}
          >
            Заголовок <MdKeyboardArrowDown />
          </button>
        )}
        {sortType === "-title" && (
          <button
            style={{ textDecoration: "underline" }}
            onClick={() => handlerClickSort("title")}
          >
            Заголовок <MdKeyboardArrowUp />
          </button>
        )}
        {!sortType.includes("title") && (
          <button onClick={() => handlerClickSort("title")}>Заголовок</button>
        )}
      </div>
      <div className={s.description}>
        {sortType === "description" && (
          <button
            style={{ textDecoration: "underline" }}
            onClick={() => handlerClickSort("-description")}
          >
            Описание <MdKeyboardArrowDown />
          </button>
        )}
        {sortType === "-description" && (
          <button
            style={{ textDecoration: "underline" }}
            onClick={() => handlerClickSort("description")}
          >
            Описание <MdKeyboardArrowUp />
          </button>
        )}
        {!sortType.includes("description") && (
          <button onClick={() => handlerClickSort("description")}>
            Описание
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
