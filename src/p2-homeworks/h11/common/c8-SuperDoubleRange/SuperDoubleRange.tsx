import React from "react";

// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import s from "./SuperDoubleRange.module.css";

// const useStyles = makeStyles({
//   root: {
//     width: 300
//   }
// });

// function RangeSlider() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState([20, 37]);

//   const handleChange = (event: any, newValue: any) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <Typography id="range-slider" gutterBottom>
//         Temperature range
//       </Typography>
//       <Slider
//         value={value}
//         onChange={handleChange}
//         valueLabelDisplay="on"
//         aria-labelledby="range-slider"
//         getAriaValueText={valuetext}
//       />
//     </div>
//   );
// }

// function valuetext(value: any) {
//   return `${value}°C`;
// }

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
  min = 0,
  max = 60,
  step = 1,
  disable = false
  // min, max, step, disable, ...
}) => {
  // сделать самому, можно подключать библиотеки

  const onChangeCallback = (e: any, value: any) => {
    console.log("onchangeCallback: ", value);
    onChangeRange && onChangeRange(value);
  };

  console.log("VALUE:", value);
  return (
    <>
      {/* <input type={"range"} value={value} /> */}
      {/* DoubleRange */}
      {/* <RangeSlider onChange={onChangeCallback} value={value} /> */}
      {/* ----- */}
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
