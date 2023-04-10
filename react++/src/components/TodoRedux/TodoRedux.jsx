import React from "react";
import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";

import store from "./store";
import { Provider } from "react-redux/";

const TodoRedux = () => {
  return (
    <Provider store={store}>
      <div>
        <Form />
        <Todos />
      </div>
    </Provider>
  );
};

export default TodoRedux;
