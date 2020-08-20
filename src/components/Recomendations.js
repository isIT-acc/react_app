import React, { useContext, useEffect } from "react";
import Select from "@material-ui/core/Select";

import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import AppContext from "../context/app/appContext";

import { ONLY_TXT, BG_TXT, BORDER_BG_TXT } from "../types/cellTypes";

import MetalContent from "./MetalContent";
import RudaCharacteristics from "./RudaCharacteristics";
import Ruda from "./Ruda";
import Notification from "./Notification";
import { useMediaQuery } from "react-responsive";
const MySelect = withStyles({
  root: {
    // width: "10rem",
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

const Recomendations = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 821px)" });
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [age, setAge] = React.useState("");
  const appContext = useContext(AppContext);
  const {
    getTableData,
    tableHeaders,
    trLoadOnMsc,
    trLoadOnMscRecom,
    trMineralWater,
    trMineralWaterRecom,
    trDopMshWork,
    trDopMshWorkRecom,
    trDopRegime,
    trDopRegimeRecom,
    lastUpdateTime,
  } = appContext;

  useEffect(() => {
    getTableData();
    // eslint-disable-next-line
  }, []);

  const compareValues = (value1, value2) => {
    // делаем рассчёты и присваиваем какое-то значение текущему типу, всего три типа ячеек в таблице, ячейка получает какой-то один тип и стилизуется на выходе в соответствии с этим типом

    if (value1 !== value2) {
      return false;
    } else return true;
  };

  const showDangerCell = (cell, index, type, blueCell) => {
    if (type === ONLY_TXT) {
      return (
        <td key={index}>
          <div className="cell" style={blueCell ? setBgBlue : setBgTransparent}>
            <span style={cellDangerTxt}>{cell}</span>
          </div>
        </td>
      );
    }
    if (type === BG_TXT) {
      return (
        <td key={index}>
          <div className="cell" style={blueCell ? setBgBlue : setBgTransparent}>
            <span style={cellDangerBgTxt}>{cell}</span>
          </div>
        </td>
      );
    }
    if (type === BORDER_BG_TXT) {
      return (
        <td key={index}>
          <div className="cell" style={blueCell ? setBgBlue : setBgTransparent}>
            <span style={cellDangerBorderBgTxt}>{cell}</span>
          </div>
        </td>
      );
    }
  };

  const showRecomCell = (cell, index, type, blueCell) => {
    if (type === ONLY_TXT) {
      return (
        <td key={index}>
          <div className="cell" style={blueCell ? setBgBlue : setBgTransparent}>
            <span style={cellRecomTxt}>{cell}</span>
          </div>
        </td>
      );
    }
    if (type === BG_TXT) {
      return (
        <td key={index}>
          <div className="cell" style={blueCell ? setBgBlue : setBgTransparent}>
            <span style={cellRecomBgTxt}>{cell}</span>
          </div>
        </td>
      );
    }
    if (type === BORDER_BG_TXT) {
      return (
        <td key={index}>
          <div className="cell" style={blueCell ? setBgBlue : setBgTransparent}>
            <span style={cellRecomBorderBgTxt}>{cell}</span>
          </div>
        </td>
      );
    }
  };

  const showCellAfterCount = () => {
    if (compareValues(trDopRegime[5], trDopRegimeRecom[5]))
      return showCell(trDopRegime[5], 5);
    else return showDangerCell(trDopRegime[5], 5, BORDER_BG_TXT);
  };

  // blueCell:boolean
  // create compare function
  const showCell = (cell, index, blueCell, fontWeight, color) => {
    // let cellStyle = null;
    // if (blueCell) cellStyle = setBgBlue;
    // else cellStyle = setBgTransparent;
    // backgroundColor: "#e1effc"
    return (
      <td key={index}>
        <div className="cell" style={blueCell ? setBgBlue : setBgTransparent}>
          <span style={{ fontWeight: `${fontWeight}`, color: `${color}` }}>
            {cell}
          </span>
        </div>
      </td>
    );
  };
  //recom is boolean
  const showFirstColCell = (cell, index, recom) => {
    return (
      <td key={index}>
        <span style={recom ? firstColRecomStyle : firstColMainStyle}>
          {cell}
        </span>
      </td>
    );
  };

  return (
    <div className="gridContainer">
      <div className="recomendations">
        <div className="scroll">
          <table className="main-bg-color" style={tableStyle}>
            <thead>
              <tr style={tableHeaderStyle}>
                {tableHeaders.map((header, index) => {
                  if (isTabletOrMobile && (index === 1 || index === 2))
                    return (
                      <th
                        style={{
                          width: "1rem",
                          position: "relative",
                        }}
                        key={index}
                      >
                        <div
                          style={{
                            transform: "rotate(90deg)",
                            position: "absolute",
                            top: "7px",
                            left: "-25%",
                          }}
                        >
                          {header}
                        </div>
                      </th>
                    );
                  else return <th key={index}>{header}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {/* first pair of rows*/}
              <tr>
                {trLoadOnMsc.map((cell, index) => {
                  // change font-weight of first column cell lite in task
                  // if(index)
                  if (index === 0) {
                    return showFirstColCell(cell, index, false);
                  } else {
                    // будет работать в таком ключе как ниже
                    // if (compareValues(cell, trLoadOnMscRecom[index]))
                    //   return showCell(cell, index);
                    // else
                    // return showDangerCell(cell, index, cur_type);
                    let blueCellIn = false;
                    if (
                      index === 2 ||
                      index === 5 ||
                      index === 6 ||
                      index === 9
                    )
                      blueCellIn = true;
                    if (compareValues(cell, trLoadOnMscRecom[index]))
                      return showCell(cell, index, blueCellIn);
                    else return showDangerCell(cell, index, BG_TXT, blueCellIn);
                  }
                })}
              </tr>

              <tr>
                {trLoadOnMscRecom.map((cell, index) => {
                  if (index === 0) {
                    return showFirstColCell(cell, index, true);
                  }
                  let blueCellIn = false;
                  if (index === 2 || index === 5 || index === 6 || index === 9)
                    blueCellIn = true;
                  if (compareValues(cell, trLoadOnMsc[index]))
                    return showCell(cell, index, blueCellIn);
                  else return showRecomCell(cell, index, BG_TXT, blueCellIn);
                })}
              </tr>
              {/* second pair of rows*/}
              <tr>
                {trMineralWater.map((cell, index) => {
                  if (index === 0) {
                    return showFirstColCell(cell, index, false);
                  }
                  let blueCellIn = false;
                  if (index === 2 || index === 5 || index === 6 || index === 9)
                    blueCellIn = true;

                  if (index === 5) {
                    return showDangerCell(cell, index, ONLY_TXT, blueCellIn);
                  } else {
                    if (compareValues(cell, trMineralWaterRecom[index]))
                      return showCell(cell, index, blueCellIn);
                    else return showDangerCell(cell, index, BG_TXT, blueCellIn);
                  }
                })}
              </tr>
              <tr>
                {trMineralWaterRecom.map((cell, index) => {
                  if (index === 0) {
                    return showFirstColCell(cell, index, true);
                  }
                  let blueCellIn = false;
                  if (index === 2 || index === 5 || index === 6 || index === 9)
                    blueCellIn = true;

                  if (index === 5) {
                    return showRecomCell(cell, index, ONLY_TXT, blueCellIn);
                  }

                  if (compareValues(cell, trMineralWater[index]))
                    return showCell(cell, index, blueCellIn);
                  else return showRecomCell(cell, index, BG_TXT, blueCellIn);
                })}
              </tr>

              {/* third pair of rows*/}
              <tr>
                {trDopMshWork.map((cell, index) => {
                  if (index === 0) {
                    return showFirstColCell(cell, index, false);
                  }
                  let blueCellIn = false;
                  if (index === 2 || index === 5 || index === 6 || index === 9)
                    blueCellIn = true;

                  // будет работать в таком ключе как ниже
                  // if (compareValues(cell, trLoadOnMscRecom[index]))
                  //   return showCell(cell, index);
                  // else
                  // return showDangerCell(cell, index, cur_type);

                  if (compareValues(cell, trDopMshWorkRecom[index]))
                    return showCell(cell, index, blueCellIn);
                  else
                    return showDangerCell(
                      cell,
                      index,
                      BORDER_BG_TXT,
                      blueCellIn
                    );
                })}
              </tr>
              <tr>
                {trDopMshWorkRecom.map((cell, index) => {
                  if (index === 0) {
                    return showFirstColCell(cell, index, true);
                  }
                  let blueCellIn = false;
                  if (index === 2 || index === 5 || index === 6 || index === 9)
                    blueCellIn = true;
                  if (compareValues(cell, trDopMshWork[index]))
                    return showCell(cell, index, blueCellIn);
                  else
                    return showRecomCell(
                      cell,
                      index,
                      BORDER_BG_TXT,
                      blueCellIn
                    );
                })}
              </tr>
              {/* forth pair of rows */}
              <tr>
                {showFirstColCell(trDopRegime[0], 0, false)}
                <td colSpan="4" rowSpan="2" style={nasosStyles}>
                  <span>{trDopRegime[3]}</span>
                </td>

                {showCellAfterCount()}

                <td colSpan="3" rowSpan="2" style={nasosStyles}>
                  <span>{trDopRegime[7]}</span>
                </td>
                <td>
                  <span>{trDopRegime[9]}</span>
                </td>
                <td colSpan="3" rowSpan="2" style={nasosStyles}>
                  <span>{trDopRegime[12]}</span>
                </td>
                <td>
                  <span>{trDopRegime[13]}</span>
                </td>
                <td colSpan="2" rowSpan="2" style={nasosStyles}>
                  <span>{trDopRegime[15]}</span>
                </td>

                <td
                  colSpan="2"
                  style={{
                    verticalAlign: "middle",
                    textAlign: "right",
                  }}
                  rowSpan="2"
                >
                  <span>
                    <MySelect
                      IconComponent={ExpandMoreIcon}
                      disableUnderline
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      // className={classes.selectEmpty}
                      inputProps={{ "aria-label": "Without label" }}
                      style={{ marginRight: "1rem" }}
                    >
                      <MenuItem value="">на 3-97</MenuItem>
                      <MenuItem value={10}>на 3-98</MenuItem>
                      <MenuItem value={20}>на 3-99</MenuItem>
                      <MenuItem value={30}>на 3-100</MenuItem>
                    </MySelect>
                  </span>
                </td>
              </tr>
              <tr>
                {showFirstColCell(trDopRegimeRecom[0], 0, true)}

                {compareValues(trDopRegime[5], trDopRegimeRecom[5])
                  ? showCell(trDopRegimeRecom[5], 5)
                  : showRecomCell(trDopRegimeRecom[5], 5, BORDER_BG_TXT)}

                <td>
                  <span>{trDopRegimeRecom[9]}</span>
                </td>

                <td>
                  <span>{trDopRegimeRecom[13]}</span>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" style={{ textAlign: "left" }}>
                  {lastUpdateTime.getHours()}:{lastUpdateTime.getMinutes()}
                  <span style={{ paddingLeft: "1rem" }}>
                    Рекомендация обновлена
                  </span>
                </td>
                <td colSpan={tableHeaders.length - 3}>
                  <Link to="/react_app/history">
                    <span style={{ color: "black" }}>Просмотреть историю</span>
                    <span style={{ color: "black" }} className="processStep">
                      &gt;
                    </span>
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <MetalContent></MetalContent>
      <RudaCharacteristics></RudaCharacteristics>
      <Ruda></Ruda>
      <Notification></Notification>

      <div style={{ marginTop: "120px" }}></div>
    </div>
  );
};

//style for container of span(cell)
const setBgBlue = {
  backgroundColor: "#e1effc",
  width: "3.8rem",
  margin: "auto",
  height: "100%",
  position: "relative",
  // backgroundColor: "blue",
};

const setBgTransparent = {
  backgroundColor: "transparent",
  width: "3.8rem",
  margin: "auto",
  height: "100%",
  position: "relative",
};

const cellDangerTxt = {
  color: "#a53e52",
};
const cellDangerBgTxt = {
  fontWeight: "700",
  color: "#a53e52",
  backgroundColor: "#fae3e5",
  // #d25868
};
const cellDangerBorderBgTxt = {
  fontWeight: "700",
  color: "#a53e52",
  backgroundColor: "#fae3e5",
  borderTop: "4px solid #d25868",
  // #d25868
};
const cellRecomTxt = {
  color: "#566568",
};
const cellRecomBgTxt = {
  fontWeight: "700",
  color: "#5e605f",
  // #d25868
};
const cellRecomBorderBgTxt = {
  fontWeight: "700",
  color: "#5e605f",
  backgroundColor: "#f8faf8",
  borderBottom: "4px solid #258c70",
  // #d25868
};

const tableStyle = {
  marginTop: "1rem",
  width: "100%",
  borderSpacing: "0",
};

const tableHeaderStyle = {
  height: "3.38rem",
};
const nasosStyles = {
  textAlign: "right",
  paddingRight: "1rem",
  verticalAlign: "middle",
  fontWeight: "700",
  color: "black",
};

const firstColMainStyle = { fontWeight: "700", color: "black" };
const firstColRecomStyle = { fontWeight: "normal", color: "$table-text-color" };

// table styles

export default Recomendations;
