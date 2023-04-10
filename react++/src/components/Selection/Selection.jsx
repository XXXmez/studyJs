import React from "react";

const data = [
  { name: "Ivan", chek: false },
  { name: "Vlad", chek: false },
  { name: "Igor", chek: false },
  { name: "Dima", chek: false },
];

const Selection = () => {
  const [allCheck, setAllCheck] = React.useState(false);
  const [db, setDB] = React.useState(data);

  const clickToAll = () => {
    setAllCheck((prev) => !prev);
    setDB(db.map((el) => ({ ...el, chek: !allCheck })));
  };

  const clickToElem = (name) => {
    setDB(db.map((el) => (el.name === name ? { ...el, chek: !el.chek } : el)));
  };

  React.useEffect(() => {
    setAllCheck(db.every((el) => el.chek));
  }, [db]);

  return (
    <div>
      <div>
        <input checked={allCheck} type="checkbox" onChange={clickToAll} />
        <p>Выбрать всех сотрудников</p>
      </div>
      <div>
        {db.map((el) => (
          <div>
            <input
              type="checkbox"
              checked={el.chek}
              onChange={() => clickToElem(el.name)}
            />
            {el.name}
          </div>
        ))}
      </div>
      <div>
        <h2>Выбранные сотрудники</h2>
        {db
          .filter((el) => el.chek)
          .map((el) => (
            <span>{el.name}</span>
          ))}
      </div>
    </div>
  );
};

export default Selection;
