import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "../../../../hooks/useDebounce";
import { setFilterData } from "../../redux/slice/dataFlagsSlice";
import { setRegion, setSearch } from "../../redux/slice/filterSlice";
import CustomSelector from "../CustomSelector/CustomSelector";

import s from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const flags = useSelector((state) => state.flags.data);
  const region = useSelector((state) => state.filters.region);
  const search = useSelector((state) => state.filters.search);

  const handlerSetRegion = (item) => {
    dispatch(setRegion(item));
  };
  const handlerSetSearch = (event) => {
    const eventValue = event.target.value;
    dispatch(setSearch(eventValue));
  };

  const regions = flags.reduce((acc, cur) => {
    acc.includes(cur.region) ? "" : acc.push(cur.region);
    return acc;
  }, []);

  useEffect(() => {
    dispatch(setFilterData({ region: region, name: search }));
  }, [region]);

  const quewery = () => {
    dispatch(setFilterData({ region: region, name: search }));
  };

  const debounce = useDebounce(quewery, 1000);

  useEffect(() => {
    debounce();
  }, [search]);

  return (
    <div className={s.box}>
      <div className={s.controls}>
        <div className={s.inputBox}>
          <input
            placeholder="search..."
            className={s.input}
            value={search}
            onChange={handlerSetSearch}
          />
        </div>

        <CustomSelector
          options={regions}
          state={region}
          setState={handlerSetRegion}
          placeholder={"Filter by region"}
        />
      </div>
    </div>
  );
};

export default Filters;
