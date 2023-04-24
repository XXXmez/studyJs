import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CountryPage from "../../page/CountryPage/CountryPage";
import MainPage from "../../page/MainPage/MainPage";

import s from "./Content.module.css";

const Content = ({ history, setHistory }) => {
  const load = useSelector((state) => state.flags.loading);

  if (load) {
    return (
      <div className={s.content}>
        <h2>Загрузка</h2>
      </div>
    );
  }
  return (
    <div className={s.content}>
      <div className={s.wrapper}>
        <Routes>
          <Route path="/" element={<MainPage setHistory={setHistory} />} />
          <Route
            path="/country/:id"
            element={<CountryPage history={history} setHistory={setHistory} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Content;
