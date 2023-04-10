import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../todoSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handlerClickAdd = () => {
    if (!input.trim()) {
      return;
    }
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handlerClickAdd}>add</button>
    </div>
  );
};

export default Form;
