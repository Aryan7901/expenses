import { useEffect, useState } from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
function Chart(props) {
  const [dataPoints, setDataPoints] = useState([]);

  let values = [];
  if (dataPoints) {
    values = dataPoints.map((dataPoint) => dataPoint.value);
  }
  const max = Math.max(...values);
  useEffect(() => {
    setDataPoints(props.dataPoints);
  }, [setDataPoints, props.dataPoints]);
  if (!dataPoints) {
    return <div></div>;
  }
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          max={max}
          label={dataPoint.label}
          value={dataPoint.value}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
}
export default Chart;
