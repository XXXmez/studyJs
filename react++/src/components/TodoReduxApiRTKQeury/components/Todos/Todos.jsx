import React from "react";
import { useGetTodosQuery } from "../../redux/todoAPI";

import TodoItem from "../TodoItem/TodoItem";

import s from "./Todos.module.css";

const Todos = () => {
  const { data } = useGetTodosQuery();

  return (
    <ul className={s.list}>
      {data.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Todos;
