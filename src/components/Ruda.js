import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const Ruda = () => {
  const [vel, setVel] = React.useState(250);
  const [velPlan, setVelPlan] = React.useState(255);
  const [maxSliderValue, setMaxSliderValue] = React.useState(45900);
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "1.8rem",
      minWidth: "4.5rem",
    },
  }));

  const classes = useStyles();
  const AirbnbSlider = withStyles({
    root: {
      color: "#515151",
    },
    track: {
      height: 3,
    },
    thumb: {
      height: 11,
      width: 1,
      borderRadius: 1,

      "&:focus, &:hover, &$active": {
        boxShadow: "#ccc 0 2px 3px 1px",
      },
      marginTop: -4,
      marginLeft: 0.5,
    },
    valueLabel: {
      left: -13,
      top: -22,
      "& *": {
        background: "transparent",
        color: "#000",
      },
    },
    active: {},
  })(Slider);
  const handleChange = (event, value) => {
    setDefValue(value);
  };

  const ColorButton = withStyles((theme) => ({
    root: {
      color: "white",
      backgroundColor: "#ef4b53",
      "&:hover": {
        backgroundColor: "#ef4b53",
        // boxShadow: "none",
      },
    },
  }))(Button);

  const [defValue, setDefValue] = React.useState(31900);
  return (
    <div className="ruda">
      <div className="cardContainer">
        <div style={{ marginBottom: "1.5rem" }} className="flexHeader">
          <div className="vel">
            <div style={{ fontWeight: "700", color: "black" }}>Руда</div>
            <div
              style={{ fontWeight: "600", color: "black", fontSize: "1.4rem" }}
            >
              {vel} т/ч
            </div>
          </div>
          <div className="planVel">
            <div>
              <ColorButton
                style={{ fontSize: "1.3rem" }}
                className={classes.root}
              >
                {vel - velPlan}
              </ColorButton>
            </div>
            <div
              style={{
                color: "#ef4b53",
                fontSize: "0.7rem",

                lineHeight: "1.3rem",
                marginTop: "0.5rem",
              }}
            >
              {velPlan} план час
            </div>
          </div>
        </div>
        <AirbnbSlider
          // ThumbComponent={AirbnbThumbComponent}
          getAriaLabel={(index) =>
            index === 0 ? "Minimum price" : "Maximum price"
          }
          defaultValue={defValue}
          valueLabelDisplay="on"
          onChange={handleChange}
          max={maxSliderValue}
        />

        <div className="flexHeader">
          <div style={lessBlackLabelsStyle}>{maxSliderValue} план смены</div>
          <div className="flexHeader">
            <ArrowDropDownIcon
              style={{ color: "#ef4b53", fontSize: "1.3rem" }}
            />
            <div style={lessRedLabelsStyle}>
              {Math.floor((vel / velPlan) * 100)}% прогноз
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const lessRedLabelsStyle = {
  color: "#ef4b53",
  fontSize: "0.7rem",

  lineHeight: "1.3rem",
  marginTop: "0.1rem",
};
const lessBlackLabelsStyle = {
  color: "#000",
  fontSize: "0.75rem",

  // lineHeight: "1.3rem",
  // marginTop: "0.1rem",
};
export default Ruda;
