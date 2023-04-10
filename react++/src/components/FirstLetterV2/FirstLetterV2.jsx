import React from "react";
import { v4 as uuidv4 } from "uuid";

import users from "./data";

const FirstLetterV2 = () => {
  const sortedUsers = users.sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );

  const newArr = [];
  let currentLetter = "";

  sortedUsers.forEach((el) => {
    if (currentLetter !== el.lastName[0]) {
      currentLetter = el.lastName[0];
      newArr.push({
        id: uuidv4(),
        letter: el.lastName[0],
        type: "letterBlock",
      });
    }
    newArr.push(el);
  });

  return (
    <div>
      {newArr.map((el) => (
        <div key={el.id}>
          {el.type === "letterBlock" ? (
            <h2>{el.letter}</h2>
          ) : (
            <div>{el.lastName + " " + el.firstName}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FirstLetterV2;
