import React, { useEffect, useState } from "react";

const TimerStartStop = () => {
  const [time, setTime] = useState(0);
  const [on, setOn] = useState(false);

  useEffect(() => {
    let timer;
    if (on) {
      timer = setTimeout(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [on, time]);

  return (
    <div>
      <span>{time}</span>
      <button onClick={() => setOn(true)}>start</button>
      <button onClick={() => setOn(false)}>stop</button>
    </div>
  );
};

export default TimerStartStop;
