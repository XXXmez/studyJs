import React, { useEffect, useRef } from "react";
import qs from "qs";

import s from "./Pagination.module.css";

const Pagination = ({
  countPostsPage,
  countPosts,
  currentPage,
  setCurrentPage,
}) => {
  const fisrtLoad = useRef(false);
  const pageNumbers = [];
  const countPage = Math.ceil(countPosts / countPostsPage);

  for (let i = 1; i <= countPage; i++) {
    pageNumbers.push(i);
  }

  const handlerPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const handlerNextPage = (ind) => {
    if (ind) {
      setCurrentPage(ind);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const urlPage = (page) => {
    const urlQs = qs.stringify({ page });

    window.history.pushState(
      null,
      null,
      `${window.location.pathname}?${urlQs}`
    );
  };

  useEffect(() => {
    if (fisrtLoad.current) {
      urlPage(currentPage);
    }
    fisrtLoad.current = true;
  }, [currentPage]);

  return (
    <div className={s.pagination}>
      <button disabled={1 === currentPage} onClick={handlerPrevPage}>
        Назад
      </button>
      <div className={s.pages}>
        {pageNumbers.map((page) => (
          <button
            onClick={() => handlerNextPage(page)}
            key={page}
            style={currentPage === page ? { color: "#7EBC3C" } : {}}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        disabled={countPage === currentPage}
        onClick={() => handlerNextPage()}
      >
        Далее
      </button>
    </div>
  );
};

export default Pagination;
