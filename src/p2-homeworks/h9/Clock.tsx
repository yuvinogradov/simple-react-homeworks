import React, { useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from "./Clock.module.css";

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>();
  const [show, setShow] = useState<boolean>(false);

  const stop = () => {
    clearInterval(timerId);
    setDate(undefined);
    // stop
  };
  const start = () => {
    stop();
    const dateObj = new Date(); // устанавливаем тут значение,
    setDate(dateObj); // чтобы время сразу отображалось

    const id: number = window.setInterval(() => {
      const dateObj = new Date();
      setDate(dateObj);
    }, 1000);
    setTimerId(id);
    console.log(dateObj);
  };

  const onMouseEnter = () => {
    setShow(true);
  };
  const onMouseLeave = () => {
    setShow(false);
  };

  const stringTime = date
    ? date?.getHours() +
      ":" +
      ("00" + date?.getMinutes()).slice(-2) +
      ":" +
      ("00" + date?.getSeconds()).slice(-2)
    : "Press start"; //"Time"; // fix with date

  const stringDate = date
    ? ("00" + date?.getDate()).slice(-2) +
      "." +
      ("00" + date?.getMonth() + 1).slice(-2) +
      "." +
      date?.getFullYear()
    : undefined; //"Date"; // fix with date

  return (
    <div>
      <div className={s.dateTimeBox}>
        <div
          className={s.clock}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {stringTime}
        </div>

        {show && <div className={s.date}>{stringDate}</div>}
      </div>
      <SuperButton onClick={start}>start</SuperButton>
      <SuperButton onClick={stop}>stop</SuperButton>
    </div>
  );
}

export default Clock;
