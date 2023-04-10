import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodoAsync } from "../../redux/todoSlice";

import s from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.todo);

  const [input, setInput] = useState("");
  const [createdTodo, setCreatedTodo] = useState(false);

  const handlerClickAdd = async () => {
    if (!input.trim()) {
      return;
    }

    setCreatedTodo(true);
    await dispatch(addNewTodoAsync(input));
    setInput("");
    setCreatedTodo(false);
  };

  return (
    <div className={s.box}>
      <input
        disabled={createdTodo}
        className={s.input}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className={s.btn}
        onClick={handlerClickAdd}
        disabled={!input || createdTodo}
      >
        Add
      </button>
      {status === "createdPost" && <div className={s.green}>Создание</div>}
      {status === "failCreatedPost" && (
        <div className={s.red}>Error: {error}</div>
      )}
    </div>
  );
};

export default Form;
