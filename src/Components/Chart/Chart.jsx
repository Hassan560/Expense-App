import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValue = props.datapoint.map((datapoints) => datapoints.value);
  const totalMaxValue = Math.max(...dataPointsValue);
  
  return (
    <div className="chart">
      {props.datapoint.map((datapoints) => (
        <ChartBar
          key={datapoints.label}
          value={datapoints.value}
          maxValue={totalMaxValue}
          label={datapoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
