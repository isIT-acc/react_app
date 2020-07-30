import React from "react";

import PropTypes from "prop-types";
import Select from "@material-ui/core/Select";

import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "../../node_modules/react-vis/dist/style.css";

import { curveCatmullRom } from "d3-shape";
import Plot from "./Plot";
// import AutoSizer from "react-virtualized-auto-sizer";

import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  LineMarkSeries,
  WhiskerSeries,
  MarkSeries,
  AreaSeries,
  makeVisFlexible,
  makeWidthFlexible,
} from "../../node_modules/react-vis";

// const FlexibleXYPlot = makeVisFlexible(XYPlot);
const sredneeZaSmenu = 61.45;
const MySelect = withStyles({
  root: {
    width: "10rem",
    border: "1px solid #e2e2e2",
    fontSize: "0.7rem",
    padding: "0.4rem 0.8rem",
  },
  icon: {
    fontSize: "1rem",
    color: "rgb(168, 168, 168)",
    marginTop: "0.25rem",
    marginRight: "0.25rem",
  },
})(Select);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: "10rem",
    border: "1px solid #e2e2e2",
    fontSize: "0.7rem",
    padding: "0.15rem 0.8rem",
  },
  icon: {
    fontSize: "0.3rem",
    color: "red",
  },
  nativeInput: {},
}));

const MetalContent = () => {
  // Plot.propTypes = {
  //   width: PropTypes.number,
  // };

  // const FlexibleXYPlot = makeWidthFlexible(Plot);

  const dataForPlot = [
    { x: 0.5, y: 61.44, size: 0, yVariance: 0.1 },
    { x: 1, y: 61.65, size: 4, yVariance: 0.1 },
    { x: 2, y: 61.67, size: 4, yVariance: 0.1 },
    { x: 3, y: 61.5, size: 4, yVariance: 0.1 },
    { x: 4, y: 61.49, size: 4, yVariance: 0.1 },
    { x: 5, y: 61.35, size: 4, yVariance: 0.1 },
    { x: 6, y: 61.43, size: 4, yVariance: 0.1 },
    { x: 7, y: 61.45, size: 4, yVariance: 0.1 },
    { x: 8, y: 61.43, size: 4, yVariance: 0.1 },
    { x: 9, y: 61.66, size: 4, yVariance: 0.1 },
    { x: 10, y: 61.46, size: 4, yVariance: 0.1 },
    { x: 11, y: 61.42, size: 4, yVariance: 0.12 },
    { x: 12, y: 61.45, size: 4, yVariance: 0.3 },
  ];
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [age, setAge] = React.useState("");
  const classes = useStyles();

  const arr = [
    { val: 61.44, time: new Date(2020, 7, 26, 1, 0, 0), fact: false },
    { val: 61.65, time: new Date(2020, 7, 26, 1, 0, 0), fact: false },
    { val: 61.67, time: new Date(2020, 7, 26, 2, 0, 0), fact: false },
    { val: 61.5, time: new Date(2020, 7, 26, 3, 0, 0), fact: false },
    { val: 61.49, time: new Date(2020, 7, 26, 4, 0, 0), fact: false },
    { val: 61.35, time: new Date(2020, 7, 26, 5, 0, 0), fact: false },
    { val: 61.43, time: new Date(2020, 7, 26, 6, 0, 0), fact: false },
    { val: 61.45, time: new Date(2020, 7, 26, 7, 0, 0), fact: false },
    { val: 61.43, time: new Date(2020, 7, 26, 8, 0, 0), fact: false },
    { val: 61.66, time: new Date(2020, 7, 26, 9, 0, 0), fact: true },
    { val: 61.46, time: new Date(2020, 7, 26, 10, 0, 0), fact: false },
    { val: 61.42, time: new Date(2020, 7, 26, 11, 0, 0), fact: false },
    { val: 61.45, time: new Date(2020, 7, 26, 12, 0, 0), fact: false },
  ];

  const countAverageVal = (array) => {
    let average = 0;
    array.forEach((value) => {
      average += value.val;
    });
    return average / array.length;
  };

  const showValue = (value, index) => {
    if (index >= 9)
      return (
        <div style={cellContainerStyle} key={index}>
          <div style={value.fact ? factNumStyle : forecastNumStyle}>
            {String(value.val.toFixed(2)).replace(".", ",")}
          </div>
          <div style={subheadingsStyle}>
            {value.fact ? "факт " : "прогноз "}
            {value.time.getHours() +
              ":" +
              (value.time.getMinutes() < 10
                ? "0" + value.time.getMinutes()
                : value.time.getMinutes())}
          </div>
        </div>
      );
  };

  const showAverageValue = (array) => {
    return (
      <div>
        <div style={forecastNumStyle}>
          {String(sredneeZaSmenu).replace(".", ",")}
          {/* {String(countAverageVal(array).toFixed(2)).replace(".", ",")} */}
        </div>
        <div style={subheadingsStyle}>{"среднее за смену"}</div>
      </div>
    );
  };

  return (
    <div className="metalContent">
      <div className="cardContainer">
        <div className="flexHeader">
          <div className="headersStyle">
            Содержание металла в концентрате, %
          </div>
          <div className="dropdownList">
            <MySelect
              disableUnderline
              IconComponent={ExpandMoreIcon}
              // className={classes.icon && classes.root}
              value={age}
              onChange={handleChange}
              displayEmpty
              // className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">Fe (общ.) </MenuItem>
              <MenuItem value={10}>Other_1 (общ.) </MenuItem>
              <MenuItem value={20}>Other_2 (общ.) </MenuItem>
              <MenuItem value={30}>Other_3 (общ.) </MenuItem>
            </MySelect>
          </div>
        </div>
        <div style={flexSubheaderStyle}>
          <div style={factAndForecast}>
            {arr.map((value, index) => {
              return showValue(value, index);
            })}
          </div>
          <div style={average}>{showAverageValue(arr)}</div>
        </div>
        {/* <div className="xyPlotContainer"> */}
        {/* <div
            style={{
              border: "1px solid #e2e2e2",
              position: "relative",
              width: "710px",
              height: "200px",
            }}
          > */}
        {/* <span style={{ position: "absolute", top: "-1rem", left: "586px" }}>
              <i
                style={{ position: "absolute" }}
                className="fas fa-caret-down fa-3x"
              ></i> */}
        {/* <div
              style={{
                position: "absolute",
                top: "2.2rem",
                left: "0.85rem",
                zIndex: "1000",
                height: "139px",
                border: "1px solid black",
              }}
            ></div> */}
        {/* </span> */}

        {/* <div
              style={{
                width: "710px",
                margin: "auto",
                position: "absolute",
                top: "0.5rem",
              }}
            > */}
        {/* <FlexibleXYPlot width={710}></FlexibleXYPlot> */}
        <Plot></Plot>
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

const average = {
  marginLeft: "1rem",
};

const flexSubheaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 0",
  alignItems: "flex-start",
};

const factAndForecast = {
  display: "flex",
  justifyContent: "space-between",
  width: "70%",
  alignItems: "flex-start",
};

const subheadingsStyle = {
  color: "#a8a8a8",
  fontSize: "0.7rem",
};

const factNumStyle = {
  color: "#9c3647",
  fontSize: "1.5rem",
  fontWeight: "600",
  lineHeight: "1.7rem",
};
const forecastNumStyle = {
  color: "#258c70",
  fontSize: "1.5rem",
  fontWeight: "600",
  lineHeight: "1.7rem",
};

const cellContainerStyle = { marginRight: "1rem" };

export default MetalContent;
