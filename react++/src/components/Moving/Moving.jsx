import React, { useState } from "react";

import s from "./Moving.module.css";

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

function Moving() {
  const [words, setWords] = useState(["one", "two", "three"]);
  const [newWord, setNewWord] = useState("");

  const handleAddWord = () => {
    if (newWord.trim() === "") {
      return;
    }
    setWords([...words, newWord.trim()]);
    setNewWord("");
  };

  const handleMoveUp = (index) => {
    if (index === 0) {
      return;
    }

    const newWords = [...words];

    [newWords[index - 1], newWords[index]] = [
      newWords[index],
      newWords[index - 1],
    ];

    setWords(newWords);
  };

  const handleMoveDown = (index) => {
    if (index === words.length - 1) {
      return;
    }

    const newWords = [...words];

    [newWords[index], newWords[index + 1]] = [
      newWords[index + 1],
      newWords[index],
    ];

    setWords(newWords);
  };

  return (
    <div className={s.box}>
      <div className="input">
        <input
          type="text"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
        />
        <button onClick={handleAddWord}>Add</button>
      </div>
      <ul className={s.list}>
        {words.map((word, index) => (
          <li className={s.item} key={index}>
            {index + 1}. {word}
            <div className={s.controls}>
              <button
                className={s.control}
                onClick={() => handleMoveUp(index)}
                disabled={index === 0}
              >
                <TiArrowSortedUp size={25} />
              </button>
              <button
                className={s.control}
                onClick={() => handleMoveDown(index)}
                disabled={index === words.length - 1}
              >
                <TiArrowSortedDown size={25} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Moving;
