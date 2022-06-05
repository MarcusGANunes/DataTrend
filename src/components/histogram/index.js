
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Mês", "Manhã", "Tarde", "Noite"],
  ["Janeiro", 1526000, 1517000, 1000000],
  ["Fevereiro", 1526000, 1517000, 1000000],
  ["Março", 1526000, 1517000, 1000000],
  ["Maio", 1526000, 1517000, 1000000],
  ["Junho", 1526000, 1517000, 1000000],
  ["Julho", 1526000, 1517000, 1000000],
  ["Agosto", 1526000, 1517000, 1000000],
  ["Setembro", 1526000, 1517000, 1000000],
  ["Outubro", 1526000, 1517000, 1000000],
  ["Novembro", 1526000, 1517000, 1000000],
  ["Dezembro", 1526000, 1517000, 1000000],
];

export const options = {
  title: "Consumo Mensal",
  chartArea: { width: "80%" },
  bar: {
      groupWidth: '90%',
  },
  hAxis: {
    title: "Turno",
    minValue: 0,
  },
  vAxis: {
    title: "Mês",
    
  }
};

export default function Histogram() {
  return (
    <Chart
      chartType="BarChart"
      height="100vh"
      width="100%"
      data={data}
      options={options}
    />
  );
}
