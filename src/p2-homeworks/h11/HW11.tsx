import React, { useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from "./HW11.module.css";

function HW11() {
  const [value1, setValue1] = useState(20);
  const [value2, setValue2] = useState(80);

  const changeValue1Handler = (e: any) => {
    setValue1(e.currentTarget.value);
  };

  const changeValuesHandler = (value: Array<any>) => {
    setValue1(value[0]);
    setValue2(value[1]);
  };

  return (
    <div>
      <hr />
      homeworks 11
      {/*should work (должно работать)*/}
      <div className={s.rangeContainer}>
        <div className={s.rangeValue}>{value1}</div>
        <SuperRange
          onChange={changeValue1Handler}
          value={value1}
          // сделать так чтоб value1 изменялось
        />
      </div>
      <div className={s.doubleRangeContainer}>
        <SuperDoubleRange
          value={[+value1, +value2]}
          onChangeRange={changeValuesHandler}
          min={0}
          max={100}
          // сделать так чтоб value1 и value2 изменялось
        />
        <div>{value1}</div>
        <div>{value2}</div>
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr />
    </div>
  );
}

export default HW11;
