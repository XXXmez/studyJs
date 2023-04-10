import React from "react";

const Category = ({
  inputCategory,
  setInputCategory,
  activeIcons,
  icons = [],
  handlerIcons,
  setActiveIcons,
  addСategory,
}) => {
  return (
    <div className="container category">
      <h2>Добавить категорию</h2>
      <div>
        <label htmlFor="name">Введите название: </label>
        <input
          id="name"
          value={inputCategory}
          onChange={(e) => setInputCategory(e.target.value)}
        />
      </div>
      {activeIcons && (
        <div className="category-icons">
          {icons.map((el, ind) => (
            <span
              key={ind}
              onClick={() => handlerIcons(el)}
              className="category-icon"
            >
              {el}
            </span>
          ))}
        </div>
      )}
      <div>
        <button onClick={() => setActiveIcons((prev) => !prev)}>
          Выбрать иконку
        </button>
      </div>
      <button disabled={!inputCategory.length} onClick={addСategory}>
        Добавить категорию
      </button>
    </div>
  );
};

export default Category;
