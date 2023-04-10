import React from "react";

import "./Area.css";
import ContentBlock from "./ContentBlock";

const dataWells = [{ id: 1, x: "", y: "" }];
const dataOpening = [{ id: 1, x: "", y: "" }];

const Area = () => {
  const [wells, setWells] = React.useState(dataWells);
  const [opening, setOpening] = React.useState(dataOpening);
  // const [area, setArea] = React.useState(0);

  const saveX = (e, id, elem) => {
    if (elem === "wall") {
      setWells((prev) =>
        prev.map((el) => (el.id === id ? { ...el, x: e.target.value } : el))
      );
    }
    if (elem === "opening") {
      setOpening((prev) =>
        prev.map((el) => (el.id === id ? { ...el, x: e.target.value } : el))
      );
    }
  };

  const saveY = (e, id) => {
    setWells((prev) =>
      prev.map((el) => (el.id === id ? { ...el, y: e.target.value } : el))
    );
  };

  const addElem = (elem) => {
    if (elem === "wall") {
      setWells((prev) => [
        ...prev,
        { id: prev[prev.length - 1].id + 1, x: "", y: "" },
      ]);
    }
    if (elem === "opening") {
      setOpening((prev) => [
        ...prev,
        { id: prev[prev.length - 1].id + 1, x: "", y: "" },
      ]);
    }
  };
  const delElem = (id) => {
    setWells((prev) => prev.filter((el) => el.id !== id));
  };

  const area = wells.map((el) => el.x * el.y).reduce((acc, tr) => acc + tr, 0);

  return (
    <div className="area">
      {wells.map((el, ind) => (
        <ContentBlock
          name={"wall"}
          key={el.id}
          ind={ind}
          id={el.id}
          x={el.x}
          y={el.y}
          saveX={saveX}
          saveY={saveY}
          del={delElem}
          color={"#c9f9f9"}
        />
      ))}
      <button onClick={() => addElem("wall")} className="content-button">
        Add wall
      </button>
      <div>Area: {area}</div>
      {opening.map((el, ind) => (
        <ContentBlock
          name={"opening"}
          key={el.id}
          ind={ind}
          id={el.id}
          x={el.x}
          y={el.y}
          saveX={saveX}
          saveY={saveY}
          del={delElem}
          color={"#e9c9f9"}
        />
      ))}
      <button onClick={() => addElem("opening")} className="content-button">
        Add opening
      </button>
    </div>
  );
};

export default Area;
