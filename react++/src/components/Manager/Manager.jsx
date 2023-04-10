import React from "react";
import Category from "./Category";
import Expenses from "./Expenses";
import { v4 as uuidv4 } from "uuid";
import "./Manager.css";
import Transaction from "./Transaction";

const obj = [
  {
    id: "1",
    name: "Авто",
    sum: 1000,
  },
  {
    id: "2",
    name: "Продукты",
    sum: 3000,
  },
  {
    id: "3",
    name: "Кино",
    sum: 300,
  },
];

const icons = [
  "🍏",
  "🥒",
  "🍰",
  "🍟",
  "🍜",
  "🥂",
  "❤",
  "🚗",
  "🏠",
  "🚆",
  "🏍",
  "⚽",
  "🎧",
  "💊",
  "🚨",
  "📱",
  "💻",
  "🛠",
  "🔨",
  "🪑",
  "💎",
  "💰",
  "🎉",
  "📘",
  "👚",
  "🐶",
];

const Manager = () => {
  const [data, setData] = React.useState(obj);
  const [inputCategory, setInputCategory] = React.useState("");
  const [selectTransaction, setSelectTransaction] = React.useState("1");
  const [inputTransaction, setInputTransaction] = React.useState("");
  const [activeIcons, setActiveIcons] = React.useState(false);

  const addСategory = () => {
    setData((prev) => [...prev, { id: uuidv4(), name: inputCategory, sum: 0 }]);
    console.log(data);
    setInputCategory("");
  };
  const deleteСategory = (id) => {
    setData((prev) => prev.filter((el) => el.id !== id));
  };

  const handlerIcons = (el) => {
    setInputCategory((prev) => el + prev);
    setActiveIcons(false);
  };

  const addTransaction = () => {
    setData(
      data.map((el) =>
        el.id === selectTransaction
          ? { ...el, sum: el.sum + Number(inputTransaction) }
          : el
      )
    );
    setInputTransaction("");
  };

  const clearFormTransaction = () => {
    setInputTransaction("");
  };

  const handlerButtonNumber = (e) => {
    setInputTransaction((prev) => prev + e.target.textContent);
  };

  return (
    <div className="manager">
      <Expenses data={data} deleteСategory={deleteСategory} />
      <Category
        inputCategory={inputCategory}
        setInputCategory={setInputCategory}
        activeIcons={activeIcons}
        icons={icons}
        handlerIcons={handlerIcons}
        setActiveIcons={setActiveIcons}
        addСategory={addСategory}
      />
      <Transaction
        setInputTransaction={setInputTransaction}
        setSelectTransaction={setSelectTransaction}
        selectTransaction={selectTransaction}
        data={data}
        inputTransaction={inputTransaction}
        handlerButtonNumber={handlerButtonNumber}
        clearFormTransaction={clearFormTransaction}
        addTransaction={addTransaction}
      />
    </div>
  );
};

export default Manager;
