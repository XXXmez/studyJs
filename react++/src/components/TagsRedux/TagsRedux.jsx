import React from "react";
import { Provider } from "react-redux";

import ListTags from "./components/ListTags/ListTags";
import TagInputField from "./components/TagInputField/TagInputField";
import { store } from "./redux/store";
import "./TagsRedux.css";

const TagsRedux = () => {
  return (
    <Provider store={store}>
      <label className="tags" htmlFor="tagsInput">
        <ListTags />
        <TagInputField />
      </label>
    </Provider>
  );
};

export default TagsRedux;
