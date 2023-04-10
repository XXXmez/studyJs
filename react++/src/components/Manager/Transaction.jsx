import React from "react";

const Transaction = ({
  setInputTransaction,
  setSelectTransaction,
  selectTransaction,
  data = [],
  inputTransaction,
  handlerButtonNumber,
  clearFormTransaction,
  addTransaction,
}) => {
  return (
    <div className="container transaction">
      <h2>Добавить расход</h2>
      <select
        onChange={(e) => setSelectTransaction(e.target.value)}
        value={selectTransaction}
      >
        {data.map((el) => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={inputTransaction}
        onChange={(e) => setInputTransaction(e.target.value)}
      />
      <div className="transaction-numbers">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((el, ind) => (
          <button
            key={ind}
            onClick={(e) => handlerButtonNumber(e)}
            className="transaction-number"
          >
            {el}
          </button>
        ))}
      </div>
      <button onClick={clearFormTransaction}>Очистить</button>
      <button disabled={!inputTransaction} onClick={addTransaction}>
        Добавить расход
      </button>
    </div>
  );
};

export default Transaction;
