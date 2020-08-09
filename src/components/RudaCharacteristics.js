import React from "react";

const RudaCharacteristics = () => {
  const headRow = ["", "текущее", "через 1 час"];
  const dataRow = [
    ["ПО", 63.97, 64.23],
    ["Г", 20, 20],
    ["Ю", 10, 15],
    ["З", 25, 35],
    ["С", 40, 25],
    ["Э 48", 5, 5],
    ["...", "-", "-"],
  ];

  const showCell = (cell, index) => {
    return (
      <td style={bodyCellStyle} key={index}>
        {cell}
      </td>
    );
  };
  const showFirstColumnCell = (cell, index) => {
    return (
      <td style={firstColCellStyle} key={index}>
        {cell}
      </td>
    );
  };

  const showHeaderRow = (valsArr) => {
    return valsArr.map((header, index) => (
      <th style={headingCellStyle} key={index}>
        {header}
      </th>
    ));
  };

  const showRow = (valsArr) => {
    return valsArr.map((cell, index) => {
      if (index === 0) {
        return showFirstColumnCell(cell, index);
      } else {
        return showCell(cell, index);
      }
    });
  };

  const showTableBody = (arrayOfRows) => {
    return arrayOfRows.map((row, index) => {
      if (index === 0)
        return (
          <tr style={boldHighlight} key={index}>
            {showRow(row)}
          </tr>
        );
      if (index === arrayOfRows.length - 1)
        return <tr key={index}>{showRow(row)}</tr>;
      return (
        <tr style={greyHighlight} key={index}>
          {showRow(row)}
        </tr>
      );
    });
  };
  return (
    <div className="rudaCharacteristics">
      <div className="cardContainer">
        <div style={headerStyle} className="headersStyle">
          Характеристики руды, %
        </div>
        <table style={tableStyle}>
          <thead>
            <tr style={headingRowStyle}>{showHeaderRow(headRow)}</tr>
          </thead>
          <tbody>{showTableBody(dataRow)}</tbody>
        </table>
      </div>
    </div>
  );
};

const headerStyle = {
  marginBottom: "0.5rem",
};
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const headingCellStyle = {
  textAlign: "center",
  color: "#a8a8a8",
  fontSize: "0.7rem",
  fontWeight: "500",
};

const bodyCellStyle = {
  textAlign: "center",
  // color: "#a8a8a8",
  fontSize: "1.3rem",
  // fontWeight: "500",
  fontWeight: "600",
  color: "black",
};

const firstColCellStyle = {
  fontWeight: "100",
  color: "black",
  fontSize: "1.3rem",
};

const headingRowStyle = {
  height: "1.6rem",
};

const boldHighlight = {
  borderBottom: "2px solid black",
};
const greyHighlight = {
  borderBottom: "2px solid #e2e2e2",
};
export default RudaCharacteristics;
