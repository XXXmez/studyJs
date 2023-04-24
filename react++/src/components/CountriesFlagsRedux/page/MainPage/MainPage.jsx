import React from "react";
import Filters from "../../components/Filters/Filters";
import Items from "../../components/Items/Items";

const MainPage = ({ setHistory }) => {
  return (
    <>
      <Filters />
      <Items setHistory={setHistory} />
    </>
  );
};

export default MainPage;
