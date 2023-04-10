/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

const PaginationUrl = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const maxElement = 100;

  // const ref = React.useRef(true);

  // const getPosts = async () => {
  //   const json = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=1`
  //   );
  //   const res = await json.json();
  //   setData(res);
  // };

  // React.useEffect(() => {
  //   if (ref.current === false) {
  //     getPosts();
  //   }
  //   ref.current = true;
  // }, [page]);

  const getPosts = async () => {
    const json = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );
    const res = await json.json();
    setData(res);
  };

  React.useEffect(() => {
    getPosts();
  }, [page, limit]);

  const handlerSelectPage = (event) => {
    setLimit(event.target.value);
    setPage(1);
  };

  const handlerPrevPage = (event) => {
    setPage((prev) => prev - 1);
  };
  const handlerNextPage = (event) => {
    setPage((prev) => prev + 1);
  };
  const handlerFirstPage = (event) => {
    setPage(1);
  };
  const handlerLastPage = (event) => {
    setPage(maxElement / limit);
  };

  const prevBlock = page === 1;
  const nextBlock = page === maxElement / limit;

  return (
    <>
      {data.map((el) => (
        <h4 key={el.id}>{el.id}</h4>
      ))}

      <div style={{ display: "flex", gap: "5px" }}>
        <button
          disabled={prevBlock}
          onClick={handlerFirstPage}
          style={{ width: "40px", height: "20px" }}
        >
          {"<<<"}
        </button>
        <button
          disabled={prevBlock}
          onClick={handlerPrevPage}
          style={{ width: "40px", height: "20px" }}
        >
          {"<"}
        </button>
        <span>{page}</span>
        <button
          disabled={nextBlock}
          onClick={handlerNextPage}
          style={{ width: "40px", height: "20px" }}
        >
          {">"}
        </button>
        <button
          disabled={nextBlock}
          onClick={handlerLastPage}
          style={{ width: "40px", height: "20px" }}
        >
          {">>>"}
        </button>

        <select onChange={(e) => handlerSelectPage(e)}>
          <option>5</option>
          <option>10</option>
        </select>
      </div>
    </>
  );
};

export default PaginationUrl;
