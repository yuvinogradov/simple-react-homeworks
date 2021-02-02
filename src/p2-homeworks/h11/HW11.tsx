import React, { useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import s from "./HW11.module.css";

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);

  const changeValue1Handler = (e: any) => {
    setValue1(e.currentTarget.value);
  };

  const changeValue2Handler = (e: any) => {
    setValue2(e.currentTarget.value);
  };

  return (
    <div>
      <hr />
      homeworks 11
      {/*should work (должно работать)*/}
      <div>
        <div className={s.rangeValue}>{value1}</div>
        <SuperRange
          onChange={changeValue1Handler}
          value={value1}
          // сделать так чтоб value1 изменялось
        />
      </div>
      <div>
        <span>{value1}</span>
        <SuperDoubleRange
        // сделать так чтоб value1 и value2 изменялось
        />
        <span>{value2}</span>
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
