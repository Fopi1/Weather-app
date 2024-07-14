import React from "react";
import classes from "./Chart.module.scss";
import { LineChart, Line } from "recharts";

const Chart = () => {
  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

  return (
    <figure className={classes.chart}>
      <div className={classes.chartInner}>
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        </LineChart>
      </div>
      <figcaption className={classes.chartCaption}>asdasd</figcaption>
    </figure>
  );
};

export default Chart;
