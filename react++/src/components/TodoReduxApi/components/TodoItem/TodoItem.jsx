import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dellTodoAsync, updateTodoAsync } from "../../redux/todoSlice";

import s from "./TodoItem.module.css";

const TodoItem = ({ item }) => {
  const [deleteTodo, setDeleteTodo] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(false);

  const dispatch = useDispatch();
  const { delleteTodoId, updateTodoId } = useSelector((state) => state.todo);

  const hendlerClickDelete = async () => {
    setDeleteTodo(true);
    await dispatch(dellTodoAsync(item.id));
    setDeleteTodo(false);
  };

  const handlerClickToComplited = async () => {
    setUpdateTodo(true);
    const todo = await dispatch(
      updateTodoAsync({ id: item.id, todo: { complited: !item.complited } })
    );
    console.log(todo);
    // setComplited((prev) => !prev);
    setUpdateTodo(false);
  };

  return (
    <li className={s.item}>
      <input
        disabled={deleteTodo || updateTodo}
        type={"checkbox"}
        checked={item.complited}
        onChange={handlerClickToComplited}
      />
      <span>{item.text}</span>
      {delleteTodoId === item.id && <div className={s.red}>Удаление</div>}
      {updateTodoId === item.id && <div className={s.blue}>Обновление</div>}
      <button disabled={deleteTodo || updateTodo} onClick={hendlerClickDelete}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
