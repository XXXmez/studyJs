import React from "react";

import store from "./redux/store";
import { Provider } from "react-redux/";
import TodoApp from "./TodoApp";

const TodoReduxApi = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default TodoReduxApi;
