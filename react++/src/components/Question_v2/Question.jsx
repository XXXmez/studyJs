import React from "react";

import s from "./Question.module.css";

const Question2 = () => {
  return (
    <div className={s.wrapper}>
      <h2>Заполните форму</h2>
      <p>* поля обязательное для заполнения</p>
      <form className={s.form}>
        <div className={s.formBlock}>
          <input placeholder="Фамилия*" type="text" />
          <input placeholder="Имя*" type="text" />
          <input placeholder="Отчество" type="text" />
          <input placeholder="Дата рождения*" type="date" />
          <input placeholder="Номер телефона" type="tel" />
          <input placeholder="Пол" type="text" />
          <select>
            <option>Группа клиентов</option>
            <option>VIP</option>
            <option>Проблемные</option>
            <option>ОМС</option>
          </select>
          <select>
            <option>Лечащий врач</option>
            <option>Иванов</option>
            <option>Захаров</option>
            <option>Чернышева</option>
          </select>
          <label htmlFor="sms">Не отправлять смс</label>
          <input id="sms" type="checkbox" />
        </div>
        <div className={s.formBlock}>
          <h3>Адрес:</h3>
          <input placeholder="Индекс" type="text" />
          <input placeholder="Страна" type="text" />
          <input placeholder="Область" type="text" />
          <input placeholder="Город*" type="text" />
          <input placeholder="Улица" type="text" />
          <input placeholder="Дом" type="text" />
        </div>
        <div className={s.formBlock}>
          <h3>Паспорт:</h3>
          <select>
            <option>Тип документа</option>
            <option>Паспорт</option>
            <option>Свидетельство о рождении</option>
            <option>Вод. удостоверение</option>
          </select>
          <input placeholder="Серия" type="text" />
          <input placeholder="Номер" type="text" />
          <input placeholder="Кем выдан" type="text" />
          <input placeholder="Дата выдачи*" type="text" />
        </div>

        <button>Отправить</button>
      </form>
    </div>
  );
};

export default Question2;
