import React from "react";

const ContentBlock = ({
  id,
  name,
  ind,
  x,
  y,
  saveX,
  saveY,
  del,
  color = "",
}) => {
  return (
    <div className="content" style={{ background: color }}>
      <h3 className="content-title">
        {name} {ind + 1}
      </h3>
      <div className="content-info">
        <div className="content-input">
          <span>Length</span>
          <input value={x} onChange={(e) => saveX(e, id)} />
        </div>
        <div className="content-input">
          <span>Width</span>
          <input value={y} onChange={(e) => saveY(e, id)} />
        </div>
      </div>
      <button onClick={() => del(id)} className="content-del">
        Х
      </button>
    </div>
  );
};

export default ContentBlock;
