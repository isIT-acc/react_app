import React from "react";
import "../../node_modules/react-vis/dist/style.css";
import {
  LineSeries,
  XAxis,
  YAxis,
  WhiskerSeries,
  MarkSeries,
  AreaSeries,
  FlexibleWidthXYPlot,
  PolygonSeries,
} from "react-vis";
import { curveCatmullRom } from "d3-shape";

const Plot = () => {
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

  const sredneeZaSmenu = 61.45;

  const drawTriangle = () => {
    const myData = [
      { x: 10, y: 61.84 },
      { x: 10.2, y: 61.82 },
      { x: 10.4, y: 61.84 },
    ];
    return (
      <PolygonSeries
        data={myData}
        style={{
          // note that this can not be translated to the canvas version
          stroke: "black",
          position: "relative",
          fill: "black",
        }}
      />
    );
  };
  // color-string,type-string, dotted or solid,
  const drawGraphicLine = (color, type, arrayOfVals) => {
    if (type === "dotted")
      return (
        <LineSeries
          curve={curveCatmullRom.alpha(0.5)}
          strokeType="literal"
          sizeType="literal"
          data={arrayOfVals}
          style={{
            // note that this can not be translated to the canvas version
            strokeDasharray: "1 3",
            stroke: color,
          }}
        />
      );
    if (type === "solid")
      return (
        <LineSeries
          curve={curveCatmullRom.alpha(0.5)}
          strokeType="literal"
          sizeType="literal"
          style={{ stroke: color }}
          data={arrayOfVals}
        />
      );
  };
  const drawXAxis = () => {
    return (
      <XAxis
        strokeType="literal"
        tickFormat={myFormatter}
        tickValues={func(dataForPlot)}
        style={axisStyle}
        tickSize={0}
      />
    );
  };
  const drawYAxis = () => {
    return (
      <YAxis
        tickFormat={myFormatter}
        tickValues={[0, 61.44, 61.84]}
        style={axisStyle}
        tickSize={0}
      />
    );
  };

  const drawPointsOnGraphic = (color, arrayOfPoints) => {
    return (
      <MarkSeries
        curve={curveCatmullRom.alpha(0.5)}
        colorType="literal"
        sizeType="literal"
        style={{ stroke: color, fill: color }}
        data={arrayOfPoints}
      />
    );
  };

  const drawYDevOfValue = (color, arrayOfData) => {
    return (
      <WhiskerSeries
        yVarianceType="literal"
        className="whisker-series-example"
        style={{ stroke: color }}
        data={arrayOfData}
      />
    );
  };

  const drawHorizontalArea = (color, yDown, yUp) => {
    return (
      <AreaSeries
        style={{ stroke: color, fill: color }}
        data={[
          { x: 0.5, y: yUp, y0: yDown },
          { x: 12, y: yUp, y0: yDown },
        ]}
      />
    );
  };

  const getDottedHorLine = (yCoord) => {
    return (
      <LineSeries
        curve={curveCatmullRom.alpha(0.5)}
        strokeType="literal"
        sizeType="literal"
        data={[
          {
            x: 0.5,
            y: sredneeZaSmenu,
          },
          {
            x: 12,
            y: sredneeZaSmenu,
          },
        ]}
        style={{
          // note that this can not be translated to the canvas version
          strokeDasharray: "1 3",
          stroke: "rgb(168, 168, 168)",
        }}
      />
    );
  };
  const getDottedVerticalLine = (xCoord) => {
    return (
      <LineSeries
        curve={curveCatmullRom.alpha(0.5)}
        strokeType="literal"
        sizeType="literal"
        data={[
          { x: 8, y: 61.0 },
          { x: 8, y: 61.84 },
        ]}
        style={{
          // note that this can not be translated to the canvas version
          strokeDasharray: "1 3",
          stroke: "rgb(168, 168, 168)",
        }}
      />
    );
  };
  const getBoldVerticalLine = (xCoord) => {
    return (
      <LineSeries
        curve={curveCatmullRom.alpha(0.5)}
        strokeType="literal"
        sizeType="literal"
        data={[
          { x: xCoord, y: 61.0 },
          { x: xCoord, y: 61.84 },
        ]}
        style={{
          // note that this can not be translated to the canvas version
          stroke: "black",
          position: "relative",
        }}
      ></LineSeries>
    );
  };

  const getPartOfArray = (array, firstIndex, secondIndex) => {
    let arr = [];
    let i = 0;
    let j = firstIndex;
    for (; j <= secondIndex; j++) {
      arr[i++] = array[j];
    }

    return arr;
  };
  function myFormatter(t, i) {
    return (
      <tspan x="-18" dx="1rem">
        {String(t).replace(".", ",")}
      </tspan>
    );
  }

  const func = (objsArr) => {
    let arr = objsArr.map((value) => {
      return value.x;
    });
    arr.splice(0, 1);
    return arr;
  };

  return (
    <div>
      <FlexibleWidthXYPlot
        // width={width}
        margin={{ left: 70, right: 10, top: 10, bottom: 40 }}
        // width={710}
        height={200}
        yDomain={[61.0, 61.84]}
        xDomain={[0.5, 12]}
      >
        {drawXAxis()}
        {drawYAxis()}
        {drawHorizontalArea("#dbf0eb", 61.24, 61.64)}
        {drawHorizontalArea("#fdf1f1", 61.0, 61.24)}
        {drawHorizontalArea("#fdf1f1", 61.64, 61.84)}
        {drawGraphicLine("black", "dotted", getPartOfArray(dataForPlot, 9, 11))}

        {drawGraphicLine("black", "solid", getPartOfArray(dataForPlot, 0, 9))}
        {drawGraphicLine(
          "rgb(91, 150, 176)",
          "dotted",
          getPartOfArray(dataForPlot, 11, 12)
        )}
        {drawPointsOnGraphic("#9c3647", getPartOfArray(dataForPlot, 1, 2))}
        {drawPointsOnGraphic("#258c7a", getPartOfArray(dataForPlot, 3, 8))}
        {drawPointsOnGraphic("#9c3647", [dataForPlot[9]])}
        {drawPointsOnGraphic("#258c7a", getPartOfArray(dataForPlot, 10, 12))}
        {drawYDevOfValue("#5b96b0", [dataForPlot[12]])}
        {drawYDevOfValue("black", getPartOfArray(dataForPlot, 10, 11))}

        {getDottedVerticalLine(8)}
        {getDottedHorLine(sredneeZaSmenu)}
        {getBoldVerticalLine(10.2)}
        {drawTriangle()}
      </FlexibleWidthXYPlot>
    </div>
  );
};

const axisStyle = {
  ticks: {
    fontSize: "14px",
    // color: "black",
    stroke: "black",
  },
  title: {
    fontSize: "16px",
    // color: "black",
  },
};

export default Plot;
