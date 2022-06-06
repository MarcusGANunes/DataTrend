
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Mês", "Manhã", "Tarde", "Noite"],
  ["Janeiro", 15260, 15170, 10000],
  ["Fevereiro", 15260, 15170, 10000],
  ["Março", 15260, 15170, 10000],
  ["Maio", 15260, 15170, 10000],
  ["Junho", 15260, 15170, 10000],
  ["Julho", 15260, 15170, 10000],
  ["Agosto", 15260, 15170, 10000],
  ["Setembro", 15260, 15170, 10000],
  ["Outubro", 15260, 15170, 10000],
  ["Novembro", 15260, 15170, 10000],
  ["Dezembro", 15260, 15170, 10000],
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
