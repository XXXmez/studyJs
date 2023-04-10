import React, { useState } from "react";
import { useAddTodoMutation } from "../../redux/todoAPI";

import s from "./Form.module.css";

const Form = () => {
  const [addTodo, { isLoading, isError }] = useAddTodoMutation();

  const [input, setInput] = useState("");

  const handlerClickAdd = async () => {
    if (!input.trim()) {
      return;
    }
    addTodo({ text: input });
    setInput("");
  };

  return (
    <div className={s.box}>
      <input
        disabled={isLoading}
        className={s.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className={s.btn}
        onClick={handlerClickAdd}
        disabled={!input || isLoading}
      >
        Add
      </button>
      {isLoading && <div className={s.green}>Создание</div>}
      {isError && <div className={s.red}>Error: {"error"}</div>}
    </div>
  );
};

export default Form;
