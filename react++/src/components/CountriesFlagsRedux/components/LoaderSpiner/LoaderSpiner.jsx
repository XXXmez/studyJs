import React from "react";
import { RotatingLines } from "react-loader-spinner";

import s from "./LoaderSpiner.module.css";

const LoaderSpiner = () => {
  return (
    <div className={s.spiner}>
      <RotatingLines height="40" width="40" strokeColor="#6c6c6c" />
    </div>
  );
};

export default LoaderSpiner;
