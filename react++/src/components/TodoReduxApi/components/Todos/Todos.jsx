import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dellTodoAsync, selectTodo } from "../../redux/todoSlice";
import TodoItem from "../TodoItem/TodoItem";

import s from "./Todos.module.css";

const Todos = () => {
  const todos = useSelector(selectTodo);

  return (
    <ul className={s.list}>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Todos;
