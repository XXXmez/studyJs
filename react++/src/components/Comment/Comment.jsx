import React from "react";

import s from "./Comment.module.css";
import ListComent from "./Components/ListComent/ListComent";

const comments = [
  {
    id: 1,
    text: "Text1",
    includes: null,
  },
  {
    id: 2,
    text: "Text2",
    includes: [
      {
        id: 1,
        text: "Text2.1",
        includes: null,
      },
      {
        id: 2,
        text: "Text2.2",
        includes: [
          {
            id: 1,
            text: "Text2.2.1",
            includes: null,
          },
          {
            id: 2,
            text: "Text2.2.2",
            includes: null,
          },
          {
            id: 3,
            text: "Text2.2.3",
            includes: null,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    text: "Text3",
    includes: null,
  },
  {
    id: 4,
    text: "Text4",
    includes: [
      {
        id: 1,
        text: "Text4.1",
        includes: null,
      },
      {
        id: 2,
        text: "Text4.2",
        includes: [
          {
            id: 1,
            text: "Text4.2.1",
            includes: null,
          },
          {
            id: 2,
            text: "Text4.2.2",
            includes: null,
          },
        ],
      },
    ],
  },
];

const Commentator = () => {
  return (
    <div>
      <ListComent list={comments} />
    </div>
  );
};

export default Commentator;
