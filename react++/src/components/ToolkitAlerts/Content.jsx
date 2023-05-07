import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlerAddAlert } from "./redux/alertSlice";

handlerAddAlert;

const Content = () => {
  const dispatch = useDispatch();
  const alerts = useSelector((state) => state.alert.alerts);

  return (
    <div>
      {alerts.map((alert) => (
        <p key={alert.id}>{alert.message}</p>
      ))}
      <button
        onClick={() =>
          dispatch(
            handlerAddAlert(
              { id: Math.random(), message: "Первое сообщение" },
              100
            )
          )
        }
      >
        message 1
      </button>
      <button
        onClick={() =>
          dispatch(
            handlerAddAlert(
              { id: Math.random(), message: "Второе сообщение" },
              500
            )
          )
        }
      >
        message 2
      </button>
    </div>
  );
};

export default Content;
