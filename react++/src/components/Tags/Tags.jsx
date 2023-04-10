import React, { useState } from "react";
import "./Tags.css";

const Tags = () => {
  const [dataTags, setDataTags] = useState(["JavaScript", "Python"]);
  const [inputTag, setInputTag] = useState("");

  const addTag = (e) => {
    if (e.keyCode === 13 || e.key === "Enter") {
      setDataTags((prev) => [...prev, inputTag]);
      setInputTag("");
    }
  };

  const deleteTag = (index) => {
    setDataTags((prev) => prev.filter((_, ind) => ind !== index));
  };

  return (
    <label className="tags" htmlFor="tagsInput">
      {dataTags.map((el, ind) => (
        <div className="tag" key={ind}>
          <span>{el}</span>
          <button onClick={() => deleteTag(ind)}>❌</button>
        </div>
      ))}
      <input
        id="tagsInput"
        className="tags-input"
        onKeyDown={(e) => addTag(e)}
        value={inputTag}
        onChange={(e) => setInputTag(e.target.value)}
      />
    </label>
  );
};

export default Tags;
