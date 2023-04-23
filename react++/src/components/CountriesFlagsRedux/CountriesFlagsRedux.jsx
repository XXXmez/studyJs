import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import "./index.css";
import s from "./CountriesFlagsRedux.module.css";

import Header from "./components/Header/Header";
import CountryPage from "./page/CountryPage/CountryPage";
import MainPage from "./page/MainPage/MainPage";
import useDebounce from "../../hooks/useDebounce";

const CountriesFlagsRedux = () => {
  const [selectRegion, setSelectRegion] = useState("");
  const [inputSearch, setInputSearch] = useState("");

  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [history, setHistory] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    const { data } = await axios.get("https://restcountries.com/v3.1/all");
    const sortData = data.sort((a, b) =>
      a.name?.common > b.name?.common ? 1 : -1
    );
    setData(sortData);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const regions = [...data].reduce((acc, cur) => {
    acc.includes(cur.region) ? "" : acc.push(cur.region);
    return acc;
  }, []);

  const sortData = () => {
    let newFilterData = [...data];

    if (selectRegion !== "") {
      newFilterData = newFilterData.filter((el) => el.region === selectRegion);
    }
    if (inputSearch.trim() !== "") {
      newFilterData = newFilterData.filter((el) =>
        el.name.common.toLowerCase().includes(inputSearch.toLowerCase())
      );
    }
    // setFilterData(newFilterData);
    return newFilterData;
  };

  useEffect(() => {
    sortData();
  }, [selectRegion, data]);

  const debounce = useDebounce(sortData, 1000);

  useEffect(() => {
    debounce();
  }, [inputSearch, data]);

  return (
    <div className={s.box}>
      <Header />
      <div className={s.content}>
        <div className={s.wrapper}>
          {isLoading && <h2>Загрузка...</h2>}
          {!isLoading && (
            <Routes>
              <Route
                path="/"
                element={
                  <MainPage
                    regions={regions}
                    selectRegion={selectRegion}
                    setSelectRegion={setSelectRegion}
                    inputSearch={inputSearch}
                    setInputSearch={setInputSearch}
                    filterData={sortData()}
                    history={history}
                    setHistory={setHistory}
                  />
                }
              />
              <Route
                path="/country/:id"
                element={
                  <CountryPage
                    data={data}
                    history={history}
                    setHistory={setHistory}
                  />
                }
              />
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountriesFlagsRedux;
