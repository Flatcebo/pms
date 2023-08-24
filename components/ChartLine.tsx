import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Project",
    },
  },
};

const labels = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "PMS",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 30],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.3,
    },
    {
      label: "어복황제 APP",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 80],
      fill: false,
      borderColor: "red",
      tension: 0.3,
    },
  ],
};
export default function ChartLine() {
  return <Line className="bg-[white]" options={options} data={data} />;
}
