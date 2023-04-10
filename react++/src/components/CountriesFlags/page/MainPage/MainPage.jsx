import React from "react";
import Filters from "../../components/Filters/Filters";
import Items from "../../components/Items/Items";

const MainPage = ({
  regions,
  selectRegion,
  setSelectRegion,
  inputSearch,
  setInputSearch,
  filterData,
  history,
  setHistory,
}) => {
  return (
    <>
      <Filters
        regions={regions}
        selectRegion={selectRegion}
        setSelectRegion={setSelectRegion}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
      />
      <Items data={filterData} history={history} setHistory={setHistory} />
    </>
  );
};

export default MainPage;
