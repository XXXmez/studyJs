import React from "react";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../../redux/todoAPI";

import s from "./TodoItem.module.css";

const TodoItem = ({ item }) => {
  const [deleteTodo, { isLoading }] = useDeleteTodoMutation();

  const [updateTodo, { isLoading: isLoadingUpdate }] = useUpdateTodoMutation();

  const hendlerClickDelete = async () => {
    console.log(`Удаление ${item.id}`);
    deleteTodo(item.id);
  };

  const handlerClickToComplited = async () => {
    console.log(`Изменение чекбокса ${(item.id, !item.complited)}`);
    updateTodo({ todoId: item.id, todo: { complited: !item.complited } });
  };

  return (
    <li className={s.item}>
      <input
        disabled={isLoading || isLoadingUpdate}
        type={"checkbox"}
        checked={item.complited}
        onChange={handlerClickToComplited}
      />
      <span>{item.text}</span>
      {isLoading && <div className={s.red}>Удаление</div>}
      {isLoadingUpdate && <div className={s.blue}>Обновление</div>}
      <button
        disabled={isLoading || isLoadingUpdate}
        onClick={hendlerClickDelete}
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
