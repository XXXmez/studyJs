import React, { useState } from "react";

import "./WordCount.css";

const WordCount = () => {
  const [excludedWordsInput, setExcludedWordsInput] = useState("");
  const [excludedWords, setExcludedWords] = useState([]);
  const [textarea, setTextarea] = useState("");
  // const [countWords, setCountWords] = useState(0);
  // const [countExcludedWords, setCountExcludedWords] = useState(0);

  const handlerInputExcludedWord = () => {
    setExcludedWords((prev) => [...prev, excludedWordsInput.toLowerCase()]);
    setExcludedWordsInput("");
  };

  const deleteWord = (index) => {
    setExcludedWords((prev) => prev.filter((_, ind) => ind !== index));
  };

  // useEffect(() => {
  //   let count = 0;
  //   let countExcluded = 0;

  //   textarea
  //     .split(" ")
  //     .filter((el) => el !== "")
  //     .forEach((el) => {
  //       excludedWords.includes(el.toLowerCase()) ? countExcluded++ : count++;
  //     });

  //   setCountExcludedWords(countExcluded);
  //   setCountWords(count);
  // }, [excludedWords, textarea]);

  const count = textarea
    // eslint-disable-next-line no-useless-escape
    .replace(/[.,\/#!?$%\^&\*;:{}=\_`~()]/g, "")
    .split(" ")
    .filter((el) => el !== "")
    .filter((el) => !excludedWords.includes(el.toLowerCase())).length;

  const countExcluded =
    textarea.split(" ").filter((el) => el !== "").length - count;

  return (
    <div className="wordCount">
      <div className="wordCount-container">
        <textarea
          cols="50"
          rows="15"
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        ></textarea>
        {/* <p>Количество слов: {countWords}</p>
        <p>Количество исключенных слов: {countExcludedWords}</p> */}
        <p>{count}</p>
        <p>{countExcluded}</p>
      </div>
      <div className="wordCount-container">
        <p>Исключить из подсчета слов:</p>
        <input
          value={excludedWordsInput}
          onChange={(e) => setExcludedWordsInput(e.target.value)}
        />
        <button onClick={handlerInputExcludedWord}>Добавить</button>
        <div className="wordCount-excludeds">
          {excludedWords.map((el, ind) => (
            <div className="wordCount-excluded">
              <p key={ind}>{el}</p>
              <button onClick={() => deleteWord(ind)}>❌</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordCount;
