import React, { useState } from "react";

import "./HoverSmile.css";

const arrSmile = [false, false, false, false, false, false, false, false];

const HoverSmile = () => {
  const [dataSmile, setDataSmile] = useState(arrSmile);

  const handler = (e) => {
    setDataSmile((prevState) =>
      prevState.map((smile, i) => (i === e ? !smile : smile))
    );
  };

  return (
    <div className="hv1">
      <p>
        Улыбается {dataSmile.filter((e) => e).length} Грустят{" "}
        {dataSmile.filter((e) => e === false).length}
      </p>
      {dataSmile.map((smile, ind) => (
        <div key={ind} className="hv1_1" onMouseEnter={() => handler(ind)}>
          {smile ? "😁" : "😞"}
        </div>
      ))}
    </div>
  );
};

export default HoverSmile;
