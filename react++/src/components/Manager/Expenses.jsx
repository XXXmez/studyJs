import React from "react";

const Expenses = ({ data = [], deleteСategory }) => {
  return (
    <div className="container expenses">
      <h2>Ваши категории расходов</h2>
      <div className="expenses-list">
        {data.map((el) => (
          <div key={el.id} className="expenses-item">
            <p className="expenses-text">
              {el.name} {el.sum} ₽
            </p>
            <button
              onClick={() => deleteСategory(el.id)}
              className="expenses-button"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expenses;
