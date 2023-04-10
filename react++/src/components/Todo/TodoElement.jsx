import React, { useState } from "react";

import { AiFillEdit, AiFillDelete, AiOutlineSave } from "react-icons/ai";

const TodoElement = ({
  todo,
  fecthTodosChecked,
  fetchTodosDel,
  fecthTodosEdit,
}) => {
  const [edit, setEdit] = useState(false);
  const [editInput, setEditInput] = useState(todo.title);
  const [loadEdit, setLoadEdit] = useState(false);

  const handlerTodoChecked = async () => {
    setLoadEdit(true);
    await fecthTodosChecked(todo.id, !todo.completed);
    setLoadEdit(false);
  };

  const handlerTodoSave = async () => {
    setLoadEdit(true);
    await fecthTodosEdit(todo.id, editInput);
    setLoadEdit(false);
    setEdit(false);
  };

  return (
    <li className="todo_item" style={loadEdit ? { opacity: "0.3" } : {}}>
      <div>
        <input
          type={"checkbox"}
          checked={todo.completed}
          onChange={handlerTodoChecked}
          disabled={edit}
        />
        {edit ? (
          <input
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
        ) : (
          <p style={todo.completed ? { textDecoration: "line-through" } : {}}>
            {todo.title}
          </p>
        )}
      </div>
      <div>
        {edit ? (
          <button onClick={handlerTodoSave} disabled={!editInput.trim()}>
            <AiOutlineSave />
          </button>
        ) : (
          <button onClick={() => setEdit(true)}>
            <AiFillEdit />
          </button>
        )}
        <button onClick={() => fetchTodosDel(todo.id)} disabled={edit}>
          <AiFillDelete />
        </button>
      </div>
    </li>
  );
};

export default TodoElement;
