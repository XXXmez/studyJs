import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import s from "./CountryPage.module.css";
import BorderCountryBtn from "./BorderCountryBtn/BorderCountryBtn";
import { useDispatch, useSelector } from "react-redux";
import { fetchFlagByName } from "../../redux/slice/flagSlice";
import { deleteLast } from "../../redux/slice/historySlice";
import LoaderSpiner from "../../components/LoaderSpiner/LoaderSpiner";

const CountryPage = () => {
  const dispatch = useDispatch();
  const flag = useSelector((state) => state.flag.data[0]);
  const loading = useSelector((state) => state.flag.loading);
  const history = useSelector((state) => state.history.data);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFlagByName(params.id));
  }, [params.id]);

  const handlerClickBack = () => {
    const lastPage = history[history.length - 1] || "/";
    dispatch(deleteLast());
    navigate(lastPage);
  };

  if (loading) {
    return <LoaderSpiner />;
  }

  if (!flag) {
    return (
      <div>
        <h2>Ошибка, город не найден!!!</h2>
        <button onClick={handlerClickBack} className={s.backBtn}>
          <BsArrowLeft /> Back
        </button>
      </div>
    );
  }

  return (
    <div className={s.box}>
      <div className={s.header}>
        <button onClick={handlerClickBack} className={s.backBtn}>
          <BsArrowLeft /> Back
        </button>
      </div>

      <div className={s.content}>
        <div className={s.img}>
          <img className={s.flag} src={flag.flags.svg} alt="" />

          <img className={s.gerb} src={flag.coatOfArms.svg} />
        </div>
        <div className={s.description}>
          <h2 className={s.country}>{flag.name.common}</h2>
          <div className={s.info}>
            <div>
              <b>Native Name:</b>{" "}
              <p>
                {typeof flag.name.nativeName === "object"
                  ? Object.values(flag.name.nativeName)[0].official
                  : ""}
              </p>
            </div>
            <div>
              <b>Population:</b> <p>{flag.population.toLocaleString()}</p>
            </div>
            <div>
              <b>Region:</b> <p>{flag.region}</p>
            </div>
            <div>
              <b>subregion:</b> <p>{flag.subregion}</p>
            </div>
            <div>
              <b>area:</b> <p>{flag.area.toLocaleString()} km²</p>
            </div>
            <div>
              <b>startOfWeek:</b> <p>{flag.startOfWeek}</p>
            </div>
            <div>
              <b>timezones:</b>{" "}
              {flag.timezones.map((el) => (
                <p key={el}>{el}</p>
              ))}
            </div>
            <div>
              <b>capital:</b> <p>{flag.capital}</p>
            </div>
            <div>
              <b>Top Level Domain:</b>
              {flag.tld ? flag.tld.map((el) => <p key={el}>{el}</p>) : "no"}
            </div>
            <div>
              <b>Currency:</b>{" "}
              {flag.currencies ? (
                Object.values(flag.currencies).map((el, ind) => (
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
              {flag.languages ? (
                Object.values(flag.languages).map((el, ind) => (
                  <p key={ind}>{el}</p>
                ))
              ) : (
                <p>-</p>
              )}
            </div>
            <div>
              <b>Borders:</b>{" "}
              <div className={s.bordersBtns}>
                {flag.borders
                  ? flag.borders.map((item) => (
                      <BorderCountryBtn key={item} item={item} />
                    ))
                  : "No border countries"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
