import React from "react";
import { Line } from "react-chartjs-2";
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

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Graph({ income, expenses }) {
  const data = {
    labels: income.map((item) => item.date),
    datasets: [
      {
        label: "Income",
        data: income.map((item) => item.amount),
        borderColor: "green",
        fill: false,
      },
      {
        label: "Expenses",
        data: expenses.map((item) => item.amount),
        borderColor: "red",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Income and Expenses",
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default Graph;
