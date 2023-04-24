import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/slice/dataFlagsSlice";
import CustomSelector from "../CustomSelector/CustomSelector";

import s from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const flags = useSelector((state) => state.flags.data);

  const regions = flags.reduce((acc, cur) => {
    acc.includes(cur.region) ? "" : acc.push(cur.region);
    return acc;
  }, []);

  const [selectRegion, setSelectRegion] = useState("");
  const [inputSearch, setInputSearch] = useState("");

  const handlerClickInput = (event) => {
    const eventValue = event.target.value;
    setInputSearch(eventValue);
  };

  useEffect(() => {
    dispatch(setFilter({ region: selectRegion, name: inputSearch }));
  }, [selectRegion, inputSearch]);

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
