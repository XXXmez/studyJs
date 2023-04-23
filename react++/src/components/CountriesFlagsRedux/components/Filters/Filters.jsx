import React from "react";
import CustomSelector from "../CustomSelector/CustomSelector";

import s from "./Filters.module.css";

const Filters = ({
  regions = [],
  selectRegion,
  setSelectRegion,
  inputSearch,
  setInputSearch,
}) => {
  const handlerClickInput = (event) => {
    const eventValue = event.target.value;
    setInputSearch(eventValue);
  };

  // const handlerClickClose = (type) => {
  //   if (type === "select") {
  //     setSelectRegion("");
  //   }
  // };

  return (
    <div className={s.box}>
      <div className={s.controls}>
        <div className={s.inputBox}>
          <input
            placeholder="search..."
            className={s.input}
            value={inputSearch}
            onChange={(e) => handlerClickInput(e)}
          />
        </div>
        {/* <div className={s.selectBox}>
          <select
            className={s.select}
            value={selectRegion}
            onChange={(e) => setSelectRegion(e.target.value)}
          >
            <option value={""}>Sort by region</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
          
          {selectRegion && (
            <button
              onClick={() => handlerClickClose("select")}
              className={s.close}
            >
              x
            </button>
          )}
        </div> */}
        <CustomSelector
          options={regions}
          state={selectRegion}
          setState={setSelectRegion}
          placeholder={"Filter by region"}
        />
      </div>
    </div>
  );
};

export default Filters;
