import React from "react";
import Content from "./Content";

import users from "./data";

const FirstLetterV1 = () => {
  const sortedUsers = users.sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );
  const usersByLettere = {};

  sortedUsers.forEach((el) => {
    return usersByLettere[el.lastName[0]]
      ? usersByLettere[el.lastName[0]].push(el)
      : (usersByLettere[el.lastName[0]] = [el]);
  });

  return (
    <div>
      <Content obj={usersByLettere} />
    </div>
  );
};

export default FirstLetterV1;
