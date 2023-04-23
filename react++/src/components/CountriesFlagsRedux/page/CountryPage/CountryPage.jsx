import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import s from "./CountryPage.module.css";
import BorderCountryBtn from "./BorderCountryBtn/BorderCountryBtn";

const CountryPage = ({ data = [], filterData = [], history, setHistory }) => {
  const params = useParams();
  const navigate = useNavigate();

  const currentCountry = data.find((el) => el.name.common === params.id);

  const handlerClickBack = () => {
    const lastPage = history[history.length - 1] || "/";
    setHistory((prev) => {
      const newHistory = [...prev];
      newHistory.pop();
      return newHistory;
    });
    navigate(lastPage);
  };

  return (
    <>
      <div className={s.box}>
        <div className={s.header}>
          <button onClick={handlerClickBack} className={s.backBtn}>
            <BsArrowLeft /> Back
          </button>
        </div>
        {currentCountry ? (
          <div className={s.content}>
            <div className={s.img}>
              <img className={s.flag} src={currentCountry.flags.svg} alt="" />

              <img className={s.gerb} src={currentCountry.coatOfArms.svg} />
            </div>
            <div className={s.description}>
              <h2 className={s.country}>{currentCountry.name.common}</h2>
              <div className={s.info}>
                <div>
                  <b>Native Name:</b>{" "}
                  <p>
                    {typeof currentCountry.name.nativeName === "object"
                      ? Object.values(currentCountry.name.nativeName)[0]
                          .official
                      : ""}
                  </p>
                </div>
                <div>
                  <b>Population:</b>{" "}
                  <p>{currentCountry.population.toLocaleString()}</p>
                </div>
                <div>
                  <b>Region:</b> <p>{currentCountry.region}</p>
                </div>
                <div>
                  <b>subregion:</b> <p>{currentCountry.subregion}</p>
                </div>
                <div>
                  <b>area:</b> <p>{currentCountry.area.toLocaleString()} km²</p>
                </div>
                <div>
                  <b>startOfWeek:</b> <p>{currentCountry.startOfWeek}</p>
                </div>
                <div>
                  <b>timezones:</b>{" "}
                  {currentCountry.timezones.map((el) => (
                    <p key={el}>{el}</p>
                  ))}
                </div>
                <div>
                  <b>capital:</b> <p>{currentCountry.capital}</p>
                </div>
                <div>
                  <b>Top Level Domain:</b>
                  {currentCountry.tld
                    ? currentCountry.tld.map((el) => <p key={el}>{el}</p>)
                    : "no"}
                </div>
                <div>
                  <b>Currency:</b>{" "}
                  {currentCountry.currencies ? (
                    Object.values(currentCountry.currencies).map((el, ind) => (
                      <p key={ind}>
                        {el.name} {el.symbol}
                      </p>
                    ))
                  ) : (
                    <p>-</p>
                  )}
                </div>
                <div>
                  <b>languages :</b>
                  {currentCountry.languages ? (
                    Object.values(currentCountry.languages).map((el, ind) => (
                      <p key={ind}>{el}</p>
                    ))
                  ) : (
                    <p>-</p>
                  )}
                </div>
                <div>
                  <b>Borders:</b>{" "}
                  <div className={s.bordersBtns}>
                    {currentCountry.borders
                      ? currentCountry.borders.map((item) => (
                          <BorderCountryBtn
                            key={item}
                            data={data}
                            item={item}
                            setHistory={setHistory}
                          />
                        ))
                      : "No border countries"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          "404"
        )}
      </div>
    </>
  );
};

export default CountryPage;
