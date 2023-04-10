import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import Btns from "./components/Btns/Btns";
import ListTrade from "./components/ListTrade/ListTrade";
import Modal from "./components/Modal/Modal";
import Select from "./components/Select/Select";
import Time from "./components/Time/Time";
import ArchivePage from "./page/ArchivePage/ArchivePage";
import TradePage from "./page/TradePage/TradePage";

import s from "./Trading.module.css";

const dataCurrency = [
  { id: 1, name: "USD/CAD", priceBuy: 1.3065, priceSell: 1.2935 },
  { id: 2, name: "USD/RUB", priceBuy: 75.375, priceSell: 74.625 },
  { id: 3, name: "USD/EUR", priceBuy: 0.94, priceSell: 0.93 },
];

const Trading = () => {
  const [activeSelect, setActiveSelect] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [activeApplication, setActiveApplication] = useState("");
  const [data, setData] = useState(dataCurrency);
  const [dataTrade, setDataTrade] = useState([]);

  function generateUpOrDown() {
    const randomNum = Math.floor(Math.random() * 2);
    return randomNum === 0 ? "up" : "down";
  }
  function generateNumber(direction) {
    let min, max;
    if (direction === "up") {
      min = 1.0001;
      max = 1.0009;
    } else if (direction === "down") {
      min = 0.9991;
      max = 0.9999;
    } else {
      throw new Error("Invalid direction");
    }
    return Math.random() * (max - min) + min;
  }

  const handlerOpenModal = (info) => {
    if (info.type === "buy" || info.type === "sell") {
      setOpenModal(true);
      setActiveApplication(info);
    }
    if (info.type === "close") {
      setOpenModal(false);
      setActiveApplication("");
    }
  };

  useEffect(() => {
    const timerUpdatePrice = setInterval(() => {
      console.log("update price ----------");
      const updateData = JSON.parse(JSON.stringify(data));
      updateData.forEach((element) => {
        const stepPrice = generateUpOrDown();
        console.log("update --->", element.name, stepPrice);
        element.priceBuy = element.priceBuy * generateNumber(stepPrice);
        element.priceSell = element.priceSell * generateNumber(stepPrice);
      });
      setData(updateData);
    }, 5000);

    return () => {
      clearInterval(timerUpdatePrice);
    };
  }, []);

  const handlerAddTrade = (trade) => {
    const newTrade = { ...trade, id: dataTrade.length + 1 };
    setDataTrade((prev) => [...prev, newTrade]);
  };

  return (
    <div className={s.box}>
      <div className={s.nav}>
        <ul className={s.nav_list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? `${s.link} ${s.nav_active}` : s.link
              }
            >
              Trading
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"archive"}
              className={({ isActive }) =>
                isActive ? `${s.link} ${s.nav_active}` : s.link
              }
            >
              Archive
            </NavLink>
          </li>
        </ul>
      </div>

      <div className={s.content}>
        <Routes>
          <Route
            path="/"
            element={
              <TradePage
                data={data}
                activeSelect={activeSelect}
                setActiveSelect={setActiveSelect}
                handlerOpenModal={handlerOpenModal}
              />
            }
          />
          <Route
            path="archive"
            element={<ArchivePage dataTrade={dataTrade} />}
          />
        </Routes>
      </div>
      {openModal && (
        <Modal
          handlerOpenModal={handlerOpenModal}
          activeApplication={activeApplication}
          data={data}
          handlerAddTrade={handlerAddTrade}
        />
      )}
    </div>
  );
};

export default Trading;
