import React from "react";
import Slider from "@material-ui/core/Slider";
import s from "./SuperDoubleRange.module.css";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void;
    value: [number, number];
    min?: number;
    max?: number;
    step?: number;
    disable?: boolean;
    // min, max, step, disable, ...
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
                                                                   onChangeRange,
                                                                   value,
                                                                   min,
                                                                   max,
                                                                   step = 1,
                                                                   disable = false
                                                                   // min, max, step, disable, ...
                                                               }) => {
    // сделать самому, можно подключать библиотеки

    const onChangeCallback = (e: any, value: any) => {
        console.log("onchangeCallback: ", value);
        onChangeRange && onChangeRange(value);
    };

    return (
        <>
            <Slider
                className={s.slider}
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={min}
                max={max}
                step={step}
                disabled={disable}

                // getAriaValueText={valuetext}
            />
        </>
    );
};

export default SuperDoubleRange;
