import React from "react";
import { useDispatch } from "react-redux";
import { deleteTag } from "../../redux/tagsSlice";

const ItemsTag = ({ tag, id }) => {
  const dispatch = useDispatch();

  const handlerClickDeleteTag = (id) => {
    dispatch(deleteTag(id));
  };

  return (
    <div className="tag">
      <span>{tag}</span>
      <button onClick={() => handlerClickDeleteTag(id)}>❌</button>
    </div>
  );
};

export default ItemsTag;
