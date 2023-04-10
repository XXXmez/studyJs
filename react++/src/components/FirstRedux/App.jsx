import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./redux/counterSlice";

const App = () => {
  const [inputNum, setInputNum] = useState("");

  // не прям удобно доставать значение
  // const count = useSelector(selectCount);
  // поудобнее
  const { value: count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const handlerCickAddAmount = () => {
    dispatch(incrementByAmount(Number(inputNum)));
  };

  return (
    <div>
      <div>
        <div>{count}</div>
        <button onClick={() => dispatch(increment())}>inc</button>
        <button onClick={() => dispatch(decrement())}>desc</button>
      </div>
      <div>
        <p>Добавить число: </p>
        <input value={inputNum} onChange={(e) => setInputNum(e.target.value)} />
        <button onClick={handlerCickAddAmount}>Добавить</button>
      </div>
    </div>
  );
};

export default App;
