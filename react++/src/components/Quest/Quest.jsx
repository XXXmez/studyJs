import React, { useState } from "react";

const questions = [
  {
    id: 1,
    title: "Столица Канады?",
    list: [
      { answer: "Оттава", term: true },
      { answer: "Ванкувер", term: false },
      { answer: "Мельбурн", term: false },
      { answer: "Чиконтен", term: false },
    ],
  },
  {
    id: 2,
    title: "Сколько людей живет в РФ?",
    list: [
      { answer: "117 млн.", term: false },
      { answer: "162 млн.", term: false },
      { answer: "155 млн.", term: false },
      { answer: "144 млн.", term: true },
    ],
  },
  {
    id: 3,
    title: "Расстояние от Москвы до Владивостока?",
    list: [
      { answer: "2000 км", term: false },
      { answer: "3500 км", term: false },
      { answer: "6000 км", term: false },
      { answer: "9000 км", term: true },
    ],
  },
  {
    id: 4,
    title: "2 + 2?",
    list: [
      { answer: "4", term: true },
      { answer: "5", term: false },
      { answer: "6", term: false },
      { answer: "7", term: false },
    ],
  },
  {
    id: 5,
    title: "2 + 3?",
    list: [
      { answer: "4", term: false },
      { answer: "5", term: true },
      { answer: "6", term: false },
      { answer: "7", term: false },
    ],
  },
  {
    id: 6,
    title: "2 + 4?",
    list: [
      { answer: "4", term: false },
      { answer: "5", term: false },
      { answer: "6", term: true },
      { answer: "7", term: false },
    ],
  },
  {
    id: 7,
    title: "2 + 5?",
    list: [
      { answer: "4", term: false },
      { answer: "5", term: false },
      { answer: "6", term: false },
      { answer: "7", term: true },
    ],
  },
];

const Quest = () => {
  const [activeQuery, setActiveQuery] = useState(1);
  const [replyUser, setRepltyUser] = useState([]);
  const [record, setRecord] = useState(false);

  const style = (id, ind) => {
    return replyUser[id - 1]
      ? { background: "green" }
      : replyUser[id - 1] === false
      ? { background: "red" }
      : ind + 1 === activeQuery
      ? { background: "orange" }
      : { background: "gray" };
  };

  const handlerQuery = (index) => {
    setRepltyUser((prev) => [
      ...prev,
      questions[activeQuery - 1].list[index].term,
    ]);

    setActiveQuery((prev) => {
      // if (prev < questions.length)
      return prev + 1;
      // return prev;
    });

    console.log("len: ", activeQuery, questions.length);
    if (activeQuery === questions.length) {
      localStorage.getItem("recordeQuest5448797") <
      [...replyUser, questions[activeQuery - 1].list[index].term].filter(
        (el) => el === true
      ).length
        ? setRecord(true)
        : setRecord(false);

      localStorage.setItem(
        "recordeQuest5448797",
        [...replyUser, questions[activeQuery - 1].list[index].term].filter(
          (el) => el === true
        ).length
      );
      console.log([...replyUser, questions[activeQuery - 1].list[index].term]);
    }
  };

  const restart = () => {
    setRepltyUser([]);
    setActiveQuery(1);
  };

  return (
    <div className="questionnaire">
      <div className="page" style={{ display: "flex", gap: "10px" }}>
        {questions.map((el, ind) => (
          <div className="quest-number" key={el.id} style={style(el.id, ind)}>
            {ind + 1}
          </div>
        ))}
      </div>
      <div className="quest-answer">
        {activeQuery > questions.length ? (
          <>
            <div>
              Результат: {replyUser.filter((el) => el).length}/
              {questions.length} верных ответов
            </div>
            {record && (
              <div>
                Позравляем! <b>{replyUser.filter((el) => el).length}</b> это ваш
                новый рекорд
              </div>
            )}
            <div style={{ textAlign: "center" }}>
              <button onClick={restart} className="button-restart">
                🔃
              </button>
            </div>
          </>
        ) : (
          <>
            Вопрос {activeQuery}/{questions.length}
            <span>{questions[activeQuery - 1]?.title}</span>
            {questions[activeQuery - 1]?.list.map((el, ind) => (
              <button
                key={ind}
                onClick={() => handlerQuery(ind)}
                className="button-quest"
              >
                {ind + 1}. {el.answer}
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Quest;
