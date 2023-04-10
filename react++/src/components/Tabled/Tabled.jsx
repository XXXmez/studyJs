import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";

import qs from "qs";

import Item from "./components/Item";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

import s from "./Tabled.module.css";

const urlPosts = "https://jsonplaceholder.typicode.com/posts";

const Tabled = () => {
  const COUNT_POST_PAGES = 10;
  const [dataPosts, setDataPosts] = useState([]);
  const [filtersData, setFiltersData] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [inputSeach, setInputSeach] = useState("");
  const inputSeachRef = useRef();
  const [sortType, setSortType] = useState("userId");

  const firstRequest = async () => {
    setLoadData(true);
    const res = await axios.get(urlPosts);
    setDataPosts(res.data);
    setFiltersData(res.data);
    setLoadData(false);
  };

  useEffect(() => {
    firstRequest();
  }, []);

  const currentPosts = [
    currentPage * COUNT_POST_PAGES - COUNT_POST_PAGES,
    currentPage * COUNT_POST_PAGES,
  ];

  const handlerClickSeacrh = () => {
    const search = inputSeachRef.current.value.trim();
    if (search) {
      setFiltersData(dataPosts);
      setFiltersData((prev) =>
        prev.filter(
          (el) =>
            String(el.userId).includes(search) ||
            el.title.includes(search) ||
            el.body.includes(search)
        )
      );
    } else {
      setFiltersData(dataPosts);
    }

    setCurrentPage(1);
  };

  const newData = () => {
    return [...filtersData].sort((a, b) => {
      if (sortType.includes("userId") && !sortType.includes("-")) {
        return a.userId - b.userId;
      }
      if (sortType.includes("userId") && sortType.includes("-")) {
        return b.userId - a.userId;
      }

      if (sortType.includes("title") && !sortType.includes("-")) {
        return a.title.localeCompare(b.title);
      }
      if (sortType.includes("title") && sortType.includes("-")) {
        return b.title.localeCompare(a.title);
      }

      if (sortType.includes("description") && !sortType.includes("-")) {
        return a.body.localeCompare(b.body);
      }
      if (sortType.includes("description") && sortType.includes("-")) {
        return b.body.localeCompare(a.body);
      }
      return 0;
    });
  };

  useEffect(() => {
    handlerClickSeacrh();
    setFiltersData(newData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);

  const handlerClickSort = (type) => {
    setSortType(type);
  };

  useEffect(() => {
    const urlSearch = window.location.search.slice(1);
    const search = qs.parse(urlSearch);

    if (search.page) {
      setCurrentPage(Number(search.page));
    }
  }, []);

  return (
    <div className={s.table}>
      <div className={s.table_container}>
        <Search
          value={inputSeach}
          setValue={setInputSeach}
          handlerClickSeacrh={handlerClickSeacrh}
          inputSeachRef={inputSeachRef}
        />
        <div className={s.table_main}>
          <Header sortType={sortType} handlerClickSort={handlerClickSort} />
          <div className={s.table_list}>
            {filtersData.slice(...currentPosts).map((post) => (
              <Item key={post.id} item={post} />
            ))}
            {loadData &&
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((_post, ind) => (
                <Item key={ind} />
              ))}
          </div>
        </div>

        <Pagination
          countPostsPage={COUNT_POST_PAGES}
          countPosts={filtersData.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Tabled;
