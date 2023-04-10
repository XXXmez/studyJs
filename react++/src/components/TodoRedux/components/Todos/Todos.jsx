import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delTodo, selectTodo } from "../../todoSlice";

const Todos = () => {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();

  console.log(todos);
  return (
    <ul>
      {todos.map((el) => (
        <li key={el.id}>
          <span>{el.text}</span>
          <button onClick={() => dispatch(delTodo(el.id))}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
