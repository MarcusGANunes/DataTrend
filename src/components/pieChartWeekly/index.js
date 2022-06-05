import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Dias úteis", 11],
  ["Dias não-úteis", 2],
];

export const options = {
  title: "Consumo Semanal",
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"400px"}
      height={"300px"}
    />
  );
}