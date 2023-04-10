import React from "react";

import s from "./Tags.module.css";

const Tags = ({ selectedTags = [], setSelectedTags }) => {
  const handlerClickClear = () => {
    setSelectedTags([]);
  };

  const handlerClickDelTag = (tag) => {
    setSelectedTags((prev) => prev.filter((el) => el !== tag));
  };

  return (
    <>
      {selectedTags.length > 0 && (
        <div className={s.box}>
          <ul className={s.tags}>
            {selectedTags.map((el) => (
              <li key={el} className={s.tag}>
                <span>{el}</span>
                <button onClick={() => handlerClickDelTag(el)}>✖</button>
              </li>
            ))}
          </ul>
          <div className={s.btn}>
            <button className={s.clear} onClick={handlerClickClear}>
              Clear
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Tags;
