import React from "react";
import classes from "./Chart.module.scss";
import { LineChart, Line, XAxis } from "recharts";
import ScrollableComponent from "../ScrollableComponent/ScrollableComponent";
const Chart = () => {
  const data = [
    { name: "0", temperature: 30 },
    { name: "1am", temperature: 27 },
    { name: "2am", temperature: 28 },
    { name: "3am", temperature: 32 },
    { name: "4am", temperature: 35 },
    { name: "5am", temperature: 32 },
    { name: "6am", temperature: 22 },
    { name: "7am", temperature: 29 },
    { name: "8am", temperature: 23 },
    { name: "9am", temperature: 28 },
    { name: "10am", temperature: 35 },
    { name: "11am", temperature: 20 },
    { name: "12am", temperature: 26 },
  ];

  return (
    <figure className={classes.chart}>
      <ScrollableComponent>
        <div className={classes.chartInnerWrapper}>
          <div className={classes.chartInner}>
            <LineChart width={600} height={150} data={data}>
              <XAxis
                dataKey="name"
                stroke="#797979"
                interval={0}
                tick={{ fontSize: "11px" }}
                padding={{ right: 15 }}
              />
              <Line
                type="linear"
                dataKey="temperature"
                stroke="#4f7693"
                dot={{ fill: "#717CE2" }}
              />
            </LineChart>
          </div>
        </div>
      </ScrollableComponent>
      <figcaption className={classes.chartCaption}>
        Today’s Hourly Temperature
      </figcaption>
    </figure>
  );
};

export default Chart;
