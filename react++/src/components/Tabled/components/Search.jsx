import React from "react";

import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";

import s from "./Search.module.css";

const Search = ({ value, setValue, handlerClickSeacrh, inputSeachRef }) => {
  const handlerClickClose = async () => {
    await setValue("");
    await handlerClickSeacrh();
  };

  return (
    <div className={s.search}>
      <input
        ref={inputSeachRef}
        placeholder="Поиск"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && (
        <button className={s.btn_close} onClick={handlerClickClose}>
          <AiOutlineCloseCircle size={21} color={"white"} />
        </button>
      )}
      <button className={s.btn_search} onClick={handlerClickSeacrh}>
        <AiOutlineSearch size={21} color={"white"} />
      </button>
    </div>
  );
};

export default Search;
