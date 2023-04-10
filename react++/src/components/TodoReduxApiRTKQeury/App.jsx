import React, { useEffect } from "react";
import { useGetTodosQuery } from "./redux/todoAPI";

import Form from "../TodoReduxApiRTKQeury/components/Form/Form";
import Todos from "../TodoReduxApiRTKQeury/components/Todos/Todos";

import s from "./TodoApp.module.css";

const App = () => {
  const { isLoading, isError, data, isSuccess, error } = useGetTodosQuery();
  console.log(isLoading, isError, data, isSuccess);

  useEffect(() => {}, []);
  return (
    <div className={s.app}>
      {isLoading && <h2>Загрузка....</h2>}
      {!isLoading && !isError && (
        <>
          <Form />
          <Todos />
        </>
      )}
      {isError && (
        <h2>{`Code Error: ${error.status}, error message: ${error.data}`}</h2>
      )}
    </div>
  );
};

export default App;
