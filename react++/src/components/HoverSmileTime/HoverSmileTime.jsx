import React, { useEffect, useState } from "react";

import "./HoverSmileTime.css";

const HoverSmileTime = () => {
  const arrSmile = Array.from({ length: "144" }, () => false);
  const [second, setSecond] = useState(5);
  const [start, setStart] = useState(false);
  const [dataSmile, setDataSmile] = useState([...arrSmile]);

  const handler = (e) => {
    if (start) {
      setDataSmile((prev) => prev.map((smile, i) => (i === e ? true : smile)));
    }
  };

  const handlerStart = () => {
    setStart(true);
  };
  const handlerReset = () => {
    setSecond(5);
    setStart(true);
    setDataSmile([...arrSmile]);
  };

  useEffect(() => {
    let intervalId = null;
    if (start) {
      intervalId = setInterval(() => {
        setSecond((prev) => prev - 1);
      }, 1000);
    }
    if (second === 0) {
      clearInterval(intervalId);
      setStart(false);
    }
    return () => clearInterval(intervalId);
  }, [second, start]);

  return (
    <div className="hv1">
      <div className="hv1_3">
        {!start && second === 5 && (
          <p>Успейте навести на наибольшее кол-во смайлов.</p>
        )}
        {start && <p>Осталось {second} сек.</p>}
        {!start && second === 0 && (
          <p>
            Вы успели развеселить {[...dataSmile].filter((e) => e).length}/144
            смайлов
          </p>
        )}
        <button onClick={handlerStart}>Старт</button>
        <button onClick={handlerReset}>Заново</button>
      </div>
      <div className="hv1_2">
        {dataSmile.map((smile, ind) => (
          <div key={ind} className="hv1_1" onMouseEnter={() => handler(ind)}>
            {smile ? "😁" : "😞"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverSmileTime;
