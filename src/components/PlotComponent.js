import React, { useContext } from "react";
import PropTypes from "prop-types";
// const Plot = ({ width, measurements }) => (
//   <XYPlot height={180} width={width}>
//     <VerticalGridLines />
//     <HorizontalGridLines />
//     <XAxis />
//     <YAxis />
//     <LineSeries data={measurements} />
//   </XYPlot>
// );

// Plot.propTypes = {
//   width: PropTypes.number,
//   measurements:PropTypes.array,
// };
// Plot.displayName = "TimeSeriesLineChartPlot";
// const FlexibleXYPlot = makeWidthFlexible(Plot);

export default class PlotComponent extends React.Component {
  render() {
    const { measurements } = this.props;
    return <FlexibleXYPlot measurements={measurements} />;
  }
}
