import React from "react";
import { useSelector } from "react-redux";
import ItemsTag from "../ItemsTag/ItemsTag";

const ListTags = () => {
  const tags = useSelector((state) => state.tags);
  return (
    <>
      {tags.data.map((tag) => (
        <ItemsTag key={tag.id} tag={tag.text} id={tag.id} />
      ))}
    </>
  );
};

export default ListTags;
