import React from "react";

import "./index.css";
import s from "./CountriesFlagsRedux.module.css";

import Header from "./components/Header/Header";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import Content from "./components/Content/Content";

const CountriesFlagsRedux = () => {
  return (
    <Provider store={store}>
      <div className={s.box}>
        <Header />
        <Content />
      </div>
    </Provider>
  );
};

export default CountriesFlagsRedux;
