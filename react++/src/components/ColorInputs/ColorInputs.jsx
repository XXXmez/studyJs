import React from "react";
import { useState } from "react";
// import "./ColorInputs.css";

const ColorInputs = () => {
  const [colors, setColor] = useState({ one: "#9d1818", two: "#2fdf9e" });
  const [currentColor, setCurrentColor] = useState(
    `linear-gradient(135deg, ${colors.one}, ${colors.two})`
  );

  const onClickButton = (e) => {
    e.preventDefault();
    setCurrentColor(`linear-gradient(135deg, ${colors.one}, ${colors.two})`);
  };

  return (
    <div
      className="color-inputs"
      style={{
        background: `${currentColor}`,
      }}
    >
      <form>
        <input
          type={"color"}
          defaultValue={colors.one}
          onChange={(e) =>
            setColor((prev) => ({ ...prev, one: e.target.value }))
          }
        />
        <input
          type={"color"}
          defaultValue={colors.two}
          onChange={(e) =>
            setColor((prev) => ({ ...prev, two: e.target.value }))
          }
        />
        <button onClick={(e) => onClickButton(e)}>Применить</button>
      </form>
    </div>
  );
};

export default ColorInputs;
