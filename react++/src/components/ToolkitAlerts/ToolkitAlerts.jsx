import React from "react";
import { Provider } from "react-redux";
import Content from "./Content";
import { store } from "./redux/store";

const ToolkitAlerts = () => {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
};

export default ToolkitAlerts;
