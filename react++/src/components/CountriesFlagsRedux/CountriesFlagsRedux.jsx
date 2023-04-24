import React, { useState } from "react";

import "./index.css";
import s from "./CountriesFlagsRedux.module.css";

import Header from "./components/Header/Header";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import Content from "./components/Content/Content";

const CountriesFlagsRedux = () => {
  const [history, setHistory] = useState([]);

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   const { data } = await axios.get("https://restcountries.com/v3.1/all");
  //   const sortData = data.sort((a, b) =>
  //     a.name?.common > b.name?.common ? 1 : -1
  //   );
  //   setData(sortData);
  //   setIsLoading(false);
  // };
  // useEffect(() => {
  //   // fetchData();
  // }, []);

  // const regions = [...data].reduce((acc, cur) => {
  //   acc.includes(cur.region) ? "" : acc.push(cur.region);
  //   return acc;
  // }, []);

  // const sortData = () => {
  //   let newFilterData = [...data];

  //   if (selectRegion !== "") {
  //     newFilterData = newFilterData.filter((el) => el.region === selectRegion);
  //   }
  //   if (inputSearch.trim() !== "") {
  //     newFilterData = newFilterData.filter((el) =>
  //       el.name.common.toLowerCase().includes(inputSearch.toLowerCase())
  //     );
  //   }
  //   // setFilterData(newFilterData);
  //   return newFilterData;
  // };

  // useEffect(() => {
  //   sortData();
  // }, [selectRegion, data]);

  // const debounce = useDebounce(sortData, 1000);

  // useEffect(() => {
  //   debounce();
  // }, [inputSearch, data]);

  return (
    <Provider store={store}>
      <div className={s.box}>
        <Header />
        <Content history={history} setHistory={setHistory} />
      </div>
    </Provider>
  );
};

export default CountriesFlagsRedux;
