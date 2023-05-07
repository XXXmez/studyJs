import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTag } from "../../redux/tagsSlice";

const TagInputField = () => {
  const dispatch = useDispatch();
  const [inputTag, setInputTag] = useState("");

  const handlerClickAddTag = (e) => {
    if ((e.keyCode === 13 || e.key === "Enter") && inputTag.trim() !== "") {
      dispatch(addTag(inputTag));
      setInputTag("");
    }
  };

  return (
    <input
      id="tagsInput"
      className="tags-input"
      onKeyDown={handlerClickAddTag}
      value={inputTag}
      onChange={(e) => setInputTag(e.target.value)}
    />
  );
};

export default TagInputField;
