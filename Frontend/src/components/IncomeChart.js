import React from "react";
import { Line } from "react-chartjs-2";

const IncomeChart = ({ incomeData }) => {
  const data = {
    labels: incomeData.map((item) => item.date),
    datasets: [
      {
        label: "Income",
        data: incomeData.map((item) => item.amount),
        fill: false,
        backgroundColor: "green",
        borderColor: "green",
      },
    ],
  };

  return (
    <div className="chart">
      <h3>Income Chart</h3>
      <Line data={data} />
    </div>
  );
};

export default IncomeChart;
