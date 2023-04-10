import React, { useState, useEffect } from "react";

import s from "./Time.module.css";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerUpdateTime = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerUpdateTime);
    };
  }, []);

  return (
    <div className={s.time}>
      {/* {`${currentTime.getHours()}:${currentTime.getMinutes(
    "MM"
  )}:${currentTime.getSeconds()}`} */}
      {currentTime.toLocaleTimeString()}
    </div>
  );
};

export default Time;
