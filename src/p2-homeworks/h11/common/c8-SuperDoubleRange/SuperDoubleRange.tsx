import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 300
  }
});

function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}

function valuetext(value: any) {
  return `${value}°C`;
}

type SuperDoubleRangePropsType = {
  onChangeRange?: (value: [number, number]) => void;
  value?: [number, number];
  // min, max, step, disable, ...
};

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  onChangeRange,
  value
  // min, max, step, disable, ...
}) => {
  // сделать самому, можно подключать библиотеки

  return (
    <>
      <input type={"range"} value={(10, 80)} />
      DoubleRange
      <RangeSlider />
    </>
  );
};

export default SuperDoubleRange;
