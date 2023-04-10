import React from "react";

import Btns from "../../components/Btns/Btns";
import Select from "../../components/Select/Select";
import Time from "../../components/Time/Time";

const TradePage = ({
  data,
  activeSelect,
  setActiveSelect,
  handlerOpenModal,
}) => {
  return (
    <>
      <Time />
      <Select data={data} active={activeSelect} setActive={setActiveSelect} />
      <Btns
        data={data}
        activeSelect={activeSelect}
        handlerOpenModal={handlerOpenModal}
      />
    </>
  );
};

export default TradePage;
