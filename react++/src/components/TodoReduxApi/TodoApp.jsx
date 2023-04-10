import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../TodoReduxApi/components/Form/Form";
import Todos from "../TodoReduxApi/components/Todos/Todos";
import Header from "./components/Header/Header";
import { fetchTodosAsync, selectTodoStatus } from "./redux/todoSlice";

import s from "./TodoApp.module.css";

const TodoApp = () => {
  const firstLoading = useRef(false);

  const dispatch = useDispatch();

  // const todoState = useSelector(selectTodoStatus);
  const { error, status } = useSelector((state) => state.todo);

  useEffect(() => {
    if (firstLoading.current) {
      dispatch(fetchTodosAsync());
      console.log("start app");
    }
    firstLoading.current = true;
  }, []);

  return (
    <div className={s.app}>
      {status === "loading" && <h2>Загрузка....</h2>}
      {status !== "loading" && status !== "failed" && (
        <>
          <Header />
          <Form />
          <Todos />
        </>
      )}
      {status === "failed" && <h2>{error}</h2>}
    </div>
  );
};

export default TodoApp;
