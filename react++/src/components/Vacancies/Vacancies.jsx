import React, { useState } from "react";

import s from "./Vacancies.module.css";

import db from "./data.json";
import Tags from "./Tags/Tags";

const Vacancies = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const filterData = db.filter((item) => {
    return selectedTags.every((tag) =>
      [item.role, item.level, ...item.languages, ...item.tools].includes(tag)
    );
  });

  const handlerClickItemTag = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags((prev) => [...prev, tag]);
    }
  };

  return (
    <div className={s.content}>
      <div className={s.box}>
        <Tags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        <div className="items">
          <ul className={s.list}>
            {filterData.map((item) => (
              <li className={s.item} key={item.id}>
                <div className="img"></div>
                <div className={s.description}>
                  <div className={s.description_header}>
                    <h3 className={s.company}>{item.company}</h3>
                    {item.new && <span className={s.new}>NEW</span>}
                    {item.featured && (
                      <span className={s.featured}>FEATURED</span>
                    )}
                  </div>
                  <h2 className={s.position}>{item.position}</h2>
                  <div className={s.text}>
                    <span>{item.postedAt}</span>
                    <span>{item.contract}</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <ul className={s.skills}>
                  {[
                    item.role,
                    item.level,
                    ...item.languages,
                    ...item.tools,
                  ].map((el) => (
                    <li
                      key={el}
                      className={s.skill}
                      onClick={() => handlerClickItemTag(el)}
                    >
                      {el}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
