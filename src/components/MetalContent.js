import React from "react";

import Select from "@material-ui/core/Select";

import MenuItem from "@material-ui/core/MenuItem";

import { withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "../../node_modules/react-vis/dist/style.css";

import Plot from "./Plot";
import { useMediaQuery } from "react-responsive";

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

const MetalContent = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 438px)" });

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [age, setAge] = React.useState("");

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
          <div style={isMobile ? flexSubheaderMediaStyle : factAndForecast}>
            {arr.map((value, index) => {
              return showValue(value, index);
            })}
          </div>
          <div style={average}>{showAverageValue(arr)}</div>
        </div>
        <Plot></Plot>
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

const flexSubheaderMediaStyle = {
  display: "flex",
  flexDirection: "column",
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
