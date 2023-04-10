import React from "react";

import s from "./Question.module.css";

const json = {
  data: [
    { question: "Сколько вам лет?", id: 1 },
    { question: "Как вас зовут?", id: 2 },
    { question: "В каком городе вы живете?", id: 3 },
    { question: "Ваш любимый цвет?", id: 4 },
    { question: "У вас есть собака?", id: 5 },
    { question: "Любимая музыка?", id: 6 },
  ],
};

const Question = () => {
  // сделали объект с пустимы значениями из массива
  const [answers, setAnswers] = React.useState(
    json.data.reduce((target, key, index) => {
      target[key.question] = "";
      return target;
    }, {})
  );

  // при вводе текста в инпут меняем значения нужного нам свойства
  const handlerInput = (e, quest) => {
    setAnswers((prev) => ({ ...prev, [quest]: e.target.value }));
  };

  // отправка объекта в стор
  const handlerClickButton = () => {
    localStorage.setItem("questions_232535475234", JSON.stringify(answers));
  };

  // проверка на заполнение всех поллей
  const dis = Object.values(answers).every((el) => el);

  return (
    <div className={s.questions}>
      {json.data.map((el) => (
        <div key={el.id} className={s.question}>
          <span>{el.question}</span>
          <input
            placeholder="Text"
            value={answers[el.question]}
            onChange={(e) => handlerInput(e, el.question)}
          />
        </div>
      ))}

      <button disabled={!dis} onClick={handlerClickButton}>
        Отправить
      </button>
    </div>
  );
};

export default Question;
