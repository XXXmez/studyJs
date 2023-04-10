import axios from "axios";
import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import useDebounce from "../../hooks/useDebounce";

import "./Todo.css";

import TodoElement from "./TodoElement";

const urlData = "https://63f641c559c944921f709713.mockapi.io/todos/";

const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoInputSearch, setTodoInputSearch] = useState("");

  const [inputDone, setInputDone] = useState(false);
  const [inputNotDone, setInputNotDone] = useState(false);

  const [dataTodo, setDataTodo] = useState([]);
  const [fistLoadTodos, setFirstLoadTodos] = useState(true);

  const fecthTodosEdit = async (id, text) => {
    await axios.put(`${urlData}${id}`, { title: text });
    await fetchTodos();
  };

  const fecthTodosChecked = async (id, completed) => {
    await axios.put(`${urlData}${id}`, { completed });
    await fetchTodos();
  };

  const fetchTodosDel = async (id) => {
    await axios.delete(`${urlData}${id}`);
    await fetchTodos();
  };

  const fetchTodosAdd = async () => {
    await axios.post(urlData, {
      title: todoInput,
      completed: false,
    });
    await fetchTodos();

    setTodoInput("");
  };

  const arrUrl = [
    `${todoInputSearch.trim() ? `title=${todoInputSearch.trim()}` : ""}`,
    // `${inputDone ? `completed=${inputDone}` : ""}`,
    // `${inputNotDone ? `completed=${!inputNotDone}` : ""}`,
  ].filter(Boolean);

  const fetchTodos = async () => {
    const data = await axios.get(`${urlData}?${arrUrl.join("&")}`);
    setDataTodo([...data.data].reverse());
  };

  const debouncedSearch = useDebounce(fetchTodos, 1000);

  useEffect(() => {
    const firstLoad = async () => {
      setFirstLoadTodos(true);
      await fetchTodos();
      setFirstLoadTodos(false);
    };
    firstLoad();
  }, [inputDone, inputNotDone]);

  const onChangeSearch = (e) => {
    setTodoInputSearch(e);
    debouncedSearch(e);
  };

  return (
    <div className="todo">
      <div className="todo_input">
        <input
          placeholder="Поиск..."
          value={todoInputSearch}
          onChange={(e) => onChangeSearch(e.target.value)}
        />
        <input
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Введите текст..."
        />
      </div>
      <div className="todo_btn">
        <button onClick={fetchTodosAdd} disabled={!todoInput.trim()}>
          add
        </button>
      </div>

      <div>
        <input
          disabled={inputNotDone}
          type={"checkbox"}
          id="done"
          value={inputDone}
          onChange={() => setInputDone((prev) => !prev)}
        />{" "}
        <label htmlFor="done">Отображать только выполненное</label>
        <br />
        <input
          disabled={inputDone}
          type={"checkbox"}
          id="notdone"
          value={inputNotDone}
          onChange={() => setInputNotDone((prev) => !prev)}
        />{" "}
        <label htmlFor="notdone">Отображать только не выполненное</label>
      </div>

      {fistLoadTodos && (
        <div style={{ textAlign: "center" }}>
          <h2>Загрузка...</h2>
        </div>
      )}
      <ul className="todo_list">
        {dataTodo.map((todo) => (
          <TodoElement
            key={todo.id}
            todo={todo}
            fecthTodosChecked={fecthTodosChecked}
            fetchTodosDel={fetchTodosDel}
            fecthTodosEdit={fecthTodosEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
