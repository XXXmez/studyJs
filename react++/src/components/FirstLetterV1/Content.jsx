import React from "react";

const Element = ({ word, words }) => {
  return (
    <div>
      <h2>{word}</h2>
      {words.map((el, ind) => (
        <div key={ind}>
          {el.lastName} {el.firstName}
        </div>
      ))}
    </div>
  );
};

const Сontent = ({ obj }) => {
  const letters = Object.keys(obj);

  return (
    <div>
      {letters.map((el, ind) => (
        <Element key={ind} word={el} words={obj[el]} />
      ))}
    </div>
  );
};

export default Сontent;
