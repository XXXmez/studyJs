import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CountryPage from "../../page/CountryPage/CountryPage";
import MainPage from "../../page/MainPage/MainPage";
import LoaderSpiner from "../LoaderSpiner/LoaderSpiner";

import s from "./Content.module.css";

const Content = () => {
  const load = useSelector((state) => state.flags.loading);
  const error = useSelector((state) => state.flags.error);

  if (load) {
    return (
      <div className={s.content}>
        <LoaderSpiner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={s.content}>
        <div className={s.wrapper}>
          <h2 style={{ textAlign: "center" }}>
            Возникла ошибка во время подключения, пожалуйста попробуйте позже!
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className={s.content}>
      <div className={s.wrapper}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/country/:id" element={<CountryPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Content;
