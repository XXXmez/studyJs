import React from "react";
import { Link } from "react-router-dom";

import ListTrade from "../../components/ListTrade/ListTrade";

const ArchivePage = ({ dataTrade }) => {
  return (
    <>
      {dataTrade.length > 0 ? (
        <ListTrade dataTrade={dataTrade} />
      ) : (
        <div>
          <h2>The list of operations is empty</h2>
          <Link to={"/"}>Back</Link>
        </div>
      )}
    </>
  );
};

export default ArchivePage;
